import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize persistent SQLite storage for inquiries
const dataDir = path.resolve(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(path.resolve(dataDir, 'inquiries.db'));
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT,
    last_name TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    website TEXT,
    package TEXT,
    message TEXT,
    has_attachment INTEGER DEFAULT 0,
    delivered_to TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();

  // Parse port from CLI args (e.g. --port 3000) or environment
  const portArgIndex = process.argv.indexOf('--port');
  const portFromArg = portArgIndex !== -1 ? parseInt(process.argv[portArgIndex + 1], 10) : undefined;
  const PORT = portFromArg || Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Contact Form Submission API
  app.post('/api/contact', async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        name,
        email,
        phone,
        message,
        website,
        package: selectedPackage,
        attachment
      } = req.body;

      const senderName = name || `${firstName || ''} ${lastName || ''}`.trim() || 'Website Visitor';
      const senderEmail = email || 'no-reply@nustudios.co.uk';

      console.log('Received contact submission:', {
        senderName,
        senderEmail,
        phone,
        website,
        selectedPackage,
        messageLength: message?.length,
        hasAttachment: !!attachment
      });

      let deliveredTo = 'Stored in database';

      // 1. Try to send email via Resend
      const resendApiKey = process.env.RESEND_API_KEY;
      if (resendApiKey && resendApiKey !== 'YOUR_RESEND_API_KEY') {
        const resend = new Resend(resendApiKey);

        // Attempt 1: Verified send.nustudios.co.uk subdomain
        let primaryDelivered = false;
        try {
          const emailPayload: any = {
            from: 'NU Studios <contact@send.nustudios.co.uk>',
            to: ['hello@nustudios.co.uk', 'tech@nustudios.co.uk'],
            replyTo: senderEmail,
            subject: `New Inquiry from ${senderName} [NU Studios]`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
                <div style="border-bottom: 2px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
                  <h2 style="margin: 0; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.5px;">New Website Inquiry</h2>
                  <span style="font-size: 12px; color: #666; font-family: monospace;">NU STUDIOS INQUIRY DESK</span>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; width: 120px; font-size: 13px;">From:</td>
                    <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${senderName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 13px;">Email:</td>
                    <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${senderEmail}" style="color: #dc2626; text-decoration: none;">${senderEmail}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 13px;">Phone:</td>
                    <td style="padding: 8px 0; font-size: 14px;">${phone}</td>
                  </tr>` : ''}
                  ${website ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 13px;">Website / Store:</td>
                    <td style="padding: 8px 0; font-size: 14px;"><a href="${website}" target="_blank" style="color: #dc2626;">${website}</a></td>
                  </tr>` : ''}
                  ${selectedPackage ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 13px;">Package:</td>
                    <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${selectedPackage}</td>
                  </tr>` : ''}
                </table>

                <div style="background: #f4f4f5; border-left: 3px solid #dc2626; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
                  <span style="font-size: 11px; font-family: monospace; font-weight: bold; color: #555; text-transform: uppercase;">Message Content</span>
                  <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || '(No message content entered)'}</p>
                </div>

                ${attachment?.filename ? `
                <p style="font-size: 13px; color: #555; margin-bottom: 20px;">
                  📎 <strong>Attached file:</strong> ${attachment.filename}
                </p>` : ''}
              </div>
            `,
          };

          if (attachment && attachment.filename && attachment.content) {
            emailPayload.attachments = [
              {
                filename: attachment.filename,
                content: attachment.content,
              }
            ];
          }

          const primaryRes = await resend.emails.send(emailPayload);
          if (!primaryRes.error) {
            primaryDelivered = true;
            deliveredTo = 'hello@nustudios.co.uk, tech@nustudios.co.uk';
            console.log('Email delivered successfully to hello@nustudios.co.uk and tech@nustudios.co.uk:', primaryRes.data);
          } else {
            console.warn('Subdomain dispatch warning:', primaryRes.error.message);
          }
        } catch (brandedErr) {
          console.warn('Subdomain dispatch error:', brandedErr);
        }

        // Attempt 2: Fallback to registered Resend account owner (caroline.pires2d@gmail.com)
        if (!primaryDelivered) {
          try {
            const fallbackRes = await resend.emails.send({
              from: 'NU Studios Contact <onboarding@resend.dev>',
              to: ['caroline.pires2d@gmail.com'],
              replyTo: senderEmail,
              subject: `[NU Studios Inquiry] from ${senderName}`,
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
                  <div style="border-bottom: 2px solid #dc2626; padding-bottom: 12px; margin-bottom: 20px;">
                    <h2 style="margin: 0; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.5px;">New Website Inquiry</h2>
                    <span style="font-size: 12px; color: #666; font-family: monospace;">NU STUDIOS CONTACT PIPELINE</span>
                  </div>
                  
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 8px 0; color: #666; width: 120px; font-size: 13px;">From:</td>
                      <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${senderName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #666; font-size: 13px;">Email:</td>
                      <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${senderEmail}" style="color: #dc2626; text-decoration: none;">${senderEmail}</a></td>
                    </tr>
                    ${phone ? `
                    <tr>
                      <td style="padding: 8px 0; color: #666; font-size: 13px;">Phone:</td>
                      <td style="padding: 8px 0; font-size: 14px;">${phone}</td>
                    </tr>` : ''}
                    ${website ? `
                    <tr>
                      <td style="padding: 8px 0; color: #666; font-size: 13px;">Website / Store:</td>
                      <td style="padding: 8px 0; font-size: 14px;"><a href="${website}" target="_blank" style="color: #dc2626;">${website}</a></td>
                    </tr>` : ''}
                    ${selectedPackage ? `
                    <tr>
                      <td style="padding: 8px 0; color: #666; font-size: 13px;">Package:</td>
                      <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${selectedPackage}</td>
                    </tr>` : ''}
                  </table>

                  <div style="background: #f4f4f5; border-left: 3px solid #dc2626; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
                    <span style="font-size: 11px; font-family: monospace; font-weight: bold; color: #555; text-transform: uppercase;">Message Content</span>
                    <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || '(No message content entered)'}</p>
                  </div>

                  ${attachment?.filename ? `
                  <p style="font-size: 13px; color: #555; margin-bottom: 20px;">
                    📎 <strong>Attached file:</strong> ${attachment.filename}
                  </p>` : ''}

                  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
                  
                  <p style="font-size: 11px; color: #9ca3af; line-height: 1.5;">
                    💡 Delivered to <code>caroline.pires2d@gmail.com</code> via Resend test sender. To route emails directly to <code>hello@nustudios.co.uk</code> or <code>tech@nustudios.co.uk</code>, complete domain verification at <a href="https://resend.com/domains" style="color: #dc2626;">resend.com/domains</a>.
                  </p>
                </div>
              `,
            });

            if (!fallbackRes.error) {
              deliveredTo = 'caroline.pires2d@gmail.com';
              console.log('Delivered inquiry email to registered account caroline.pires2d@gmail.com:', fallbackRes.data);
            } else {
              console.error('Fallback email dispatch error:', fallbackRes.error);
            }
          } catch (fbErr) {
            console.error('Fallback email exception:', fbErr);
          }
        }
      }

      // 2. Persist to SQLite Database
      try {
        const stmt = db.prepare(`
          INSERT INTO inquiries (first_name, last_name, name, email, phone, website, package, message, has_attachment, delivered_to)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        stmt.run(
          firstName || null,
          lastName || null,
          senderName,
          senderEmail,
          phone || null,
          website || null,
          selectedPackage || null,
          message || null,
          attachment ? 1 : 0,
          deliveredTo
        );
      } catch (dbErr) {
        console.warn('Database save warning:', dbErr);
      }

      return res.status(200).json({
        success: true,
        message: 'Your message has been received. Our team will get back to you shortly.',
        deliveredTo
      });
    } catch (err: any) {
      console.error('Error handling /api/contact:', err);
      return res.status(500).json({
        error: 'Failed to send message. Please try again.'
      });
    }
  });

  // Query inquiries for team review
  app.get('/api/inquiries', (_req, res) => {
    try {
      const rows = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 100').all();
      return res.json({ success: true, count: rows.length, inquiries: rows });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

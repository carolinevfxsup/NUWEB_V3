import { useState, useRef } from 'react';
import { Phone, Send, FileText, Laptop, Folder, Check, Loader2, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { motion, AnimatePresence } from 'motion/react';

export const Pricing = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
        setFile(null);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen pb-24 pt-32 text-text">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-text/70 font-sans max-w-2xl">
            Ready to scale your brand with NuStudios-standard visual pipelines? Let's start the conversation.
          </p>
        </FadeIn>
      </div>

      <section id="contact-info" className="py-32 bg-[#f8f8f8] border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Email/Call */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Laptop className="w-8 h-8 text-red-600" />
                  <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">Email or call us.</h2>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <a 
                    href="mailto:hello@nustudios.co.uk" 
                    className="bg-black text-white px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition-all text-center flex items-center justify-center gap-3"
                  >
                    Send Email
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">Direct Contact</p>
                    <p className="text-lg font-display font-bold">hello@nustudios.co.uk</p>
                  </div>
                </div>
                <p className="text-xl text-text/70 font-sans leading-relaxed max-w-md">
                  At NuStudios, you'll speak directly with a senior strategist or director, never an account handler or junior.
                </p>
              </div>
            </FadeIn>

            {/* Right Column: Locations */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-red-600" />
                  <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">Our Locations.</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">United Kingdom</p>
                    <a href="tel:+447506230988" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+44 (0) 7506 230988</a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">Portugal</p>
                    <a href="tel:+351939517942" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+351 939 517 942</a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">Australia</p>
                    <a href="tel:+61431371024" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+61 431 371 024</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Contact Form */}
      <section id="contact-form" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-none">
              <div className="flex items-center gap-4 mb-12">
                <Folder className="w-8 h-8 text-red-600" />
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white">Send us a message.</h2>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="pricing-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">First Name (required)</label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-border rounded-none px-4 py-4 focus:border-red-600 outline-none transition-colors font-sans text-black"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">Last Name (required)</label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-border rounded-none px-4 py-4 focus:border-red-600 outline-none transition-colors font-sans text-black"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-border rounded-none px-4 py-4 focus:border-red-600 outline-none transition-colors font-sans text-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">Email (required)</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-border rounded-none px-4 py-4 focus:border-red-600 outline-none transition-colors font-sans text-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">Message (required)</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-border rounded-none px-4 py-4 focus:border-red-600 outline-none transition-colors font-sans resize-none text-black"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-sans font-bold text-white/40 uppercase tracking-widest">Upload Brief, Media Kit, CV or any other file.</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full border-2 border-dashed border-white/10 rounded-none p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-red-600/50 hover:bg-red-600/5 transition-all group"
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        {file ? (
                          <div className="flex items-center gap-2 text-red-600 font-sans font-medium">
                            <FileText className="w-6 h-6" />
                            <span>{file.name}</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-12 h-12 rounded-none border border-white/10 flex items-center justify-center group-hover:border-red-600/50 transition-colors">
                              <span className="text-2xl font-light text-white/40 group-hover:text-red-600">+</span>
                            </div>
                            <span className="text-sm font-sans font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">Add a File</span>
                          </>
                        )}
                      </div>
                    </div>

                    {submitError && (
                      <div className="text-red-500 text-xs font-bold uppercase tracking-widest">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3 h-3 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Message Us</span>
                          <Send className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-none bg-[#DC2626]/10 flex items-center justify-center">
                      <Check className="w-10 h-10 text-[#DC2626]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-display font-bold uppercase tracking-tighter text-white">Thank You<span className="text-red-600">.</span></h3>
                      <p className="text-white/60 font-sans max-w-sm">
                        Your message has been received. Our team will reach out to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


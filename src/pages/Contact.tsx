import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Send, Check, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LazyVideo } from '../components/LazyVideo';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      let attachment = null;
      if (file) {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1];
            resolve(base64);
          };
        });
        reader.readAsDataURL(file);
        const base64Content = await base64Promise;
        attachment = {
          filename: file.name,
          content: base64Content,
        };
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, attachment }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFile(null);
        reset();
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto min-h-screen">
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12 leading-[0.8]">
          {t.home.contact.title}<span className="text-red-600">.</span>
        </h1>
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn delay={0.2}>
          <div>
            <p className="text-2xl md:text-3xl font-display font-bold uppercase mb-12">{t.home.contact.subtitle}</p>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">{t.home.contact.form.firstName}</label>
                      <div className="relative">
                        <input 
                          {...register('firstName')}
                          className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-sans ${errors.firstName ? 'border-red-500' : 'border-black/20 focus:border-black'}`} 
                        />
                        <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                            <path d="M7 4v16M17 4v16M7 12h10" />
                          </svg>
                        </div>
                      </div>
                      {errors.firstName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2 relative">
                      <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">{t.home.contact.form.lastName}</label>
                      <div className="relative">
                        <input 
                          {...register('lastName')}
                          className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-sans ${errors.lastName ? 'border-red-500' : 'border-black/20 focus:border-black'}`} 
                        />
                        <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                            <path d="M7 4v16M17 4v16M7 12h10" />
                          </svg>
                        </div>
                      </div>
                      {errors.lastName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">{t.home.contact.form.email}</label>
                    <div className="relative">
                      <input 
                        {...register('email')}
                        className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-sans ${errors.email ? 'border-red-500' : 'border-black/20 focus:border-black'}`} 
                      />
                      <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                          <path d="M7 4v16M17 4v16M7 12h10" />
                        </svg>
                      </div>
                    </div>
                    {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">{t.home.contact.form.message}</label>
                    <textarea 
                      {...register('message')}
                      rows={1} 
                      className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors resize-none font-sans min-h-[100px] ${errors.message ? 'border-red-500' : 'border-black/20 focus:border-black'}`} 
                    />
                    {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60 flex justify-between items-center">
                      <span>{t.home.contact.form.attachments}</span>
                      <span className="text-black/30">{t.home.contact.form.maxFileSize}</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="file"
                        onChange={(e) => {
                          const selectedFile = e.target.files?.[0] || null;
                          if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
                            setSubmitError('File size exceeds 10MB limit.');
                            setFile(null);
                            e.target.value = '';
                          } else {
                            setFile(selectedFile);
                            if (submitError === 'File size exceeds 10MB limit.') setSubmitError(null);
                          }
                        }}
                        className="w-full bg-transparent border-b py-3 focus:outline-none transition-colors font-sans text-[10px] uppercase tracking-widest border-black/20 focus:border-black" 
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500 p-4 rounded-none flex items-center gap-3 text-red-500">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-[10px] font-bold uppercase tracking-widest">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-10 py-5 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>{t.home.contact.form.sending}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.home.contact.form.button}</span>
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
                  className="flex flex-col items-start justify-center py-12 text-left space-y-6"
                >
                  <div className="w-20 h-20 rounded-none bg-[#DC2626]/10 flex items-center justify-center">
                    <Check className="w-10 h-10 text-[#DC2626]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-bold uppercase tracking-tighter">{t.home.contact.form.success.title}<span className="text-red-600">.</span></h3>
                    <p className="text-black/60 font-sans max-w-sm">
                      {t.home.contact.form.success.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors border-b border-black/20 pb-1"
                  >
                    {t.home.contact.form.success.another}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="hidden lg:flex items-center justify-center">
          <div className="w-full max-w-md aspect-square overflow-hidden rounded-none border border-black/10">
            <LazyVideo 
              src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/pnn495jt8srmr0cwyy3a1q4te8_result_.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>


    </div>
  );
};

export default Contact;

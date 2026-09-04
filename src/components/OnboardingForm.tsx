import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, Send, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { useLanguage } from '../contexts/LanguageContext';

const onboardingSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  website: z.string().url('Please enter a valid URL (e.g., https://brand.com)'),
  size: z.string().min(1, 'Please select a team size'),
  market: z.string().min(1, 'Please select a primary market'),
  socials: z.object({
    instagram: z.string().optional(),
    tiktok: z.string().optional(),
    linkedin: z.string().optional(),
  }),
  outcomes: z.array(z.string()).min(1, 'Please select at least one outcome'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Please tell us a bit more (at least 10 characters)'),
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

const INITIAL_DATA: OnboardingFormData = {
  businessName: '',
  website: '',
  size: '',
  market: '',
  socials: {
    instagram: '',
    tiktok: '',
    linkedin: '',
  },
  outcomes: [],
  email: '',
  phone: '',
  message: '',
};

export const OnboardingForm = () => {
  const { t, getLanguagePath } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors },
    reset
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: INITIAL_DATA,
    mode: 'onChange'
  });

  const outcomes = watch('outcomes');
  const selectedSize = watch('size');
  const selectedMarket = watch('market');

  const totalSteps = 5;

  const handleNext = async () => {
    let fieldsToValidate: (keyof OnboardingFormData)[] = [];
    if (step === 1) fieldsToValidate = ['businessName', 'website'];
    if (step === 2) fieldsToValidate = ['size', 'market'];
    if (step === 3) fieldsToValidate = ['socials'];
    if (step === 4) fieldsToValidate = ['outcomes'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const toggleOutcome = (outcome: string) => {
    const currentOutcomes = outcomes || [];
    const newOutcomes = currentOutcomes.includes(outcome)
      ? currentOutcomes.filter(o => o !== outcome)
      : [...currentOutcomes, outcome];
    setValue('outcomes', newOutcomes, { shouldValidate: true });
  };

  const onFormSubmit = async (data: OnboardingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare attachment if exists
      let attachment = null;
      if (file) {
        const reader = new FileReader();
        const fileContent = await new Promise<string>((resolve, reject) => {
          reader.onload = () => {
            const result = reader.result as string;
            const base64 = result.split(',')[1];
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        attachment = {
          filename: file.name,
          content: fileContent,
        };
      }

      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('onboarding_submissions')
        .insert([
          {
            business_name: data.businessName,
            website: data.website,
            team_size: data.size,
            market: data.market,
            instagram: data.socials.instagram,
            tiktok: data.socials.tiktok,
            linkedin: data.socials.linkedin,
            outcomes: data.outcomes,
            email: data.email,
            phone: data.phone,
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Send email
      const emailResponse = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          attachment,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        throw new Error(errorData.error || 'Failed to send email notification');
      }
      
      setIsSubmitted(true);
      reset();
      setFile(null);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'There was an error submitting your brief. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-md shadow-xl text-center max-w-2xl mx-auto border border-gray-100"
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-none flex items-center justify-center mx-auto mb-8">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Brief Received.</h2>
        <p className="text-gray-500 mb-8">
          We're analyzing your profile and will reach out within 24 hours with a custom strategy.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
          className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all"
        >
          Start New Brief
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
            Step {step} of {totalSteps}
          </span>
          <div className="flex gap-1">
            {[...Array(totalSteps)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-none transition-all duration-500 ${i + 1 <= step ? 'bg-red-600' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} className="min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Link to={getLanguagePath('/')} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <h3 className="text-3xl font-bold tracking-tight mb-8">Let's start with the <span className="sans-pink italic">Basics.</span></h3>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-red-600">Business Name</label>
                <input 
                  {...register('businessName')}
                  className={`w-full bg-transparent border-b p-4 rounded-none outline-none transition-all text-lg ${errors.businessName ? 'border-red-500' : 'border-white/20 focus:border-red-600'}`}
                  placeholder="e.g. Salt Lily"
                />
                {errors.businessName && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.businessName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-widest text-red-600">Website / Store URL</label>
                <input 
                  {...register('website')}
                  className={`w-full bg-transparent border-b p-4 rounded-none outline-none transition-all text-lg ${errors.website ? 'border-red-500' : 'border-white/20 focus:border-red-600'}`}
                  placeholder="https://yourstore.com"
                />
                {errors.website && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.website.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Size & <span className="sans-pink italic">Market.</span></h3>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-4">Team Size</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['1-5', '6-20', '21-50', '50+'].map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setValue('size', size, { shouldValidate: true })}
                      className={`p-4 rounded-none font-bold text-sm border-2 transition-all ${selectedSize === size ? 'border-red-600 bg-red-600/10 text-white' : 'border-white/10 hover:border-red-600/50'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {errors.size && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2">{errors.size.message}</p>}
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-4">Primary Market</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['UK', 'EU', 'US', 'Brazil', 'Other'].map(market => (
                    <button
                      key={market}
                      type="button"
                      onClick={() => setValue('market', market, { shouldValidate: true })}
                      className={`p-4 rounded-none font-bold text-sm border-2 transition-all ${selectedMarket === market ? 'border-red-600 bg-red-600/10 text-white' : 'border-white/10 hover:border-red-600/50'}`}
                    >
                      {market}
                    </button>
                  ))}
                </div>
                {errors.market && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2">{errors.market.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Social <span className="sans-pink italic">Presence.</span></h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">Instagram Handle</label>
                  <input 
                    {...register('socials.instagram')}
                    className="w-full bg-transparent border-b border-white/20 p-4 rounded-none focus:border-red-600 outline-none transition-all"
                    placeholder="@yourbrand"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">TikTok Handle</label>
                  <input 
                    {...register('socials.tiktok')}
                    className="w-full bg-transparent border-b border-white/20 p-4 rounded-none focus:border-red-600 outline-none transition-all"
                    placeholder="@yourbrand"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">LinkedIn Page</label>
                  <input 
                    {...register('socials.linkedin')}
                    className="w-full bg-transparent border-b border-white/20 p-4 rounded-none focus:border-red-600 outline-none transition-all"
                    placeholder="linkedin.com/company/yourbrand"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Desired <span className="sans-pink italic">Outcomes.</span></h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Brand Awareness & Reach',
                  'Lead Generation',
                  'Sales & Conversions',
                  'Content Scaling',
                  'Workflow Automation'
                ].map(outcome => (
                  <button
                    key={outcome}
                    type="button"
                    onClick={() => toggleOutcome(outcome)}
                    className={`p-4 rounded-none font-bold text-left border-2 transition-all flex justify-between items-center ${outcomes?.includes(outcome) ? 'border-red-600 bg-red-600/10 text-white' : 'border-white/10 hover:border-red-600/50'}`}
                  >
                    {outcome}
                    {outcomes?.includes(outcome) && <Check className="w-5 h-5 text-red-600" />}
                  </button>
                ))}
              </div>
              {errors.outcomes && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2">{errors.outcomes.message}</p>}
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Final <span className="sans-pink italic">Step.</span></h3>
              <p className="text-white/60 mb-8">Where should we send your custom creative brief and strategy?</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600">Work Email</label>
                  <input 
                    {...register('email')}
                    className={`w-full bg-transparent border-b p-4 rounded-none outline-none transition-all text-lg ${errors.email ? 'border-red-500' : 'border-white/20 focus:border-red-600'}`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600">Phone Number</label>
                  <input 
                    {...register('phone')}
                    className={`w-full bg-transparent border-b p-4 rounded-none outline-none transition-all text-lg ${errors.phone ? 'border-red-500' : 'border-white/20 focus:border-red-600'}`}
                    placeholder="+44 7700 900000"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600">Message</label>
                  <textarea 
                    {...register('message')}
                    className={`w-full bg-transparent border-b p-4 rounded-none outline-none transition-all text-lg h-32 ${errors.message ? 'border-red-500' : 'border-white/20 focus:border-red-600'}`}
                    placeholder="Tell us more about your project..."
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-1">{errors.message.message}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                    {t.home.contact.form.attachments} (Optional) <span className="text-white/40 ml-2">{t.home.contact.form.maxFileSize}</span>
                  </label>
                  <input 
                    type="file"
                    onChange={e => {
                      const selectedFile = e.target.files?.[0] || null;
                      if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
                        setSubmitError(`File size exceeds ${t.home.contact.form.maxFileSize} limit.`);
                        setFile(null);
                        e.target.value = '';
                      } else {
                        setFile(selectedFile);
                        if (submitError === `File size exceeds ${t.home.contact.form.maxFileSize} limit.`) setSubmitError(null);
                      }
                    }}
                    className="w-full bg-transparent border-b border-white/20 p-4 rounded-none focus:border-red-600 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {submitError && (
                <div className="bg-red-500/10 border border-red-500 p-4 rounded-none flex items-center gap-3 text-red-500">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-widest">{submitError}</p>
                </div>
              )}

              <div className="bg-white/5 p-6 rounded-none text-xs text-white/40 leading-relaxed">
                By submitting this brief, you agree to our terms. We'll use this information to build a tailored proposal for your business.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-12 flex justify-between items-center">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-red-600 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-all flex items-center gap-3"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-red-700 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Brief
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};


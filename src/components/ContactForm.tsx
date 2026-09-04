import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLanguage } from '../contexts/LanguageContext';

import { supabase } from '../lib/supabase';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            email: data.email,
            message: data.message,
          }
        ]);

      if (error) throw error;
      
      console.log(t.form.success);
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      console.error('There was an error sending your message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-bold uppercase mb-2 text-foreground">{t.form.name}</label>
        <input 
          {...register("name")}
          className="w-full p-4 bg-white border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-bold uppercase mb-2 text-foreground">{t.form.email}</label>
        <input 
          {...register("email")}
          className="w-full p-4 bg-white border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="john@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-bold uppercase mb-2 text-foreground">{t.form.message}</label>
        <textarea 
          {...register("message")}
          rows={4}
          className="w-full p-4 bg-white border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message.message}</p>}
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-foreground border-2 border-foreground p-4 font-black text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50"
      >
        {isSubmitting ? "..." : t.form.submit}
      </button>
    </form>
  );
};

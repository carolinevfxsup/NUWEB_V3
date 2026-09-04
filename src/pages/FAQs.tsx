import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQs = () => {
  useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How fast is delivery?",
      a: "Our standard delivery time is 7–14 days, depending on the complexity of the package and the volume of assets. We prioritize speed without sacrificing the creative polish your brand deserves."
    },
    {
      q: "What do you need from us to get started?",
      a: "We typically need your brand guidelines, existing product photography or video, and a clear understanding of your target platforms. If you don't have these, we can help you build them from scratch using our AI tool kit."
    },
    {
      q: "How do revisions work?",
      a: "Each package includes a set number of revision rounds (usually 2-3). We work closely with you during the production phase to ensure the final output aligns perfectly with your vision."
    },
    {
      q: "Do you handle media buying and ad management?",
      a: "Currently, we focus exclusively on creative production and automation. However, we can recommend trusted partners who specialize in media buying if you need a full-funnel solution."
    },
    {
      q: "What languages do you support?",
      a: "We are fully bilingual in English and Portuguese (including Brazilian Portuguese). This allows us to serve brands in the UK, EU, US, and Brazil with native-level cultural nuance."
    },
    {
      q: "Can we add automation later?",
      a: "Absolutely. Many of our clients start with a creative package and then transition to an automation retainer once they see the performance of the AI-generated content."
    },
    {
      q: "Is the content fully AI-generated?",
      a: "It's a hybrid. We use AI to enhance, scale, and automate, but every project is overseen by senior creative directors with decades of VFX experience. We often blend AI with real footage for the most authentic results."
    },
    {
      q: "Who owns the rights to the content?",
      a: "You do. Once the final payment is made, you own 100% of the rights to all delivered assets for use across any platform."
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 uppercase tracking-tighter">
          Common <span className="sans-pink italic">Questions.</span>
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-gray-100 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-3 text-left hover:text-primary transition-colors group"
              >
                <span className="text-base font-medium tracking-tight pr-8">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-300 group-hover:text-primary shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 leading-relaxed pb-4">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
          <p className="text-[13px] text-gray-500 mb-6">We're here to help you navigate the future of creative production.</p>
          <a 
            href="/#contact" 
            className="inline-block bg-black text-white px-7 py-3.5 font-bold text-xs tracking-widest uppercase hover:bg-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

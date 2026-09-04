import { useState, useEffect } from 'react';
import { ServiceAccordionItem } from '../components/ServiceAccordionItem';
import { useSearchParams } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Services = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const serviceIndex = searchParams.get('service');
    if (serviceIndex !== null) {
      setOpenIndex(parseInt(serviceIndex, 10));
    }
  }, [searchParams]);

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-24">
          {t.servicesPage.title}<span className="text-red-600">.</span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <div className="flex flex-col border-t border-black">
          {t.servicesPage.items.map((service: any, index: number) => (
            <ServiceAccordionItem 
              key={index} 
              index={index}
              service={service} 
              isOpen={openIndex === index} 
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

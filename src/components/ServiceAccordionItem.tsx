import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';

export interface ServiceAccordionItemProps {
  service: any;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const ServiceAccordionItem = ({ service, isOpen, onToggle, index }: ServiceAccordionItemProps) => {
  const { getLanguagePath } = useLanguage();
  return (
    <div className="border-b border-black overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between py-12 text-left group"
      >
        <div className="flex items-baseline gap-8">
          <span className="font-mono text-sm md:text-base opacity-50 group-hover:text-red-500 transition-colors">{service.id}</span>
          <h3 className="text-3xl md:text-6xl font-display font-bold tracking-tighter uppercase group-hover:text-red-600 transition-colors">{service.title}</h3>
        </div>
        <div className={`text-2xl transition-transform ${isOpen ? 'rotate-45 text-red-500' : 'text-red-500'}`}>
          {isOpen ? '×' : '+'}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-neutral-100"
          >
            <div className="p-6 md:p-8">
              {service.subHeading && (
                <h4 className="text-xl font-display font-bold uppercase text-red-600 mb-6">{service.subHeading}</h4>
              )}
              
              <div className="flex flex-col gap-4">
                {/* Description Tile */}
                <div className="p-6 border border-black bg-white">
                  <p className="text-lg md:text-xl text-text/80 font-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                {/* Images Row */}
                <div className={`grid ${service.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3'} gap-4`}>
                  {service.images.map((img: any, idx: number) => (
                    <Link key={idx} to={getLanguagePath(`/services?service=${index}`)} className={`${service.id === '04' ? 'aspect-[19/6]' : 'aspect-[4/6]'} overflow-hidden rounded-md block`}>
                      {img.src.endsWith('.mp4') ? (
                        <LazyVideo 
                          src={img.src} 
                          className="w-full h-full object-cover rounded-md"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={img.src} 
                          alt={img.caption} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Sub-services tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.subServices.map((sub: string, idx: number) => {
                    const [title, ...descParts] = sub.split(':');
                    const description = descParts.join(':');
                    return (
                      <div key={idx} className="p-4 border border-black bg-white hover:bg-neutral-50 transition-colors">
                        <h5 className="font-display font-bold text-md uppercase mb-1 text-red-600">{title}</h5>
                        {description && <p className="text-xs font-sans text-text/80">{description}</p>}
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-end">
                  <Link 
                    to={getLanguagePath(
                      service.id === '03' ? '/automation' : (service.id === '06' ? '/nulaabs' : '/onboarding')
                    )} 
                    className="bg-red-600 text-white px-8 py-3 font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all w-fit inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { getAssetUrl } from '../constants';

interface ShowcaseHeroProps {
  title: string;
  mobileTitle?: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  caseStudyNumber: string;
  sector: string;
  deliverables: string;
  railText: string;
  imagePosition?: string;
  titleClassName?: string;
  customTitle?: ReactNode;
  customDescription?: ReactNode;
  customButtons?: ReactNode;
  customCaseStudyLabel?: string;
}

export const ShowcaseHero = ({
  title,
  mobileTitle,
  subtitle,
  description,
  imageSrc = '',
  videoSrc,
  caseStudyNumber,
  sector,
  deliverables,
  railText,
  imagePosition = 'center',
  titleClassName,
  customTitle,
  customDescription,
  customButtons,
  customCaseStudyLabel,
}: ShowcaseHeroProps) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20 pb-12 md:pb-24">
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video
            src={getAssetUrl(videoSrc)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35 rounded-none"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          imageSrc && (
            <img 
              src={getAssetUrl(imageSrc)} 
              alt={title} 
              className="w-full h-full object-cover opacity-40 grayscale rounded-none" 
              style={{ objectPosition: imagePosition }}
              referrerPolicy="no-referrer"
            />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-4xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block text-[#DC2626]">
                {customCaseStudyLabel || `Case Study / ${caseStudyNumber}`}
              </span>
              {customTitle ? (
                customTitle
              ) : (
                <h1 className={`font-display font-bold italic text-white leading-[0.85] tracking-tighter mb-8 break-words ${titleClassName || "text-4xl sm:text-5xl md:text-[10vw] lg:text-[12vw]"}`}>
                  <span className={mobileTitle ? 'hidden md:inline' : ''}>{title}</span>
                  {mobileTitle && <span className="md:hidden">{mobileTitle}</span>}
                </h1>
              )}
            </div>
            {subtitle && (
              <div className="md:w-1/3 pb-4">
                <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed uppercase tracking-widest">
                  {subtitle}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start border-t border-white/10 pt-12">
            <div className="md:w-1/2">
              {customDescription ? (
                customDescription
              ) : (
                <p className="text-xl md:text-2xl text-white font-sans italic leading-relaxed">
                  {description}
                </p>
              )}
              {customButtons && (
                <div className="mt-8">
                  {customButtons}
                </div>
              )}
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Sector</span>
                  <span className="text-white font-bold uppercase text-xs">{sector}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Deliverables</span>
                  <span className="text-white font-bold uppercase text-xs">{deliverables}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <p className="writing-mode-vertical text-white/20 uppercase tracking-[1em] text-[10px] rotate-180">
          {railText}
        </p>
      </div>
    </section>
  );
};

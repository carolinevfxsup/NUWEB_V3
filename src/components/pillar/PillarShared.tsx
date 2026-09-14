import { useState, useEffect, type FC } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShowreelModal } from '../ShowreelModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Plus, Minus, ExternalLink, Play } from 'lucide-react';
import { LazyVideo } from '../LazyVideo';

export const TOKENS = {
  black: '#0d0d0d',
  white: '#ffffff',
  red: '#DC2626',
  gray: '#707070',
  offwhite: '#f5f5f4',
  line: '#e5e5e3',
};

export const ph = (a: string, b: string, angle = 135) =>
  `linear-gradient(${angle}deg, ${a} 0%, ${b} 100%)`;

export interface PillarCard {
  n: string;
  title: string;
  line: string;
  more: string;
  imgSrc?: string;
  imgSrcs?: string[];
  videoSrc?: string;
  overlayButtonText?: string;
  onOverlayClick?: () => void;
  overlayVideoUrl?: string;
}

export interface PortfolioItem {
  name: string;
  cat: string;
  slug: string;
  bg?: string;
  imgSrc?: string;
  videoSrc?: string;
}

interface HeroProps {
  eyebrow: string;
  headline: string;
  line: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  bg?: string;
  videoBg?: string;
  imageBg?: string;
  secondaryCtaText?: string;
  onSecondaryCtaClick?: () => void;
}

export const Hero: FC<HeroProps> = ({
  eyebrow,
  headline,
  line,
  ctaText = 'Get in touch',
  ctaLink,
  onCtaClick,
  bg = ph('#101820', '#1e3a3a'),
  videoBg,
  imageBg,
  secondaryCtaText,
  onSecondaryCtaClick,
}) => {
  const { getLanguagePath } = useLanguage();

  return (
    <header className="relative min-h-[75vh] md:min-h-[82vh] flex items-end px-6 md:px-[6vw] pb-16 pt-36 text-white overflow-hidden bg-black">
      {/* Background Media */}
      {videoBg ? (
        <div className="absolute inset-0">
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-45"
          />
        </div>
      ) : imageBg ? (
        <div className="absolute inset-0">
          <img
            src={imageBg}
            alt={headline}
            className="w-full h-full object-cover opacity-45"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="absolute inset-0" style={{ background: bg }} />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-600 mb-4">
            {eyebrow}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-[0.88] mb-6 text-white">
            {headline}
            <span className="text-red-600">.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl font-sans font-light leading-relaxed mb-8">
            {line}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            {ctaLink ? (
              <Link
                to={getLanguagePath(ctaLink)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                {ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                {ctaText} <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {secondaryCtaText && onSecondaryCtaClick && (
              <button
                onClick={onSecondaryCtaClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> {secondaryCtaText}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export const CardItem: FC<{ card: PillarCard; bg: string }> = ({ card, bg }) => {
  const [open, setOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!card.imgSrcs || card.imgSrcs.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % card.imgSrcs!.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [card.imgSrcs]);

  return (
    <article className="bg-white flex flex-col border border-border group transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
        {card.videoSrc ? (
          <LazyVideo
            src={card.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : card.imgSrcs && card.imgSrcs.length > 0 ? (
          <div className="relative w-full h-full">
            {card.imgSrcs.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`${card.title} ${idx}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentImgIndex ? 'opacity-100' : 'opacity-0'
                } group-hover:scale-105 transition-all duration-700`}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        ) : card.imgSrc ? (
          <img
            src={card.imgSrc}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full" style={{ background: bg }} />
        )}
        
        {/* Hover Overlay with Button */}
        {card.overlayButtonText && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
            <button
              onClick={() => {
                if (card.onOverlayClick) {
                  card.onOverlayClick();
                } else {
                  setShowreelOpen(true);
                }
              }}
              className="text-white text-xs font-sans font-bold uppercase tracking-widest border border-white px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              {card.overlayButtonText} <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="absolute top-4 left-4 font-mono font-bold text-xs text-red-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 z-10">
          {card.n}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-2 text-black group-hover:text-red-600 transition-colors">
            {card.title}
          </h3>
          <p className="text-sm md:text-base text-neutral-600 font-sans leading-relaxed mb-4">
            {card.line}
          </p>
        </div>

        <div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-black hover:text-red-600 border-b border-black hover:border-red-600 pb-0.5 transition-colors cursor-pointer"
          >
            <span>{open ? 'Show less' : 'Learn more'}</span>
            {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-neutral-700 font-sans leading-relaxed pt-4 mt-4 border-t border-border">
                  {card.more}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} videoUrl={card.overlayVideoUrl} />
    </article>
  );
};

export const TheWorkGrid: FC<{ cards: PillarCard[]; cardBgs: string[] }> = ({
  cards,
  cardBgs,
}) => {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 md:px-[6vw]">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
            What We Do
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-black">
            THE WORK<span className="text-red-600">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <CardItem key={card.n} card={card} bg={cardBgs[i % cardBgs.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const LogoStrip: FC<{
  label: string;
  items: string[];
  accent?: boolean;
}> = ({ label, items, accent = false }) => {
  return (
    <div className="py-6 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-[6vw]">
        <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
          {label}
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
          {items.map((item) => (
            <div
              key={item}
              className={`flex-shrink-0 px-6 py-3 border border-border font-display font-bold uppercase text-xs sm:text-sm tracking-wider ${
                accent ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PortfolioStrip: FC<{ items: PortfolioItem[] }> = ({ items }) => {
  const { getLanguagePath } = useLanguage();

  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-[6vw]">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-600 mb-2">
              Selected Work
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white">
              PORTFOLIO<span className="text-red-600">.</span>
            </h2>
          </div>
          <Link
            to={getLanguagePath('/results')}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white/70 hover:text-red-600 transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              to={getLanguagePath(item.slug)}
              key={item.name}
              className="group block relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-900 mb-4 border border-white/10 relative">
                {item.videoSrc ? (
                  <LazyVideo
                    src={item.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : item.imgSrc ? (
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full" style={{ background: item.bg }} />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-sans font-bold uppercase tracking-widest border border-white px-4 py-2 flex items-center gap-2">
                    Case Study <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
              <div className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest mb-1">
                {item.cat}
              </div>
              <div className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-red-600 transition-colors">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClosingCTA: FC<{
  headline: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  primaryLink?: string;
  onSecondaryClick?: () => void;
}> = ({
  headline,
  primaryBtnText = 'Get In Touch',
  secondaryBtnText = 'Watch Showreel',
  primaryLink = '/contact',
  onSecondaryClick,
}) => {
  const { getLanguagePath } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section className="bg-black text-white py-24 md:py-36 text-center border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-10 text-white">
          {headline}
          <span className="text-red-600">.</span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={getLanguagePath(primaryLink)}
            className="px-8 py-4 bg-white text-black font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            {primaryBtnText}
          </Link>
          <button
            onClick={onSecondaryClick || (() => setShowreelOpen(true))}
            className="px-8 py-4 bg-red-600 text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            {secondaryBtnText}
          </button>
        </div>
      </div>

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </section>
  );
};

import { founders } from '../data/founders';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { ShowreelModal } from '../components/ShowreelModal';
import { ExternalLink, Play } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();
  const [modalState, setModalState] = useState<{ isOpen: boolean; url: string }>({
    isOpen: false,
    url: '',
  });

  const openModal = (url: string) => {
    // Convert Vimeo URL to embed URL
    let embedUrl = url;
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop()?.split('?')[0];
      embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    }
    setModalState({ isOpen: true, url: embedUrl });
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[0.4fr_1.6fr] lg:grid-cols-[0.35fr_1.65fr] gap-6">
        {/* About Section */}
        <div className="bg-black text-white border border-border rounded-none p-8 md:p-12 shadow-sm">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-white">
              {t.about.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl font-display font-medium leading-tight mb-8">
              {t.about.subtitle}
              <br />
              <span className="text-white/60 text-xl">{t.about.subtext}</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="font-sans text-lg space-y-6 text-white/60">
              <p>{t.about.p1}</p>
              <p>
                <strong className="text-white">{t.about.p2}</strong>
                <br />
                {t.about.p3}
              </p>
              <p>
                <strong className="text-white">{t.about.p4}</strong> {t.about.p4Text}
              </p>
              <p>
                <strong className="text-white">{t.about.p5}</strong> {t.about.p5Text}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Founders Section */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.4}>
            <div className="bg-white border border-border rounded-none p-8 md:p-12 shadow-sm">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase">{t.about.foundersTitle}<span className="text-red-600">.</span></h2>
              <p className="text-2xl font-display font-medium leading-tight mt-8">
                {t.about.foundersSubtitle}
              </p>
              <p className="text-lg font-sans leading-relaxed mt-4 text-text/70">
                {t.about.foundersDesc}
              </p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            {founders.map((founder, i) => (
              <FadeIn key={i} delay={0.5 + (i * 0.1)}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm aspect-square overflow-hidden border border-border flex-shrink-0 md:w-[48%]">
                    <img 
                      src={founder.image || `https://picsum.photos/seed/founder${i}/1200/1200`}
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm flex flex-col justify-center md:w-[52%]">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1 tracking-tighter uppercase">{founder.name}</h3>
                    <p className="text-sm font-sans font-bold text-gray-500 mb-4 uppercase tracking-widest">{founder.role}</p>
                    <a href={`mailto:${founder.email}`} className="text-sm font-sans font-bold text-red-600 mb-4 hover:underline">{founder.email}</a>
                    <p className="text-sm text-text/70 font-sans leading-relaxed mb-6">{founder.bio}</p>
                    
                    {/* Social Links */}
                    {(founder.linkedin || founder.imdb || founder.vfxReel) && (
                      <div className="space-y-4 pt-6 border-t border-border">
                        <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-text/40">{t.about.socials}</p>
                        <div className="flex flex-col gap-3">
                          {founder.linkedin && (
                            <a 
                              href={founder.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:text-red-600 transition-colors"
                            >
                              LINKEDIN <ExternalLink size={14} />
                            </a>
                          )}
                          {founder.imdb && (
                            <a 
                              href={founder.imdb} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:text-red-600 transition-colors"
                            >
                              IMDB <ExternalLink size={14} />
                            </a>
                          )}
                          {founder.vfxReel && (
                            <button 
                              onClick={() => openModal(founder.vfxReel!)}
                              className="text-sm font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:text-red-600 transition-colors text-left"
                            >
                              {t.about.vfxReel} <Play size={14} fill="currentColor" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      
      <ShowreelModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        videoUrl={modalState.url}
      />
    </div>
  );
};

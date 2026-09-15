import { useState, useRef, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, Cpu, Users, ExternalLink, 
  Play, Pause
} from 'lucide-react';

// Import our beautifully generated local visual assets
import nosHeroImg from '../../assets/images/nos_ai_hero_1789386135103.jpg';
import nosAppUiImg from '../../assets/images/nos_app_ui_1789386149203.jpg';

const PEDRO_IMAGE = "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/BTS/WhatsApp%20Image%202026-09-14%20at%2012.11.53.jpeg";

// Beautiful custom Image component with graceful local fallback to prevent broken link icons
const ImageWithFallback = ({ src, fallbackSrc, alt, className, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img loading="lazy" decoding="async"
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
};

export const NOS = () => {
  const { t, getLanguagePath, language } = useLanguage();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const audioUrl = "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/Audio/INTRO_PEDRO_FINAL.wav";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.addEventListener('ended', () => {
        setIsPlayingAudio(false);
      });
    }

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlayingAudio(true);
        })
        .catch(err => {
          console.warn("Audio playback failed:", err);
        });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // YouTube IDs for the three distinct episodes
  const youtubeUrls = {
    1: "https://www.youtube.com/embed/e_ibuKq4X6g",
    2: "https://www.youtube.com/embed/s8bb1n2RI34",
    3: "https://www.youtube.com/embed/o_t0w0LUUuY"
  };

  // Supabase paths for the UI screenshots
  const carouselImages = [
    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/UI/unnamed-1.png",
    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/UI/unnamed-2.png",
    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/UI/unnamed.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-500 selection:text-white">
      <Header />
      
      <main id="nos-showcase">
        {/* ShowcaseHero matching strict layout standards */}
        <ShowcaseHero 
          title={t.nos.heroTitle}
          subtitle={t.nos.heroSubtitle}
          description={t.nos.heroDescription}
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/Header/youtube-thumbnail-o_t0w0LUUuY-maxresdefault.jpg"
          caseStudyNumber="05"
          sector={t.nos.sector}
          deliverables={t.nos.deliverables}
          railText={t.nos.railText}
          imagePosition="right"
        />

        {/* Section 01: The Campaign — Centered Text on Elegant White Background */}
        <section className="py-24 md:py-40 bg-white text-black relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#DC2626] mb-6 block">
                {t.nos.filmSectionLabel}
              </span>
              <h2 className="text-black font-display font-bold italic uppercase text-4xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
                {language === 'pt' ? 'Quem Conta um Conto, Acrescenta um Prompt' : 'Who Tells a Story, Adds a Prompt'}<span className="text-[#DC2626]">.</span>
              </h2>
              
              {/* Bento style details container for O Palmeiral human checkpoint process consistency */}
              <div className="p-8 md:p-12 rounded-md border border-[#EEEEEE] bg-[#F9F9F7] text-left grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200/60 shadow-sm text-[#DC2626]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/80">3 Writers</h4>
                  <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                    {language === 'pt' 
                      ? 'Três escritores talentosos desafiados a colaborar às cegas na mesma narrativa.' 
                      : 'Three talented writers challenged to collaborate blind on the exact same narrative.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200/60 shadow-sm text-[#DC2626]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/80">Collaborative Prompt</h4>
                  <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                    {language === 'pt' 
                      ? 'Cada parágrafo gera prompts dinâmicos que dão forma ao próximo rumo da história.' 
                      : 'Each paragraph generates dynamic prompts that shape the next chapter of the journey.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-200/60 shadow-sm text-[#DC2626]">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/80">AI Film Series</h4>
                  <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                    {language === 'pt' 
                      ? 'Uma websérie surreal de verão, produzindo um resultado imprevisível e incrivelmente divertido.' 
                      : 'An unpredictable and highly entertaining surreal AI summer campaign web series.'}
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 font-sans font-light text-lg max-w-3xl mx-auto leading-relaxed">
                {language === 'pt' 
                  ? 'A ideia genial de desafiar 3 pessoas a escrever uma história às cegas para criar algo imprevisto e incrivelmente divertido com inteligência artificial.'
                  : 'The brilliant concept of challenging 3 writers to craft a collaborative story completely blind, producing an unpredictable and highly entertaining AI film series.'}
              </p>
              
              <div className="mt-8 text-xs font-black uppercase tracking-[0.4em] text-[#DC2626]">
                Created by O Escritório x Bonzai
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand New Black Section for Episode Buttons and Video Player */}
        <section className="py-24 md:py-40 bg-black text-white relative overflow-hidden border-t border-white/5">
          {/* Subtle decorative background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DC2626]/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeInUp} className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-white font-display font-bold italic uppercase text-4xl md:text-7xl tracking-tighter mb-6">
                {language === 'pt' ? 'Assista aos Filmes Finais' : 'Watch the Final Films'}<span className="text-[#DC2626]">.</span>
              </h2>
            </motion.div>

            {/* Episode Navigation Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((epNum) => {
                const isSelected = activeEpisode === epNum;
                return (
                  <motion.button
                    key={epNum}
                    whileHover={{ y: -4 }}
                    className={`rounded-md p-8 border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#DC2626] bg-zinc-900/80 shadow-lg shadow-[#DC2626]/5' 
                        : 'border-white/10 bg-zinc-950/40 hover:border-white/30'
                    }`}
                    onClick={() => setActiveEpisode(epNum)}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className={`text-xs font-bold tracking-widest ${
                          isSelected ? 'text-[#DC2626]' : 'text-white/40'
                        }`}>
                          EPISODE 0{epNum}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
                        )}
                      </div>

                      <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">
                        {epNum === 1 ? t.nos.ep1Title : epNum === 2 ? t.nos.ep2Title : t.nos.ep3Title}
                      </h3>
                      
                      <p className="text-sm text-white/60 leading-relaxed font-sans mb-6">
                        {epNum === 1 ? t.nos.ep1Desc : epNum === 2 ? t.nos.ep2Desc : t.nos.ep3Desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 w-full flex items-center justify-between mt-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                        {language === 'pt' ? 'Reproduzir vídeo' : 'Play video'}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                        isSelected ? 'border-[#DC2626] bg-[#DC2626]/10 text-[#DC2626]' : 'border-white/20 text-white/60'
                      }`}>
                        <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Embedded Responsive YouTube Video Player */}
            <motion.div 
              key={activeEpisode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10 relative group"
            >
              <iframe
                width="100%"
                height="100%"
                src={`${youtubeUrls[activeEpisode as 1|2|3]}?autoplay=0&rel=0`}
                title={`NOS AI Campaign - Episode ${activeEpisode}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>

            {/* Full Playlist Link at the Bottom */}
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                {language === 'pt' 
                  ? 'Assista à websérie completa com todos os episódios originais na nossa playlist oficial da NOS.'
                  : 'Explore the complete web series with all original episodes on our official NOS playlist.'}
              </p>
              <a 
                href="https://www.youtube.com/playlist?list=PLIeu6nW36opM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#DC2626] text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#DC2626]/20"
              >
                {language === 'pt' ? 'ABRIR PLAYLIST NO YOUTUBE' : 'OPEN YOUTUBE PLAYLIST'} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 02: THE APP WE BUILT with interactive Image Carousel */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#DC2626] mb-8 block">
                  {t.nos.appLabel}
                </span>
                <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-12 leading-[0.9] font-bold italic text-black">
                  THE APP WE BUILT<span className="text-[#DC2626]">.</span>
                </h2>
                <div className="space-y-8 text-lg text-neutral-600 leading-relaxed font-sans">
                  <p>{t.nos.appText}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Visual Image Carousel with arrows, dots, and fallbacks */}
                <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden shadow-2xl rounded-lg border border-black/5 relative group bg-neutral-900 p-4 sm:p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <ImageWithFallback
                        src={carouselImages[currentSlide]}
                        fallbackSrc={nosAppUiImg}
                        className="w-full h-full object-contain rounded-md group-hover:scale-102 transition-transform duration-700"
                        alt={`App UI Screenshot ${currentSlide + 1}`}
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

                  {/* Left Navigation Arrow */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:bg-white active:scale-95 transition-all z-10"
                    aria-label="Previous Slide"
                  >
                    ←
                  </button>
                  
                  {/* Right Navigation Arrow */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg hover:bg-white active:scale-95 transition-all z-10"
                    aria-label="Next Slide"
                  >
                    →
                  </button>

                  {/* Slider Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {carouselImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          currentSlide === idx ? 'bg-[#DC2626] w-6' : 'bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 03: Meet Pedro (Voz Síntese IA) with custom wave */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/3] overflow-hidden shadow-2xl rounded-lg border border-black/5 relative group">
                  <ImageWithFallback
                    src={PEDRO_IMAGE}
                    fallbackSrc={nosHeroImg}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                    alt="Meet Pedro: AI Presenter"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#DC2626] mb-8 block">
                  {t.nos.pedroLabel}
                </span>
                <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-12 leading-[0.9] font-bold italic">
                  {t.nos.pedroTitle}<span className="text-[#DC2626]">.</span>
                </h2>
                <div className="space-y-8 text-lg text-neutral-600 leading-relaxed font-sans mb-10">
                  <p>{t.nos.pedroText}</p>
                </div>

                {/* Interactive voice visualizer widget */}
                <div className="p-6 bg-white border border-neutral-200/80 rounded-md shadow-sm relative overflow-hidden">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={toggleAudio}
                      className="w-16 h-16 rounded-full bg-[#DC2626] text-white flex items-center justify-center hover:scale-105 hover:bg-red-600 transition-all active:scale-95 shadow-md shadow-[#DC2626]/20 z-10"
                    >
                      {isPlayingAudio ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
                    </button>
                    <div className="flex-1">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mb-1">
                        Pedro voice model v1.4
                      </span>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-neutral-800">
                        {isPlayingAudio ? (language === 'pt' ? 'A SINTETIZAR VOZ...' : 'SYNTHESIZING SPEECH...') : (language === 'pt' ? 'Ouvir Tom de Voz' : 'Listen to Voice Tone')}
                      </h4>
                      
                      {/* Animated visual Soundwave */}
                      <div className="h-8 flex items-end gap-1 mt-3">
                        {Array.from({ length: 30 }).map((_, i) => {
                          const heights = [16, 24, 12, 8, 32, 16, 20, 28, 12, 16, 24, 8, 12, 32, 20, 16, 28, 12, 24, 16, 8, 20, 12, 28, 16, 24, 12, 16, 8, 20];
                          const height = heights[i];
                          return (
                            <motion.div
                              key={i}
                              className="flex-1 bg-[#DC2626] rounded-t-sm"
                              animate={{
                                height: isPlayingAudio 
                                  ? [height, Math.max(4, height * 0.3), height * 1.2, height] 
                                  : 4
                              }}
                              transition={{
                                duration: isPlayingAudio ? 1.2 : 0.3,
                                repeat: isPlayingAudio ? Infinity : 0,
                                delay: i * 0.03,
                                ease: "easeInOut"
                              }}
                              style={{ height: 4 }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: The Collaborators — Human Checkpoint / Process layout */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="mb-20 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#DC2626] mb-8 block">
                {t.nos.partnersLabel}
              </span>
              <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-8 leading-[0.9] font-bold italic">
                {t.nos.partnersTitle}<span className="text-[#DC2626]">.</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed font-sans">
                {t.nos.partnersText}
              </p>
            </motion.div>

            {/* Bento-style human checkpoint grid with high-quality SEO backlinks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: NOS */}
              <motion.div 
                {...fadeInUp}
                className="p-8 rounded-md border border-[#EEEEEE] bg-[#F9F9F7] flex flex-col justify-between aspect-[4/3]"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm mb-6">
                    <Monitor className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">NOS Portugal</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-sans mb-6">
                    {language === 'pt' 
                      ? "O principal grupo de comunicações de Portugal, liderando o desenvolvimento do 5G e soluções de IA de ponta para os consumidores." 
                      : "Portugal's leading telecommunications group, pioneering 5G development and cutting-edge consumer-facing AI solutions."}
                  </p>
                </div>
                <a 
                  href="https://www.nos.pt/pt/institucional/media/media/comunicados/Neste-Verao-a-NOS-nao-da-ferias-a-inteligencia-artificial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#DC2626] hover:translate-x-1 transition-transform"
                >
                  Visit NOS <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 2: O Escritório */}
              <motion.div 
                {...fadeInUp}
                className="p-8 rounded-md border border-[#EEEEEE] bg-[#F9F9F7] flex flex-col justify-between aspect-[4/3]"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm mb-6">
                    <Users className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">O Escritório</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-sans mb-6">
                    {language === 'pt' 
                      ? "Uma prestigiada agência de publicidade portuguesa conhecida pela sua criatividade rebelde e conceitos de marcas inesquecíveis." 
                      : "A multi-award-winning Portuguese creative advertising agency renowned for its iconic brand narratives and rebellious design concepts."}
                  </p>
                </div>
                <a 
                  href="https://oescritorio.net/work" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#DC2626] hover:translate-x-1 transition-transform"
                >
                  Visit O Escritório <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 3: Bonzai */}
              <motion.div 
                {...fadeInUp}
                className="p-8 rounded-md border border-[#EEEEEE] bg-[#F9F9F7] flex flex-col justify-between aspect-[4/3]"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm mb-6">
                    <Cpu className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Bonzai</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-sans mb-6">
                    {language === 'pt' 
                      ? "Uma produtora inovadora na vanguarda da união do cinema tradicional com tecnologia de inteligência artificial de última geração." 
                      : "An innovative production house specializing in pushing cinematic boundaries by combining live film with AI generation models."}
                  </p>
                </div>
                <a 
                  href="https://bonzi.pt/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#DC2626] hover:translate-x-1 transition-transform"
                >
                  Visit Bonzai <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section (Highly polished unified footer pattern) */}
        <section className="py-24 md:py-40 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 leading-[0.9] tracking-tighter text-black font-bold italic">
              {t.common.speedSoulScale}<span className="text-[#DC2626]">.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to={getLanguagePath('/onboarding')} 
                className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                {t.common.inquireNow} <ExternalLink className="w-4 h-4" />
              </Link>
              <Link 
                to={getLanguagePath('/automation')} 
                className="bg-white text-black border border-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center"
              >
                Automate
              </Link>
            </div>
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">
              © 2024 NUSTUDIOS. × BONZAI.
            </p>
          </div>
        </section>

        {/* Dynamic bottom project navigation */}
        <ProjectNavigation 
          prevProject={{ 
            title: t.quintaConceptFilm.heroTitle, 
            slug: getLanguagePath('/showcase/quinta-do-pinto-concept-film'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg' 
          }}
          nextProject={{ 
            title: t.saltLily.heroTitle, 
            slug: getLanguagePath('/showcase/salt-lily'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png' 
          }}
        />
      </main>
    </div>
  );
};

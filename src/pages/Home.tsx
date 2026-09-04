import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Send, Loader2, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { LogoScroll } from '../components/LogoScroll';
import { HomeResultsBento } from '../components/HomeResultsBento';
import { Link, useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { ShowreelModal } from '../components/ShowreelModal';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from '../components/LazyVideo';
import { getWebpUrl } from '../lib/utils';
import { portfolioImages } from '../data/portfolio';



const CreativeAlternatingImage = () => {
  const presetImages = useMemo(() => {
    const list = portfolioImages.map(item => item.link);
    // Shuffle randomly every time
    return [...list].sort(() => Math.random() - 0.5);
  }, []);

  const [currentIdx, setCurrentIdx] = useState(() => Math.floor(Math.random() * presetImages.length));

  useEffect(() => {
    // Randomized rotation interval between 3s and 5s
    const getRandomInterval = () => Math.floor(Math.random() * 2000) + 3000;
    
    let timer: NodeJS.Timeout;
    const rotate = () => {
      setCurrentIdx((prev) => {
        let next = Math.floor(Math.random() * presetImages.length);
        while (next === prev && presetImages.length > 1) {
          next = Math.floor(Math.random() * presetImages.length);
        }
        return next;
      });
      timer = setTimeout(rotate, getRandomInterval());
    };
    timer = setTimeout(rotate, getRandomInterval());
    return () => clearTimeout(timer);
  }, [presetImages.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {presetImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Creative Direction Asset"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-105 ${
            i === currentIdx ? 'opacity-100' : 'opacity-0'
          }`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = portfolioImages[0].link;
          }}
        />
      ))}
    </div>
  );
};

const AnimationAlternatingImage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <video
        src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/WhatsApp%20Video%202026-08-14%20at%2013.20.00.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
};

export const Home = () => {
  const { t, getLanguagePath, language } = useLanguage();
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  const randomizedBannerImages = useMemo(() => {
    const shuffled = [...portfolioImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px) and (orientation: portrait)');
    setIsMobilePortrait(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsMobilePortrait(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  const [url, setUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
        setFile(null);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnalyze = () => {
    if (url) {
      navigate(getLanguagePath(`/dna-scan?url=${encodeURIComponent(url)}`));
    }
  };

  return (
    <div className="flex flex-col bg-bg text-text">
      {/* Section 1: Hero (Header) */}
      <section id="growth" className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <video 
            key={isMobilePortrait ? "portrait-916" : "landscape-169"}
            src={isMobilePortrait 
              ? "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Header_Website_916.mp4"
              : "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Header_Website(6).mp4"
            }
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 z-10 md:hidden">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {t.home.hero.watchShowreel}
          </button>
        </div>
      </section>

      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Section 2: Vision */}
      <section className="py-32 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px] grid grid-cols-1 md:grid-cols-4">
          <div className="hidden md:block"></div>
          <div className="md:col-span-2 text-center relative">
            <FadeIn delay={0.1}>
              <div className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
                 <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-text/60 mb-2">{t.home.vision.label}</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text/40">
                   <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.85] mb-12 uppercase mt-12 md:mt-0">
                {t.home.vision.title.replace('.', '')}<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-sm md:text-base text-text/80 max-w-4xl mx-auto font-sans leading-relaxed mb-12 whitespace-pre-line text-balance">
                {t.home.vision.desc}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link to={getLanguagePath('/onboarding')} className="bg-black text-white px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 w-fit mx-auto group">
                {t.home.vision.cta}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Section 3: Results (Bento Box) */}
      <section id="results" className="py-32 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="mb-16">
            <FadeIn delay={0.1}>
              <p className="section-label mb-4 !text-red-600 uppercase opacity-100">{t.home.results.label}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.85] uppercase text-white">{t.home.results.title}<span className="text-red-600">.</span></h2>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <HomeResultsBento />
          </FadeIn>
          
          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <Link to={getLanguagePath('/results')} className="bg-white text-black border border-black px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center justify-center gap-3 w-fit mx-auto group">
                {t.home.results.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 4: Brands (Logo Scroll) */}
      <section className="bg-black border-b border-white/10">
        <LogoScroll />
      </section>

      {/* Section 2.5: Services Tiles */}
      <section id="our-services" className="py-20 md:py-28 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="mb-16">
            <FadeIn delay={0.1}>
              <p className="section-label mb-3 uppercase opacity-100">{t.home.servicesTiles?.label || 'OUR SERVICES'}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.85] uppercase text-text">
                {(t.home.servicesTiles?.title || 'SERVICES')}<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              'CREATIVE',
              'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/video-529-1080p-upscaled.mp4',
              'ANIMATION',
              'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4'
            ].map((imgUrl, index) => {
              const item = (t.home.servicesTiles?.items || [])[index];
              if (!item) return null;
              const categoryRoutes = [
                '/creative-direction',
                '/ai-visualisation',
                '/film-animation',
                '/automation'
              ];
              return (
                <FadeIn key={item.number} delay={0.1 * (index + 1)}>
                  <Link 
                    to={getLanguagePath(categoryRoutes[index] || '/services')} 
                    className="group block h-full"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-200 mb-6 relative">
                      {index === 0 ? (
                        <CreativeAlternatingImage />
                      ) : index === 2 ? (
                        <AnimationAlternatingImage />
                      ) : typeof imgUrl === 'string' && imgUrl.toLowerCase().endsWith('.mp4') ? (
                        <video 
                          src={getWebpUrl(imgUrl)}
                          className={`w-full h-full object-cover transition-transform duration-700 ${index === 1 ? 'scale-[1.36] group-hover:scale-[1.46]' : 'group-hover:scale-105'}`}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img 
                          src={getWebpUrl(imgUrl as string)} 
                          alt={item.title} 
                          className={`w-full h-full object-cover transition-transform duration-700 ${index === 1 ? 'scale-[1.36] group-hover:scale-[1.46]' : 'group-hover:scale-105'}`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/white-studio-editorial.png';
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <span className="text-red-600 font-mono font-bold text-sm md:text-base mb-2 block">
                        {item.number}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-display font-bold uppercase text-text mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-text/75 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>



      {/* NULAABS Banner Section */}
      <section className="py-32 bg-black text-white border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="text-left mb-16">
            <FadeIn delay={0.1}>
              <span className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase block mb-3">
                {language === 'pt' ? 'MOTOR SINTÉTICO' : 'SYNTHETIC STUDIO ENGINE'}
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.85] uppercase text-white">
                NULAABS<span className="text-[#DC2626]">.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full items-center mb-16">
            {/* Left Column: Product Synthesis Image */}
            <FadeIn delay={0.3} className="md:col-span-4 w-full">
              <div className="relative bg-white/5 aspect-[3/4] max-h-[420px] md:max-h-[480px] overflow-hidden mx-auto w-full">
                <img 
                  src={getWebpUrl(randomizedBannerImages[0].link)} 
                  alt={language === 'pt' ? 'sintese de produto' : 'product synthesis'}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>

            {/* Middle Column: Visual Synthesis Text */}
            <FadeIn delay={0.4} className="md:col-span-4 w-full">
              <div className="relative bg-white/5 flex flex-col justify-center items-center text-center p-6 aspect-[3/4] max-h-[420px] md:max-h-[480px] mx-auto w-full">
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.4em] text-[#DC2626] mb-3">
                  {language === 'pt' ? 'SUA FERRAMENTA DE IA CRIATIVA' : 'YOUR CREATIVE AI POWER TOOL'}
                </span>
                <p className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white mb-4 leading-tight max-w-xs">
                  {language === 'pt' 
                    ? 'DIRIJA A ARTE COMO UM PROFISSIONAL.' 
                    : 'ART DIRECT LIKE A PRO.'}
                </p>
                <p className="text-[11px] text-white/50 leading-relaxed font-sans font-light max-w-[260px]">
                  {language === 'pt'
                    ? 'O nosso workflow proprietário de estúdio que encapsula produtos de marcas, elenco de modelos e ambientes de luz em editoriais de campanhas prontos para produção, sem pegada física.'
                    : 'Our proprietary studio workflow sandboxes raw brand products, facial modeling roster, and curated lighting environments into production-ready campaign editorials with zero physical footprint.'}
                </p>
              </div>
            </FadeIn>

            {/* Right Column: Editorial Frame Image */}
            <FadeIn delay={0.5} className="md:col-span-4 w-full">
              <div className="relative bg-white/5 aspect-[3/4] max-h-[420px] md:max-h-[480px] overflow-hidden mx-auto w-full">
                <img 
                  src={getWebpUrl(randomizedBannerImages[1].link)} 
                  alt={language === 'pt' ? 'moldura editorial' : 'editorial frame'} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          </div>

          {/* Underneath Action Buttons */}
          <FadeIn delay={0.6}>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to={getLanguagePath('/nulaabs')} 
                className="w-full sm:w-auto text-center bg-transparent text-white border border-white/20 px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all inline-block hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] duration-300"
              >
                {language === 'pt' ? 'Saber Mais' : 'Learn More'}
              </Link>
              <a 
                href="https://nulaabs.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto text-center bg-white text-black border border-white px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all inline-block hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] duration-300"
              >
                {language === 'pt' ? 'Registar' : 'Sign Up'}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3.5: Quote */}
      <section className="py-24 md:py-32 bg-white text-black border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tighter leading-[1.2] max-w-3xl whitespace-pre-line">
              {t.home.quote}
            </h2>
          </FadeIn>
        </div>
      </section>



      {/* Section 5.5: Bento Infographic */}
      <section className="bg-black text-white py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 p-6 border border-white/10 flex flex-col justify-center items-start overflow-hidden">
            <motion.div 
              className="flex flex-col gap-2 text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {t.home.stats.lisbon}<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                {t.home.stats.melbourne}<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {t.home.stats.london}<span className="text-red-600">.</span>
              </motion.span>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">30%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.cost}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">10x</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.output}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.onBrand}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">24/7</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.automation}</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border border-white/10 flex flex-col justify-center items-center text-center">
            <p className="text-2xl md:text-4xl font-display font-bold tracking-tighter leading-[1.2] text-white/70 max-w-3xl">{t.home.stats.quote}</p>
          </div>
        </div>
      </div>
    </section>



      {/* Section 6: DNA Scan CTA */}
      <section id="dna-scan-cta" className="py-32 bg-bg border-b border-border hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="p-16 md:p-24 bg-neutral border border-border flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <p className="section-label mb-12">Vision Lab / Phase 01</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter leading-[0.8] uppercase">
              {t.nav.dnaScan}
            </h2>
            <p className="text-xl md:text-2xl text-text/60 mb-16 font-sans max-w-2xl leading-relaxed">
              {t.dnaScan.subtitle}
            </p>
            
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="brand.com" 
                className="flex-1 bg-bg border border-border px-8 py-6 text-text focus:outline-none focus:border-red-600 transition-colors font-sans text-lg"
              />
              <button 
                onClick={handleAnalyze}
                className="bg-red-600 text-white px-12 py-6 font-sans font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all whitespace-nowrap"
              >
                {t.dnaScan.button}
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Section: Contact Form */}
      <section id="contact-form" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12 leading-[0.85] !text-white">
                  {t.home.contact.title}<span className="text-red-600">.</span>
                </h2>
                <p className="text-2xl md:text-3xl font-display font-bold uppercase mb-12">{t.home.contact.subtitle}</p>
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-2 relative">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.firstName}</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                            />
                            <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                                <path d="M7 4v16M17 4v16M7 12h10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 relative">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.lastName}</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                            />
                            <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                                <path d="M7 4v16M17 4v16M7 12h10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.email}</label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                          />
                          <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                              <path d="M7 4v16M17 4v16M7 12h10" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.message}</label>
                        <textarea
                          name="message"
                          required
                          rows={1}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors resize-none text-white font-sans min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.attachments}</label>
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full border border-dashed border-white/10 rounded-sm p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/30 hover:bg-white/5 transition-all group"
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          {file ? (
                            <div className="flex items-center gap-2 text-white font-sans font-medium">
                              <FileText className="w-5 h-5" />
                              <span>{file.name}</span>
                            </div>
                          ) : (
                            <>
                              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                                <span className="text-xl font-light text-white/40 group-hover:text-white">+</span>
                              </div>
                              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">{t.home.contact.form.addFile}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {submitError && (
                        <div className="text-red-500 text-xs font-bold uppercase tracking-widest">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-10 py-5 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-none bg-[#DC2626]/10 flex items-center justify-center">
                        <Check className="w-10 h-10 text-[#DC2626]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-display font-bold uppercase tracking-tighter text-white">{t.home.contact.form.success.title}<span className="text-red-600">.</span></h3>
                        <p className="text-white/60 font-sans max-w-sm">
                          {t.home.contact.form.success.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1"
                      >
                        {t.home.contact.form.success.another}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-none border border-white/10">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/pnn495jt8srmr0cwyy3a1q4te8_result_.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

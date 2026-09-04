import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowRight,
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Eye, 
  Layers, 
  Settings, 
  Sliders, 
  Activity, 
  Cpu 
} from 'lucide-react';

export const GoogleIO = () => {
  const { language, getLanguagePath } = useLanguage();

  // Local state for 3-step interactive slider (Cassette sequence)
  const [sliderIndex, setSliderIndex] = useState(0);

  // Local state for Character Previz carousel
  const [previzIndex, setPrevizIndex] = useState(0);

  // Local state for Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const content = {
    en: {
      eyebrow: 'AI Artist / VFX Comp',
      title: 'Google I/O 2026 — "TPU"',
      subhead: 'NuStudios joined Nexus Studios\' team in London as AI Artist / VFX Comp, contributing to some of the film\'s most technically demanding shots — including the cassette tape sequence.',
      creditLine: 'See the full project on Nexus Studios →',
      introCassette: 'Every frame in the opening shot moved through several stages before it reached screen — from a physical puppet plate to a fully AI-composited frame.',
      steps: [
        {
          label: '01 — Puppet Plate',
          title: 'Base Puppet Plate',
          desc: 'Raw on-set photography of the physical puppet, used as the foundational reference plate.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/IO2026_sh100_bg01_v02_0000.png_202608051934.jpeg'
        },
        {
          label: '02 — AI Texture Pass',
          title: 'AI-Textured Pass (Fake Greenscreen)',
          desc: 'The same plate after AI re-texturing, with a synthetic/fake greenscreen pass used to isolate elements for compositing.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071149.jpeg'
        },
        {
          label: '03 — Google Flow Comp',
          title: 'AI Comp in Google Flow',
          desc: 'The shot composited inside Google Flow, the final frame before AI/CG eyes were added to complete the shot.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071145.jpeg'
        }
      ],
      btsTitle: 'Watch the shot come together',
      previzTitle: 'CG Previz to AI Final Frame',
      previzText: 'the Nexus team built lightweight character previz to keep faces and performance consistent across the sequence — blending simplified CG stand-ins with AI-generated imagery, guided by single-frame reference sheets for each character.',
      nulaabsTitle: 'Solving perspective & in-painting problems with our own tools',
      nulaabsText: 'Some of the hardest problems on this job weren\'t creative — they were technical: matching perspective across AI-generated plates, and in-painting clean fills where none existed. We solved both with NULAABS, our in-house environment for AI compositing, built on canny-map–guided in-painting tools we developed ourselves using Google AI Studio and Google\'s own APIs. When the job calls for it, we build the tool.',
      exploreNulaabs: 'Explore NULAABS →',
      signUpCta: 'Want to use our tools for your production? Sign up →',
      finalGalleryTitle: 'Final Frames',
      ctaTitle: 'Need help with your AI / VFX pipeline?',
      hireUs: 'Hire Us',
      sector: 'AI VFX & Creative Production',
      deliverables: 'AI Art Direction, Compositing, Character Previz, Custom Tooling',
      railText: 'GOOGLE I/O × NUSTUDIOS'
    },
    pt: {
      eyebrow: 'Artista de IA / VFX Comp',
      title: 'Google I/O 2026 — "TPU"',
      subhead: 'A NuStudios juntou-se à equipa da Nexus Studios em Londres como Artista de IA / VFX Comp, contribuindo para algumas das cenas tecnicamente mais exigentes do filme — incluindo a sequência da fita cassete.',
      creditLine: 'Ver o projeto completo na Nexus Studios →',
      introCassette: 'Cada frame na cena de abertura passou por várias etapas antes de chegar ao ecrã — desde um plano físico de fantoches até um frame totalmente composto por IA.',
      steps: [
        {
          label: '01 — Puppet Plate',
          title: 'Plano Base de Fantoche',
          desc: 'Fotografia bruta no set do fantoche físico, usada como placa de referência fundamental.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/IO2026_sh100_bg01_v02_0000.png_202608051934.jpeg'
        },
        {
          label: '02 — AI Texture Pass',
          title: 'Passagem Texturizada por IA (Greenscreen Falso)',
          desc: 'A mesma placa após a re-texturização por IA, com uma passagem de greenscreen sintética/falsa usada para isolar elementos para composição.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071149.jpeg'
        },
        {
          label: '03 — Google Flow Comp',
          title: 'Composição IA em Google Flow',
          desc: 'A cena composta dentro do Google Flow, o frame final antes de os olhos de IA/CG serem adicionados para completar o plano.',
          url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071145.jpeg'
        }
      ],
      btsTitle: 'Veja como a cena ganhou vida',
      previzTitle: 'CG Previz para Frame Final de IA',
      previzText: 'a equipa da Nexus construiu um previz de personagem leve para manter os rostos e as performances consistentes ao longo da sequência — combinando representações simplificadas em CG com imagens geradas por IA, guiadas por folhas de referência de frame único para cada personagem.',
      nulaabsTitle: 'Resolver problemas de perspetiva e preenchimento com as nossas próprias ferramentas',
      nulaabsText: 'Alguns dos problemas mais difíceis neste trabalho não foram criativos — foram técnicos: alinhar perspetivas entre placas geradas por IA e fazer in-painting (preenchimento limpo) onde nada existia. Resolvemos ambos com a NULAABS, o nosso ambiente interno para composição de IA, construído sobre ferramentas de in-painting guiadas por canny-map que desenvolvemos nós próprios utilizando o Google AI Studio e as próprias APIs da Google. Quando o trabalho exige, nós construímos a ferramenta.',
      exploreNulaabs: 'Explorar a NULAABS →',
      signUpCta: 'Quer usar as nossas ferramentas para a sua produção? Registe-se →',
      finalGalleryTitle: 'Frames Finais',
      ctaTitle: 'Precisa de ajuda com o seu pipeline de IA / VFX?',
      hireUs: 'Contrate-nos',
      sector: 'VFX de IA e Produção Criativa',
      deliverables: 'Direção de Arte de IA, Composição, Previz de Personagem, Ferramentas Personalizadas',
      railText: 'GOOGLE I/O × NUSTUDIOS'
    }
  };

  const t = content[language === 'pt' ? 'pt' : 'en'];

  // Rich React elements for backlinks
  const enDescription = (
    <span className="text-xl md:text-2xl text-white font-sans italic leading-relaxed">
      NuStudios joined <a href="https://nexusstudios.com/work/google-io-2026-tpu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">Nexus Studios'</a> team in London as AI Artist / VFX Comp, contributing to some of the film's most technically demanding shots — including the cassette tape sequence.
    </span>
  );

  const ptDescription = (
    <span className="text-xl md:text-2xl text-white font-sans italic leading-relaxed">
      A NuStudios juntou-se à equipa da <a href="https://nexusstudios.com/work/google-io-2026-tpu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">Nexus Studios</a> em Londres como Artista de IA / VFX Comp, contribuindo para algumas das cenas tecnicamente mais exigentes do filme — incluindo a sequência da fita cassete.
    </span>
  );

  const enPrevizText = (
    <span>
      the <a href="https://nexusstudios.com/work/google-io-2026-tpu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">Nexus</a> team built lightweight character previz to keep faces and performance consistent across the sequence — blending simplified CG stand-ins with AI-generated imagery, guided by single-frame reference sheets for each character.
    </span>
  );

  const ptPrevizText = (
    <span>
      a equipa da <a href="https://nexusstudios.com/work/google-io-2026-tpu/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">Nexus</a> construiu um previz de personagem leve para manter os rostos e as performances consistentes ao longo da sequência — combinando representações simplificadas em CG com imagens geradas por IA, guiadas por folhas de referência de frame único para cada personagem.
    </span>
  );

  const enNulaabsText = (
    <span>
      Some of the hardest problems on this job weren't creative — they were technical: matching perspective across AI-generated plates, and in-painting clean fills where none existed. We solved both with <a href="https://www.nulaabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">NULAABS</a>, our in-house environment for AI compositing, built on canny-map–guided in-painting tools we developed ourselves using Google AI Studio and Google's own APIs. When the job calls for it, we build the tool.
    </span>
  );

  const ptNulaabsText = (
    <span>
      Alguns dos problemas mais difíceis neste trabalho não foram criativos — foram técnicos: alinhar perspetivas entre placas geradas por IA e fazer in-painting (preenchimento limpo) onde nada existia. Resolvemos ambos com a <a href="https://www.nulaabs.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500 transition-colors">NULAABS</a>, o nosso ambiente interno para composição de IA, construído sobre ferramentas de in-painting guiadas por canny-map que desenvolvemos nós próprios utilizando o Google AI Studio e as próprias APIs da Google. Quando o trabalho exige, nós construímos a ferramenta.
    </span>
  );

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  // Previz carousel image assets
  const previzImages = [
    {
      url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/996_02.jpg',
      alt: 'Character previz exploration sheet'
    },
    {
      url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/remove_the_bottom_strip_lights_202605081035.jpeg',
      alt: 'Character performance alignment sheet'
    },
    {
      url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/change_the_background_of_the_202605071454.jpeg',
      alt: 'Single frame character reference model sheet'
    }
  ];

  // Final gallery images (exactly the two requested images)
  const finalGalleryImages = [
    {
      url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071145.jpeg',
      title: 'Cassette Opener Sequence'
    },
    {
      url: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/change_the_background_of_the_202605071454.jpeg',
      title: 'Final Previz Pass'
    }
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="overflow-hidden">
        {/* Showcase Hero */}
        <ShowcaseHero 
          title={t.title}
          subtitle="GOOGLE I/O 2026"
          description={t.subhead}
          customDescription={language === 'pt' ? ptDescription : enDescription}
          imageSrc={t.steps[0].url}
          caseStudyNumber="05"
          sector={t.sector}
          deliverables={t.deliverables}
          railText={t.railText}
          customCaseStudyLabel={t.eyebrow}
          customButtons={
            <a 
              href="https://nexusstudios.com/work/google-io-2026-tpu/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 group text-white text-xs font-black uppercase tracking-widest hover:text-red-500 transition-colors py-2 border-b border-white/20 hover:border-red-500/50"
            >
              {t.creditLine} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          }
        />

        {/* Section 2: The Opening Shot — Cassette Tape Sequence */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
              <motion.div {...fadeInUp} className="lg:col-span-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-6 block">01. THE OPENING SHOT</span>
                <h2 className="text-3xl md:text-5xl font-display uppercase italic tracking-tighter text-black leading-none mb-6">
                  CASSETTE TAPE SEQUENCE<span className="text-red-600">.</span>
                </h2>
                <p className="text-black/60 text-lg leading-relaxed font-light">
                  {t.introCassette}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8 space-y-8"
              >
                {/* Interactive Slider Stage Screen */}
                <div className="relative aspect-video w-full bg-neutral-900 border border-black/5 overflow-hidden shadow-2xl rounded-none">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={sliderIndex}
                      src={t.steps[sliderIndex].url}
                      alt={t.steps[sliderIndex].title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover rounded-none"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {/* Absolute Bottom Badge Label Overlay */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono tracking-wider uppercase text-white/95 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    {t.steps[sliderIndex].label}
                  </div>

                  {/* Stage Detail caption at the bottom inside the image */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div className="max-w-lg">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                        {t.steps[sliderIndex].title}
                      </h4>
                      <p className="text-xs text-white/60 font-light leading-relaxed">
                        {t.steps[sliderIndex].desc}
                      </p>
                    </div>
                    {sliderIndex === 2 && (
                      <a 
                        href="https://labs.google/flow" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="self-start sm:self-auto shrink-0 bg-white hover:bg-red-600 text-black hover:text-white px-3 py-1.5 text-[9px] font-black uppercase tracking-widest transition-colors flex items-center gap-1 rounded-none"
                      >
                        Composited in Google Flow <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Range Slider Scrubber Control & Indicators */}
                <div className="bg-white p-6 border border-black/5 shadow-sm space-y-6">
                  <div className="flex justify-between text-[11px] font-mono uppercase tracking-widest">
                    <button 
                      onClick={() => setSliderIndex(0)} 
                      className={`transition-colors hover:text-black ${sliderIndex === 0 ? 'text-red-600 font-bold' : 'text-black/40'}`}
                    >
                      01. PUPPET PLATE
                    </button>
                    <button 
                      onClick={() => setSliderIndex(1)} 
                      className={`transition-colors hover:text-black ${sliderIndex === 1 ? 'text-red-600 font-bold' : 'text-black/40'}`}
                    >
                      02. AI TEXTURE PASS
                    </button>
                    <button 
                      onClick={() => setSliderIndex(2)} 
                      className={`transition-colors hover:text-black ${sliderIndex === 2 ? 'text-red-600 font-bold' : 'text-black/40'}`}
                    >
                      03. GOOGLE FLOW COMP
                    </button>
                  </div>

                  {/* Custom Drag Slider Tracker */}
                  <div className="relative h-1 w-full bg-black/10 rounded-full cursor-pointer flex items-center">
                    {/* Active Track Accent */}
                    <div 
                      className="absolute left-0 h-full bg-red-600 rounded-full transition-all duration-300"
                      style={{ width: `${(sliderIndex / 2) * 100}%` }}
                    />
                    
                    {/* Actual HTML Input Range to map scrubbing flawlessly */}
                    <input 
                      type="range" 
                      min="0" 
                      max="2" 
                      value={sliderIndex} 
                      onChange={(e) => setSliderIndex(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      aria-label="Scrub case study states"
                    />

                    {/* Draggable Playhead handle indicator */}
                    <div 
                      className="absolute w-4 h-4 bg-white border-2 border-red-600 rounded-full -ml-2 shadow-lg transition-all duration-150 pointer-events-none"
                      style={{ left: `${(sliderIndex / 2) * 100}%` }}
                    />
                  </div>

                  {/* Navigation Arrows & Click step */}
                  <div className="flex items-center justify-between pt-2">
                    <button 
                      onClick={() => setSliderIndex(prev => Math.max(0, prev - 1))}
                      disabled={sliderIndex === 0}
                      className="p-2 border border-black/10 hover:border-black text-black disabled:opacity-20 disabled:pointer-events-none transition-colors"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-mono tracking-widest text-black/40">
                      DRAG OR CLICK TO SCRUB TIMELINE
                    </span>
                    <button 
                      onClick={() => setSliderIndex(prev => Math.min(2, prev + 1))}
                      disabled={sliderIndex === 2}
                      className="p-2 border border-black/10 hover:border-black text-black disabled:opacity-20 disabled:pointer-events-none transition-colors"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Behind the Scenes */}
        <section className="py-24 md:py-40 bg-white border-y border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-6 block">02. BTS COMPOSITING</span>
              <h2 className="text-3xl md:text-5xl font-display uppercase italic tracking-tighter text-black leading-none">
                {t.btsTitle}<span className="text-red-600">.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full border border-black/5 shadow-2xl overflow-hidden rounded-none bg-neutral-900"
            >
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://www.youtube.com/embed/jHEEaQJxJyo?si=pIEAa8VNI5ThCDeX"
                  title="YouTube video player"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: Character Previz */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 block">03. PRE-VISUALIZATION</span>
                <h2 className="text-3xl md:text-5xl font-display uppercase italic tracking-tighter text-black leading-none">
                  {t.previzTitle}<span className="text-red-600">.</span>
                </h2>
                <p className="text-black/60 text-lg leading-relaxed font-light">
                  {language === 'pt' ? ptPrevizText : enPrevizText}
                </p>
                
                {/* Carousel indicators & Controls */}
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex gap-2">
                    {previzImages.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => setPrevizIndex(i)}
                        className={`w-10 h-1 transition-all ${previzIndex === i ? 'bg-red-600' : 'bg-black/10'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-black/40">
                    0{previzIndex + 1} / 0{previzImages.length}
                  </span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 relative group"
              >
                {/* swipe/drag wrapper */}
                <div className="relative aspect-video w-full bg-neutral-900 border border-black/5 overflow-hidden shadow-2xl rounded-md">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={previzIndex}
                      src={previzImages[previzIndex].url}
                      alt={previzImages[previzIndex].alt}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover cursor-pointer hover:scale-102 transition-transform duration-500 rounded-md"
                      onClick={() => handleOpenLightbox(previzIndex)}
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {/* Maximize Icon trigger overlay */}
                  <button 
                    onClick={() => handleOpenLightbox(previzIndex)}
                    className="absolute top-4 right-4 bg-black/80 hover:bg-red-600 border border-white/10 p-2 text-white transition-colors"
                    aria-label="Maximize image view"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Overlay navigation arrows */}
                  <button 
                    onClick={() => setPrevizIndex(prev => (prev === 0 ? previzImages.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 border border-white/10 p-2 text-white transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setPrevizIndex(prev => (prev === previzImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 border border-white/10 p-2 text-white transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[10px] font-mono tracking-widest text-black/40 mt-4 uppercase text-right">
                  *Click image to view high-resolution storyboard plate
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: Built with NULAABS (Custom editor layout context) */}
        <section className="py-24 md:py-40 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 order-2 lg:order-1"
              >
                {/* HIGH-TECH NULAABS WORKSPACE SIMULATION */}
                <div className="w-full bg-[#111111] border border-white/10 shadow-2xl rounded-none overflow-hidden font-mono text-white/80">
                  {/* Editor Window Top Bar */}
                  <div className="bg-[#181818] px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-bold text-white/50 text-[10px] tracking-wider uppercase">NULAABS_COMP_ENV_v1.2</span>
                    </div>
                    <div className="flex items-center gap-4 text-[9px] tracking-widest text-white/40">
                      <span>FLOW_GRID: ON</span>
                      <span>FPS: 24</span>
                    </div>
                  </div>

                  {/* Editor Workspace Grid */}
                  <div className="grid grid-cols-12 gap-0 relative">
                    {/* Sidebar left tools */}
                    <div className="col-span-1 bg-[#151515] border-r border-white/10 py-6 flex flex-col items-center gap-5 text-white/40">
                      <button className="p-1 hover:text-white transition-colors" title="AI Selector"><Sliders className="w-4 h-4" /></button>
                      <button className="p-1 text-red-500" title="Canny Map Engine"><Cpu className="w-4 h-4" /></button>
                      <button className="p-1 hover:text-white transition-colors" title="Layers"><Layers className="w-4 h-4" /></button>
                      <button className="p-1 hover:text-white transition-colors" title="Settings"><Settings className="w-4 h-4" /></button>
                      <button className="p-1 hover:text-white transition-colors" title="Diagnostics"><Activity className="w-4 h-4" /></button>
                    </div>

                    {/* Center image workspace canvas */}
                    <div className="col-span-8 bg-black p-4 relative overflow-hidden flex items-center justify-center">
                      <div className="relative aspect-video w-full border border-white/5 bg-neutral-900">
                        <img 
                          src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071145.jpeg" 
                          alt="NULAABS canvas render view" 
                          className="w-full h-full object-cover opacity-80"
                          referrerPolicy="no-referrer"
                        />
                        {/* Interactive overlay hud layout */}
                        <div className="absolute inset-0 border border-red-600/30 pointer-events-none">
                          {/* Crosshair target points */}
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-red-600/20" />
                          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-600/20" />
                          {/* AI anchor masks details */}
                          <div className="absolute top-10 left-12 w-24 h-24 border border-red-500 border-dashed rounded-full flex items-center justify-center text-[8px] text-red-500 font-bold bg-red-600/5">
                            CANNY MAPPING
                          </div>
                          <div className="absolute bottom-6 right-16 w-32 h-16 border border-emerald-500 border-dashed flex items-center justify-center text-[8px] text-emerald-500 font-bold bg-emerald-600/5">
                            IN-PAINT SHIELD
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar right layer stack */}
                    <div className="col-span-3 bg-[#131313] border-l border-white/10 p-4 text-[9px] flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-white/30 uppercase font-black tracking-widest text-[8px] mb-2 border-b border-white/5 pb-1">COMP STACK</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-white bg-red-950/30 p-1.5 border-l-2 border-red-600">
                            <span>01_GoogleFlow_Comp</span>
                            <Eye className="w-3 h-3 text-red-400" />
                          </div>
                          <div className="flex items-center justify-between text-white/50 p-1.5 hover:bg-white/5 transition-colors">
                            <span>02_Canny_Edge_Map</span>
                            <Eye className="w-3 h-3" />
                          </div>
                          <div className="flex items-center justify-between text-white/50 p-1.5 hover:bg-white/5 transition-colors">
                            <span>03_OnSet_PuppetPlate</span>
                            <Eye className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Technical specifications logs */}
                      <div className="border-t border-white/5 pt-3 mt-4 space-y-1 text-white/30 font-mono text-[8px]">
                        <p className="text-[9px] text-white/50">RENDER STATS</p>
                        <p>Dilation Size: 5px</p>
                        <p>API Latency: 122ms</p>
                        <p>Sampler: Euler a</p>
                        <p>Steps: 40</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="lg:col-span-5 space-y-8 order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 block">04. CUSTOM INFRASTRUCTURE</span>
                <h2 className="text-3xl md:text-5xl font-display uppercase italic tracking-tighter text-black leading-none">
                  {t.nulaabsTitle}<span className="text-red-600">.</span>
                </h2>
                <p className="text-black/60 text-lg leading-relaxed font-light">
                  {language === 'pt' ? ptNulaabsText : enNulaabsText}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    to={getLanguagePath('/nulaabs')} 
                    className="bg-black hover:bg-red-600 text-white px-6 py-4 text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-none"
                  >
                    {t.exploreNulaabs}
                  </Link>
                  <a 
                    href="https://www.nulaabs.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-transparent hover:bg-black/5 text-black border border-black/20 px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-none"
                  >
                    {t.signUpCta} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 6: Final Gallery */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-6 block">05. GRID PRESENTATION</span>
              <h2 className="text-4xl md:text-7xl font-display uppercase italic tracking-tighter text-black leading-[0.85] mb-4">
                {t.finalGalleryTitle}<span className="text-red-600">.</span>
              </h2>
            </motion.div>

            {/* Grid Layout of Final Frames (Using elegant 2-column grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {finalGalleryImages.map((img, index) => (
                <motion.div 
                  key={index}
                  {...fadeInUp}
                  className="aspect-video relative overflow-hidden bg-white border border-black/5 group shadow-lg rounded-md"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 cursor-pointer rounded-md"
                    onClick={() => handleOpenLightbox(index)}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 text-[9px] font-mono tracking-widest text-white/80 border border-white/10">
                    {img.title.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6.5: Final Film */}
        <section className="py-24 md:py-40 bg-white border-b border-black/5">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-6 block">06. THE FINAL FILM</span>
              <h2 className="text-3xl md:text-5xl font-display uppercase italic tracking-tighter text-black leading-none">
                {language === 'pt' ? 'O FILME FINAL' : 'THE FINAL FILM'}<span className="text-red-600">.</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full border border-black/5 shadow-2xl overflow-hidden rounded-none bg-neutral-900"
            >
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://www.youtube.com/embed/dhI4djOVEmI?si=zimBkmHP9E8J5mxI"
                  title="YouTube video player"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Closing CTA */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-7xl font-display uppercase italic tracking-tighter text-black mb-12 leading-none"
            >
              {t.ctaTitle}<span className="text-red-600">.</span>
            </motion.h2>
            <motion.div 
              {...fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link 
                to={getLanguagePath('/contact')} 
                className="bg-red-600 hover:bg-black text-white px-12 py-5 text-xs font-black uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-3 rounded-none animate-none"
              >
                {t.hireUs} <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link 
                to={getLanguagePath('/results')} 
                className="bg-transparent hover:bg-black hover:text-white text-black border border-black px-12 py-5 text-xs font-black uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-3 rounded-none"
              >
                {language === 'pt' ? 'Ver Todos os Resultados' : 'View All Results'} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <p className="mt-24 text-[9px] font-mono uppercase tracking-[0.6em] text-black/25">
              {language === 'pt' ? 'DIREITOS RESERVADOS' : 'ALL RIGHTS RESERVED'} × {t.railText}.
            </p>
          </div>
        </section>

        {/* Full Showcase Project Navigation flow */}
        <ProjectNavigation 
          prevProject={{
            title: language === 'pt' ? 'O Palmeiral' : 'O Palmeiral',
            slug: getLanguagePath('/showcase/o-palmeiral'),
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png'
          }}
          nextProject={{
            title: language === 'pt' ? 'Salt Lily' : 'Salt Lily',
            slug: getLanguagePath('/showcase/salt-lily'),
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png'
          }}
        />
      </main>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-12"
          >
            {/* Close trigger button */}
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-red-600 p-3 rounded-full transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation arrows */}
            <button 
              onClick={() => setLightboxImageIndex(prev => (prev === 0 ? finalGalleryImages.length - 1 : prev - 1))}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-red-600 p-3 rounded-full transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setLightboxImageIndex(prev => (prev === finalGalleryImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-red-600 p-3 rounded-full transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Container Content */}
            <div className="relative max-w-5xl w-full aspect-video bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center">
              <motion.img 
                key={lightboxImageIndex}
                src={finalGalleryImages[lightboxImageIndex].url}
                alt={finalGalleryImages[lightboxImageIndex].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom Label overlay */}
              <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-white/10 text-xs font-mono text-white/90">
                {finalGalleryImages[lightboxImageIndex].title.toUpperCase()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

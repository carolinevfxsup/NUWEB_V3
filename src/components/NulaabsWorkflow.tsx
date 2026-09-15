import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Sparkles, 
  Layers, 
  Map, 
  CheckCircle2, 
  ShoppingBag, 
  MousePointer,
  Plus,
  ArrowRight
} from 'lucide-react';

export const NulaabsWorkflow: React.FC = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [dimensionToggle, setDimensionToggle] = useState<'1080' | '1440'>('1080');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Multi-language translation helper fallback if keys are missing
  const activeTranslation = t.home.nulaabs || {
    label: 'OUR SYSTEM',
    title: 'NULAABS',
    quote: "AI is a genuinely powerful tool. Like any powerful tool, it causes more problems than it solves in the wrong hands...",
    steps: [
      {
        number: '01',
        label: 'Concept & Cast',
        title: '01 / Concept & Cast',
        desc: "Lock in your brand's visual identity. nulaabs allows you to instantly generate locked-prompt moodboards and cast talent from an internal roster tailored perfectly to your campaign's aesthetic."
      },
      {
        number: '02',
        label: 'Seamless Product Placement',
        title: '02 / Seamless Product Placement',
        desc: "Import your entire physical inventory into your digital workspace. From high-end jewellery to structured apparel, build out custom asset sheets ready to be instantly placed into any editorial environment."
      },
      {
        number: '03',
        label: 'Infinite Environments',
        title: '03 / Infinite Environments',
        desc: "Place your products and models in any corner of the world. Select from our curated preset libraries—ranging from flooded luxury architecture to sun-drenched European courtyards—to establish a cohesive global aesthetic."
      },
      {
        number: '04',
        label: 'Platform-Ready Output',
        title: '04 / Platform-Ready Output',
        desc: "From high-fidelity lifestyle editorials to e-com-ready imagery optimized directly for Shopify. nulaabs outputs stunning, brand-consistent content ready for socials and storefronts alike, bypassing traditional post-production bottlenecks."
      }
    ],
    beforeAfter: 'BEFORE / AFTER',
    shopifyReady: 'Shopify Ready',
    dimensions: 'Dimensions: 1080 x 1350px'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled relative to viewport
      const totalHeight = rect.height - windowHeight;
      const progressed = -rect.top;
      
      if (totalHeight > 0) {
        let scrollFraction = progressed / totalHeight;
        scrollFraction = Math.max(0, Math.min(1, scrollFraction));
        setScrollProgress(scrollFraction);

        // Map 0 to 1 into our 4 steps (0, 1, 2, 3) with a comfortable buffer
        const step = Math.floor(scrollFraction * 4.2);
        setActiveStep(Math.min(3, Math.max(0, step)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Continuous animation rotation angle based on scroll progress
  const rotationAngle = scrollProgress * 720;

  // UI product and environment assets configured matching Supabase specifications
  const assets = {
    moodboard: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/party_moodboard.png',
    roster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/model_rosta.png',
    swimwear: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Product_Library_Swimwear.png',
    jewellery: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/jewellery_product_library.png',
    preset: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Preset_Library.png',
    portuguesePreset: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/portuguese_presets.png',
    
    // Final high fidelity campaign outputs
    heroModel: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/WhatsApp%20Image%202026-06-22%20at%2013.32.55.jpeg',
    jewellerySocial: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-222-1k.png',
    rawJewellery: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/43e25b10-9c9e-4164-9d83-d2aceb203787.jpg',
    rawSwimwear: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/shorts2.jpeg',
    wineCommercial: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-384-1k.png'
  };

  return (
    <div id="nulaabs" className="relative bg-black">
      <section 
        ref={containerRef} 
        className="relative h-[300vh] bg-black text-white overflow-visible select-none"
      >
        {/* Sticky view holder */}
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black justify-between items-center z-10">
        
        {/* Left Side: Copy & Step indicators in grey boxes matching results grid */}
        <div className="w-full md:w-[45%] h-[55vh] md:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-black overflow-y-auto z-10 py-8 md:py-0 border-r border-white/5">
          
          {/* Label indicating the section app context */}
          <div className="mb-4">
            <span className="text-[10px] font-bold text-[#DC2626] tracking-[0.3em] uppercase block mb-1">
              {language === 'pt' ? 'O FLUXO DE CAMPANHA CREATIVO' : 'THE CREATIVE CAMPAIGN LIFECYCLE'}
            </span>
            <h3 className="text-2xl md:text-3.5xl font-display font-medium tracking-tight mb-2">
              {language === 'pt' ? 'A MÁQUINA DE CRIAÇÃO' : 'NULAABS CREATIVE ENGINE'}<span className="text-[#DC2626] font-sans">.</span>
            </h3>
            <p className="text-xs text-white/50 max-w-md hidden md:block">
              {language === 'pt' 
                ? 'Acompanhe como o Nulaabs traduz ativos brutos e parâmetros criativos em campanhas de alto luxo.' 
                : 'Follow how the NULAABS sandbox translates flat asset sheets and raw parameters into high-end fashion and e-com imagery.'}
            </p>
          </div>

          {/* Stepper Blocks */}
          <div className="space-y-4 mt-4 max-w-md">
            {activeTranslation.steps.map((step: any, index: number) => {
              const worksAsActive = activeStep === index;
              return (
                <div 
                  key={index}
                  className={`p-5 rounded-md transition-all duration-500 select-none border-0 ${
                    worksAsActive 
                      ? 'bg-white/5 text-white opacity-100 shadow-xl' 
                      : 'bg-white/1 text-white/30 opacity-30 hover:opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-black font-mono tracking-widest ${
                        worksAsActive ? 'text-[#DC2626]' : 'text-white/40'
                      }`}>
                        {step.number}
                      </span>
                      <h4 className={`text-sm md:text-base font-bold font-display uppercase tracking-tight ${
                        worksAsActive ? 'text-white' : 'text-white/40'
                      }`}>
                        {step.label || step.title}
                      </h4>
                    </div>

                    {/* Rotating Red Cross on scroll directly to the right of each heading */}
                    <motion.div 
                      style={{ rotate: rotationAngle }}
                      className="flex-shrink-0"
                    >
                      <Plus className={`w-4 h-4 ${worksAsActive ? 'text-[#DC2626]' : 'text-white/20'}`} />
                    </motion.div>
                  </div>
                  
                  {worksAsActive && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs md:text-sm font-sans font-light leading-relaxed text-white/70 mt-3"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Extra utility panel for eCommerce labels details */}
          {activeStep === 3 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-3 rounded bg-white/5 max-w-md flex justify-between items-center text-[10px] font-mono text-white/60 select-none border-0"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#DC2626]" />
                <span>Shopify Integration Engine</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setDimensionToggle('1080')}
                  className={`px-2 py-0.5 rounded transition cursor-pointer ${
                    dimensionToggle === '1080' ? 'bg-[#DC2626] text-white font-bold' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  1080px (Standard)
                </button>
                <button 
                  onClick={() => setDimensionToggle('1440')}
                  className={`px-2 py-0.5 rounded transition cursor-pointer ${
                    dimensionToggle === '1440' ? 'bg-[#DC2626] text-white font-bold' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  1440px (Ultra)
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Side: Mockup Frame (Sticky Content) */}
        <div className="relative w-full md:w-[55%] h-[45vh] md:h-screen flex items-center justify-center p-4 md:p-12 border-b border-white/5 md:border-b-0">
          <div className="relative w-full h-full max-w-[640px] max-h-[500px] md:max-h-[640px] flex items-center justify-center">
            
            {/* Ambient backdrop glow */}
            <div className="absolute inset-0 bg-red-650/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <AnimatePresence mode="wait">
              
              {/* STEP 1: CONCEPTS & CAST (Mood & Talent) */}
              {activeStep === 0 && (
                <motion.div 
                  key="step-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                >
                  {/* Mock browser header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40">nulaabs.io // concept & talent</span>
                    <span className="text-[10px] text-red-500 font-bold bg-red-600/10 px-2 py-0.5 rounded border border-red-600/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 animate-pulse" /> LIVE CORE
                    </span>
                  </div>

                  {/* Left Column (Moodboard) + Right Column (Roster) overlapping cards */}
                  <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 relative">
                    
                    {/* Moodboard Frame */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg">
                      <div className="flex justify-between items-center text-[10px] text-white/40 border-b border-white/10 pb-1">
                        <span>AESTHETIC MOODBOARD</span>
                        <span className="text-[#DC2626]">94.2% FIT</span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.moodboard} 
                          alt="Concept Moodboard" 
                          className="w-full h-full object-cover opacity-80 filter saturate-75"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-[9px] text-white/80">
                          <p className="font-bold">#A1_PARTY_VIBE_LUMINESCENT</p>
                          <p className="text-white/40 text-[8px]">PROMPT LOCK ACTIVE</p>
                        </div>
                      </div>
                    </div>

                    {/* Talent Roster Frame */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg">
                      <div className="flex justify-between items-center text-[10px] text-white/40 border-b border-white/10 pb-1">
                        <span>INTERNAL TALENT ROSTER</span>
                        <span className="text-green-400">CAST READY</span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.roster} 
                          alt="Model Roster" 
                          className="w-full h-full object-cover filter contrast-[1.05]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-[9px] text-white/80">
                          <p className="font-bold">MODEL_ID_094 // AUSTIN_K</p>
                          <p className="text-white/40 text-[8px]">FACIAL PRESET APPLIED</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* STEP 2: THE INGESTION (Product Libraries) */}
              {activeStep === 1 && (
                <motion.div 
                  key="step-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                >
                  {/* Mock browser header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">nulaabs.io // product asset ingestion</span>
                    <span className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#DC2626]" /> ASSET INVENTORY
                    </span>
                  </div>

                  {/* Split of Clothing Library and Jewelry Library */}
                  <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                    
                    {/* Apparel/Swimwear Assets */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg relative overflow-hidden">
                      <div className="flex justify-between items-center text-[9px] text-white/40 border-b border-white/10 pb-1">
                        <span>APPAREL LIBRARY</span>
                        <span className="text-[#DC2626] flex items-center gap-1">
                          <CheckCircle2 className="w-2 h-2" /> ACTIVE
                        </span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.swimwear} 
                          alt="Product Swimwear" 
                          className="w-full h-full object-cover filter saturate-50"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-[8px] text-white/80">
                          <p className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">Swim_V3_FloralPattern_CAD</p>
                        </div>
                      </div>
                    </div>

                    {/* Fine Jewellery Assets */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg relative overflow-hidden">
                      <div className="flex justify-between items-center text-[9px] text-white/40 border-b border-white/10 pb-1">
                        <span>JEWELLERY STORAGE</span>
                        <span className="text-white/40 flex items-center gap-1">
                          CAD LOCKED
                        </span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.jewellery} 
                          alt="Jewellery library" 
                          className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-[8px] text-white/80">
                          <p className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">Gold_LinkChain_Facet_24k</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* STEP 3: WORLDBUILDING (Infinite Environments) */}
              {activeStep === 2 && (
                <motion.div 
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                >
                  {/* Mock browser header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">nulaabs.io // environment catalog</span>
                    <span className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                      <Map className="w-3 h-3 text-[#DC2626]" /> PRESET LIBRARY
                    </span>
                  </div>

                  {/* Side-by-Side Luxury Environments Selector */}
                  <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                    
                    {/* Flooded Luxury Pavilion */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg select-none group">
                      <div className="flex justify-between items-center text-[8px] text-white/40 border-b border-white/10 pb-1">
                        <span>ENVIRONMENT: 013</span>
                        <span className="text-[#DC2626] tracking-widest">SELECTED</span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.preset} 
                          alt="Luxurypreset" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-[9px] bg-black/80 px-2 py-1 rounded text-white tracking-widest uppercase">TEST PRESET LIGHTING</p>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-[8px] text-white/80">
                          <p className="font-bold uppercase">Flooded Luxury Architecture</p>
                        </div>
                      </div>
                    </div>

                    {/* Portuguese Alentejo Courtyard */}
                    <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg select-none group">
                      <div className="flex justify-between items-center text-[8px] text-white/40 border-b border-white/10 pb-1">
                        <span>ENVIRONMENT: 025</span>
                        <span className="text-white/20">PREVIEW</span>
                      </div>
                      <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                        <img loading="lazy" decoding="async" 
                          src={assets.portuguesePreset} 
                          alt="Portuguese courtyard" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-[8px] text-white/80">
                          <p className="font-bold uppercase">Alentejo White Courtyard</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {/* STEP 4: PLATFORM-READY OUTPUT (Creative Payoff Grid) */}
              {activeStep === 3 && (
                <motion.div 
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full lg:max-w-2xl bg-black rounded-lg text-xs font-mono shadow-2xl relative"
                >
                  {/* Immersive gallery which feels flat, ultra-premium editorial */}
                  {/* Grid Layout arranged to showcase Lookbook, Social and Ecom */}
                  <div className="grid grid-cols-12 gap-3 h-full">
                    
                    {/* Grid item 1: Lookbook / Campaign Hero (Model in floral swim shorts) */}
                    <div 
                      id="item-hero-floral"
                      className="col-span-8 row-span-12 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group cursor-pointer aspect-[3/4]"
                      onMouseEnter={() => setHoveredImage('floral-model')}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img loading="lazy" decoding="async" 
                        src={assets.heroModel} 
                        alt="Campaign lookbook model" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Before / After hover overlay */}
                      <AnimatePresence>
                        {hoveredImage === 'floral-model' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/85 backdrop-blur-sm p-4 flex flex-col justify-between z-20"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-[#DC2626] text-[9px] font-bold tracking-widest uppercase">INPUT ASSET</span>
                              <h4 className="text-white text-xs font-bold font-sans">Raw Product Swimwear</h4>
                            </div>
                            <div className="w-full h-1/2 overflow-hidden rounded border border-white/15 bg-white/5 relative">
                              <img loading="lazy" decoding="async" 
                                src={assets.rawSwimwear} 
                                alt="Raw Swimwear" 
                                className="w-full h-full object-cover filter saturate-50 brightness-90"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-[10px] text-white/50 border-t border-white/10 pt-2 flex items-center gap-1 md:gap-1.5 uppercase tracking-wider font-sans">
                              <MousePointer className="w-3.5 h-3.5 text-[#DC2626]" /> {activeTranslation.beforeAfter}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white/95 px-2 py-1 text-[8px] font-bold rounded flex items-center gap-1 tracking-wider uppercase border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        {activeTranslation.shopifyReady}
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-gradient-to-t from-black via-black/40 to-transparent p-2 text-white text-[9px]">
                        <p className="font-bold opacity-90">01 / LIFESTYLE LOOKBOOK</p>
                      </div>
                    </div>

                    {/* Grid item 2: E-Com / Commercial Shot (Quinta do Pinto wine Bottle) */}
                    <div 
                      id="item-commercial-wine"
                      className="col-span-4 row-span-6 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group flex flex-col justify-end"
                    >
                      <img loading="lazy" decoding="async" 
                        src={assets.wineCommercial} 
                        alt="Ecom commercial wine" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute top-2 left-2 bg-[#DC2626] text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-widest uppercase font-sans">
                        4K
                      </div>

                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />
                      
                      <div className="absolute bottom-2 left-2 right-2 p-1 bg-black/60 rounded text-white text-[8px] font-sans">
                        <p className="font-semibold uppercase tracking-tight">02 / SHOPIFY Commercial</p>
                      </div>
                    </div>

                    {/* Grid item 3: Lookbook Detail (Moody locker room or jewelry social flatlay) */}
                    <div 
                      id="item-social-flatlay"
                      className="col-span-4 row-span-6 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group cursor-pointer"
                      onMouseEnter={() => setHoveredImage('jewellery-social')}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <img loading="lazy" decoding="async" 
                        src={assets.jewellerySocial} 
                        alt="Jewelry flatlay social output" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Before / After hover overlay */}
                      <AnimatePresence>
                        {hoveredImage === 'jewellery-social' && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/85 backdrop-blur-sm p-3 flex flex-col justify-between z-20"
                          >
                            <div className="flex flex-col">
                              <span className="text-[#DC2626] text-[8px] font-bold tracking-widest">SOURCE CAD</span>
                              <h4 className="text-white text-[10px] font-sans">Chain Flatlay Ingest</h4>
                            </div>
                            <div className="w-full h-2/5 overflow-hidden rounded border border-white/15">
                              <img loading="lazy" decoding="async" 
                                src={assets.rawJewellery} 
                                alt="Raw Jewelry" 
                                className="w-full h-full object-cover filter contrast-[1.1] grayscale"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className="text-[8px] text-white/50 tracking-wide uppercase font-sans flex items-center gap-1.5">
                              <MousePointer className="w-3 h-3 text-[#DC2626]" /> SOURCE HOVER
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="absolute bottom-2 left-2 right-2 p-1 bg-black/60 rounded text-white text-[8px] font-sans">
                        <p className="font-semibold uppercase tracking-tight">03 / SOCIAL FLATLAY</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>

      {/* Centered SIGN UP button scrolling naturally matching Results Section style */}
      <div className="py-24 bg-black text-center z-20 relative border-t border-white/5">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#DC2626] mb-4">
            {language === 'pt' ? 'PRONTO PARA IMPLEMENTAR?' : 'READY TO SCALE?'}
          </p>
          <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
            {language === 'pt' ? 'INICIE A SUA INTEGRAÇÃO' : 'START YOUR INTEGRATION'}<span className="text-[#DC2626]">.</span>
          </h3>
          <a 
            href="https://nulaabs.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-black border border-black px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center justify-center gap-3 w-fit mx-auto group cursor-pointer"
          >
            {language === 'pt' ? 'INSCREVER-SE' : 'SIGN UP'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

    </div>
  );
};

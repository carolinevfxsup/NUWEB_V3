import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { getAssetUrl } from '../constants';

import { 
  Instagram, 
  ShoppingBag, 
  Camera, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Layers,
  Maximize2
} from 'lucide-react';

export const Creative = () => {
  const { t, getLanguagePath } = useLanguage();

  const capabilities = [
    { title: t.creative.socialTitle, desc: t.creative.socialDesc, icon: Instagram },
    { title: t.creative.ecommTitle, desc: t.creative.ecommDesc, icon: ShoppingBag },
    { title: t.creative.lifestyleTitle, desc: t.creative.lifestyleDesc, icon: Camera },
    { title: t.creative.campaignTitle, desc: t.creative.campaignDesc, icon: Sparkles }
  ];

  const galleryItems = [
    { type: 'video', src: getAssetUrl('product-7.mp4'), span: 'md:col-span-2 md:row-span-2' },
    { type: 'image', src: getAssetUrl('Salt_lily_FEMME_product.png'), span: 'md:col-span-1 md:row-span-1' },
    { type: 'image', src: getAssetUrl('necklace_and_hoops.png'), span: 'md:col-span-1 md:row-span-1' },
    { type: 'video', src: getAssetUrl('sped_up_video.mp4'), span: 'md:col-span-1 md:row-span-2' },
    { type: 'image', src: getAssetUrl('smiling_no_watermark.jpeg'), span: 'md:col-span-1 md:row-span-1' },
    { type: 'video', src: getAssetUrl('Franks_01_2 copy.mp4'), span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-text">
        <div className="absolute inset-0 z-0 opacity-40">
          <video 
            src={getAssetUrl('header.mp4')} 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-[10vw] lg:text-[12vw] font-display font-bold italic leading-[0.85] tracking-tighter mb-8 text-bg">
              AI is the Brush.<br />We are the Artist.
            </h1>
            <p className="text-lg text-bg/70 max-w-md mx-auto mb-10 font-sans">
              {t.creative.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={getLanguagePath('/dna-scan')}
                className="bg-bg text-text px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Scan Your Brand DNA
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-32 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-text/50 mb-6 block">01 / Evolution</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
                {t.creative.transformationTitle}
              </h2>
              <p className="text-lg text-text/70 font-sans mb-12 leading-relaxed">
                {t.creative.transformationSub}
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <Layers className="w-6 h-6 text-text/50 shrink-0" />
                  <div>
                    <h4 className="font-display font-bold uppercase text-sm mb-2">DNA Preservation</h4>
                    <p className="text-sm text-text/70 font-sans">We anchor your core aesthetic before the first pixel is generated.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Maximize2 className="w-6 h-6 text-text/50 shrink-0" />
                  <div>
                    <h4 className="font-display font-bold uppercase text-sm mb-2">HITL Elevation</h4>
                    <p className="text-sm text-text/70 font-sans">Human designers guide the algorithmic velocity to ensure high-end results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-border bg-neutral p-2 rounded-md">
              <BeforeAfterSlider 
                beforeImage={getAssetUrl('jewelry_prodoct.jpg')} 
                afterImage={getAssetUrl('Salt_lily_FEMME_product_earring.png')} 
                beforeLabel="Original DNA" 
                afterLabel="HITL Elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">
              {t.creative.capabilitiesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 border border-border bg-neutral flex flex-col h-full"
              >
                <cap.icon className="w-8 h-8 text-text/50 mb-8" />
                <h3 className="text-xl font-display font-bold mb-4 tracking-tighter uppercase">{cap.title}</h3>
                <p className="text-sm text-text/70 font-sans leading-relaxed mb-8 flex-1">
                  {cap.desc}
                </p>
                <button className="text-xs font-sans font-bold uppercase tracking-widest flex items-center gap-2 hover:text-text/50 transition-colors">
                  Explore <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className="py-32 bg-text text-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] border border-bg/20 overflow-hidden rounded-md">
                    <img loading="lazy" decoding="async" src={getAssetUrl('Salt_lily_FEMME_product.png')} className="w-full h-full object-cover rounded-md" alt="Consistency 1" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square border border-bg/20 overflow-hidden rounded-md">
                    <img loading="lazy" decoding="async" src={getAssetUrl('necklace_and_hoops.png')} className="w-full h-full object-cover rounded-md" alt="Consistency 2" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square border border-bg/20 overflow-hidden rounded-md">
                    <img loading="lazy" decoding="async" src={getAssetUrl('palmeiral-main-CLPIiVbL.png')} className="w-full h-full object-cover rounded-md" alt="Consistency 3" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] border border-bg/20 overflow-hidden rounded-md">
                    <img loading="lazy" decoding="async" src={getAssetUrl('smiling_no_watermark.jpeg')} className="w-full h-full object-cover rounded-md" alt="Consistency 4" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-bg/50 mb-6 block">03 / The Moat</span>
              <h2 className="text-5xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
                {t.creative.moatTitle}
              </h2>
              <p className="text-lg text-bg/70 font-sans mb-12 leading-relaxed">
                {t.creative.moatDesc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.creative.moatFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle2 className="w-5 h-5 text-bg/50 shrink-0" />
                    <span className="text-sm font-sans font-bold uppercase tracking-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">
              {t.creative.galleryTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            {galleryItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`${item.span} border border-border overflow-hidden relative group bg-neutral rounded-md`}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay loop muted playsInline 
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <img loading="lazy" decoding="async" 
                    src={item.src} 
                    className="w-full h-full object-cover rounded-md"
                    alt={`Gallery ${i}`}
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-text/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-bg text-xs font-sans font-bold uppercase tracking-widest border border-bg px-6 py-3">
                    View Detail
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

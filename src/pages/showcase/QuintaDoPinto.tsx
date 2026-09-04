import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { getAssetUrl } from '../../constants';
import { motion } from 'framer-motion';
import { LazyVideo } from '../../components/LazyVideo';
import { Bot, Clapperboard, Camera, ExternalLink, Sparkles, TrendingUp, Share2 } from 'lucide-react';

export const QuintaDoPinto = () => {
  const { t, getLanguagePath } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ShowcaseHero 
          title={t.quinta.heroTitle}
          subtitle={t.quinta.heroSubtitle}
          description={t.quinta.heroDescription}
          imageSrc="quinta-wine-brands.png"
          caseStudyNumber="01"
          sector={t.quinta.sector}
          deliverables={t.quinta.deliverables}
          railText={t.quinta.railText}
        />

        <section className="py-24 bg-black text-white text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.blockquote 
              {...fadeInUp}
              className="text-3xl md:text-5xl font-serif italic leading-tight"
            >
              "{t.quinta.heroQuote}"
            </motion.blockquote>
          </div>
        </section>

        {/* Section 01: The Brief */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">01. {t.common.theBrief}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quinta.briefTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quinta.briefText}</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src={getAssetUrl('quinta-moodboard.jpg')} 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.quinta.altMoodboard} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rotate-[-5deg] shadow-xl border border-black/5">
                      <span className="text-black font-serif italic text-4xl uppercase tracking-widest">{t.quinta.altMoodboard}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 02: What We Did */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">02. {t.common.whatWeDid}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.quinta.whatWeDidTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-narrative-shadow/60 uppercase tracking-widest text-xs">{t.quinta.whatWeDidSubtitle}</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bot, title: t.quinta.card1Title, desc: t.quinta.card1Text, num: '01' },
                { icon: Clapperboard, title: t.quinta.card2Title, desc: t.quinta.card2Text, num: '02' },
                { icon: Camera, title: t.quinta.card3Title, desc: t.quinta.card3Text, num: '03' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-12 border border-[#EEEEEE] rounded-md shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-4xl font-serif italic text-black/5 group-hover:text-primary/10 transition-colors">{item.num}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-base text-narrative-shadow/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: The Idea */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/6] overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src={getAssetUrl('quinta-the-idea.gif')} 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.quinta.altTheIdea} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">03. {t.common.theIdea}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quinta.theIdeaTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quinta.theIdeaText1}</p>
                  <p>{t.quinta.theIdeaText2}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: From bottle to launch content */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">04. {t.common.transformation}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.quinta.fromBottleTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                {t.quinta.fromBottleText}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="aspect-[4/6] overflow-hidden bg-white border border-[#EEEEEE] rounded-md shadow-sm">
                  <img 
                    src={getAssetUrl('quinta-before.png')} 
                    className="w-full h-full object-contain p-12 rounded-md" 
                    alt={t.quinta.altBefore} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">{t.quinta.beforeLabel}</p>
              </motion.div>
              <motion.div {...fadeInUp} className="space-y-8">
                <div className="aspect-[4/6] overflow-hidden bg-white border border-[#EEEEEE] shadow-xl rounded-md">
                  <img 
                    src={getAssetUrl('quinta-after.png')} 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.quinta.altAfter} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t.quinta.afterLabel}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 05: Attention to detail */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">05. {t.common.craftsmanship}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quinta.attentionTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>{t.quinta.attentionText}</p>
                  <p>{t.quinta.attentionText2}</p>
                </div>
                <div className="space-y-4">
                  {t.quinta.attentionBullets.map((bullet, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <p className="text-sm text-narrative-shadow/60 font-medium">{bullet}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[9/16] overflow-hidden shadow-2xl rounded-md">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-attention-to-detail.mp4" 
                    className="w-full h-full object-cover rounded-md" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 06: Results Matter */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">06. {t.common.impact}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                {t.quinta.resultsTitle}<span className="text-primary">.</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-xl text-narrative-shadow/60 leading-relaxed">
                <p>{t.quinta.resultsText1}</p>
                <p>{t.quinta.resultsText2}</p>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-01.mp4",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-02.mp4",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-03.mp4"
              ].map((url, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-[4/6] overflow-hidden shadow-xl border border-[#EEEEEE] rounded-md"
                >
                  <LazyVideo 
                    src={url} 
                    className="w-full h-full object-cover rounded-md" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 07: Why this works for wine brands */}
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
                <div className="aspect-square overflow-hidden rounded-md shadow-2xl">
                  <img 
                    src={getAssetUrl('quinta-wine-brands.png')} 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.quinta.altWhyItWorks} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">07. {t.common.strategy}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quinta.whyWineTitle}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 mb-12 leading-relaxed">
                  {t.quinta.whyWineText}
                </p>
                <div className="grid gap-8">
                  {[
                    { icon: TrendingUp, title: t.quinta.whyWine1Title, text: t.quinta.whyWine1Text },
                    { icon: Share2, title: t.quinta.whyWine2Title, text: t.quinta.whyWine2Text },
                    { icon: Sparkles, title: t.quinta.whyWine3Title, text: t.quinta.whyWine3Text }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 flex items-center justify-center shrink-0">
                        <item.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-base text-narrative-shadow/50 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p 
              {...fadeInUp}
              className="text-3xl md:text-5xl text-black font-serif italic leading-tight"
            >
              “{t.quinta.footerQuote}”
            </motion.p>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 leading-[0.9] tracking-tighter text-black">
              {t.common.speedSoulScale}<span className="text-primary">.</span>
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
                className="bg-white text-black border border-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Automate
              </Link>
            </div>
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">{t.common.copyright} × QUINTA DO PINTO.</p>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ 
            title: t.franks.heroTitle, 
            slug: getLanguagePath('/showcase/franks-australia'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg' 
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


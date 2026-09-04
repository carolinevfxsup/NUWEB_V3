import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { LazyVideo } from '../../components/LazyVideo';
import { Sparkles, Check, Zap, Camera, Play, ShoppingCart, Globe, ExternalLink, TrendingUp, Share2 } from 'lucide-react';

export const SaltLily = () => {
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
          title={t.saltLily.heroTitle}
          subtitle={t.saltLily.heroSubtitle}
          description={t.saltLily.heroDescription}
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png"
          caseStudyNumber="02"
          sector={t.saltLily.sector}
          deliverables={t.saltLily.deliverables}
          railText={t.saltLily.railText}
        />

        {/* Section 01: The Brand We Built This For */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">01. {t.common.theBrand}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.saltLily.brandTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.saltLily.brandText1}</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_gx9357gx9357gx93_1.jpeg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.saltLily.altBrand} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 02: Feed-Ready Imagery */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">02. {t.common.contentEngine}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.saltLily.feedTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                {t.saltLily.feedText}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: t.saltLily.feedBasic, src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/jewelry_prodoct.jpg", icon: Camera },
                { title: t.saltLily.feedEarring, src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/49b80539-fe19-479e-9dae-e0eb82e19511.jpg", icon: Sparkles },
                { title: t.saltLily.feedSocial, src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png", icon: Check },
                { title: t.saltLily.feedVideo, src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/sped_up_video.mp4", icon: Play, isVideo: true }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white border border-[#EEEEEE] shadow-sm group-hover:shadow-md transition-all rounded-md">
                    {item.isVideo ? (
                      <LazyVideo src={item.src} className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline />
                    ) : (
                      <img src={item.src} className="w-full h-full object-cover rounded-md" alt={item.title} referrerPolicy="no-referrer" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-narrative-shadow/60">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: Challenges */}
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
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/FEMME_HER.png" 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.saltLily.altDetail} 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">03. {t.common.theChallenge}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.saltLily.whyHardTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.saltLily.whyHardText1}</p>
                  <div className="p-8 bg-[#F9F9F7] border-l-4 border-primary rounded-r-md">
                    <p className="italic font-serif">"{t.saltLily.approachQuote}"</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: From Still Images to Scroll-Stopping Video */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">04. {t.common.motionAssets}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.saltLily.stillToVideoTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                {t.saltLily.stillToVideoText}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="aspect-square overflow-hidden bg-white border border-[#EEEEEE] shadow-sm rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/baae6b23-4f9e-49d9-8b07-9c5b8efbd951-aXWCm98I%20(1).jpg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt={t.saltLily.altSourceStill} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">{t.saltLily.sourceStill}</p>
              </motion.div>
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="aspect-video overflow-hidden bg-white border border-[#EEEEEE] shadow-xl rounded-md">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily-zoom.mp4" 
                    className="w-full h-full object-cover rounded-md" 
                    autoPlay loop muted playsInline
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t.saltLily.resultVideo}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 05: Product Imagery Built for Conversion */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">05. {t.common.conversion}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.saltLily.productTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                {t.saltLily.productText}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product_earring.png" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product.png" 
                    beforeLabel={t.saltLily.before} 
                    afterLabel={t.saltLily.after}
                    className="aspect-square"
                  />
                </motion.div>
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/94eb8954-6637-43f2-9553-042705895ff8.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/ChunkyFinal.jpg" 
                    beforeLabel={t.saltLily.before} 
                    afterLabel={t.saltLily.after}
                    className="aspect-square"
                  />
                </motion.div>
              </div>
              <div className="space-y-12">
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/5a56838a-7813-48c8-ae76-5898844dc13a.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_nqssybnqssybnqss.png" 
                    beforeLabel={t.saltLily.before} 
                    afterLabel={t.saltLily.after}
                    className="aspect-square"
                  />
                </motion.div>
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/21be479c-78f9-4710-8412-0dbeee5747a7_1.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/smiling_no_watermark.jpeg" 
                    beforeLabel={t.saltLily.before} 
                    afterLabel={t.saltLily.after}
                    className="aspect-square"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: The AI Brain Behind the Publishing */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">06. {t.common.automation}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.saltLily.aiBrainTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>{t.saltLily.aiBrainText}</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: ShoppingCart, title: t.saltLily.shopifySyncTitle, text: t.saltLily.shopifySyncText },
                    { icon: Globe, title: t.saltLily.seoBlogTitle, text: t.saltLily.seoBlogText },
                    { icon: Zap, title: t.saltLily.dailyPostsTitle, text: t.saltLily.dailyPostsText },
                    { icon: Sparkles, title: t.saltLily.aiCreativeTitle, text: t.saltLily.aiCreativeText }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3 group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                          <item.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h4 className="font-bold uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-sm text-narrative-shadow/50 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden rounded-md border-8 border-white shadow-2xl">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/AUTO_STACK.png" 
                    className="w-full h-full object-cover" 
                    alt={t.saltLily.altAutomationSystem} 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary flex items-center justify-center rounded-full shadow-xl rotate-12">
                  <Sparkles className="w-12 h-12 text-black" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 07: The Instagram Engine */}
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
                <div className="relative bg-white p-4 shadow-2xl border border-black/5 rounded-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600" />
                    <span className="text-xs font-bold">saltlily_jewelry</span>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-sm mb-4">
                    <img 
                      src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/smiling_no_watermark.jpeg" 
                      className="w-full h-full object-cover" 
                      alt="Instagram Post Preview" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex gap-4 mb-2">
                    <Share2 className="w-5 h-5" />
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="h-2 w-2/3 bg-black/5 rounded-full mb-2" />
                  <div className="h-2 w-1/2 bg-black/5 rounded-full" />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">07. THE INSTAGRAM ENGINE</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  THE INSTAGRAM ENGINE<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>We built an autonomous content pipeline that pulls raw assets from a shared Google Drive, processes them through our AI visual DNA, and schedules them for daily publishing—all with zero manual intervention.</p>
                </div>
                <div className="space-y-4">
                  {[
                    "Automated Asset Retrieval",
                    "AI-Powered Visual Enhancement",
                    "Smart Caption & Hashtag Generation",
                    "Autonomous Scheduling & Posting"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-medium text-narrative-shadow/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Section: Bento Grid */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">{t.common.impact}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                {t.common.resultsThatScale}<span className="text-primary">.</span>
              </h2>
            </motion.div>
 
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: t.saltLily.impactGrowthTitle, text: t.saltLily.impactGrowthText },
                { icon: Share2, title: t.saltLily.impactPresenceTitle, text: t.saltLily.impactPresenceText },
                { icon: Sparkles, title: t.saltLily.impactQualityTitle, text: t.saltLily.impactQualityText }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-[#F9F9F7] border border-[#EEEEEE] rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-8">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-narrative-shadow/60 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p 
              {...fadeInUp}
              className="text-3xl md:text-5xl text-black font-serif italic leading-tight"
            >
              {t.saltLily.footerQuote}
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
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">{t.common.copyright} × SALT LILY.</p>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ 
            title: t.quinta.heroTitle, 
            slug: getLanguagePath('/showcase/quinta-do-pinto'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png' 
          }}
          nextProject={{ 
            title: t.palmeiral.heroTitle, 
            slug: getLanguagePath('/showcase/o-palmeiral'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png' 
          }}
        />
      </main>
    </div>
  );
};


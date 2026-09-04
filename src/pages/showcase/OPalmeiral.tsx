import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { LazyVideo } from '../../components/LazyVideo';
import { 
  Folder, ScanEye, Tags, Sparkles, ListOrdered, CalendarClock, 
  CheckSquare, Mail, Bell, Calendar, ArrowRight,
  RefreshCw, Copy, Images, Hash
} from 'lucide-react';

export const OPalmeiral = () => {
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
          title={t.palmeiral.heroTitle}
          subtitle={t.palmeiral.heroSubtitle}
          description={t.palmeiral.heroDescription}
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png"
          caseStudyNumber="03"
          sector={t.palmeiral.sector}
          deliverables={t.palmeiral.deliverables}
          railText={t.palmeiral.railText}
          imagePosition="right"
        />

        {/* Section 1: The Human Behind It */}
        <section className="py-24 md:py-40 bg-[#F9F9F7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-daniel.webp" 
                    alt={t.palmeiral.altDaniel} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">01. {t.palmeiral.initialRequest}</span>
                <h2 className="text-4xl md:text-6xl font-display mb-12 leading-tight tracking-tight uppercase">
                  {t.palmeiral.requestQuote}
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>
                    {t.palmeiral.contentText}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Content vs Time */}
        <section className="py-24 md:py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase">
                  {t.palmeiral.heroNewTitle} {t.palmeiral.heroNewTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-xl text-narrative-shadow/80 mb-4 font-medium">{t.palmeiral.heroNewText}</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-4 text-lg text-narrative-shadow/80">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                        {t.palmeiral.heroNewHas1}
                      </li>
                      <li className="flex items-center gap-4 text-lg text-narrative-shadow/80">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                        {t.palmeiral.heroNewHas2}
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-xl text-narrative-shadow/80 mb-4 font-medium">{t.palmeiral.heroNewMissingTitle}</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-4 text-lg text-narrative-shadow/60">
                        <div className="w-2.5 h-2.5 rounded-full bg-narrative-shadow/10"></div>
                        {t.palmeiral.heroNewMissing1}
                      </li>
                      <li className="flex items-center gap-4 text-lg text-narrative-shadow/60">
                        <div className="w-2.5 h-2.5 rounded-full bg-narrative-shadow/10"></div>
                        {t.palmeiral.heroNewMissing2}
                      </li>
                      <li className="flex items-center gap-4 text-lg text-narrative-shadow/60">
                        <div className="w-2.5 h-2.5 rounded-full bg-narrative-shadow/10"></div>
                        {t.palmeiral.heroNewMissing3}
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden bg-white rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-content.png" 
                    alt={t.palmeiral.altContentLibrary} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-black tracking-widest border border-black/10 shadow-sm">
                    {t.palmeiral.sourceGoogleDrive}
                  </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-white border-t border-black/5">
          <div className="max-w-4xl mx-auto px-6 text-center mb-24">
            <motion.p 
              {...fadeInUp}
              className="text-3xl md:text-5xl text-black font-serif italic leading-tight"
            >
              “{t.palmeiral.heroNewFooter}”
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-md overflow-hidden shadow-2xl border border-black/5"
            >
              <LazyVideo 
                src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/OPalm_website_v2.mp4"
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-center mt-6 text-[10px] font-bold uppercase tracking-widest text-black/40">
              play video with sound
            </p>
          </div>
        </section>

        <div className="border-t border-black/5" />

        {/* Section 3: Growth */}
        <section className="py-24 md:py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase">
                  {t.palmeiral.growthTitle} {t.palmeiral.growthTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/80 leading-relaxed mb-12">
                  {t.palmeiral.growthText}
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{t.palmeiral.dailyPresence}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                    <span className="text-2xl">👌</span>
                    <span>{t.palmeiral.zeroManualTime}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md bg-white">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-growth.png" 
                    alt={t.palmeiral.altInstagramGrowth} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: How the system works */}
        <section className="py-24 md:py-40 bg-[#0A0A0A] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-display mb-6 text-white uppercase">
                {t.palmeiral.systemTitle} {t.palmeiral.systemTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto">
                {t.palmeiral.systemSub}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Folder, title: t.palmeiral.step1Title, desc: t.palmeiral.step1Description },
                { icon: ScanEye, title: t.palmeiral.step2Title, desc: t.palmeiral.step2Description },
                { icon: Tags, title: t.palmeiral.step3Title, desc: `${t.palmeiral.step3Categories.join(', ')}.` },
                { icon: Sparkles, title: t.palmeiral.step4Title, desc: t.palmeiral.step4Description },
                { icon: ListOrdered, title: t.palmeiral.step5Title, desc: t.palmeiral.step5Description },
                { icon: CalendarClock, title: t.palmeiral.step6Title, desc: t.palmeiral.step6Description }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-white/5 rounded-md border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-red-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-white uppercase">{step.title}</h3>
                  <p className="text-white/40 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Posting Logic */}
        <section className="py-24 md:py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-posting-logic.png" 
                    alt={t.palmeiral.altPostingLogic} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase">
                  {t.palmeiral.postingLogicTitle} {t.palmeiral.postingLogicTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 mb-10">{t.palmeiral.postingLogicSub}</p>
                <ul className="space-y-6 mb-12">
                  {[
                    { text: t.palmeiral.postingLogicItem1, icon: ArrowRight },
                    { text: t.palmeiral.postingLogicItem2, icon: RefreshCw },
                    { text: t.palmeiral.postingLogicItem3, icon: Copy }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg font-medium">
                      <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-narrative-shadow/40 italic border-l-2 border-primary pl-6">
                  {t.palmeiral.postingLogicFooter}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 6: Human Checkpoint */}
        <section className="py-24 md:py-40 bg-[#F9F9F7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-human-checkpoint.png" 
                    alt={t.palmeiral.altHumanCheckpoint} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div {...fadeInUp} className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase">
                  {t.palmeiral.checkpointTitle} {t.palmeiral.checkpointTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 mb-10">{t.palmeiral.checkpointSub}</p>
                <ul className="space-y-6">
                  {[
                    { text: t.palmeiral.checkpointItem1, icon: Images },
                    { text: t.palmeiral.checkpointItem2, icon: Hash },
                    { text: t.palmeiral.checkpointItem3, icon: Mail },
                    { text: t.palmeiral.checkpointItem4, icon: CheckSquare }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg font-medium">
                      <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7: Always Informed */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-informed.png" 
                    alt={t.palmeiral.altAlwaysInformed} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase">
                  {t.palmeiral.informedTitle} {t.palmeiral.informedTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 mb-10">{t.palmeiral.informedSub}</p>
                <div className="grid gap-6">
                  {[
                    { icon: Bell, text: t.palmeiral.informedItem1 },
                    { icon: Mail, text: t.palmeiral.informedItem2 },
                    { icon: CheckSquare, text: t.palmeiral.informedItem3 }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 p-6 bg-[#F9F9F9] rounded-md border border-black/5">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-narrative-shadow/40 mt-10 italic">
                  {t.palmeiral.informedFooter}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 8: Final Outcome */}
        <section className="py-24 md:py-40 bg-[#0A0A0A] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">08. {t.palmeiral.outcome}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter text-white uppercase">
                  {t.palmeiral.outcomeTitleMain} {t.palmeiral.outcomeTitleItalic.replace(/\.$/, '')}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-white/60 leading-relaxed mb-12">
                  <p>
                    {t.palmeiral.outcomeText}
                  </p>
                  <ul className="space-y-4">
                    {t.palmeiral.outcomeItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={getLanguagePath('/contact')}
                  className="inline-block px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  {t.palmeiral.ctaButton}
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative border border-white/10 shadow-2xl overflow-hidden rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-social-post.jpeg" 
                    alt={t.palmeiral.altFinalSocialPost} 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ 
            title: t.saltLily.heroTitle, 
            slug: getLanguagePath('/showcase/salt-lily'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png' 
          }}
          nextProject={{ 
            title: t.franks.heroTitle, 
            slug: getLanguagePath('/showcase/franks-australia'), 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg' 
          }}
        />
      </main>
    </div>
  );
};




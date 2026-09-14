import { Header } from '../../components/Header';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { LazyVideo } from '../../components/LazyVideo';
import { useLanguage } from '../../contexts/LanguageContext';
import { getAssetUrl } from '../../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const DESKTOP_FILM_URL = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/WINE_CM_16_9_FULL.mp4';
const MOBILE_FILM_URL = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/WINE_9_16_Full.mp4';

// Real uploaded filenames, exact — confirmed against the live Supabase bucket listing.
const ASSETS = {
  poster: 'QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg',
  conceptSketch: 'QDP-FILM/item-204-1k.png',
  finalPiece: 'QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg',
  reveal: 'QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg',
  heritageWinery: 'QDP-FILM/Quinta%20do%20Pinto%20(653).jpg',
  detailInkDrop: 'QDP-FILM/Screenshot%202026-09-07%20at%208.52.59%20am.png',
  detailLeaf: 'QDP-FILM/Screenshot%202026-09-07%20at%208.52.53%20am.png',
  detailGrapeSpheres: 'QDP-FILM/Screenshot%202026-09-07%20at%208.52.41%20am.png',
  detailLeafGrapes: 'QDP-FILM/Screenshot%202026-09-07%20at%208.52.31%20am.png',
  detailLandscapeSmall: 'QDP-FILM/Screenshot%202026-09-07%20at%208.53.09%20am.png',
  detailLandscapeWide: 'QDP-FILM/Screenshot%202026-09-07%20at%208.53.33%20am.png',
};

export const QuintaDoPintoConceptFilm = () => {
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
          title={t.quintaConceptFilm.heroTitle}
          subtitle={t.quintaConceptFilm.heroSubtitle}
          description={t.quintaConceptFilm.heroDescription}
          videoSrc={DESKTOP_FILM_URL}
          mobileVideoSrc={MOBILE_FILM_URL}
          caseStudyNumber="Quinta do Pinto"
          sector={t.quintaConceptFilm.sector}
          deliverables={t.quintaConceptFilm.deliverables}
          railText={t.quintaConceptFilm.railText}
          titleClassName="text-4xl sm:text-5xl md:text-[clamp(2.5rem,7vw,110px)]"
        />

        {/* Section 01: The Film — full 16:9 player for desktop, 9:16 player for mobile, with controls */}
        <section className="py-24 md:py-40 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {t.quintaConceptFilm.filmSectionLabel}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-6 leading-[0.9] tracking-tighter uppercase text-white">
                {t.quintaConceptFilm.filmSectionTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-white/50 uppercase tracking-widest text-xs">
                {t.quintaConceptFilm.filmSectionSubtitle}
              </p>
            </motion.div>

            {/* Desktop 16:9 Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden md:block aspect-video w-full overflow-hidden rounded-md border border-white/10"
            >
              <LazyVideo
                src={DESKTOP_FILM_URL}
                poster={getAssetUrl(ASSETS.poster)}
                className="w-full h-full object-cover rounded-md"
                showControls
                controlsColor="red-600"
                autoPlay={false}
                muted={false}
                loop={false}
                playsInline
              />
            </motion.div>

            {/* Mobile 9:16 Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block md:hidden max-w-sm mx-auto aspect-[9/16] w-full overflow-hidden rounded-md border border-white/10"
            >
              <LazyVideo
                src={MOBILE_FILM_URL}
                poster={getAssetUrl(ASSETS.poster)}
                className="w-full h-full object-cover rounded-md"
                showControls
                controlsColor="red-600"
                autoPlay={false}
                muted={false}
                loop={false}
                playsInline
              />
            </motion.div>
          </div>
        </section>

        {/* Section 02: Discover */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                  {t.quintaConceptFilm.discoverLabel}
                </span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quintaConceptFilm.discoverTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quintaConceptFilm.discoverText}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-md">
                  <img
                    src={getAssetUrl(ASSETS.heritageWinery)}
                    className="w-full h-full object-cover rounded-md"
                    alt={t.quintaConceptFilm.discoverTitle}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 03: Concept — the ink drop */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
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
                    src={getAssetUrl(ASSETS.detailInkDrop)}
                    className="w-full h-full object-cover rounded-md"
                    alt={t.quintaConceptFilm.altInkDrop}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                  {t.quintaConceptFilm.conceptLabel}
                </span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quintaConceptFilm.conceptTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quintaConceptFilm.conceptText}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: Craft — sketch vs final */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {t.quintaConceptFilm.craftLabel}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.quintaConceptFilm.craftTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">{t.quintaConceptFilm.craftText}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div {...fadeInUp} className="relative">
                <div className="aspect-square overflow-hidden rounded-md border border-[#EEEEEE]">
                  <img
                    src={getAssetUrl(ASSETS.conceptSketch)}
                    className="w-full h-full object-cover rounded-md"
                    alt={t.quintaConceptFilm.conceptSketchTag}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                  {t.quintaConceptFilm.conceptSketchTag}
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="relative">
                <div className="aspect-square overflow-hidden rounded-md border border-[#EEEEEE]">
                  <img
                    src={getAssetUrl(ASSETS.finalPiece)}
                    className="w-full h-full object-cover rounded-md"
                    alt={t.quintaConceptFilm.finalPieceTag}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                  {t.quintaConceptFilm.finalPieceTag}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04B: Craft Detail — 6 grid */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {t.quintaConceptFilm.craftDetailLabel}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {t.quintaConceptFilm.craftDetailTitle}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">{t.quintaConceptFilm.craftDetailText}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: ASSETS.detailInkDrop, tag: t.quintaConceptFilm.seedTag, featured: true },
                { src: ASSETS.detailGrapeSpheres },
                { src: ASSETS.detailLeaf },
                { src: ASSETS.detailLeafGrapes },
                { src: ASSETS.detailLandscapeSmall },
                { src: ASSETS.detailLandscapeWide },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative aspect-[4/3] overflow-hidden rounded-md ${item.featured ? 'border-2 border-primary' : 'border border-[#EEEEEE]'}`}
                >
                  <img
                    src={getAssetUrl(item.src)}
                    className="w-full h-full object-cover rounded-md"
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                  {item.tag && (
                    <div className="absolute bottom-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5">
                      {item.tag}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: The Reveal */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-square overflow-hidden rounded-md shadow-2xl">
                  <img
                    src={getAssetUrl(ASSETS.reveal)}
                    className="w-full h-full object-cover rounded-md"
                    alt={t.quintaConceptFilm.altReveal}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                  {t.quintaConceptFilm.revealLabel}
                </span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.quintaConceptFilm.revealTitle}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 leading-relaxed">{t.quintaConceptFilm.revealText}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Speed. Soul. Scale. closing */}
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
                to={getLanguagePath('/showcase/quinta-do-pinto')}
                className="bg-white text-black border border-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                {t.quinta.heroTitle}
              </Link>
            </div>
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">
              {t.common.copyright} × QUINTA DO PINTO.
            </p>
          </div>
        </section>

        <ProjectNavigation
          prevProject={{
            title: t.quinta.heroTitle,
            slug: getLanguagePath('/showcase/quinta-do-pinto'),
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png'
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

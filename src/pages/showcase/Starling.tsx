import { useState } from 'react';
import { Header } from '../../components/Header';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { LazyVideo } from '../../components/LazyVideo';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Check } from 'lucide-react';

const VIDEO_720P = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/STAR_720.mp4';
const VIDEO_420P = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/STAR_420.mp4';

export const Starling = () => {
  const { language, getLanguagePath } = useLanguage();
  const [quality, setQuality] = useState<'720p' | '420p'>('720p');
  const isPt = language === 'pt';

  const videoUrl = quality === '720p' ? VIDEO_720P : VIDEO_420P;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <ShowcaseHero
          title={isPt ? "NU Studios Starling" : "NU Studios Starling"}
          subtitle={isPt ? "Investigação & Desenvolvimento — Personagens e Movimento" : "Research & Development — Character & Motion"}
          description={
            isPt
              ? "Uma exploração da curiosidade e de ideias explosivas — no limite do desconforto e da vanguarda."
              : "An exploration of curiosity and explosive ideas — teetering on the edge of the uncomfortable, cutting edge concept."
          }
          videoSrc={VIDEO_720P}
          videoPoster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/57573e7077dc67d9e7d8f13393607e027a826b72d3174a6ceeb17a6fd7d0e76b.png_20261002121354_50.jpg"
          caseStudyNumber="NU Play 01"
          sector={isPt ? "Investigação & Desenvolvimento" : "Research & Development"}
          deliverables={isPt ? "Animação 3D / Design de Personagens / IA Generativa" : "3D Animation / Character Design / Generative AI"}
          railText="NU PLAY / STARLING R&D"
          titleClassName="text-4xl sm:text-5xl md:text-[clamp(2.5rem,7vw,110px)]"
        />

        {/* Section 01: The Main Film with Quality Selector Toggle */}
        <section className="py-24 md:py-40 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="mb-16 text-center max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {isPt ? "01. O FILME CONCEPTUAL" : "01. THE CONCEPT FILM"}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-6 leading-[0.9] tracking-tighter uppercase text-white">
                STARLING<span className="text-primary">.</span>
              </h2>
              
              {/* Quality selector tabs */}
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setQuality('720p')}
                  className={`px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                    quality === '720p'
                      ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20'
                      : 'bg-transparent border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  720P HD
                </button>
                <button
                  onClick={() => setQuality('420p')}
                  className={`px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                    quality === '420p'
                      ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20'
                      : 'bg-transparent border-white/20 text-white/60 hover:border-white/40'
                  }`}
                >
                  420P SD
                </button>
              </div>
            </motion.div>

            {/* Video Player Box with dynamic Quality Source */}
            <motion.div
              key={quality}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-2xl"
            >
              <LazyVideo
                src={videoUrl}
                poster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/57573e7077dc67d9e7d8f13393607e027a826b72d3174a6ceeb17a6fd7d0e76b.png_20261002121354_50.jpg"
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

        {/* Section 02: The Concept */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                  {isPt ? "02. O CONCEITO" : "02. THE CONCEPT"}
                </span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {isPt ? "CURIOSIDADE EXPLOSIVA" : "EXPLOSIVE CURIOSITY"}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed font-sans">
                  <p>
                    {isPt
                      ? "O conceito nasce da exploração e da curiosidade, resultando em ideias explosivas. O contraste marcante entre a fragilidade do pássaro e o potencial destrutivo da granada, tecendo um equilíbrio desconfortável de ideias disruptivas na vanguarda do design."
                      : "The concept coming from exploration, curiosity and resulting in explosive ideas. The contrast of the bird and the grenade, teetering on the edge of the uncomfortable, cutting edge ideas."}
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-md overflow-hidden shadow-2xl border border-black/5"
              >
                <LazyVideo
                  src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Create_contact_sheet_Screenshot_20261002121436.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 03: Character Creation (2 columns) */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {isPt ? "03. CONSTRUÇÃO DE PERSONAGENS" : "03. CHARACTER CREATION"}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {isPt ? "ESTUDO & ROTAÇÃO" : "TURN AROUND & CONTACT SHEET"}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed font-sans">
                {isPt
                  ? "Desenvolvimento do modelo Starling. Desafiando os limites do design de personagens digitais através de folhas de conceito detalhadas e testes fluidos de rotação orbital de 360 graus."
                  : "Developing the Starling model. Pushing the boundaries of digital character design through extensive concept sheets and fluid turnaround testing."}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Column 1: Contact Sheet (Image) */}
              <motion.div {...fadeInUp} className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#EEEEEE] shadow-lg">
                  <img
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Creating_starling_character_sheet_20261002114801.jpg"
                    alt={isPt ? "Folha de Personagem Starling" : "Starling Character Sheet"}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-2">
                  {isPt ? "FOLHA DE PERSONAGEM" : "CHARACTER SHEET"}
                </div>
              </motion.div>

              {/* Column 2: Turn Around (Video) */}
              <motion.div {...fadeInUp} className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#EEEEEE] shadow-lg bg-black">
                  <LazyVideo
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Create_a_turn_around_sheet_20261002114754.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-primary text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-2">
                  {isPt ? "ROTAÇÃO 360 MODELO" : "360 TURN AROUND"}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: The Research (Grid/Gallery of 4 images) */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mb-16">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                {isPt ? "04. PERCURSO DE I&D" : "04. R&D PATHWAY"}
              </span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                {isPt ? "MAXIMIZAR O REALISMO" : "PUSHING THE REALISM"}<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed font-sans">
                {isPt
                  ? "A pesquisa por trás desta exploração: queríamos expandir isto num anúncio completo, elevando o realismo, testando movimentos de câmara complexos em ambientes naturais variados e ensaiando vozes narradoras com IA."
                  : "The research behind this exploration: we wanted to push this into a full ad, pushing the realism, testing camera movement and different natural environments and ad narration with AI voices."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/ChatGPT_Image_Sep_10,_2026,_2K_20260910154833.jpeg_20261002114620.jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Silver_fish_swimming_in_river_2K_20260910130730.jpeg_20261002114554.jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Update_image_grid_and_collage_20261002114444.jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/ChatGPT_Image_Sep_10,_2026,_2K_20260910150405.jpeg_20261002120346.jpg"
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-md border border-[#EEEEEE] shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <img
                    src={src}
                    alt={`Starling R&D Image ${i + 1}`}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 05: What We Solved */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video rounded-md overflow-hidden shadow-2xl border border-black/5 bg-black"
              >
                <LazyVideo
                  src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/WhatsApp%20Video%202026-09-18%20at%2010.51.09.mp4"
                  poster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/Saved_frame_from_Low-poly_starling_20261002122152_50.jpg"
                  className="w-full h-full object-cover rounded-md"
                  showControls
                  controlsColor="red-600"
                  autoPlay={false}
                  muted={true}
                  loop
                  playsInline
                />
              </motion.div>
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">
                  {isPt ? "05. DESAFIO RESOLVIDO" : "05. WHAT WE SOLVED"}
                </span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {isPt ? "MÁXIMO DETALHE" : "ELIMINATING ARTIFACTS"}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-narrative-shadow/60 leading-relaxed font-sans mb-8">
                  {isPt
                    ? "Estávamos a encontrar muitas alucinações e artefactos de IA ao renderizar detalhes complexos em planos com bandos de pássaros. Resolvemos este desafio gerando primeiro renders em argila (clay renders) de cada plano, obtendo um comportamento físico perfeito antes da pintura final por IA."
                    : "We were getting a lot of AI hallucination and artifacts with complex fine detail in shots with flocks of birds and solved this issue with clay renders of the shot first."}
                </p>
                <div className="space-y-4">
                  {[
                    isPt ? "Zero distorção em estruturas de penas" : "Zero distortion in feather structures",
                    isPt ? "Trajetórias físicas realistas nos bandos" : "Physics-accurate flock flight paths",
                    isPt ? "Consistência de iluminação mantida" : "Consistent illumination maintained",
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

        {/* Speed. Soul. Scale. closing */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 leading-[0.9] tracking-tighter text-black">
              {isPt ? "VELOCIDADE. ALMA. ESCALA" : "Speed. Soul. Scale"}<span className="text-primary">.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                to={getLanguagePath('/contact')}
                className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                {isPt ? "SOLICITAR CONTACTO" : "INQUIRE NOW"} <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                to={getLanguagePath('/showcase/quinta-do-pinto-concept-film')}
                className="bg-white text-black border border-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                {isPt ? "VER FILME QUINTA DO PINTO" : "VIEW QUINTA DO PINTO FILM"}
              </Link>
            </div>
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">
              © 2024 NUSTUDIOS. × STARLING R&D.
            </p>
          </div>
        </section>

        <ProjectNavigation
          prevProject={{
            title: isPt ? "Filme Quinta do Pinto" : "Quinta do Pinto — Concept Film",
            slug: getLanguagePath('/showcase/quinta-do-pinto-concept-film'),
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg'
          }}
          nextProject={{
            title: isPt ? "Campanha NOS" : "NOS Campaign",
            slug: getLanguagePath('/showcase/nos-ai-campaign'),
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/Header/youtube-thumbnail-o_t0w0LUUuY-maxresdefault.jpg'
          }}
        />
      </main>
    </div>
  );
};

export default Starling;

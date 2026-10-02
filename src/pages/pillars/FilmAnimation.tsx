import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  Hero,
  TheWorkGrid,
  ClosingCTA,
  LogoStrip,
  PillarCard,
  PortfolioItem,
  ph,
} from '../../components/pillar/PillarShared';
import { useLanguage } from '../../contexts/LanguageContext';
import { ShowreelModal } from '../../components/ShowreelModal';
import { LazyVideo } from '../../components/LazyVideo';

const CARD_BGS = [
  ph('#2a2418', '#4a3c22', 120),
  ph('#1e2a2a', '#2f4a45', 120),
  ph('#241a1a', '#3a2828', 120),
  ph('#1d1d2c', '#2c2c3e', 120),
];

const SOFTWARE = ['ComfyUI', 'Blender', 'Maya', 'Higgsfield', 'NULABS', 'Nuke'];
const MODELS = ['Veo', 'OmniHuman', 'Runway', 'Flux'];

const CARDS_EN: PillarCard[] = [
  {
    n: '01',
    title: 'HD to 4K Ads & Animation',
    line: 'Broadcast-grade, without the broadcast budget.',
    more: 'Photorealistic AI-driven ads and full animated spots, concept to final grade, native 4K pipeline.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/0803_CP_WEB.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/0803_CP_WEB_tiny.jpg',
    overlayButtonText: 'watch showreel',
  },
  {
    n: '02',
    title: 'TV Title Sequences',
    line: 'Craft and generative tooling, fused.',
    more: 'R&D-driven main title design for broadcast and streaming — traditional title craft blended with generative tools.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916_Fixed_Compressed.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916-copy.jpg',
  },
  {
    n: '03',
    title: 'High-End Hybrid VFX & AI',
    line: '20 years of VFX. AI-hybrid pipeline.',
    more: 'Our flagship offering: a bespoke 4K VFX pipeline fused with AI-native tools, directed by supervisors who know what real footage behaves like.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/IO2026_sh100_bg01_v02_0000.png_202608051934.jpeg',
  },
  {
    n: '04',
    title: 'Traditional VFX',
    line: '20 years of blockbusters. Hugo 3D VFX Oscar.',
    more: 'Two decades of visual effects for Hollywood blockbuster movies, including a VFX Oscar for Hugo 3D, working at the highest level of photorealistic detail for cinema and TV.',
    imgSrcs: [
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/Screenshot%202026-09-14%20155944.png',
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/VFX_03.png',
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/VFX_showreel_01.png'
    ],
    overlayButtonText: 'watch showreel',
    overlayVideoUrl: 'https://vimeo.com/1139981506'
  }
];

const CARDS_PT: PillarCard[] = [
  {
    n: '01',
    title: 'Anúncios e Animação HD a 4K',
    line: 'Qualidade broadcast, sem o orçamento tradicional.',
    more: 'Anúncios hiper-realistas orientados por IA e spots de animação completos, do conceito à gradação final num pipeline nativo 4K.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/0803_CP_WEB.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/0803_CP_WEB_tiny.jpg',
    overlayButtonText: 'ver showreel',
  },
  {
    n: '02',
    title: 'Genéricos de TV e Séries',
    line: 'Artesanato e ferramentas generativas em fusão.',
    more: 'Design de títulos principais baseado em I&D para televisão e streaming — mestria tradicional combinada com ferramentas generativas.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916_Fixed_Compressed.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916-copy.jpg',
  },
  {
    n: '03',
    title: 'VFX Híbridos de Alto Nível & IA',
    line: '20 anos de VFX. Pipeline híbrido de IA.',
    more: 'A nossa oferta de topo: um pipeline VFX 4K personalizado com ferramentas de IA, dirigido por supervisores que entendem a física do vídeo real.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/IO2026_sh100_bg01_v02_0000.png_202608051934.jpeg',
  },
  {
    n: '04',
    title: 'VFX Tradicional',
    line: '20 anos de blockbusters. Óscar de VFX com Hugo 3D.',
    more: 'Duas décadas de efeitos visuais para grandes produções cinematográficas de Hollywood, incluindo um Óscar de VFX com o filme Hugo 3D, trabalhando ao mais alto nível de detalhe fotorrealista para cinema e televisão de prestígio.',
    imgSrcs: [
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/Screenshot%202026-09-14%20155944.png',
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/VFX_03.png',
      'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/VFX/VFX_showreel_01.png'
    ],
    overlayButtonText: 'ver showreel',
    overlayVideoUrl: 'https://vimeo.com/1139981506'
  }
];

const PORTFOLIO: PortfolioItem[] = [
  {
    name: 'Google I/O 2026 — TPU Film',
    cat: 'Nexus Studios',
    slug: '/showcase/google-io',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/IO2026_sh100_bg01_v02_0000.png_202608051934.jpeg',
  },
  {
    name: 'Franks Australia',
    cat: 'Brand Campaign',
    slug: '/showcase/franks-australia',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4',
  },
  {
    name: 'Quinta do Pinto — Concept Film',
    cat: 'Brand Film',
    slug: '/showcase/quinta-do-pinto-concept-film',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/WINE_CM_16_9_FULL.mp4',
    videoPoster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/QDP-FILM/Saved_frame_from_WINE_CM(2)_2K_202609070948.jpeg',
  },
  {
    name: 'Franks Web AD SS27',
    cat: 'Fashion & Motion',
    slug: '/showcase/franks-web-ad-ss27',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4',
  },
];

export const FilmAnimation = () => {
  const { language, getLanguagePath } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const isPt = language === 'pt';

  const cards = isPt ? CARDS_PT : CARDS_EN;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? PORTFOLIO.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === PORTFOLIO.length - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentPage + i) % PORTFOLIO.length;
      visible.push(PORTFOLIO[index]);
    }
    return visible;
  };

  return (
    <div className="bg-white min-h-screen text-black">
      <Hero
        eyebrow={isPt ? '03 / Filme & Animação' : '03 / Film & Animation'}
        headline={isPt ? 'FILME & ANIMAÇÃO' : 'FILM & ANIMATION'}
        line={
          isPt
            ? 'Gerar vídeo com IA exige saber de cinema. Sem noções de lentes, iluminação e ritmo, o resultado é só ruído.'
            : "You can't prompt what happens between frames."
        }
        ctaText={isPt ? 'Discuta a sua produção' : 'Discuss your production'}
        ctaLink="/onboarding"
        videoBg="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916_Fixed_Compressed.mp4"
        videoBgPoster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/ANIMATION/EXPAND_TITLES%20916-copy.jpg"
      />

      <TheWorkGrid cards={cards} cardBgs={CARD_BGS} />

      {/* PORTFOLIO CAROUSEL SECTION */}
      <section className="bg-black text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-[6vw]">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-600 mb-2">
                {isPt ? 'Trabalhos Selecionados' : 'Selected Work'}
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white">
                {isPt ? 'PORTFÓLIO' : 'PORTFOLIO'}<span className="text-red-600">.</span>
              </h2>
            </div>
            
            <Link
              to={getLanguagePath('/results')}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white/70 hover:text-red-600 transition-colors"
            >
              {isPt ? 'Ver Todos os Projetos' : 'View All Projects'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleItems().map((item, idx) => {
              const itemGlobalIndex = ((currentPage + idx) % PORTFOLIO.length) + 1;
              const displayNum = itemGlobalIndex < 10 ? `0${itemGlobalIndex}` : `${itemGlobalIndex}`;

              return (
                <Link
                  to={getLanguagePath(item.slug)}
                  key={`${item.name}-${idx}`}
                  className="group relative bg-white/5 aspect-[3/4] max-h-[420px] md:max-h-[480px] overflow-hidden block mx-auto w-full border border-white/10"
                >
                  {item.videoSrc ? (
                    <LazyVideo
                      src={item.videoSrc}
                      poster={item.videoPoster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : item.imgSrc ? (
                    <img loading="lazy" decoding="async"
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-800" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase block mb-1 font-bold">
                      {displayNum} / {item.cat}
                    </span>
                    <h3 className="text-base md:text-lg font-display font-bold tracking-tight uppercase text-white">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Slide Progress Dash Indicators and Arrow Navigation Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            <div className="flex items-center gap-2">
              {PORTFOLIO.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    currentPage === index ? 'w-8 bg-red-600' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      <div className="py-12 bg-[#fafafa]">
        <LogoStrip label={isPt ? 'O Pipeline — Software' : 'The Pipeline — Software'} items={SOFTWARE} />
        <LogoStrip label={isPt ? 'Os Modelos' : 'The Models'} items={MODELS} accent />
      </div>

      {/* NU PLAY RESEARCH & DEVELOPMENT SECTION */}
      <section className="bg-black text-white py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-[6vw]">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-600 mb-2">
                {isPt ? 'Investigação e Desenvolvimento' : 'Research and Development'}
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white">
                NU Play<span className="text-red-600">.</span>
              </h2>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to={getLanguagePath('/showcase/starling')}
              className="group relative bg-white/5 aspect-[3/4] max-h-[420px] md:max-h-[480px] overflow-hidden block w-full border border-white/10"
            >
              <LazyVideo
                src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NU%20PLAY/STARLING/STAR_720.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase block mb-1 font-bold">
                  01 / R&D — CHARACTER & MOTION
                </span>
                <h3 className="text-base md:text-lg font-display font-bold tracking-tight uppercase text-white">
                  NU Studios Starling
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ClosingCTA
        headline={isPt ? 'Discuta a sua produção' : 'Discuss your production'}
        primaryBtnText={isPt ? 'Entrar em Contacto' : 'Get In Touch'}
        secondaryBtnText={isPt ? 'Ver Showreel' : 'Watch Showreel'}
        primaryLink="/contact"
        onSecondaryClick={() => setShowreelOpen(true)}
      />

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </div>
  );
};
export default FilmAnimation;

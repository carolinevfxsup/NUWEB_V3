import { useState } from 'react';
import {
  Hero,
  TheWorkGrid,
  PortfolioStrip,
  ClosingCTA,
  LogoStrip,
  PillarCard,
  PortfolioItem,
  ph,
} from '../../components/pillar/PillarShared';
import { useLanguage } from '../../contexts/LanguageContext';
import { ShowreelModal } from '../../components/ShowreelModal';

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
    overlayButtonText: 'watch showreel',
  },
  {
    n: '02',
    title: 'TV Title Sequences',
    line: 'Craft and generative tooling, fused.',
    more: 'R&D-driven main title design for broadcast and streaming — traditional title craft blended with generative tools.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/WhatsApp%20Video%202026-08-14%20at%2013.20.00.mp4',
  },
  {
    n: '03',
    title: 'High-End Hybrid VFX & AI',
    line: '20 years of VFX. AI-hybrid pipeline.',
    more: 'Our flagship offering: a bespoke 4K VFX pipeline fused with AI-native tools, directed by supervisors who know what real footage behaves like.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
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
    overlayButtonText: 'ver showreel',
  },
  {
    n: '02',
    title: 'Genéricos de TV e Séries',
    line: 'Artesanato e ferramentas generativas em fusão.',
    more: 'Design de títulos principais baseado em I&D para televisão e streaming — mestria tradicional combinada com ferramentas generativas.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/WhatsApp%20Video%202026-08-14%20at%2013.20.00.mp4',
  },
  {
    n: '03',
    title: 'VFX Híbridos de Alto Nível & IA',
    line: '20 anos de VFX. Pipeline híbrido de IA.',
    more: 'A nossa oferta de topo: um pipeline VFX 4K personalizado com ferramentas de IA, dirigido por supervisores que entendem a física do vídeo real.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
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
    cat: '01 / Nexus Studios',
    slug: '/googleio',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
  },
  {
    name: 'Franks Australia',
    cat: '02 / This Is What AI',
    slug: '/showcase/franks-australia',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4',
  },
];

export const FilmAnimation = () => {
  const { language } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const isPt = language === 'pt';

  const cards = isPt ? CARDS_PT : CARDS_EN;

  return (
    <div className="bg-white min-h-screen text-black">
      <Hero
        eyebrow={isPt ? '03 / Filme & Animação' : '03 / Film & Animation'}
        headline={isPt ? 'FILME & ANIMAÇÃO' : 'FILM & ANIMATION'}
        line={
          isPt
            ? 'Não se pode pedir num prompt o que acontece entre fotogramas.'
            : "You can't prompt what happens between frames."
        }
        ctaText={isPt ? 'Discuta a sua produção' : 'Discuss your production'}
        ctaLink="/onboarding"
        videoBg="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/WhatsApp%20Video%202026-08-14%20at%2013.20.00.mp4"
      />

      <TheWorkGrid cards={cards} cardBgs={CARD_BGS} />

      <PortfolioStrip items={PORTFOLIO} />

      <div className="py-12 bg-[#fafafa]">
        <LogoStrip label={isPt ? 'O Pipeline — Software' : 'The Pipeline — Software'} items={SOFTWARE} />
        <LogoStrip label={isPt ? 'Os Modelos' : 'The Models'} items={MODELS} accent />
      </div>

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

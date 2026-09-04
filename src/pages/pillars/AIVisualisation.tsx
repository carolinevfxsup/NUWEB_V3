import { useState } from 'react';
import {
  Hero,
  TheWorkGrid,
  PortfolioStrip,
  ClosingCTA,
  PillarCard,
  PortfolioItem,
  ph,
} from '../../components/pillar/PillarShared';
import { useLanguage } from '../../contexts/LanguageContext';
import { ShowreelModal } from '../../components/ShowreelModal';

const CARD_BGS = [
  ph('#1e2a2a', '#2f4a45', 120),
  ph('#20202a', '#3a3450', 120),
  ph('#2a2418', '#4a3c22', 120),
  ph('#1a2420', '#2c4038', 120),
];

const CARDS_EN: PillarCard[] = [
  {
    n: '01',
    title: 'Fast Brand Assets',
    line: 'Campaign imagery, days not weeks.',
    more: 'AI-generated brand imagery produced in-house via NULABS — a fraction of the time and cost of a traditional shoot.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/white-studio-editorial.png',
  },
  {
    n: '02',
    title: 'Activation, Spaces & Environments',
    line: 'See the space before you build it.',
    more: 'Retail activation, spatial, and architectural visualisation, plus full AI set building — environments generated, art-directed, and composited to look built, not generated.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/monochrome-marble-luxury-editorial.png',
  },
  {
    n: '03',
    title: 'Merch Planning',
    line: 'Ranges and layouts, visualised first.',
    more: 'Merchandise ranges and retail displays visualised before physical sampling or store build.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/Sandman%20Panel%20Van.png',
  },
  {
    n: '04',
    title: 'Fashion Pre-Visualisation',
    line: 'The shoot, worked out before the shoot.',
    more: 'Lookbooks, campaign direction, and styling explored before committing to a physical set or shoot day.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/premium-street-style-editorial.png',
  },
];

const CARDS_PT: PillarCard[] = [
  {
    n: '01',
    title: 'Ativos Rápidos de Marca',
    line: 'Imagens de campanha em dias, não semanas.',
    more: 'Imagens de marca geradas por IA produzidas internamente através do NULABS — uma fração do tempo e custo de uma sessão tradicional.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/white-studio-editorial.png',
  },
  {
    n: '02',
    title: 'Ativação, Espaços e Ambientes',
    line: 'Veja o espaço antes de o construir.',
    more: 'Visualização de ativações de retalho, espacial e arquitetónica, além de construção de cenários por IA — ambientes gerados e compostos para parecerem reais.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/monochrome-marble-luxury-editorial.png',
  },
  {
    n: '03',
    title: 'Planeamento de Merchandising',
    line: 'Linhas e layouts, visualizados antecipadamente.',
    more: 'Linhas de produtos e expositores de loja visualizados com precisão antes de amostragem física ou montagem.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/Sandman%20Panel%20Van.png',
  },
  {
    n: '04',
    title: 'Pré-Visualização de Moda',
    line: 'A sessão, planeada antes da sessão.',
    more: 'Lookbooks, direção de campanhas e styling explorados em detalhe antes de comprometer equipas ou estúdios físicos.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/premium-street-style-editorial.png',
  },
];

const PORTFOLIO: PortfolioItem[] = [
  {
    name: 'NuLaabs',
    cat: '01 / Synthetic Studio Engine',
    slug: '/nulaabs',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/white-studio-editorial.png',
  },
  {
    name: 'Quinta do Pinto',
    cat: '02 / Spatial Visualisation',
    slug: '/showcase/quinta-do-pinto',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png',
  },
];

export const AIVisualisation = () => {
  const { language } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const isPt = language === 'pt';

  const cards = isPt ? CARDS_PT : CARDS_EN;

  return (
    <div className="bg-white min-h-screen text-black">
      <Hero
        eyebrow={isPt ? '02 / Visualização por IA' : '02 / AI Visualisation'}
        headline={isPt ? 'VISUALIZAÇÃO POR IA' : 'AI VISUALISATION'}
        line={
          isPt
            ? 'A visualização tradicional em CGI leva semanas e uma render farm. Nós fazemo-lo em dias.'
            : 'Traditional CGI visualisation takes weeks and a render farm. We do it in days.'
        }
        ctaText={isPt ? 'Visualize o seu próximo projeto' : 'Visualise your next project'}
        ctaLink="/onboarding"
        videoBg="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/video-529-1080p-upscaled.mp4"
      />

      <TheWorkGrid cards={cards} cardBgs={CARD_BGS} />

      <PortfolioStrip items={PORTFOLIO} />

      <ClosingCTA
        headline={isPt ? 'Visualize o seu próximo projeto' : 'Visualise your next project'}
        primaryBtnText={isPt ? 'Entrar em Contacto' : 'Get In Touch'}
        secondaryBtnText={isPt ? 'Ver Showreel' : 'Watch Showreel'}
        primaryLink="/contact"
        onSecondaryClick={() => setShowreelOpen(true)}
      />

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </div>
  );
};
export default AIVisualisation;

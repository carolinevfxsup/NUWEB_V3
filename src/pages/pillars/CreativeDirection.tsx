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
  ph('#2a2a2a', '#4a3a3a', 120),
  ph('#1e2a2a', '#2f4a45', 120),
  ph('#2a2418', '#4a3c22', 120),
  ph('#20202a', '#3a3450', 120),
  ph('#241a1a', '#3a2828', 120),
  ph('#1a2420', '#2c4038', 120),
];

const CARDS_EN: PillarCard[] = [
  {
    n: '01',
    title: 'Creative Direction & Art Direction',
    line: 'The point of view before the prompt.',
    more: 'Full creative and art direction across brand, campaign, and production — set design and brand activation experience, carried into an AI-first workflow.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/snowy-nyc-editorial.png',
  },
  {
    n: '02',
    title: 'Brand Storytelling',
    line: 'One story, every touchpoint.',
    more: 'Narrative development, positioning, and tone of voice — the throughline that keeps campaigns, films, and social feeling like one brand, not a pile of outputs.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/sleek-art-deco-glamour-editorial.png',
  },
  {
    n: '03',
    title: 'Brand Campaigns',
    line: 'Concept to delivery, one vision.',
    more: 'End-to-end campaign direction across film, social, and activation. Case studies: Franks Australia, Quinta do Pinto, Salt Lily.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
  },
  {
    n: '04',
    title: 'Images',
    line: 'Beyond the obvious AI look.',
    more: 'Campaign imagery art-directed to your actual visual language — hero shots through to social variants, from one consistent direction.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/silk-%26-shadows-editorial.png',
  },
  {
    n: '05',
    title: 'Sound',
    line: 'Designed, not bolted on.',
    more: 'AI sound design and soundtracks, directed as part of the same creative process as the imagery — not a separate step after the fact.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/prismatic-light-editorial.png',
  },
  {
    n: '06',
    title: 'Moving Image',
    line: 'The idea. The pipeline builds it.',
    more: 'Concept, narrative, and shot-level direction for AI animation and brand film — handed to Film & Animation for technical execution.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4',
  },
];

const CARDS_PT: PillarCard[] = [
  {
    n: '01',
    title: 'Direção Criativa e Direção de Arte',
    line: 'O ponto de vista antes do prompt.',
    more: 'Direção criativa e de arte completa para marcas, campanhas e produção — experiência em cenografia e ativação de marca, integrada num fluxo nativo de IA.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/snowy-nyc-editorial.png',
  },
  {
    n: '02',
    title: 'Storytelling de Marca',
    line: 'Uma história, todos os pontos de contacto.',
    more: 'Desenvolvimento narrativo, posicionamento e tom de voz — o fio condutor que garante consistência em campanhas, filmes e redes sociais.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/sleek-art-deco-glamour-editorial.png',
  },
  {
    n: '03',
    title: 'Campanhas de Marca',
    line: 'Do conceito à entrega, uma visão.',
    more: 'Direção integral de campanhas em filme, social e ativações. Casos de estudo: Franks Australia, Quinta do Pinto, Salt Lily.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg',
  },
  {
    n: '04',
    title: 'Imagens',
    line: 'Além do visual óbvio de IA.',
    more: 'Imagens de campanha com direção de arte alinhada com a sua linguagem visual autêntica — desde hero shots até formatos para redes sociais.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/silk-%26-shadows-editorial.png',
  },
  {
    n: '05',
    title: 'Som',
    line: 'Concebido, não acrescentado.',
    more: 'Design de som e trilhas sonoras com IA, dirigidos como parte do mesmo processo criativo das imagens — e não como um passo isolado.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/prismatic-light-editorial.png',
  },
  {
    n: '06',
    title: 'Imagem em Movimento',
    line: 'A ideia. O pipeline constrói.',
    more: 'Conceito, narrativa e direção de planos para animação por IA e filmes de marca — transferidos para o pipeline de Filme & Animação para execução técnica.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4',
  },
];

const PORTFOLIO: PortfolioItem[] = [
  {
    name: 'Salt Lily',
    cat: '01 / Scaling Jewellery Content',
    slug: '/showcase/salt-lily',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png',
  },
  {
    name: 'Franks Australia',
    cat: '02 / Ads SS27',
    slug: '/showcase/franks-web-ad-ss27',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4',
  },
  {
    name: 'Quinta do Pinto',
    cat: '03 / Wine Branding',
    slug: '/showcase/quinta-do-pinto',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png',
  },
];

export const CreativeDirection = () => {
  const { language } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const isPt = language === 'pt';

  const cards = isPt ? CARDS_PT : CARDS_EN;

  return (
    <div className="bg-white min-h-screen text-black">
      <Hero
        eyebrow={isPt ? '01 / Direção Criativa' : '01 / Creative Direction'}
        headline={isPt ? 'DIREÇÃO CRIATIVA' : 'CREATIVE DIRECTION'}
        line={
          isPt
            ? 'Não se pode pedir consistência num prompt. Cada geração de IA é um novo rolar de dados.'
            : "You can't prompt consistency. Every AI generation is a fresh roll of the dice."
        }
        ctaText={isPt ? 'Fale connosco sobre a sua marca' : 'Talk to us about your brand'}
        ctaLink="/onboarding"
        imageBg="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GEN%20GALLERY/snowy-nyc-editorial.png"
      />

      <TheWorkGrid cards={cards} cardBgs={CARD_BGS} />

      <PortfolioStrip items={PORTFOLIO} />

      <ClosingCTA
        headline={isPt ? 'Fale connosco sobre a sua marca' : 'Talk to us about your brand'}
        primaryBtnText={isPt ? 'Entrar em Contacto' : 'Get In Touch'}
        secondaryBtnText={isPt ? 'Ver Showreel' : 'Watch Showreel'}
        primaryLink="/contact"
        onSecondaryClick={() => setShowreelOpen(true)}
      />

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </div>
  );
};
export default CreativeDirection;

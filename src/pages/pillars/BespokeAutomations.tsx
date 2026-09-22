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
  ph('#20202a', '#3a3450', 120),
  ph('#1e2a2a', '#2f4a45', 120),
  ph('#2a2418', '#4a3c22', 120),
  ph('#241a1a', '#3a2828', 120),
  ph('#1a2420', '#2c4038', 120),
];

const CARDS_EN: PillarCard[] = [
  {
    n: '01',
    title: 'Social Media Automation',
    line: 'Content and posting, on autopilot.',
    more: 'From an existing photo backlog to fully AI-generated content — images, video, captions — scheduled and published automatically.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AUTO_STACK.png',
  },
  {
    n: '02',
    title: 'Blog & SEO',
    line: 'Set-and-forget content marketing.',
    more: 'Automated industry research and SEO-optimised blog posts, written and published without manual work.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Person_scrolling_jewelry_blog_202609041449.jpeg',
  },
  {
    n: '03',
    title: 'AI Voice Agents',
    line: 'Real conversations, handled.',
    more: 'Custom-trained voice agents for bookings and enquiries — restaurants, clinics, any industry — trained on your workflows.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Mobile_phone_on_office_table_202609041503.jpeg',
    overlayButtonText: 'Listen',
    overlayVideoUrl: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automation%20Final%20Video%20v3.mp4',
  },
  {
    n: '04',
    title: 'Outreach & Booking',
    line: 'Your pipeline, running itself.',
    more: 'Automated outbound outreach and AI-managed calendar booking — built to run your pipeline the way we run ours.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-growth.png',
    overlayButtonText: 'Play',
    overlayVideoUrl: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Remove_WaterMark(1).mp4',
  },
  {
    n: '05',
    title: 'Bespoke AI Agents',
    line: "Doesn't fit a template? We build it.",
    more: "Custom AI agents for any workflow that doesn't fit the above — get in touch and we'll find a way to make it work.",
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4',
  },
];

const CARDS_PT: PillarCard[] = [
  {
    n: '01',
    title: 'Automação de Redes Sociais',
    line: 'Conteúdo e publicações, em piloto automático.',
    more: 'Desde o seu arquivo fotográfico existente até conteúdo 100% gerado por IA — imagens, vídeo, legendas — agendados e publicados automaticamente.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AUTO_STACK.png',
  },
  {
    n: '02',
    title: 'Blog & SEO',
    line: 'Marketing de conteúdo sem esforço contínuo.',
    more: 'Pesquisa automática de tendências do setor e artigos de blog otimizados para SEO, redigidos e publicados sem intervenção manual.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Person_scrolling_jewelry_blog_202609041449.jpeg',
  },
  {
    n: '03',
    title: 'Agentes de Voz por IA',
    line: 'Conversas reais, geridas com fluidez.',
    more: 'Agentes de voz com treino específico para reservas e esclarecimentos — restauração, clínicas e qualquer indústria — ajustados aos seus processos.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Mobile_phone_on_office_table_202609041503.jpeg',
    overlayButtonText: 'Ouvir',
    overlayVideoUrl: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automation%20Final%20Video%20v3.mp4',
  },
  {
    n: '04',
    title: 'Prospeção & Agendamento',
    line: 'O seu pipeline a funcionar por si.',
    more: 'Prospeção outbound automatizada e agendamento de calendário por IA — concebido para acelerar o seu funil tal como operamos o nosso.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-growth.png',
    overlayButtonText: 'Reproduzir',
    overlayVideoUrl: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Remove_WaterMark(1).mp4',
  },
  {
    n: '05',
    title: 'Agentes de IA à Medida',
    line: 'Não cabe num template? Nós desenvolvemos.',
    more: 'Agentes de IA sob medida para qualquer fluxo operacional singular — entre em contacto e desenharemos a solução perfeita.',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4',
  },
];

const PORTFOLIO: PortfolioItem[] = [
  {
    name: 'O Palmeiral',
    cat: '01 / Automated Social Posting',
    slug: '/showcase/o-palmeiral',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-automation-control.jpeg',
  },
  {
    name: 'Salt Lily',
    cat: '02 / Scaling Jewellery Content',
    slug: '/showcase/salt-lily',
    videoSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/salt-lily-zoom.mp4',
  },
];

export const BespokeAutomations = () => {
  const { language } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const isPt = language === 'pt';

  const cards = isPt ? CARDS_PT : CARDS_EN;

  return (
    <div className="bg-white min-h-screen text-black">
      <Hero
        eyebrow={isPt ? '04 / Automações e Soluções de IA à Medida' : '04 / Bespoke AI Automations & Solutions'}
        headline={isPt ? 'AUTOMAÇÕES E SOLUÇÕES DE IA' : 'AI AUTOMATIONS & SOLUTIONS'}
        line={
          isPt
             ? 'Automatize o repetitivo, crie o extraordinário: desenvolvemos soluções de IA à medida para simplificar os seus processos e devolver-lhe tempo.'
             : "You can't prompt an idea into existence. Someone still has to build it."
        }
        ctaText={isPt ? 'Automatize o seu negócio' : 'Automate your business'}
        ctaLink="/onboarding"
        secondaryCtaText={isPt ? 'Vídeo de Explicação' : 'Automations Explainer'}
        onSecondaryCtaClick={() => setExplainerOpen(true)}
        videoBg="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4"
      />

      <TheWorkGrid cards={cards} cardBgs={CARD_BGS} />

      <PortfolioStrip items={PORTFOLIO} />

      <ClosingCTA
        headline={isPt ? 'Automatize o seu negócio' : 'Automate your business'}
        primaryBtnText={isPt ? 'Entrar em Contacto' : 'Get In Touch'}
        secondaryBtnText={isPt ? 'Ver Showreel' : 'Watch Showreel'}
        primaryLink="/contact"
        onSecondaryClick={() => setShowreelOpen(true)}
      />

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
      <ShowreelModal 
        isOpen={explainerOpen} 
        onClose={() => setExplainerOpen(false)} 
        videoUrl="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automation%20Final%20Video%20v3.mp4" 
      />
    </div>
  );
};
export default BespokeAutomations;

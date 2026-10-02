import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause } from 'lucide-react';
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
    overlayButtonText: 'View Case Study',
    overlayLink: '/showcase/o-palmeiral',
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
    overlayButtonText: 'View Showcase',
    overlayLink: '/showcase/nos-ai-campaign',
  },
];

const CARDS_PT: PillarCard[] = [
  {
    n: '01',
    title: 'Automação de Redes Sociais',
    line: 'Conteúdo e publicações, em piloto automático.',
    more: 'Desde o seu arquivo fotográfico existente até conteúdo 100% gerado por IA — imagens, vídeo, legendas — agendados e publicados automaticamente.',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AUTO_STACK.png',
    overlayButtonText: 'Ver Caso de Estudo',
    overlayLink: '/showcase/o-palmeiral',
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
    overlayButtonText: 'Ver Showcase',
    overlayLink: '/showcase/nos-ai-campaign',
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
  {
    name: 'NOS AI Campaign',
    cat: '03 / Human-AI Collaboration',
    slug: '/showcase/nos-ai-campaign',
    imgSrc: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NOS/Header/youtube-thumbnail-o_t0w0LUUuY-maxresdefault.jpg',
  },
];

const AudioPlayerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    {
      title: "USA Booking Bot",
      desc: "Rachel (US) — AI assistant taking restaurant reservations",
      url: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/SOUND/ElevenLabs_Restaurant_Voice_Bot_USA.mp3",
      accent: "Rachel (USA)"
    },
    {
      title: "UK Booking Bot",
      desc: "Charlotte (UK) — Smooth British voice assisting customers",
      url: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/SOUND/ElevenLabs_Restaurant_Voice_Bot_UK.mp3",
      accent: "Charlotte (UK)"
    },
    {
      title: "Portuguese Booking Bot",
      desc: "Madalena (PT) — Fluent Portuguese FOH booking agent",
      url: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/SOUND/ElevenLabs_Restaurant_Voice_Bot_PT.mp3",
      accent: "Madalena (PT)"
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex, isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => setIsPlaying(false));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-white text-black w-full max-w-lg rounded-md border border-neutral-200 p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors cursor-pointer"
          aria-label="Close player"
        >
          <X className="w-5 h-5" />
        </button>

        <audio
          ref={audioRef}
          src={currentTrack.url}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleAudioEnded}
        />

        <div className="mb-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-red-600 block mb-2">
            AI Voice Agent Demos
          </span>
          <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-black">
            Listen to our bots
          </h3>
        </div>
        
        {/* Track Selector Tabs */}
        <div className="flex border-b border-black/5 pb-4 mb-6 gap-2 overflow-x-auto scrollbar-none">
          {tracks.map((track, idx) => (
            <button
              key={track.title}
              onClick={() => {
                setCurrentTrackIndex(idx);
              }}
              className={`px-4 py-2.5 text-xs font-sans font-bold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap ${
                currentTrackIndex === idx
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-neutral-100 text-black/60 hover:bg-neutral-200'
              }`}
            >
              {track.accent}
            </button>
          ))}
        </div>

        {/* Track Info */}
        <div className="mb-6 bg-neutral-50 p-4 rounded border border-neutral-100">
          <h4 className="font-display font-bold uppercase text-base text-black tracking-tight mb-1">
            {currentTrack.title}
          </h4>
          <p className="text-xs text-black/50 font-sans">
            {currentTrack.desc}
          </p>
        </div>

        {/* Controls & Progress bar */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow hover:scale-105 transition-transform cursor-pointer flex-shrink-0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="flex-1">
            {/* Progress Seekbar */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full accent-red-600 bg-neutral-200 h-1 rounded-lg cursor-pointer transition-all"
            />
            <div className="flex justify-between text-[10px] font-mono text-black/40 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BespokeAutomations = () => {
  const { language } = useLanguage();
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const isPt = language === 'pt';

  const cards = (isPt ? CARDS_PT : CARDS_EN).map((card, idx) => {
    if (idx === 2) {
      return {
        ...card,
        onOverlayClick: () => {
          setAudioModalOpen(true);
        }
      };
    }
    return card;
  });

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
        secondaryBtnText={isPt ? 'LISTA COMPLETA DE SERVIÇOS' : 'FULL LIST OF SERVICES'}
        primaryLink="/contact"
        secondaryLink="/hospitality"
      />

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
      <ShowreelModal 
        isOpen={explainerOpen} 
        onClose={() => setExplainerOpen(false)} 
        videoUrl="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Remove_WaterMark(1).mp4" 
      />
      
      {/* Premium Multi-track Audio Player Modal */}
      <AudioPlayerModal isOpen={audioModalOpen} onClose={() => setAudioModalOpen(false)} />
    </div>
  );
};
export default BespokeAutomations;

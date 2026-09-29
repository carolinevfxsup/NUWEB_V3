import { useState } from 'react';
import { Header } from '../components/Header';
import { FadeIn } from '../components/FadeIn';
import { Play, Clock, RefreshCw, UserX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from '../components/LazyVideo';
import { ShowreelModal } from '../components/ShowreelModal';

const OUTREACH_VIDEO_URL = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Remove_WaterMark(1).mp4';

const hospitalityTranslations = {
  en: {
    hero: {
      tag: "AGENCY THINKING. AI EXECUTION.",
      title: "WE BUILD THE SYSTEMS THAT RUN YOUR FRONT OF HOUSE",
      desc: "NUstudios designs bespoke AI automations for hospitality and beyond — booking bots, voice agents, content and outreach systems that work while your team is on the floor, not at a screen."
    },
    problem: {
      tag: "01 / THE PROBLEM",
      title: "MOST BOOKINGS ARE STILL MADE BY HAND",
      desc: "A guest messages at 11pm. A call comes in mid-service. A table request sits unread in a DM inbox until morning. Hospitality runs on hospitality — but the admin around it still runs on someone remembering to reply.",
      cols: [
        {
          title: "AFTER HOURS",
          desc: "Most enquiries land when nobody's at the desk — evenings, weekends, mid-service."
        },
        {
          title: "REPETITIVE ADMIN",
          desc: "Confirmations, FAQs and follow-ups eat hours that should go to guests in the room."
        },
        {
          title: "LOST LEADS",
          desc: "Slow replies cost covers — and slow outreach costs new clients before a conversation starts."
        }
      ]
    },
    whatsappCase: {
      tag: "02 / WHATSAPP BOOKING BOT",
      title: "BOOKED IN UNDER A MINUTE",
      desc: "A guest messages, picks a date, time and party size, and gets a confirmation card back — all without leaving the chat thread. No app to download, no forms, no hold music."
    },
    caseStudy: {
      tag: "03 / CASE STUDY",
      title: "HOW WE SOLVE THIS — O PALMEIRAL",
      desc: "We turned O Palmeiral's Google Drive of random photos into an autonomous posting system that still maintained the restaurant's style. As asked by the owner, at different stages of posting there was a human checkpoint where Dan could check and change anything he wanted before it went to the posting queue.",
      cols: [
        {
          title: "1. The Problem",
          desc: "A lot of photos, no time to organize and post. We turned their Google Drive full of random photos into an autonomous posting system that still maintained the restaurant's style."
        },
        {
          title: "2. The Build",
          desc: "We built an intelligent system that assigned categories, predefined hashtags, locations, alt-tags, and made the posting look human, featuring custom checkpoints for Dan to review."
        },
        {
          title: "3. The Result",
          desc: "15-20 mins a month from the client instead of many hours wasted, and daily posting to keep ahead of the game."
        }
      ],
      linkText: "Read the Full Case Study →"
    },
    build: {
      tag: "04 / WHAT WE BUILD",
      title: "FROM YOUR BOOKING FLOW TO YOUR OUTBOUND LIST",
      services: [
        {
          num: "01",
          title: "SOCIAL MEDIA AUTOMATION",
          desc: "Scheduled, on-brand content and community management, built for consistency without a full-time hire.",
          link: "See the O Palmeiral case study →",
          url: "/showcase/o-palmeiral",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-automation-control.jpeg"
        },
        {
          num: "02",
          title: "BLOG & SEO",
          desc: "Ongoing, search-optimised content that keeps a hospitality brand visible between campaigns.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Person_scrolling_jewelry_blog_202609041449.jpeg"
        },
        {
          num: "03",
          title: "WHATSAPP BOOKING BOTS",
          desc: "Guests book, modify and confirm tables entirely inside WhatsApp — no app, no hold music.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/WhatsApp20Flows20220-20English.png"
        },
        {
          num: "04",
          title: "VOICE AGENTS",
          desc: "Natural-sounding AI phone agents, built on ElevenLabs, that answer calls, take bookings and route real urgency to a human.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Mobile_phone_on_office_table_202609041503.jpeg"
        },
        {
          num: "05",
          title: "BESPOKE AUTOMATIONS",
          desc: "Custom AI systems for any workflow — see the scale of what's possible in our NOS campaign work.",
          link: "See the NOS AI campaign →",
          url: "/showcase/nos-ai-campaign",
          videoSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4"
        },
        {
          num: "06",
          title: "AUTOMATED EMAIL OUTREACH",
          desc: "Outbound campaigns to your existing client list — re-engagement, offers and seasonal pushes, sent on schedule.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/hologram.jpg"
        }
      ]
    },
    team: {
      tag: "05 / THE TEAM",
      title: "TWO DECADES OF CRAFT. ONE CREATIVE VISION",
      members: [
        {
          name: "CAROLINE PIRES",
          role: "TECHNICAL DIRECTOR",
          desc: "A bachelor's in computer science and twenty years across VFX supervision and technology, including a top-five finish in the 2019 Founders Institute accelerator cohort. Caroline architects every automation so it keeps running long after launch."
        },
        {
          name: "CLAUDIO MARCOS",
          role: "CREATIVE DIRECTOR & AI SPECIALIST",
          desc: "An art director who has built work for major cultural institutions, touring stage shows and e-commerce brands from the ground up. Claudio makes sure every automation still sounds like you."
        },
        {
          name: "GLOBAL TECH SUPPORT",
          role: "MAINTENANCE & MONITORING",
          desc: "A distributed support team on call for monitoring, updates and fixes — so systems keep running long after the deck is closed."
        }
      ]
    },
    voiceCase: {
      tag: "06 / VOICE AGENTS",
      title: "ANSWERS EVERY CALL, EVEN THE ONE AT 9:47PM",
      desc: "Built on ElevenLabs voice models and trained on your script, our voice agents take bookings, answer FAQs, and hand off anything that needs a human — logged and ready for your team each morning."
    },
    howWeWork: {
      tag: "07 / HOW WE WORK",
      title: "SIX STEPS, NO SURPRISES",
      steps: [
        {
          label: "01",
          name: "AUDIT",
          desc: "An initial meeting to understand the business, the guest journey and where the admin actually breaks down."
        },
        {
          label: "02",
          name: "QUOTE",
          desc: "A scoped, line-item quote — built from what the automation actually needs, not a flat rate."
        },
        {
          label: "03",
          name: "CRAFT",
          desc: "We build the first working version of the app or agent."
        },
        {
          label: "04",
          name: "TESTING",
          desc: "A dedicated testing period with you to iron out edge cases and confirm it runs exactly as requested."
        },
        {
          label: "05",
          name: "DELIVERY",
          desc: "Final handover — live, running, and in your team's hands."
        },
        {
          label: "06",
          name: "MAINTENANCE",
          desc: "Ongoing software updates, server costs, AI usage and tech support — every automation is maintained, not abandoned."
        }
      ]
    },
    contact: {
      tag: "LET'S TALK",
      title: "WANT TO AUTOMATE YOUR FRONT OF HOUSE",
      desc: "Reach out, and we'll audit your booking flow, your calls and your outreach — then build the system that runs it.",
      cta: "Click here to email us →"
    }
  },
  pt: {
    hero: {
      tag: "PENSAMENTO DE AGÊNCIA. EXECUÇÃO DE IA.",
      title: "CONSTRUÍMOS OS SISTEMAS QUE GEREM A SUA RECEPÇÃO",
      desc: "A NUstudios desenvolve automações de IA à medida para a restauração e além — robôs de reserva, agentes de voz, sistemas de conteúdo e prospeção que trabalham enquanto a sua equipa está na sala, não ao ecrã."
    },
    problem: {
      tag: "01 / O PROBLEMA",
      title: "A MAIORIA DAS RESERVAS AINDA É FEITA À MÃO",
      desc: "Um cliente envia mensagem às 23h. Uma chamada entra a meio do serviço. Um pedido de mesa fica por ler no Instagram até à manhã seguinte. A restauração vive da hospitalidade — mas a administração em torno dela ainda depende de alguém se lembrar de responder.",
      cols: [
        {
          title: "FORA DE HORAS",
          desc: "A maioria das dúvidas surge quando ninguém está na recepção — noites, fins de semana, pico do serviço."
        },
        {
          title: "ADMINISTRAÇÃO REPETITIVA",
          desc: "Confirmações, FAQs e acompanhamentos consomem horas que deveriam ser dedicadas aos clientes presentes."
        },
        {
          title: "CONTACTOS PERDIDOS",
          desc: "Respostas lentas custam lugares — e abordagens tardias custam novos clientes antes de a conversa sequer começar."
        }
      ]
    },
    whatsappCase: {
      tag: "02 / BOT DE RESERVAS NO WHATSAPP",
      title: "RESERVADO EM MENOS DE UM MINUTO",
      desc: "Um cliente envia uma mensagem, escolhe uma data, hora e número de pessoas, e recebe um cartão de confirmação — tudo sem sair do chat thread. Sem apps para descarregar, sem formulários, sem música de espera."
    },
    caseStudy: {
      tag: "03 / CASO DE ESTUDO",
      title: "COMO RESOLVEMOS ISTO — O PALMEIRAL",
      desc: "Transformámos o seu Google Drive repleto de fotografias aleatórias num sistema de publicação autónomo que preserva o estilo característico do restaurante. A pedido do proprietário, incluímos pontos de controlo humano em diferentes fases de publicação, onde o Dan pode rever e alterar o que desejar antes de enviar para a fila de agendamento.",
      cols: [
        {
          title: "1. O Problema",
          desc: "Muitas fotos, sem tempo para organizar e publicar. Transformámos o seu Google Drive repleto de fotografias aleatórias num sistema de publicação autónomo que mantém o estilo original do restaurante."
        },
        {
          title: "2. O Desenvolvimento",
          desc: "Desenvolvemos um sistema inteligente que atribui categorias, hashtags predefinidas, localizações, alt-tags e confere um aspeto humano às publicações, com pontos de revisão para o Dan."
        },
        {
          title: "3. O Resultado",
          desc: "Apenas 15-20 minutos por mês dedicados pelo cliente, em vez de muitas horas desperdiçadas, mantendo publicações diárias para liderar o mercado."
        }
      ],
      linkText: "Ver Caso de Estudo Completo →"
    },
    build: {
      tag: "04 / O QUE CONSTRUÍMOS",
      title: "DO SEU FLUXO DE RESERVAS À SUA LISTA DE PROSPEÇÃO",
      services: [
        {
          num: "01",
          title: "AUTOMAÇÃO DE REDES SOCIAIS",
          desc: "Conteúdo programado e gestão de comunidade, criados para consistência de marca sem contratar a tempo inteiro.",
          link: "Ver o caso de estudo O Palmeiral →",
          url: "/showcase/o-palmeiral",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-automation-control.jpeg"
        },
        {
          num: "02",
          title: "BLOG & SEO",
          desc: "Conteúdo otimizado contínuo que mantém a marca de restauração visível entre campanhas.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Person_scrolling_jewelry_blog_202609041449.jpeg"
        },
        {
          num: "03",
          title: "BOTS DE RESERVA NO WHATSAPP",
          desc: "Clientes reservam, alteram e confirmam mesas inteiramente no WhatsApp — sem app, sem música de espera.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/WhatsApp20Flows20220-20English.png"
        },
        {
          num: "04",
          title: "AGENTES DE VOZ",
          desc: "Agentes telefónicos de IA com som natural que atendem chamadas, fazem reservas e encaminham urgências reais.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Mobile_phone_on_office_table_202609041503.jpeg"
        },
        {
          num: "05",
          title: "AUTOMAÇÕES À MEDIDA",
          desc: "Sistemas de IA customizados para qualquer fluxo operacional — veja o que é possível na nossa campanha NOS.",
          link: "Ver a campanha de IA da NOS →",
          url: "/showcase/nos-ai-campaign",
          videoSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Sequence%2001.mp4"
        },
        {
          num: "06",
          title: "PROSPEÇÃO DE EMAIL AUTOMATIZADA",
          desc: "Campanhas outbound para a sua lista de clientes — re-envolvimento, ofertas e picos sazonais.",
          imgSrc: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/hologram.jpg"
        }
      ]
    },
    team: {
      tag: "05 / A EQUIPA",
      title: "DUAS DÉCADAS DE OFÍCIO. UMA VISÃO CRIATIVA",
      members: [
        {
          name: "CAROLINE PIRES",
          role: "DIRETORA TÉCNICA",
          desc: "Licenciada em ciências da computação, com vinte anos em supervisão de efeitos visuais (VFX) e tecnologia, incluindo uma classificação no top 5 da coorte de aceleradoras do Founders Institute de 2019. A Caroline desenha todas as automações para garantir que continuem operacionais após o lançamento."
        },
        {
          name: "CLAUDIO MARCOS",
          role: "DIRETOR CRIATIVO & ESPECIALISTA EM IA",
          desc: "Diretor de arte que construiu trabalho para grandes instituições culturais, espetáculos em digressão e marcas de e-commerce desde a raiz. O Claudio garante que cada automação fale com a sua voz."
        },
        {
          name: "SUPORTE TÉCNICO GLOBAL",
          role: "MANUTENÇÃO & MONITORIZAÇÃO",
          desc: "Uma equipa de suporte distribuída e sempre disponível para monitorização, atualizações e correções — para que os sistemas continuem operacionais a longo prazo."
        }
      ]
    },
    voiceCase: {
      tag: "06 / AGENTES DE VOZ",
      title: "RESPONDE A TODAS AS CHAMADAS, ATÉ ÀS 21:47",
      desc: "Desenvolvidos com modelos de voz ElevenLabs e guiões personalizados, os nossos agentes atendem chamadas, tiram dúvidas frequentes e encaminham urgências, deixando tudo registado para a sua equipa de manhã."
    },
    howWeWork: {
      tag: "07 / COMO TRABALHAMOS",
      title: "SEIS PASSOS, SEM SURPRESAS",
      steps: [
        {
          label: "01",
          name: "AUDITORIA",
          desc: "Reunião inicial para analisar o negócio, a jornada do cliente e identificar onde o fluxo administrativo falha."
        },
        {
          label: "02",
          name: "ORÇAMENTO",
          desc: "Orçamento detalhado e discriminado — desenhado em torno das reais necessidades de automação, sem taxas fixas genéricas."
        },
        {
          label: "03",
          name: "PRODUÇÃO",
          desc: "Construímos a primeira versão funcional da aplicação ou agente de conversação."
        },
        {
          label: "04",
          name: "TESTES",
          desc: "Fase de testes dedicada para resolver casos excecionais e validar o comportamento pretendido."
        },
        {
          label: "05",
          name: "ENTREGA",
          desc: "Entrega final — sistema ativo, funcional e integrado nas mãos da sua equipa."
        },
        {
          label: "06",
          name: "MANUTENÇÃO",
          desc: "Atualizações de software contínuas, custos de servidor, tráfego de IA e apoio técnico — suporte de longo prazo."
        }
      ]
    },
    contact: {
      tag: "VAMOS CONVERSAR",
      title: "QUER AUTOMATIZAR A SUA RECEPÇÃO",
      desc: "Fale connosco, faremos uma auditoria ao seu fluxo de reservas, chamadas e contactos — construindo depois o sistema ideal.",
      cta: "Clique aqui para nos enviar um email →"
    }
  }
};

export const Hospitality = () => {
  const { language, getLanguagePath } = useLanguage();
  const ht = hospitalityTranslations[language] || hospitalityTranslations.en;
  const [explainerOpen, setExplainerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
          <img
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/Header.jpg"
            alt="Atmospheric empty luxury restaurant setting with warm ambient lighting"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
          <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-32">
            <div className="max-w-7xl mx-auto w-full">
              <FadeIn delay={0.1}>
                <div className="max-w-4xl">
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">
                    {ht.hero.tag}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.95] text-white">
                    {ht.hero.title}<span className="text-red-600">.</span>
                  </h1>
                  <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl font-sans leading-relaxed">
                    {ht.hero.desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 01 THE PROBLEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                  {ht.problem.tag}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-black leading-none">
                  {ht.problem.title}<span className="text-red-600">.</span>
                </h2>
                <p className="text-base md:text-lg text-black/70 font-sans leading-relaxed">
                  {ht.problem.desc}
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-md shadow-lg" 
                  onClick={() => setExplainerOpen(true)}
                >
                  <img
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/Image_02%20(1).png"
                    alt="Digital system showing reservations details"
                    className="w-full aspect-[4/3] object-cover rounded-md border border-black/5 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest border border-black/10">
                    {language === 'pt' ? 'Ver Vídeo de Explicação' : 'Watch Explainer Film'}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Under-columns - stretched section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/5">
            {ht.problem.cols.map((col, i) => {
              const icons = [Clock, RefreshCw, UserX];
              const Icon = icons[i] || Clock;
              return (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="rounded-md border border-[#EEEEEE] bg-[#F9F9F7] p-8 h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-6 bg-white border border-black/5 rounded shadow-sm">
                      <Icon className="w-6 h-6 text-[#E11D48]" />
                    </div>
                    <h3 className="font-display font-bold uppercase text-lg text-black tracking-tight mb-3">
                      {col.title}
                    </h3>
                    <p className="text-sm text-black/60 font-sans leading-relaxed">
                      {col.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* 02 WHATSAPP BOOKING BOT */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
              {ht.whatsappCase.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-black mb-6 leading-none">
              {ht.whatsappCase.title}<span className="text-red-600">.</span>
            </h2>
            <p className="text-base md:text-lg text-black/70 font-sans leading-relaxed mb-12 max-w-4xl">
              {ht.whatsappCase.desc}
            </p>

            {/* Stretched Full Showcase Gallery - Uncropped, sitting flat with no gray borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/whatsapp_01%20(1).jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/whatsapp_02%20(1).jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/whatsapp_03%20(1).jpg"
              ].map((src, i) => (
                <div key={i} className="flex justify-center items-start">
                  <img
                    src={src}
                    alt={`WhatsApp Step ${i + 1}`}
                    className="w-full h-auto object-contain max-h-[600px] rounded-none"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 03 CASE STUDY: O PALMEIRAL */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6">
                <FadeIn delay={0.1}>
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                    {ht.caseStudy.tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-black leading-none">
                    {ht.caseStudy.title}<span className="text-red-600">.</span>
                  </h2>
                  <p className="text-base md:text-lg text-black/70 font-sans leading-relaxed">
                    {ht.caseStudy.desc}
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-6">
                <FadeIn delay={0.2}>
                  <div className="relative aspect-video rounded-md overflow-hidden shadow-2xl border border-black/5 bg-black">
                    <LazyVideo 
                      src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/OPalm_website_v2.mp4"
                      poster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png"
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Stretched 3-columns study breakdown underneath with new copywriting */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-black/5">
              {ht.caseStudy.cols.map((col, i) => {
                const images = [
                  "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-content.png",
                  "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-human-checkpoint.png",
                  "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-social-post.jpeg"
                ];
                const imageSrc = images[i];
                return (
                  <FadeIn key={i} delay={0.1 * i}>
                    <div className="bg-white rounded-md border border-black/5 shadow-sm p-6 flex flex-col justify-between h-full group">
                      <div>
                        <div className="overflow-hidden rounded-md border border-black/5 aspect-video mb-6 bg-neutral-100">
                          <img
                            src={imageSrc}
                            alt={col.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <h3 className="font-display font-bold uppercase text-lg text-black tracking-tight mb-3">
                          {col.title}
                        </h3>
                        <p className="text-sm text-black/60 font-sans leading-relaxed mb-6">
                          {col.desc}
                        </p>
                      </div>

                      {i === 2 && (
                        <div className="mt-auto pt-4 border-t border-black/5">
                          <a 
                            href={getLanguagePath('/showcase/o-palmeiral')}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
                          >
                            {ht.caseStudy.linkText}
                          </a>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04 WHAT WE BUILD */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F9F7] border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                {ht.build.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-black mb-4 leading-none">
                {ht.build.title}<span className="text-red-600">.</span>
              </h2>
            </div>

            {/* Thumbnail-based 3 columns per row grid of services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ht.build.services.map((service, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-white rounded-md border border-black/5 p-6 flex flex-col justify-between h-full group shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div>
                      {/* Thumbnail Container: Rendering video loop or image */}
                      <div className="overflow-hidden rounded-md border border-black/5 aspect-video mb-6 bg-neutral-100">
                        {service.videoSrc ? (
                          <video
                            src={service.videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={service.imgSrc}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                          />
                        )}
                      </div>
                      
                      <div className="flex gap-3 items-start mb-3">
                        <span className="font-mono text-xs font-bold text-red-600 pt-0.5">
                          {service.num}
                        </span>
                        <h3 className="font-display font-bold uppercase text-lg text-black tracking-tight leading-snug">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-black/60 font-sans leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    {service.link && (
                      <div className="pt-4 border-t border-black/5">
                        <a 
                          href={getLanguagePath(service.url || '')}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
                        >
                          {service.link}
                        </a>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 05 THE TEAM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
              {ht.team.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-16 text-black leading-none">
              {ht.team.title}<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {ht.team.members.map((member, i) => {
              const avatars = [
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_2%20(1).jpg",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_3%20(1).png"
              ];
              const isTechSupport = i === 2;
              
              return (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    {isTechSupport ? (
                      <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white font-display font-black text-2xl tracking-tighter shadow-md">
                        TS
                      </div>
                    ) : (
                      <img
                        src={avatars[i]}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border border-black/5 flex-shrink-0 mb-6 shadow-md"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <h3 className="font-display font-black text-xl text-black uppercase mb-1">
                      {member.name}
                    </h3>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-black/70 leading-relaxed font-sans max-w-sm">
                      {member.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* 06 VOICE AGENTS */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <FadeIn delay={0.1}>
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                    {ht.voiceCase.tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-black leading-none">
                    {ht.voiceCase.title}<span className="text-red-600">.</span>
                  </h2>
                  <p className="text-base md:text-lg text-black/70 font-sans leading-relaxed">
                    {ht.voiceCase.desc}
                  </p>
                </FadeIn>
              </div>

              <div className="lg:col-span-5">
                <FadeIn delay={0.2}>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/unnamed.jpg_20260929125405.jpg"
                      alt="Voice Agent Phone beside reservation book"
                      className="w-full h-auto object-contain max-h-[450px] rounded-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* 07 HOW WE WORK */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
              {ht.howWeWork.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 text-black leading-none">
              {ht.howWeWork.title}<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          
          <div className="border-t border-black/10">
            {ht.howWeWork.steps.map((step) => (
              <div key={step.label} className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 border-b border-black/10 items-start">
                <div className="md:w-40 flex-shrink-0 flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-red-600">
                    {step.label}
                  </span>
                  <span className="font-display font-bold uppercase text-lg text-black tracking-tight">
                    {step.name}
                  </span>
                </div>
                <p className="text-sm text-black/70 leading-relaxed font-sans max-w-3xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT (LET'S TALK) */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">
                {ht.contact.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-white leading-none">
                {ht.contact.title}<span className="text-red-600">?</span>
              </h2>
              <p className="text-white/70 font-sans leading-relaxed mb-8 max-w-md">
                {ht.contact.desc}
              </p>
              
              <a
                href="mailto:info@nustudios.co.uk"
                className="inline-flex items-center gap-2 text-red-500 font-bold border-b-2 border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors uppercase tracking-widest text-xs"
              >
                {ht.contact.cta}
              </a>
              
              <p className="mt-12 text-xs text-white/50 font-sans leading-relaxed">
                Caroline &amp; Claudio —{' '}
                <a href="mailto:caroline@nustudios.co.uk" className="text-white font-bold border-b border-white/20 hover:text-red-500 hover:border-red-500 transition-colors">
                  caroline@nustudios.co.uk
                </a>
                {' · '}
                <a href="mailto:claudio@nustudios.co.uk" className="text-white font-bold border-b border-white/20 hover:text-red-500 hover:border-red-500 transition-colors">
                  claudio@nustudios.co.uk
                </a>
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-md shadow-2xl flex justify-center bg-black">
              <img
                src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automations/Gemini_Generated_Image_vpdryevpdryevpdr%20(2).png"
                alt="Chic atmospheric empty restaurant dining setting"
                className="w-full h-auto max-h-[400px] object-cover rounded-md opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

      </main>

      <ShowreelModal
        isOpen={explainerOpen}
        onClose={() => setExplainerOpen(false)}
        videoUrl={OUTREACH_VIDEO_URL}
      />
    </div>
  );
};

export default Hospitality;

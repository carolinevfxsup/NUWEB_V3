import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { ShowreelModal } from '../components/ShowreelModal';

const OUTREACH_VIDEO_URL = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Remove_WaterMark(1).mp4';

const vfxTranslations = {
  en: {
    hero: {
      tag: "NuStudios — Capabilities Reel",
      title: "WE DON'T JUST PROMPT IT. WE DIRECT IT.",
      desc: "Full AI animation, character performance, and hybrid 4K production — art-directed by a team that's spent twenty years on a physical set before ever touching a prompt.",
      btn1: "See What We Can Show",
      btn2: "About the Full Reel"
    },
    build: {
      tag: "01 / How It's Built",
      title: "AI IS PART OF THE PROCESS. NOT THE WHOLE OF IT",
      desc: "Twenty years of traditional VFX craft, run through a bespoke 4K hybrid pipeline. Every output is guided, shaped and signed off by expert hands before it ever reaches you.",
      cols: [
        {
          title: "Ethically Trained",
          desc: "Our tools are built on ethically sourced models — no copyrighted training material, no legal grey areas for your brand."
        },
        {
          title: "Context Over Guesswork",
          desc: "We train our tools on your specific brand. Nothing we make will ever look like your competitors' content."
        },
        {
          title: "Taste Is Never Automated",
          desc: "Every image, video and post is art-directed and approved by our founders. We never let the machines run unsupervised."
        }
      ]
    },
    capabilities: {
      tag: "02 / What We Can Show Today",
      title: "EIGHT WAYS WE PUT AI ON SET",
      desc: "Every one of these is real capability, not a demo reel of stock prompts. Stills below stand in for the finished clips — ask us for the full cuts.",
      items: [
        {
          label: "Case Study",
          title: "Full AI Animation — Quinta do Pinto",
          desc: "Three hundred years of heritage, built frame by frame from a single drop of blue ink.",
          linkText: "View case study →",
          linkUrl: "/showcase/quinta-do-pinto-concept-film",
          bgClass: "bg-gradient-to-tr from-[#050914] via-[#0e1830] to-[#2b3e63]"
        },
        {
          label: "Character Performance",
          title: "Animated Characters & Lipsync",
          desc: "A fully animated fish character, timed dialogue and expression — no mocap stage required.",
          bgClass: "bg-gradient-to-tr from-[#030f0f] via-[#062626] to-[#0e4a4a]"
        },
        {
          label: "Restyle & Restage",
          title: "Video-to-Video AI",
          desc: "Reshoot without reshooting — restyle, relight or recompose footage while the performance stays intact.",
          bgClass: "bg-gradient-to-tr from-[#120404] via-[#240a0a] to-[#3a0f0f]"
        },
        {
          label: "Creature & VFX",
          title: "Directable 3D-to-AI Skinning",
          desc: "Block it in 3D, direct the camera, then let AI skin it — birds, monsters, a shark. Full art-directed control.",
          bgClass: "bg-gradient-to-tr from-[#0a0702] via-[#1a1204] to-[#33240a]"
        },
        {
          label: "Audio",
          title: "AI Voices & Voice Changing",
          desc: "Custom voices, accents and languages for narration, characters and localisation — no studio day needed.",
          bgClass: "bg-gradient-to-tr from-[#050308] via-[#0a0614] to-[#1c0f2e]"
        },
        {
          label: "World-Building",
          title: "AI Environments & Backgrounds",
          desc: "Worlds built from a brief, not a location scout — photoreal or stylised, never off-the-shelf.",
          bgClass: "bg-gradient-to-tr from-[#030a06] via-[#081a10] to-[#143620]"
        },
        {
          label: "Hybrid Pipeline",
          title: "Mixed Media",
          desc: "Live-action, 3D and AI generation combined in a single frame — whichever tool serves the story.",
          bgClass: "bg-gradient-to-tr from-[#050301] via-[#150e02] to-[#241a05]"
        },
        {
          label: "Broadcast & Brand",
          title: "Title Sequence Animations",
          desc: "The first ten seconds, done properly — bespoke opening titles for broadcast and brand.",
          bgClass: "bg-gradient-to-tr from-[#060105] via-[#12040c] to-[#2a0a1a]"
        }
      ]
    },
    status: {
      tag: "03 / Where the Reel Stands",
      title: "THE FULL REEL IS STILL BEING SHOT",
      desc: "We'd rather show you real, finished work than a highlight reel of generic AI clips. Here's exactly where things stand, and what we can put in front of you today.",
      cols: [
        {
          tag: "In Production",
          title: "The 4K Hybrid Showreel",
          desc: "We're currently shooting and finishing our full hybrid AI showreel — built the same way we build for clients: real production values, extended and finished with AI. It'll be live here as soon as it's graded."
        },
        {
          tag: "Available On Request",
          title: "TV & Broadcast Work, Under NDA",
          desc: "A good part of our television and broadcast VFX work is under active NDA and can't be posted publicly. We're happy to walk you through it in person — just ask."
        }
      ]
    },
    team: {
      tag: "04 / Who's Behind It",
      title: "TWO DECADES OF CRAFT. ONE CREATIVE VISION",
      desc: "See the work we've shipped before NuStudios — global ad campaigns, Oscar-winning films, and brands built from the ground up.",
      members: [
        {
          name: "Caroline Pires",
          role: "Technical Director",
          desc: "Nearly two decades of visual-effects experience across global ad campaigns and Oscar-winning films, including Martin Scorsese's Hugo 3D.",
          avatar: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_2%20(1).jpg"
        },
        {
          name: "Claudio Marcos",
          role: "Creative Director",
          desc: "An art director who has built work for major cultural institutions, touring stage shows, and e-commerce brands from the ground up.",
          avatar: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_3%20(1).png"
        }
      ]
    },
    cta: {
      tag: "Let's Talk",
      title: "WANT TO SEE THE FULL REEL",
      desc: "Book time with us and we'll walk you through the NDA work in person, plus where the hybrid showreel stands right now.",
      btnText: "Click Here to Email Us",
      subText: "Caroline & Claudio —"
    }
  },
  pt: {
    hero: {
      tag: "NuStudios — Reel de Capacidades",
      title: "NÃO SE TRATA SÓ DE PROMPTS. TRATA-SE DE DIREÇÃO.",
      desc: "Animação total por IA, desempenho de personagens e produção híbrida 4K — dirigida de forma artística por uma equipa que passou vinte anos num set físico antes de tocar num prompt.",
      btn1: "Ver o que podemos mostrar",
      btn2: "Sobre o Reel Completo"
    },
    build: {
      tag: "01 / Como é Construído",
      title: "A IA FAZ PARTE DO PROCESSO. NÃO É O PROCESSO TODO",
      desc: "Duas décadas de VFX tradicional, executados num pipeline híbrido 4K personalizado. Cada resultado é guiado, esculpido e aprovado por mãos experientes antes de chegar a si.",
      cols: [
        {
          title: "Treinado de Forma Ética",
          desc: "As nossas ferramentas assentam em modelos eticamente adquiridos — sem materiais protegidos por direitos de autor nem vazios legais para a sua marca."
        },
        {
          title: "Contexto Sobre Suposições",
          desc: "Treinamos as nossas ferramentas em função da sua marca específica. Nada do que criamos assemelhar-se-á aos conteúdos dos seus concorrentes."
        },
        {
          title: "O Gosto Nunca é Automatizado",
          desc: "Cada imagem, vídeo e publicação é dirigido e validado pelos nossos fundadores. Nunca deixamos as primeiras operarem sem supervisão."
        }
      ]
    },
    capabilities: {
      tag: "02 / O Que Podemos Mostrar Hoje",
      title: "OITO FORMAS COMO COLOCAMOS A IA NO SET",
      desc: "Todas estas capacidades são reais, não um rolo de prompts pré-fabricados. Os fotogramas abaixo representam os clipes finais — solicite-nos os cortes completos.",
      items: [
        {
          label: "Caso de Estudo",
          title: "Animação por IA Completa — Quinta do Pinto",
          desc: "Trezentos anos de património, construídos fotograma a fotograma a partir de uma única gota de tinta azul.",
          linkText: "Ver caso de estudo →",
          linkUrl: "/showcase/quinta-do-pinto-concept-film",
          bgClass: "bg-gradient-to-tr from-[#050914] via-[#0e1830] to-[#2b3e63]"
        },
        {
          label: "Performance de Personagem",
          title: "Personagens Animadas & Sincronização Labial",
          desc: "Uma personagem de peixe totalmente animada, com diálogo e expressões sincronizados — sem estúdio de mocap.",
          bgClass: "bg-gradient-to-tr from-[#030f0f] via-[#062626] to-[#0e4a4a]"
        },
        {
          label: "Estilo & Recomposição",
          title: "IA de Vídeo para Vídeo",
          desc: "Refilme sem refilmar — mude o estilo, iluminação ou composição mantendo a interpretação intocada.",
          bgClass: "bg-gradient-to-tr from-[#120404] via-[#240a0a] to-[#3a0f0f]"
        },
        {
          label: "Criatura & VFX",
          title: "Skinning Direcionável de 3D para IA",
          desc: "Desenhe em 3D, direcione a câmara e deixe a IA fazer o skinning — aves, monstros, um tubarão. Controlo artístico total.",
          bgClass: "bg-gradient-to-tr from-[#0a0702] via-[#1a1204] to-[#33240a]"
        },
        {
          label: "Áudio",
          title: "Vozes por IA & Alteração de Voz",
          desc: "Vozes personalizadas, sotaques e idiomas para narração, personagens e localização — sem necessidade de estúdio.",
          bgClass: "bg-gradient-to-tr from-[#050308] via-[#0a0614] to-[#1c0f2e]"
        },
        {
          label: "Criação de Mundos",
          title: "Ambientes & Fundos por IA",
          desc: "Mundos criados a partir do guião, sem batedores de localizações — fotorrealistas ou estilizados.",
          bgClass: "bg-gradient-to-tr from-[#030a06] via-[#081a10] to-[#143620]"
        },
        {
          label: "Pipeline Híbrido",
          title: "Media Mista",
          desc: "Ação real, 3D e geração de IA combinados num só fotograma — a ferramenta certa para servir a história.",
          bgClass: "bg-gradient-to-tr from-[#050301] via-[#150e02] to-[#241a05]"
        },
        {
          label: "Televisão & Marcas",
          title: "Animação de Genéricos",
          desc: "Os primeiros dez segundos, feitos como deve ser — genéricos de abertura exclusivos para televisão e marcas.",
          bgClass: "bg-gradient-to-tr from-[#060105] via-[#12040c] to-[#2a0a1a]"
        }
      ]
    },
    status: {
      tag: "03 / Onde Está o Showreel",
      title: "O SHOWREEL COMPLETO AINDA ESTÁ A SER GRAVADO",
      desc: "Preferimos mostrar-lhe trabalho real e finalizado em vez de um resumo de clipes genéricos de IA. Saiba onde as coisas se encontram e o que lhe podemos apresentar hoje.",
      cols: [
        {
          tag: "Em Produção",
          title: "O Showreel Híbrido 4K",
          desc: "Estamos atualmente a filmar e a concluir o nosso showreel de IA híbrida completo — desenvolvido como fazemos com clientes: valores de produção reais, estendidos e finalizados com IA. Ficará ativo aqui assim que estiver calibrado."
        },
        {
          tag: "Disponível Sob Consulta",
          title: "Trabalho em Televisão, Sob Acordo NDA",
          desc: "Uma boa parte do nosso trabalho de efeitos visuais para televisão e cinema está sob NDA e não pode ser publicada. Teremos todo o gosto em apresentar-lha pessoalmente — basta solicitar."
        }
      ]
    },
    team: {
      tag: "04 / Quem Está por Trás",
      title: "DUAS DÉCADAS DE EXPERIÊNCIA. UMA SÓ VISÃO.",
      desc: "Conheça o trabalho que entregamos antes da NuStudios — campanhas globais, filmes vencedores de Óscares e marcas erguidas a partir do zero.",
      members: [
        {
          name: "Caroline Pires",
          role: "Technical Director",
          desc: "Quase duas décadas de experiência em efeitos visuais em grandes campanhas globais e filmes distinguidos pela Academia, incluindo Hugo 3D de Martin Scorsese.",
          avatar: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_2%20(1).jpg"
        },
        {
          name: "Claudio Marcos",
          role: "Creative Director",
          desc: "Diretor de arte conceituado que desenvolveu soluções para grandes instituições de prestígio, espetáculos em digressão e marcas multinacionais.",
          avatar: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Caroline_Clay_3%20(1).png"
        }
      ]
    },
    cta: {
      tag: "Vamos Falar",
      title: "QUER VER O NOSSO SHOWREEL COMPLETO",
      desc: "Marque uma reunião connosco e acompanharemos todo o trabalho sob NDA presencialmente, além do estado do nosso reel híbrido.",
      btnText: "Clique aqui para nos enviar um email",
      subText: "Caroline & Claudio —"
    }
  }
};

export const VfxAnimation = () => {
  const { language, getLanguagePath } = useLanguage();
  const t = vfxTranslations[language] || vfxTranslations.en;
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-black">
      <Header />
      <main>
        
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050914] via-[#0e1830] to-[#2b3e63] opacity-85" />
          
          {/* Subtle Grain Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '4px 4px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90" />

          <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-32 max-w-7xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">
                {t.hero.tag}
              </span>
              <h1 className="max-w-4xl text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.95] text-white">
                {t.hero.title.split('.').join('')}<span className="text-red-600">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed font-sans">
                {t.hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#capabilities" 
                  className="text-xs font-sans font-bold uppercase tracking-widest bg-white text-black px-6 py-3.5 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                >
                  {t.hero.btn1}
                </a>
                <a 
                  href="#reel-status" 
                  className="text-xs font-sans font-bold uppercase tracking-widest border border-white/40 text-white px-6 py-3.5 hover:border-red-600 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {t.hero.btn2}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 01 / HOW IT'S BUILT */}
        <section className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
              {t.build.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl leading-[1] text-black">
              {t.build.title}<span className="text-red-600">.</span>
            </h2>
            <p className="text-black/70 max-w-2xl text-base md:text-lg leading-relaxed mb-14 font-sans">
              {t.build.desc}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-black/5">
            {t.build.cols.map((col, i) => (
              <FadeIn key={col.title} delay={0.1 * i}>
                <div className="bg-[#F9F9F7] border border-[#EEEEEE] rounded-md p-8 h-full">
                  <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-3 text-black">
                    {col.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-sm font-sans">
                    {col.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 02 / WHAT WE CAN SHOW */}
        <section id="capabilities" className="px-6 md:px-12 py-20 md:py-28 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                {t.capabilities.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl leading-[1] text-white">
                {t.capabilities.title}<span className="text-red-600">.</span>
              </h2>
              <p className="text-white/70 max-w-2xl text-base md:text-lg leading-relaxed mb-14 font-sans">
                {t.capabilities.desc}
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.capabilities.items.map((item, idx) => {
                const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                return (
                  <FadeIn key={item.title} delay={0.05 * idx}>
                    <article className={`relative overflow-hidden aspect-[3/4] flex flex-col justify-end p-6 rounded-md group border border-white/5 shadow-lg ${item.bgClass}`}>
                      {/* Subtle dark bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                      
                      <div className="relative z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500">
                          {num} / {item.label}
                        </span>
                        <h3 className="font-display font-bold uppercase text-lg leading-tight mt-2 mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/70 leading-relaxed font-sans mb-3">
                          {item.desc}
                        </p>
                        {item.linkUrl && (
                          <Link 
                            to={getLanguagePath(item.linkUrl)} 
                            className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors cursor-pointer"
                          >
                            {item.linkText}
                          </Link>
                        )}
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* 03 / REEL STATUS */}
        <section id="reel-status" className="px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
              {t.status.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl leading-[1] text-black">
              {t.status.title}<span className="text-red-600">.</span>
            </h2>
            <p className="text-black/70 max-w-2xl text-base md:text-lg leading-relaxed mb-12 font-sans">
              {t.status.desc}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-black/5">
            {t.status.cols.map((col, idx) => (
              <FadeIn key={col.title} delay={0.1 * idx}>
                <div className="bg-[#F9F9F7] border border-[#EEEEEE] rounded-md p-8 md:p-10 h-full">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 block mb-2">
                    {col.tag}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight mb-4 text-black">
                    {col.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed font-sans text-sm">
                    {col.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 04 / WHO WE ARE */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                {t.team.tag}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl leading-[1] text-black">
                {t.team.title}<span className="text-red-600">.</span>
              </h2>
              <p className="text-black/70 max-w-2xl text-base md:text-lg leading-relaxed mb-14 font-sans">
                {t.team.desc}
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {t.team.members.map((member, i) => (
                <FadeIn key={member.name} delay={0.15 * i}>
                  <div className="bg-white border border-[#EEEEEE] rounded-md p-8 shadow-sm">
                    <img 
                      src={member.avatar}
                      alt={member.name} 
                      className="w-24 h-24 rounded-full object-cover border border-black/5 flex-shrink-0 mb-6 shadow-md"
                      loading="lazy"
                    />
                    <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-black">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 mt-1 mb-4">
                      {member.role}
                    </p>
                    <p className="text-black/75 leading-relaxed font-sans text-sm">
                      {member.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 05 / CTA */}
        <section className="px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-end">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">
                {t.cta.tag}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.95] text-black">
                {t.cta.title}<span className="text-red-600">?</span>
              </h2>
              <p className="mt-6 text-black/70 max-w-md leading-relaxed font-sans">
                {t.cta.desc}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col items-start md:items-end gap-4">
              <a 
                href="mailto:info@nustudios.co.uk?subject=Let's talk about AI VFX and Animation"
                className="text-xs font-sans font-bold uppercase tracking-widest bg-black hover:bg-red-600 text-white px-8 py-4 transition-colors cursor-pointer"
              >
                {t.cta.btnText}
              </a>
              <p className="text-sm text-black/60 font-sans">
                {t.cta.subText}{' '}
                <a href="mailto:caroline@nustudios.co.uk" className="underline hover:text-red-600">caroline@nustudios.co.uk</a> &middot;{' '}
                <a href="mailto:claudio@nustudios.co.uk" className="underline hover:text-red-600">claudio@nustudios.co.uk</a>
              </p>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* Embedded Showreel controls */}
      <ShowreelModal 
        isOpen={showreelOpen} 
        onClose={() => setShowreelOpen(false)} 
        videoUrl={OUTREACH_VIDEO_URL}
      />
    </div>
  );
};

export default VfxAnimation;

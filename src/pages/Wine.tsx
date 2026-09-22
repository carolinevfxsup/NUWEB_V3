import { Header } from '../components/Header';
import { FadeIn } from '../components/FadeIn';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const wineTranslations = {
  en: {
    hero: {
      tag: "NUstudios for Wine",
      title: "You can't prompt three hundred years of heritage",
      desc: "AI doesn't know your terroir. We do — and we turn it into imagery worth talking about, for wineries across Portugal and beyond."
    },
    problem: {
      tag: "01 / The Problem",
      title: "Most wine content tastes the same",
      desc: "Rolling hills. A hand on a barrel. A sunset toast. Wineries across the Douro, Alentejo, and Vinho Verde are reaching for the same three shots. Most of them already have a better story — in an archive, in a family's memory, in a cellar — it just never makes it into the content."
    },
    who: {
      tag: "02 / Who This Is",
      title: "AI is part of the process. Not the whole of it",
      desc: "We combine real creative and technical craft with AI to create beautiful, campaign-ready imagery — fast, and with precision. Every output is guided, shaped, and signed off by expert hands before it ever reaches you.",
      grid1: {
        title: "Context Over Guesswork",
        desc: "We build on your specific brand, your specific heritage. Nothing we make will ever look like your competitors' content."
      },
      grid2: {
        title: "Taste Is Never Automated",
        desc: "Every image, video, and post is art-directed and approved by our founders. We never let the machines run unsupervised."
      }
    },
    team: {
      tag: "03 / The Team",
      title: "Two decades of craft. One creative vision",
      caroline: {
        role: "Caroline Pires — Technical Director",
        desc: "Nearly two decades of visual-effects experience across global ad campaigns and Oscar-winning films, including Martin Scorsese's Hugo 3D. Caroline keeps the technology flawless, so the craft never shows the seams."
      },
      claudio: {
        role: "Claudio Marcos — Creative Director",
        desc: "An art director who has built work for major cultural institutions, touring stage shows, and e-commerce brands from the ground up. Claudio makes sure every piece of creative still tells your story."
      }
    },
    caseStudyConcept: {
      tag: "04 / Case Study — Quinta do Pinto",
      title: "A heritage winery, made contemporary",
      desc: "Before a single frame was built, we spent time with Quinta do Pinto itself — then found our way in through a tradition already carried through five centuries of Portuguese houses: azulejo.",
      discover: {
        title: "Discover",
        desc: "Quinta do Pinto is a historic estate rooted in centuries of Portuguese winemaking — the kind of heritage most brands can only claim."
      },
      concept: {
        title: "Concept",
        desc: "Portuguese tradition grows into a contemporary world of wine — the same heritage, told through elegant, modern storytelling."
      },
      built: {
        title: "Built, piece by piece",
        desc: "Every tile, vine, and grape was designed and built in 3D using AI generative tools, then animated into a living world. From a single drop of blue ink comes three hundred years of history — reconstructed frame by frame."
      },
      captions: {
        sketch: "Concept sketch",
        final3d: "Final 3D piece",
        inkdrop: "Detail — first frame",
        leafmacro: "Detail — material control"
      }
    },
    caseStudyDeliver: {
      tag: "05 / Case Study — Deliver",
      title: "One bottle, every format",
      desc: "Every campaign starts from a single e-commerce product shot — from there, we build full creative worlds around it: consistent brand, without repeating a single frame.",
      captions: {
        ecommbase: "E-commerce base",
        world1: "World 01",
        world2: "World 02",
        world3: "World 03"
      },
      worldLived: {
        title: "The world, lived in",
        desc: "Beyond the bottle, the same aesthetic extends to lifestyle photography — the people, the places, and the moments a heritage wine sells through as much as the label itself."
      }
    },
    whyPortugal: {
      tag: "Why Portugal, Why Now",
      title: "Portugal has the story. Most isn't on camera",
      regions: [
        {
          tag: "Douro",
          title: "The Original Demarcated Region",
          desc: "Terraced slopes worked by hand for centuries — visually unlike anywhere else, and rarely shown as more than a postcard."
        },
        {
          tag: "Alentejo",
          title: "Cork, Heat, and Scale",
          desc: "Portugal's largest wine region, growing fast in export volume, with a landscape and pace of life barely used in its own marketing."
        },
        {
          tag: "Vinho Verde",
          title: "Young, Coastal, Underestimated",
          desc: "A wine and a region both fighting a dated reputation abroad — a rebrand opportunity as much as a content one."
        }
      ],
      bottom: "Content in Portuguese and English, from one team and one voice — for the home market and export both."
    },
    howWeWork: {
      tag: "How We Work",
      title: "Four steps, no surprises",
      steps: [
        {
          label: "01 Discover",
          desc: "A call, plus a look at the vineyard, the archive, and existing materials — what's usable, and what's missing."
        },
        {
          label: "02 Concept",
          desc: "A look, a script, a reference reel. You see the story before a single frame is built."
        },
        {
          label: "03 Craft",
          desc: "Animated film, live production, or campaign imagery — directed as one vision by one team, not stitched together from separate vendors."
        },
        {
          label: "04 Deliver",
          desc: "Cut for the channels you actually use — site, social, trade, tasting room — in the languages your markets speak."
        }
      ]
    },
    whatYouGet: {
      tag: "What You Get",
      title: "Three ways to start",
      options: [
        {
          tag: "Project",
          title: "One Hero Film",
          desc: "A single flagship piece built around your story — for a launch, a harvest, or an anniversary vintage."
        },
        {
          tag: "Retainer",
          title: "A Content System",
          desc: "An ongoing rhythm of film, animation, and campaign imagery for social, DTC, and trade — produced on a regular schedule, not a one-off."
        },
        {
          tag: "Campaign",
          title: "A Full Campaign",
          desc: "Hero film, campaign imagery, and narrative direction together — building not just a launch, but a recognizable visual world."
        }
      ],
      bottom: "Every project's different, so is the cost. Scopes and timelines are shaped around your winery — happy to talk specifics."
    },
    contact: {
      tag: "Let's Talk",
      title: "Want to work with us",
      desc: "Reach out, and we'll work with you on something great.",
      cta: "Click here to email us"
    }
  },
  pt: {
    hero: {
      tag: "NUstudios para Vinho",
      title: "TRANSFORMAMOS HERANÇA EM IMAGENS QUE DÃO QUE FALAR",
      desc: "A NUstudios é uma equipa de cinema, direção criativa e animação que cria conteúdos arrojados e cheios de imaginação para marcas de vinho — a mistura perfeita entre sensibilidade humana e tecnologia de ponta, com os pés bem assentes na herança e no terroir."
    },
    problem: {
      tag: "01 / O Problema",
      title: "QUASE TODO O CONTEÚDO DE VINHO SABE IGUAL",
      desc: "Colinas suaves. Uma mão sobre um barril. Um brinde ao pôr do sol. As quintas do Douro, do Alentejo e do Vinho Verde recorrem sempre aos mesmos três planos. A maioria já tem uma história bem melhor — num arquivo, na memória de uma família, numa cave — que nunca chega a aparecer no conteúdo."
    },
    who: {
      tag: "02 / Quem Somos",
      title: "UMA ABORDAGEM HÍBRIDA. FEITA PARA A VELOCIDADE",
      desc: "Combinamos uma abordagem híbrida com tecnologia de ponta para criar imagens deslumbrantes e prontas para campanha — rápido, e com precisão. A IA faz parte do processo, mas não é o processo todo: cada resultado é guiado, moldado e aprovado por mãos especializadas antes de chegar até si.",
      grid1: {
        title: "CONTEXTO, NÃO PALPITES",
        desc: "Treinamos as nossas ferramentas com a sua marca específica. O que criamos nunca vai parecer-se com o da concorrência."
      },
      grid2: {
        title: "O BOM GOSTO NUNCA É AUTOMATIZADO",
        desc: "Cada imagem, vídeo e publicação tem direção de arte e aprovação dos nossos fundadores. Nunca deixamos as máquinas trabalhar sem supervisão."
      }
    },
    team: {
      tag: "03 / A Equipa",
      title: "DUAS DÉCADAS DE OFÍCIO. UMA VISÃO CRIATIVA",
      caroline: {
        role: "Caroline Pires — Diretora Técnica",
        desc: "Quase duas décadas de experiência em efeitos visuais, entre campanhas publicitárias internacionais e filmes premiados com o Óscar, incluindo o Hugo 3D de Martin Scorsese. A Caroline garante que a tecnologia funciona na perfeição, para que o ofício nunca se note."
      },
      claudio: {
        role: "Claudio Marcos — Diretor Criativo",
        desc: "Diretor de arte que já construiu trabalho para grandes instituições culturais, espetáculos em digressão e marcas de e-commerce, desde a primeira ideia. O Claudio garante que cada peça criativa continua a contar a sua história."
      }
    },
    caseStudyConcept: {
      tag: "04 / Caso de Estudo — Quinta do Pinto",
      title: "UMA QUINTA COM HISTÓRIA, TORNADA CONTEMPORÂNEA",
      desc: "Antes de construirmos um único frame, passámos tempo com a própria Quinta do Pinto — e encontrámos o nosso caminho através de uma tradição já presente há cinco séculos nas casas portuguesas: o azulejo.",
      discover: {
        title: "DESCOBRIR",
        desc: "A Quinta do Pinto é uma propriedade histórica, com séculos de vinicultura portuguesa — o tipo de património que a maioria das marcas só pode reivindicar."
      },
      concept: {
        title: "CONCEITO",
        desc: "A tradição portuguesa cresce para um mundo do vinho contemporâneo — a mesma herança, contada através de uma narrativa elegante e moderna."
      },
      built: {
        title: "CONSTRUÍDO, PEÇA A PEÇA",
        desc: "Cada azulejo, vinha e cacho de uvas foi concebido e construído com recurso a tecnologia de geração por IA sofisticada, e depois animado até ganhar vida. De uma única gota de tinta azul nascem trezentos anos de história — terra e herança, reconstruídas fotograma a fotograma."
      },
      captions: {
        sketch: "Esboço conceptual",
        final3d: "Peça 3D final",
        inkdrop: "Detalhe — primeiro frame",
        leafmacro: "Detalhe — controlo de material"
      }
    },
    caseStudyDeliver: {
      tag: "05 / Caso de Estudo — Entrega",
      title: "UMA GARRAFA, TODOS OS FORMATOS",
      desc: "Cada campanha começa com uma única fotografia de produto para e-commerce — a partir daí, construímos mundos criativos completos à sua volta: marca consistente, sem repetir um único frame.",
      captions: {
        ecommbase: "E-commerce base",
        world1: "Mundo 01",
        world2: "Mundo 02",
        world3: "Mundo 03"
      },
      worldLived: {
        title: "O MUNDO, VIVIDO",
        desc: "Para lá da garrafa, a mesma estética estende-se à fotografia de lifestyle — as pessoas, os lugares e os momentos que vendem um vinho com história tanto quanto o próprio rótulo."
      }
    },
    whyPortugal: {
      tag: "Porquê Portugal, Porquê Agora",
      title: "PORTUGAL TEM A HISTÓRIA. A MAIOR PARTE FICA DE FORA",
      regions: [
        {
          tag: "Douro",
          title: "A PRIMEIRA REGIÃO DEMARCADA",
          desc: "Encostas em socalcos trabalhadas à mão há séculos — visualmente diferentes de tudo o resto, e raramente mostradas para além de um postal."
        },
        {
          tag: "Alentejo",
          title: "CORTIÇA, CALOR E ESCALA",
          desc: "A maior região vinícola de Portugal, a crescer depressa em volume de exportação, com uma paisagem e um ritmo de vida quase nunca usados no seu próprio marketing."
        },
        {
          tag: "Vinho Verde",
          title: "JOVEM, COSTEIRA, SUBESTIMADA",
          desc: "Um vinho e uma região a lutar contra uma reputação ultrapassada lá fora — uma oportunidade de rebranding tanto quanto de conteúdo."
        }
      ],
      bottom: "Conteúdo em português e inglês, de uma só equipa e uma só voz — para o mercado nacional e para a exportação."
    },
    howWeWork: {
      tag: "Como Trabalhamos",
      title: "QUATRO PASSOS, SEM SURPRESAS",
      steps: [
        {
          label: "01 DESCOBRIR",
          desc: "Uma chamada, mais um olhar sobre a vinha, o arquivo e os materiais existentes — o que é utilizável, e o que falta."
        },
        {
          label: "02 CONCEITO",
          desc: "Um mood board, um guião, um reel de referências. Vê a história antes de construirmos um único frame."
        },
        {
          label: "03 PRODUÇÃO",
          desc: "Filme animado, produção real ou imagem de campanha — dirigidos como uma só visão por uma só equipa, e não montados a partir de vários fornecedores."
        },
        {
          label: "04 ENTREGA",
          desc: "Montado para os canais que realmente usa — site, redes sociais, trade, sala de provas — nas línguas que os seus mercados falam."
        }
      ]
    },
    whatYouGet: {
      tag: "O que Recebe",
      title: "TRÊS FORMAS DE COMEÇAR",
      options: [
        {
          tag: "Projeto",
          title: "UM FILME DE DESTAQUE",
          desc: "Uma peça principal construída à volta da sua história — para um lançamento, uma vindima, ou uma colheita de aniversário."
        },
        {
          tag: "Avença",
          title: "UM SISTEMA DE CONTEÚDO",
          desc: "Um ritmo contínuo de filme, animação e imagem de campanha para redes sociais, DTC e trade — produzido com regularidade, e não como um projeto isolado."
        },
        {
          tag: "Campanha",
          title: "UMA CAMPANHA COMPLETA",
          desc: "Filme de destaque, imagem de campanha e direção narrativa juntos — construindo não só um lançamento, mas um mundo visual reconhecível."
        }
      ],
      bottom: "O âmbito e os prazos são moldados à volta da sua quinta — teremos todo o gosto em falar consigo sobre os detalhes."
    },
    contact: {
      tag: "Vamos Falar",
      title: "QUER TRABALHAR CONNOSCO",
      desc: "Fale connosco, e vamos criar algo em conjunto que vale mesmo a pena.",
      cta: "Clique aqui para nos enviar um email"
    }
  }
};

export const Wine = () => {
  const { language } = useLanguage();
  const wt = wineTranslations[language] || wineTranslations.en;

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>

        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
          <img
            src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/hero.jpg"
            alt="Quinta do Pinto wine bottle on a coastal cliff overlooking the ocean"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80" />
          <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-32">
            <div className="max-w-7xl mx-auto w-full">
              <FadeIn delay={0.1}>
                <div className="max-w-4xl">
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">
                    {wt.hero.tag}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.95] text-white">
                    {wt.hero.title}<span className="text-red-600">.</span>
                  </h1>
                  <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl font-sans leading-relaxed">
                    {wt.hero.desc}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 01 THE PROBLEM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.problem.tag}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
              {wt.problem.title}<span className="text-red-600">.</span>
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-12">
              {wt.problem.desc}
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-4">
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/vineyard.jpg" alt="Vineyard at sunset in the Douro valley" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" loading="lazy" decoding="async" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/barrels.jpg" alt="Oak barrels in a wine cellar" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" loading="lazy" decoding="async" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/pour.jpg" alt="Red wine being poured into a glass" className="flex-1 min-w-[260px] h-56 object-cover rounded-md" loading="lazy" decoding="async" />
          </div>
        </section>

        {/* 02 WHO THIS IS */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.who.tag}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
                {wt.who.title}<span className="text-red-600">.</span>
              </h2>
              <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-12">
                {wt.who.desc}
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">{wt.who.grid1.title}</p>
                <p className="text-sm text-black/60">{wt.who.grid1.desc}</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">{wt.who.grid2.title}</p>
                <p className="text-sm text-black/60">{wt.who.grid2.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 THE TEAM */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.team.tag}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
              {wt.team.title}<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-5">
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/caroline.jpg" alt="Caroline Pires" className="w-20 h-20 rounded-full object-cover flex-shrink-0" loading="lazy" decoding="async" />
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">{wt.team.caroline.role}</p>
                <p className="text-sm text-black/70">{wt.team.caroline.desc}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/claudio.jpg" alt="Claudio Marcos" className="w-20 h-20 rounded-full object-cover flex-shrink-0" loading="lazy" decoding="async" />
              <div>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">{wt.team.claudio.role}</p>
                <p className="text-sm text-black/70">{wt.team.claudio.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 CASE STUDY: CONCEPT */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.caseStudyConcept.tag}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
                {wt.caseStudyConcept.title}<span className="text-red-600">.</span>
              </h2>
              <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-10">
                {wt.caseStudyConcept.desc}
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">{wt.caseStudyConcept.discover.title}</p>
                <p className="text-sm text-black/60">{wt.caseStudyConcept.discover.desc}</p>
              </div>
              <div className="bg-white p-8 border border-black/5">
                <p className="font-bold uppercase text-xs tracking-wider text-black mb-3">{wt.caseStudyConcept.concept.title}</p>
                <p className="text-sm text-black/60">{wt.caseStudyConcept.concept.desc}</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter mb-4">{wt.caseStudyConcept.built.title}<span className="text-red-600">.</span></h3>
            <p className="text-sm text-black/70 max-w-2xl mb-8">{wt.caseStudyConcept.built.desc}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/sketch.jpg" alt="Concept sketch of the azulejo tile artwork" className="w-full h-64 object-cover rounded-md" loading="lazy" decoding="async" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyConcept.captions.sketch}</figcaption>
              </figure>
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/final3d.jpg" alt="Final rendered 3D azulejo piece" className="w-full h-64 object-cover rounded-md" loading="lazy" decoding="async" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyConcept.captions.final3d}</figcaption>
              </figure>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/inkdrop.jpg" alt="Macro detail of a blue ink drop on cracked tile" className="w-full h-64 object-cover rounded-md" loading="lazy" decoding="async" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyConcept.captions.inkdrop}</figcaption>
              </figure>
              <figure>
                <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/leafmacro.jpg" alt="Macro detail of hand-painted porcelain leaf and vine" className="w-full h-64 object-cover rounded-md" loading="lazy" decoding="async" />
                <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyConcept.captions.leafmacro}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 05 CASE STUDY: DELIVER */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.caseStudyDeliver.tag}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 max-w-3xl">
              {wt.caseStudyDeliver.title}<span className="text-red-600">.</span>
            </h2>
            <p className="text-base md:text-lg text-black/70 max-w-2xl font-sans leading-relaxed mb-10">
              {wt.caseStudyDeliver.desc}
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/ecommbase.jpg" alt="Base e-commerce product shot of the wine bottle" className="w-full aspect-[9/16] object-cover rounded-md bg-black" loading="lazy" decoding="async" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyDeliver.captions.ecommbase}</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world1.jpg" alt="Wine bottle styled against cracked concrete" className="w-full aspect-[9/16] object-cover rounded-md" loading="lazy" decoding="async" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyDeliver.captions.world1}</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world2.jpg" alt="Wine bottle styled with dramatic lighting" className="w-full aspect-[9/16] object-cover rounded-md" loading="lazy" decoding="async" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyDeliver.captions.world2}</figcaption>
            </figure>
            <figure>
              <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/world3.jpg" alt="Hand holding the wine bottle" className="w-full aspect-[9/16] object-cover rounded-md" loading="lazy" decoding="async" />
              <figcaption className="text-[10px] uppercase tracking-wider text-black/50 mt-2">{wt.caseStudyDeliver.captions.world3}</figcaption>
            </figure>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tighter mb-4">{wt.caseStudyDeliver.worldLived.title}<span className="text-red-600">.</span></h3>
          <p className="text-sm text-black/70 max-w-2xl mb-8">{wt.caseStudyDeliver.worldLived.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life1.jpg" alt="Man standing in a vineyard holding a wine bottle" className="w-full aspect-[3/4] object-cover rounded-md" loading="lazy" decoding="async" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life2.jpg" alt="Two men tasting wine in a vineyard" className="w-full aspect-[3/4] object-cover rounded-md" loading="lazy" decoding="async" />
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/life3.jpg" alt="Woman tasting wine in a cellar" className="w-full aspect-[3/4] object-cover rounded-md" loading="lazy" decoding="async" />
          </div>
        </section>

        {/* WHY PORTUGAL */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.whyPortugal.tag}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
                {wt.whyPortugal.title}<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {wt.whyPortugal.regions.map((region) => (
                <div key={region.tag}>
                  <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">{region.tag}</p>
                  <h3 className="font-display font-bold uppercase text-lg mb-2">{region.title}</h3>
                  <p className="text-sm text-black/60">{region.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-black/70">{wt.whyPortugal.bottom}</p>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.howWeWork.tag}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
              {wt.howWeWork.title}<span className="text-red-600">.</span>
            </h2>
          </FadeIn>
          <div className="border-t border-black/10">
            {wt.howWeWork.steps.map((step) => (
              <div key={step.label} className="flex flex-col md:flex-row gap-4 md:gap-8 py-6 border-b border-black/10">
                <div className="md:w-40 flex-shrink-0 font-bold uppercase text-sm tracking-wide">{step.label}</div>
                <p className="text-sm text-black/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-600 mb-4 block">{wt.whatYouGet.tag}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 max-w-3xl">
                {wt.whatYouGet.title}<span className="text-red-600">.</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {wt.whatYouGet.options.map((option) => (
                <div key={option.tag} className="bg-white p-8 border border-black/5">
                  <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">{option.tag}</p>
                  <h3 className="font-display font-bold uppercase text-lg mb-2">{option.title}</h3>
                  <p className="text-sm text-black/60">{option.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-black/60">{wt.whatYouGet.bottom}</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-red-500 mb-4 block">{wt.contact.tag}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-white">
                {wt.contact.title}<span className="text-red-600">?</span>
              </h2>
              <p className="text-white/70 mb-8">{wt.contact.desc}</p>
              <a href="mailto:hello@nustudios.co.uk" className="inline-flex items-center gap-2 text-red-500 font-bold border-b-2 border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors">
                {wt.contact.cta} <ExternalLink className="w-4 h-4" />
              </a>
              <p className="mt-10 text-sm text-white/50">
                Caroline &amp; Claudio —{' '}
                <a href="mailto:caroline@nustudios.co.uk" className="text-white font-bold border-b border-white/30">caroline@nustudios.co.uk</a>
                {' · '}
                <a href="mailto:claudio@nustudios.co.uk" className="text-white font-bold border-b border-white/30">claudio@nustudios.co.uk</a>
              </p>
            </div>
            <img src="https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/wine_images/contact.jpg" alt="Wine bottle on a concrete plinth" className="w-full h-[420px] object-cover rounded-md" loading="lazy" decoding="async" />
          </div>
        </section>

      </main>
    </div>
  );
};

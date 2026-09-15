import { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getWebpUrl } from '../lib/utils';
import { SmallSlideshow } from '../components/SmallSlideshow';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { portfolioImages } from '../data/portfolio';
import { 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Slideshow = ({ images, interval = 4000 }: { images: string[], interval?: number }) => {
  const [validImages, setValidImages] = useState<string[]>(images);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setValidImages(images);
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [validImages, interval]);

  const handleImageError = (failedUrl: string) => {
    setValidImages((prev) => {
      const filtered = prev.filter((img) => img !== failedUrl);
      if (filtered.length > 0) {
        setIndex((prevIdx) => (prevIdx >= filtered.length ? 0 : prevIdx));
      }
      return filtered;
    });
  };

  if (validImages.length === 0) {
    return (
      <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-sm flex items-center justify-center border border-black/5">
        <span className="text-xs text-black/30 font-sans">Image Pending</span>
      </div>
    );
  }

  const currentImage = validImages[index] || validImages[0];

  return (
    <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden flex border border-black/5">
      {currentImage && (
        <img loading="lazy" decoding="async"
          key={currentImage}
          src={currentImage}
          onError={() => handleImageError(currentImage)}
          className="absolute inset-0 w-full h-full object-cover rounded-sm"
          referrerPolicy="no-referrer"
        />
      )}
      {/* Indicator dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-white w-3.5' : 'bg-white/40 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Nulaabs = () => {
  const { language, getLanguagePath } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Content dictionary for EN/PT
  const content = {
    en: {
      heroTitle1: 'Your Digital Roster',
      heroTitle2: 'Every Product',
      heroTitle3: 'Every World',
      heroSubtitle: 'THE AI VIRTUAL PRODUCTION STUDIO',
      heroDesc: 'Upload your inventory, lock your models, and place them anywhere — from a clean e-com shot to a fully art-directed editorial. No studio. No shoot.',
      btnBeta: 'REQUEST BETA ACCESS',
      btnWaitlist: 'JOIN THE WAITLIST',
      beforeAfterLabel: 'BEFORE / AFTER COMPARISON',
      beforeAfterDesc: 'Hover over the assets to see how raw flat inventory translates into final high-end social and storefront editorials.',
      ctaTitle: 'Ready to build your digital studio?',
      ctaDesc: 'Schedule a private consultation and watch how we integrate your physical collections into our visual synthesizer.',
      ctaButton: 'Book a discovery session',
      swimwearModel: 'Raw Apparel to High-End Lookbook',
      jewelrySocial: 'Raw Product Shot to Reflective Fine Jewelry',
      wineEcom: 'Prestige 3D Placement Commercial Output'
    },
    pt: {
      heroTitle1: 'O Teu Elenco Digital',
      heroTitle2: 'Cada Produto',
      heroTitle3: 'Cada Mundo',
      heroSubtitle: 'O ESTÚDIO DE PRODUÇÃO VIRTUAL DE IA',
      heroDesc: 'Faz o upload do teu inventário, bloqueia os teus modelos e coloca-os em qualquer lugar — desde uma foto simples de e-commerce a um editorial totalmente dirigido de arte. Sem estúdio. Sem sessão fotográfica.',
      btnBeta: 'SOLICITAR ACESSO BETA',
      btnWaitlist: 'ADERIR À LISTA DE ESPERA',
      beforeAfterLabel: 'COMPARAÇÃO ANTES / DEPOIS',
      beforeAfterDesc: 'Passe o cursor sobre os ativos para ver como o inventário de produtos bruto se traduz em campanhas luxuosas de redes sociais e ecomm.',
      ctaTitle: 'Pronto para criar o seu estúdio digital?',
      ctaDesc: 'Agende uma consulta privada e veja como integramos as suas coleções de produtos reais no nosso sintetizador visual.',
      ctaButton: 'Agendar sessão de descoberta',
      swimwearModel: 'Do Produto Bruto ao Lookbook Premium',
      jewelrySocial: 'Foto de Produto Bruta a Joalharia Fina com Reflexos',
      wineEcom: 'Colocação de Produto Comercial 3D de Alto Luxo'
    }
  };

  const t = content[language === 'pt' ? 'pt' : 'en'];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const randomizedPortfolioImages = useMemo(() => {
    const ratios = ['aspect-[9/16]', 'aspect-square', 'aspect-[4/5]'];
    return [...portfolioImages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 25)
      .map(img => ({
        ...img,
        aspectRatio: ratios[Math.floor(Math.random() * ratios.length)]
      }));
  }, []);

  const features = [
    {
      id: 'model-creator',
      title: language === 'pt' ? 'Criador de Modelos' : 'Model Creator',
      desc: language === 'pt' 
        ? 'Gere modelos fotorrealistas exclusivos com traços e poses personalizadas.' 
        : 'Generate exclusive photorealistic models with custom traits and postures.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/Model%20Creator.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/Model%20Creator.png'
    },
    {
      id: 'ecom-stylist',
      title: language === 'pt' ? 'Estilista E-Com' : 'E-Com Stylist',
      desc: language === 'pt' 
        ? 'Adicione roupas ao seu modelo, incluindo sapatos, chapéus, tops, etc.' 
        : 'Add clothes to your model, including shoes, hats, tops, and more.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Ecom%20Stylist%202.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Ecom%20Stylist%201.png'
    },
    {
      id: 'virtual-tryon',
      title: language === 'pt' ? 'Provador Virtual' : 'Virtual Try-On',
      desc: language === 'pt' 
        ? 'Veja como as peças assentam instantaneamente em modelos digitais.' 
        : 'See how garments drape instantly on realistic digital models.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Virtual%20Try%20On2.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Virtual%20Try%20On1.png'
    },
    {
      id: 'background-remover',
      title: language === 'pt' ? 'Removedor de Fundo' : 'Background Remover',
      desc: language === 'pt' 
        ? 'Isole modelos e vestuário de fundos complexos em segundos.' 
        : 'Isolate models and clothing from complex backdrops in seconds.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Background%20Remover1.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Background%20Remover2.png'
    },
    {
      id: 'upscaler',
      title: language === 'pt' ? 'Super Resolução' : 'Upscaler',
      desc: language === 'pt' 
        ? 'Aumente a resolução para nitidez e detalhes ultra-macro perfeitos.' 
        : 'Enhance image resolution for pristine print and screen campaign details.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-222-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/43e25b10-9c9e-4164-9d83-d2aceb203787.jpg'
    },
    {
      id: 'background-changer',
      title: language === 'pt' ? 'Alterador de Fundo' : 'Background Changer',
      desc: language === 'pt' 
        ? 'Substitua cenários de estúdio por paisagens exóticas ou minimalistas.' 
        : 'Swap studio backgrounds for exotic destinations or clean editorial stages.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Background%20Change1.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Background%20Change2.png'
    },
    {
      id: 'flatlay-to-model',
      title: language === 'pt' ? 'Flatlay para Modelo' : 'Flatlay To Model',
      desc: language === 'pt' 
        ? 'Transforme fotos planas de roupas em sessões editoriais dinâmicas.' 
        : 'Transform flat garments into realistic on-model editorial lookbooks.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Flatlay%20To%20Model2.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Flatlay%20To%20Model1.png'
    },
    {
      id: 'consistent-character',
      title: language === 'pt' ? 'Personagem Consistente' : 'Consistent Character',
      desc: language === 'pt' 
        ? 'Mantenha a consistência facial e corporal do modelo em toda a campanha.' 
        : 'Lock your model\'s facial and physical identity across all assets.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Consistent%20Character1.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Consisent%20Character2.png'
    },
    {
      id: 'client-approval',
      title: language === 'pt' ? 'Aprovação do Cliente' : 'Client Approval',
      desc: language === 'pt' 
        ? 'Envie coleções com marcas de água para aprovação rápida do cliente.' 
        : 'Send your collections with custom watermarks for instant client sign-off.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-9-2k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/model_rosta.png'
    },
    {
      id: 'model-swapper',
      title: language === 'pt' ? 'Substituição de Modelos' : 'Model Swapper',
      desc: language === 'pt' 
        ? 'Altere rostos, tons de pele ou expressões em fotos existentes.' 
        : 'Re-render photos with completely new models, tones, or features.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/model%20swapper%202.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/model%20swapper1.png'
    },
    {
      id: 'image-inpaint',
      title: language === 'pt' ? 'Pintura de Imagem' : 'Image Inpaint',
      desc: language === 'pt' 
        ? 'Modifique, adicione ou remova detalhes específicos de roupas com precisão.' 
        : 'Edit, add, or replace specific garment details with brush precision.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Image%20Inpaint1.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Image%20Inpaint2.png'
    },
    {
      id: 'video-generator',
      title: language === 'pt' ? 'Gerador de Vídeo' : 'Video Generator',
      desc: language === 'pt' 
        ? 'Crie movimentos de produto realistas a partir de imagens estáticas.' 
        : 'Create fluid high-fidelity videos and motions from static shots.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/0.21009101953713372.mp4',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/item-380-2k.png'
    },
    {
      id: 'repose',
      title: language === 'pt' ? 'Reposição de Poses' : 'Repose',
      desc: language === 'pt' 
        ? 'Ajuste posições corporais e poses de modelos para qualquer layout.' 
        : 'Adjust model postures and physical framing to fit any layout.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Repose.png',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Repose.png'
    },
    {
      id: 'preset-art-directions',
      title: language === 'pt' ? 'Direções de Arte Predefinidas' : 'Preset Art Directions',
      desc: language === 'pt' 
        ? 'Mais de 180 ambientes e iluminações predefinidos e dirigidos por arte para a sua campanha.' 
        : 'Over 180 preset art directed environments and lighting for your campaign.',
      mainImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Preset%20Art%20Direction1.jpg',
      thumbImage: 'https://zccorgeihlvtpcsuuekp.supabase.co/storage/v1/object/public/assets/Nuu%20Studio%20Offer/Preset%20Art%20Direction2.png'
    },
    {
      id: 'out-painting',
      title: language === 'pt' ? 'Extensão de Imagem' : 'Out Painting',
      desc: language === 'pt' 
        ? 'Estenda as suas imagens de forma inteligente.' 
        : 'Extend your images.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/outpaint2.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/outpaint%201.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ShowcaseHero */}
        <section className="relative h-screen md:min-h-screen overflow-hidden bg-white flex items-center justify-center">
          <div className="w-full h-full md:absolute md:inset-0 max-w-md md:max-w-none mx-auto aspect-[9/16] md:aspect-auto">
            <video
              src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/header_nulaabs-_v3.mp4"
              poster="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Header%20NU%20Labs%20Desktop.jpg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-none"
            />
          </div>
        </section>

        {/* New Text Tile Section */}
        <section className="py-24 bg-white text-center px-6 border-b border-[#EEEEEE]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-2 text-black">NULAABS<span className="text-red-600">.</span></h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-12">Your Creative AI Power Tool</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://nulaabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#DC2626] text-white border border-[#DC2626] text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-black transition-all duration-300 text-center rounded-none"
              >
                {t.btnBeta}
              </a>
              <a 
                href="https://nulaabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 border border-black/20 text-black text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 text-center rounded-none"
              >
                {t.btnWaitlist}
              </a>
            </div>
          </div>
        </section>

        {/* Showcase Feature Grid Slideshow Section */}
        <section className="py-24 px-6 md:px-12 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Grid 01 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div className="w-full mb-8">
                  <Slideshow images={[
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/flat%20lay%20to%20campagign1.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/flat%20lay%20campagin2.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/Flat%20lay%20to%20campagin3.png"
                  ]} interval={1500} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">01</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Do Plano para a Campanha' : 'From Flat to Campaign'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Desenho em plano ou CAD de entrada. Foto de e-commerce e depois editorial completo de saída. Um produto. Três saídas. Zero sessões fotográficas.'
                      : 'Flatlay or CAD drawing in. E-com shot, then full editorial out. One product. Three outputs. Zero shoots.'}
                  </p>
                </div>
              </div>

              {/* Grid 02 */}
              <div className="p-8 md:p-10 bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div className="w-full mb-8">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/place%20your%20product%20anywhere3.png"
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/place%20your%20product%20anywhere1.png"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">02</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Coloque o seu Produto. Em qualquer lugar.' : 'Place Your Product. Anywhere'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Coloque qualquer produto num espaço com curadoria artística com um único clique — ou crie o seu próprio mundo a partir de um moodboard de campanha.'
                      : 'Drop any product into a curated art-directed space with one click — or build your own world from a campaign moodboard.'}
                  </p>
                </div>
              </div>

              {/* Grid 03 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div className="w-full mb-8">
                  <Slideshow images={[
                    getWebpUrl("https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/2Artboard%202.png"),
                    getWebpUrl("https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/2Artboard%203.png"),
                    getWebpUrl("https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/2Artboard%201.png")
                  ]} interval={1500} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">03</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Do Conceito ao Momento' : 'Mood to Moment'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Crie um moodboard, escolha do elenco de modelos e o seu modelo selecionado usará o seu produto dentro do mundo que criou.'
                      : 'Build a moodboard, cast from the roster, and your locked model wears your product inside the world you created.'}
                  </p>
                </div>
              </div>

              {/* Grid 04 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden border border-black/5 mb-8">
                  <div className="grid grid-cols-2 gap-0 w-full h-full">
                    <img loading="lazy" decoding="async" src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/one%20model%20every%20shot1.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <img loading="lazy" decoding="async" src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/one%20model%20every%20shot2.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <img loading="lazy" decoding="async" src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/one%20model%20every%20shot3.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <img loading="lazy" decoding="async" src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/one%20model%20every%20shot4.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">04</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Um Modelo. Cada Foto.' : 'One Model. Every Shot'}<span className="text-[#DC2626]">.</span>
                  </h3>
                   <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                     {language === 'pt'
                       ? 'Bloqueie um modelo para a sua marca. Alterações de pose, produto, fundo — a identidade permanece constante. Sempre sua.'
                       : 'Lock a model to your brand. Pose changes, product changes, background changes — identity stays constant. Always yours.'}
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: FEATURED SECTION (A carousel of generative tools with input thumbs in the bottom-left corner of the card image) */}
        <section className="py-16 md:py-24 bg-black border-y border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              
              {/* Left Static Panel (3/12 wide) */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#DC2626] mb-6 block">
                  {language === 'pt' ? '01. CARACTERÍSTICAS' : '01. CORE FEATURES'}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tighter uppercase text-white mb-6">
                  {language === 'pt' ? 'O que pode fazer com o NULaabs' : 'What can you do with NULaabs'}<span className="text-[#DC2626]">?</span>
                </h2>
                <p className="text-sm md:text-base text-white/60 font-sans leading-relaxed mb-8 font-light">
                  {language === 'pt'
                    ? "Explore as ferramentas generativas do NULAABS para transformar imagens simples de produtos, flatlays e modelos em editoriais e campanhas de luxo instantaneamente."
                    : "Explore NULAABS' generative tools to turn raw assets, flatlays, and models into high-end fashion campaigns instantly."}
                </p>
                
                {/* Navigation Arrows & Primary Action Button */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start sm:items-center lg:items-start justify-between">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => scroll('left')}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      aria-label="Scroll Left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => scroll('right')}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      aria-label="Scroll Right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <a 
                    href="https://nulaab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex px-6 py-4 bg-white text-black hover:bg-[#DC2626] hover:text-white transition-colors text-xs font-sans font-bold uppercase tracking-widest items-center justify-center gap-2 rounded-none"
                  >
                    {language === 'pt' ? 'Explorar a nossa app' : 'Explore our app'} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Horizontal Scrolling Slider Carousel (8/12 wide) */}
              <div className="lg:col-span-8 relative w-full overflow-hidden">
                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {features
                    .filter(f => !['upscaler', 'client-approval'].includes(f.id))
                    .map((feature) => {
                    const isSpecialFeature = ['model-swapper', 'preset-art-directions', 'image-inpaint', 'background-changer'].includes(feature.id);
                    return (
                      <div 
                        key={feature.id}
                        className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] bg-[#0E0E0E] rounded-md border border-white/10 overflow-hidden group shadow-sm hover:shadow-md hover:border-[#DC2626]/20 transition-all duration-500 snap-start flex flex-col justify-between"
                      >
                        {/* Image Frame with custom Input thumbnail overlay */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border-b border-white/10">
                          {feature.id === 'video-generator' ? (
                            <video src={feature.mainImage} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-none scale-130" />
                          ) : isSpecialFeature ? (
                            <SmallSlideshow images={[feature.mainImage, feature.thumbImage]} interval={1000} />
                          ) : (
                            <img loading="lazy" decoding="async" 
                              src={feature.mainImage} 
                              alt={feature.title}
                              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none ${feature.id === 'out-painting' ? 'scale-115' : ''}`}
                              referrerPolicy="no-referrer"
                            />
                          )}
                          
                          {/* Before (Input) Thumbnail Inset */}
                          {!isSpecialFeature && !['model-creator', 'client-approval', 'repose'].includes(feature.id) && feature.thumbImage && (
                            <div className="absolute bottom-3 left-3 w-24 h-32 bg-black/95 backdrop-blur-sm p-1.5 rounded border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden z-10 transition-transform duration-300 group-hover:scale-105">
                              <div className="flex-1 w-full overflow-hidden rounded-sm bg-neutral-50">
                                <img loading="lazy" decoding="async" 
                                  src={feature.thumbImage} 
                                  alt="Input thumbnail"
                                  className="w-full h-full object-cover rounded-none"
                                  referrerPolicy="no-referrer"
                                  />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* White Metadata Info Container */}
                        <div className="p-6 bg-[#0E0E0E] flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-4 mb-2">
                              <h3 className="font-display font-bold uppercase tracking-wide text-sm md:text-base text-white group-hover:text-[#DC2626] transition-colors">
                                {feature.title}
                              </h3>
                              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#DC2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                            </div>
                            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile-only Action Button */}
              <div className="col-span-1 lg:hidden w-full mt-4">
                <a 
                  href="https://nulaab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-white text-black hover:bg-[#DC2626] hover:text-white transition-colors text-xs font-sans font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-none"
                >
                  {language === 'pt' ? 'Explorar a nossa app' : 'Explore our app'} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>



        {/* Section 2: WHAT WE'VE CREATED SO FAR (A stunning fashion showcase masonry grid interspersing 2D images and auto-playing silent videos) */}
        <section className="py-24 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-4 block">
                {language === 'pt' ? "O que criamos até agora" : "What we've created so far"}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-black leading-none tracking-tighter">
                {language === 'pt' ? 'PORTFÓLIO' : 'PORTFOLIO'}<span className="text-red-600">.</span>
              </h2>
            </div>

            <div className="flex justify-center mb-12">
              <div className="border border-black/15 bg-neutral-100/80 px-4 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.15em] text-black/70 rounded-none shadow-sm">
                {language === 'pt' ? "PRODUÇÕES NULAABS" : "NULAABS PRODUCTIONS"}
              </div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
              {randomizedPortfolioImages.map((image) => (
                  <div key={image.name} className={`relative overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5 mb-3 break-inside-avoid ${image.aspectRatio}`}>
                    {image.link.endsWith('.mp4') ? (
                      <video 
                        src={image.link}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img loading="lazy" decoding="async" 
                        src={getWebpUrl(image.link)} 
                        alt={image.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                ))
              }
            </div>

          </div>
        </section>



        {/* Section 3: REAL-WORLD BEFORE / AFTER GRID COMPARISON (Explaining the specific digital outputs) */}
{/*
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-8 block">{t.beforeAfterLabel}</span>
              <h2 className="text-4xl md:text-6xl font-display mb-6 tracking-tighter text-black uppercase text-center">
                FROM FLAT INVENTORY TO HIGH-END LUXURY<span className="text-red-600">.</span>
              </h2>
              <p className="text-black/60 text-lg max-w-2xl mx-auto font-sans font-light">
                {t.beforeAfterDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div 
                className="group bg-white p-6 border border-[#EEEEEE] rounded-md shadow-sm"
              >
                <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight border-b border-[#EEEEEE] pb-3 text-black">
                  {t.swimwearModel}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img loading="lazy" decoding="async" 
                        src={assets.rawSwimwear} 
                        alt="Raw Shorts"
                        className="w-full h-full object-cover filter saturate-50"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/75 text-white/90 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Raw Apparel Input
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img loading="lazy" decoding="async" 
                        src={assets.heroModel} 
                        alt="Lookbook output"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Lookbook Output
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="group bg-white p-6 border border-[#EEEEEE] rounded-md shadow-sm"
              >
                <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight border-b border-[#EEEEEE] pb-3 text-black">
                  {t.jewelrySocial}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img loading="lazy" decoding="async" 
                        src={assets.rawJewellery} 
                        alt="Raw necklace"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/75 text-white/90 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        CAD Raw Input
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img loading="lazy" decoding="async" 
                        src={assets.jewellerySocial} 
                        alt="Fine jewelry output"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Reflective Output
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        */}

        {/* Section 4: THE PLATFORM CORE ADVANTAGES */}
        <section className="py-24 md:py-32 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter uppercase text-white">
                {language === 'pt' ? 'PRONTO PARA ESCALAR?' : 'READY TO SCALE?'}<span className="text-red-500">.</span>
              </h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-sans font-light">
                {t.ctaDesc}
              </p>
              <div className="flex justify-center">
                <Link 
                  to={getLanguagePath('/contact')}
                  className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shrink-0 rounded-none w-fit block"
                >
                  {t.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { useLanguage } from '../../contexts/LanguageContext';
import { LazyVideo } from '../../components/LazyVideo';
import { ExternalLink, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { getAssetUrl } from '../../constants';

export const FranksAustralia = () => {
  const { t, getLanguagePath } = useLanguage();

  const instagramPosts = [
    {
      image: getAssetUrl('franks/1_SOCIAL_FRANKS.png'),
      caption: "Sunshine State Of Mind... more",
      likes: "1,234"
    },
    {
      image: getAssetUrl('franks/2_SOCIAL_FRANKS.png'),
      caption: "Pattern to Publication... more",
      likes: "856"
    },
    {
      image: getAssetUrl('franks/3_SOCIAL_FRANKS.png'),
      caption: "Australian Sun... more",
      likes: "2,102"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <ShowcaseHero 
          title={t.franks.heroTitle}
          subtitle={t.franks.heroSubtitle}
          description={t.franks.heroDescription}
          imageSrc={getAssetUrl('franks/FRANKS_HEAD (1).jpg')}
          caseStudyNumber="04"
          sector="Fashion"
          deliverables="Pattern / Publication / Video"
          railText="ESTABLISHED IN AUSTRALIA / PREMIUM"
          imagePosition="right"
        />

        {/* Section 01: Digital Prototyping */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">01. {t.franks.prototyping}</span>
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                  {t.franks.prototypingTitle}<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>{t.franks.prototypingText}</p>
                  <div className="space-y-4">
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">{t.common.power}:</span> {t.franks.prototypingPower}</p>
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">{t.common.proof}:</span> {t.franks.prototypingProof}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                  <BeforeAfterSlider 
                  beforeImage={getAssetUrl('franks/SLIDE_1_1.png')}
                  afterImage={getAssetUrl('franks/SLIDE_2_1.png')}
                  beforeLabel={t.franks.beforeLabel}
                  afterLabel={t.franks.afterLabel}
                  className="aspect-[4/5] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Detail & Constancy */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">02. {t.franks.constancy}</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                {t.franks.ecommTitle}<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>{t.franks.ecommText}</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                  <div className="bg-white p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">{t.common.power}</p>
                    <p className="text-sm text-narrative-shadow/60">{t.franks.ecommPower}</p>
                  </div>
                  <div className="bg-white p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">{t.common.control}</p>
                    <p className="text-sm text-narrative-shadow/60">{t.franks.ecommControl}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src={getAssetUrl('franks/Eccom_1.png')} className="w-full h-full object-cover rounded-md" alt="E-comm 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src={getAssetUrl('franks/ECOM_FRONT.png')} className="w-full h-full object-cover rounded-md" alt="E-comm 2" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src={getAssetUrl('franks/ECOM_BACK_1 (1).png')} className="w-full h-full object-cover rounded-md" alt="E-comm 3" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Brand Building */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">03. {t.franks.brandBuilding}</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                {t.franks.lifestyleTitle}<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>{t.franks.lifestyleText}</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                  <div className="bg-[#F5F5F0] p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">{t.common.power}</p>
                    <p className="text-sm text-narrative-shadow/60">{t.franks.lifestylePower}</p>
                  </div>
                  <div className="bg-[#F5F5F0] p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">{t.common.control}</p>
                    <p className="text-sm text-narrative-shadow/60">{t.franks.lifestyleControl}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="aspect-[9/16] overflow-hidden shadow-2xl rounded-md">
                <img src={getAssetUrl('franks/2Artboard 2.png')} className="w-full h-full object-cover rounded-md" alt="Lifestyle 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-2xl max-w-sm mx-auto md:ml-auto rounded-md">
                <LazyVideo 
                  src={getAssetUrl('franks/Franks Lifestyle. Vid .mp4')} 
                  className="w-full h-full object-cover rounded-md" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Getting Social */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">{t.franks.gettingSocial}</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                {t.franks.socialTitle}<span className="text-primary">.</span>
              </h2>
              <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>{t.franks.socialText}</p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <p><span className="font-bold text-black uppercase tracking-wider text-sm block mb-2">{t.common.power}:</span> {t.franks.socialPower}</p>
                  <p><span className="font-bold text-black uppercase tracking-wider text-sm block mb-2">{t.common.result}:</span> {t.franks.socialResult}</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {instagramPosts.map((post, i) => (
                <div key={i} className="bg-white border border-black/10 shadow-xl overflow-hidden rounded-md">
                  <div className="flex items-center p-3 gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">FA</div>
                    <div className="text-xs font-bold">franksaustralia • <span className="text-primary">{t.common.follow}</span></div>
                  </div>
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src={getAssetUrl(post.image)} className="w-full h-full object-cover" alt="Instagram post" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-3">
                      <div className="flex gap-4">
                        <Heart className="w-6 h-6" />
                        <MessageCircle className="w-6 h-6" />
                        <Send className="w-6 h-6" />
                      </div>
                      <Bookmark className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold mb-1">{post.likes} {t.common.likes}</div>
                    <div className="text-sm"><span className="font-bold">franksaustralia</span> {post.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-display leading-tight uppercase">
              “{t.franks.footerQuote}”
            </h2>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 text-black">{t.common.speedSoulScale}<span className="text-primary">.</span></h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to={getLanguagePath('/onboarding')} 
                className="bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary transition-colors"
              >
                {t.common.inquireNow} <ExternalLink className="w-4 h-4" />
              </Link>
              <Link 
                to={getLanguagePath('/automation')} 
                className="bg-white text-black border border-black px-10 py-5 text-sm font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
              >
                Automate
              </Link>
            </div>
            <p className="mt-20 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">{t.common.copyright} × FRANKS AUSTRALIA.</p>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ title: t.palmeiral.heroTitle, slug: getLanguagePath('/showcase/o-palmeiral'), thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png' }}
          nextProject={{ title: t.quinta.heroTitle, slug: getLanguagePath('/showcase/quinta-do-pinto'), thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png' }}
        />
      </main>
    </div>
  );
};

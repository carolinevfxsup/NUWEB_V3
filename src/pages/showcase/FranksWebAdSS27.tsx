import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { LazyVideo } from '../../components/LazyVideo';
import { ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../../constants';

export const FranksWebAdSS27 = () => {
  const { getLanguagePath } = useLanguage();

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <ShowcaseHero 
          title="Franks Web AD SS27"
          subtitle="Web AD SS27 / Autonomous Fashion Campaign"
          description="A high-impact autonomous web advertisement and digital campaign for Franks Australia SS27 collection, uniting high-speed generative video pipelines with precise editorial art direction."
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%205-100.jpg"
          caseStudyNumber="02"
          sector="Fashion & Motion"
          deliverables="Web AD / Motion / Autonomous Pipeline"
          railText="FRANKS AUSTRALIA / SS27 CAMPAIGN"
          imagePosition="right"
        />

        {/* Section 01: The Motion Film */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">01. CAMPAIGN FILM</span>
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                  WEB AD SS27<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>
                    Engineered for maximum digital engagement, the Franks Web AD SS27 campaign merges fluid motion capture with generative AI staging. Every frame is optimized for high-retention social and web-banner placement.
                  </p>
                  <div className="space-y-4">
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">Power:</span> Always-on high conversion display assets deployed across multi-tier web channels.</p>
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">Control:</span> Strict HILT brand compliance guardrails governing color palette and typography.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[9/16] overflow-hidden rounded-md shadow-2xl bg-black">
                <LazyVideo 
                  src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/FRANKS.mp4" 
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

        {/* Section 02: Digital Staging & Detail */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">02. STAGING & ASSETS</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 text-black">
                PRECISION STAGING<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>
                  By bypassing traditional location scouting friction, our autonomous pipeline generated tailored environmental backdrops reflecting coastal Australian aesthetics with absolute fidelity.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img loading="lazy" decoding="async" src={getAssetUrl('franks/Eccom_1.png')} className="w-full h-full object-cover rounded-md" alt="Asset 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img loading="lazy" decoding="async" src={getAssetUrl('franks/ECOM_FRONT.png')} className="w-full h-full object-cover rounded-md" alt="Asset 2" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img loading="lazy" decoding="async" src={getAssetUrl('franks/1_SOCIAL_FRANKS.png')} className="w-full h-full object-cover rounded-md" alt="Asset 3" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 text-black">SPEED. SOUL. SCALE<span className="text-primary">.</span></h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link 
                to={getLanguagePath('/onboarding')} 
                className="bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary transition-colors"
              >
                Inquire Now <ExternalLink className="w-4 h-4" />
              </Link>
              <Link 
                to={getLanguagePath('/automation')} 
                className="bg-white text-black border border-black px-10 py-5 text-sm font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
              >
                Automate
              </Link>
            </div>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ title: 'Salt Lily', slug: getLanguagePath('/showcase/salt-lily'), thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png' }}
          nextProject={{ title: 'Quinta Do Pinto', slug: getLanguagePath('/showcase/quinta-do-pinto'), thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png' }}
        />
      </main>
    </div>
  );
};

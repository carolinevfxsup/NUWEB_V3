import { HomeResultsBento } from '../components/HomeResultsBento';

export const ShowcaseGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <section id="results" className="py-16 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-[15vw] md:text-[12vw] font-display font-bold uppercase tracking-tighter text-white leading-[0.85]">
              SELECTED WORK<span className="text-red-600">.</span>
            </h1>
          </div>
          
          <HomeResultsBento />
        </div>
      </section>
    </div>
  );
};

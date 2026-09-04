import { HomeResultsBento } from '../components/HomeResultsBento';

export const ShowcaseGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <section id="results" className="py-16 px-6 md:px-[60px] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-[0.85]">
              SELECTED WORK<span className="text-red-600">.</span>
            </h1>
          </div>
          
          <HomeResultsBento />
        </div>
      </section>
    </div>
  );
};

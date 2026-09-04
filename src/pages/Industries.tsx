import { FadeIn } from '../components/FadeIn';

const industryData = [
  {
    title: "Wineries",
    desc: "Capturing the heritage and textural depth of your vintage through HILT-guided visuals that evoke specific terroir, sun-drenched landscapes, and premium bottle details that anchor your luxury status."
  },
  {
    title: "Restaurants & Hospitality",
    desc: "Creating immersive architectural atmospheres and hyper-realistic culinary visuals that transport guests into your world, ensuring every social post and digital menu resonates with your venue's unique character."
  },
  {
    title: "Ecommerce",
    desc: "Transforming technical baselines into high-conversion narratives through automated product consistency and cinematic storytelling, ensuring your digital storefront remains always-on and globally competitive without production bottlenecks."
  },
  {
    title: "Fashion",
    desc: "From raw sketches to fully realized studio shoots on locked brand models, we scale your seasonal collections with surgical precision, protecting your visual DNA across campaigns and flatlays."
  },
  {
    title: "Jewellery & Accessories",
    desc: "High-fidelity macro shots that emphasize material craftsmanship, stone clarity, and metallic luster, delivering the elite level of detail required for the niche luxury jewellery market at algorithmic speed."
  },
  {
    title: "B2B",
    desc: "Elevating corporate communication into high-equity strategic narratives through polished graphic design and motion, establishing your professional authority while humanizing your technical infrastructure for global reach and market dominance."
  }
];

export const Industries = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <FadeIn delay={0.1}>
        <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-12">
          INDUSTRY SOLUTIONS
        </h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industryData.map((industry, i) => (
          <FadeIn key={i} delay={0.2 + (i * 0.1)} className="h-full">
            <div className="bg-neutral-100 p-8 flex flex-col justify-between hover:bg-black hover:text-white transition-colors group cursor-pointer h-full">
              <div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tighter mb-4">{industry.title}</h3>
                <p className="font-sans text-sm leading-relaxed opacity-80">{industry.desc}</p>
              </div>
              <span className="font-mono text-xs opacity-50 group-hover:text-red-500 mt-8">+</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

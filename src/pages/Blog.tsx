import { motion } from 'motion/react';

export const Blog = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12"
      >
        Insights<span className="text-red-600">.</span>
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-neutral-100 mb-4 overflow-hidden">
              <div className="w-full h-full bg-neutral-200 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex gap-2 mb-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-black text-white px-2 py-1">Branding</span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest border border-black px-2 py-1">5 Min Read</span>
            </div>
            <h3 className="text-2xl font-display font-bold uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
              Brand Strategy Insights from a Born & Bred Strategist
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

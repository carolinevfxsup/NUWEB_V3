import { motion } from 'motion/react';

const cities = ['LISBON', 'LONDON', 'MELBOURNE'];

export const ScrollingBanner = () => {
  return (
    <div className="w-full bg-black py-3 overflow-hidden border-t border-b border-white/20">
      <motion.div 
        className="flex whitespace-nowrap gap-24 items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...cities, ...cities, ...cities, ...cities].map((city, i) => (
          <span 
            key={i} 
            className="text-sm font-black text-white uppercase tracking-[0.2em] flex-shrink-0"
          >
            {city}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

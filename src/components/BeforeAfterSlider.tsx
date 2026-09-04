import React, { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps & { className?: string }> = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden cursor-ew-resize select-none bg-gray-50 rounded-md ${className}`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="relative w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover block rounded-md" referrerPolicy="no-referrer" />
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20 z-20 rounded-full">
          {afterLabel}
        </div>
      </div>
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover block rounded-md" referrerPolicy="no-referrer" />
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20 z-20 rounded-full">
          {beforeLabel}
        </div>
      </div>
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-[#DC2626] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#DC2626] rounded-full" />
      </div>
    </div>
  );
};

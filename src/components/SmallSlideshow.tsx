import { useState, useEffect } from 'react';

export const SmallSlideshow = ({ images, interval = 3000 }: { images: string[], interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <img loading="lazy" decoding="async"
      src={images[index]}
      className="absolute inset-0 w-full h-full object-cover"
      referrerPolicy="no-referrer"
      alt="Slideshow"
    />
  );
};

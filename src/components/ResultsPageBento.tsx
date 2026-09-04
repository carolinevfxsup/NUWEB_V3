import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { showcases } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';

const googleIOImages = [
  'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/IO.gif',
  'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071149.jpeg',
  'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/GOOGLE_IO/opener/change_the_background_of_the_202605071145.jpeg'
];

export const ResultsPageBento = () => {
  const { t, getLanguagePath } = useLanguage();
  // Results page theme is light
  const bgColor = 'bg-black/5';
  const textColor = 'text-black';

  const [googleIOIndex, setGoogleIOIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGoogleIOIndex((prev) => (prev + 1) % googleIOImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 max-w-5xl mx-auto">
      {/* Project 1 (Wide) */}
      <Link to={getLanguagePath(showcases[0].slug)} className={`relative md:col-span-8 aspect-video ${bgColor} flex flex-col items-center justify-center p-4`}>
        <div className="relative w-full h-full md:w-[65%] md:h-[65%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/salt-lily-zoom.mp4" 
            className="w-full h-full object-cover transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[65%] pt-3">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[0].title}</h3>
        </div>
      </Link>

      {/* Project 3 (Portrait 9:16) - Quinta Do Pinto */}
      <Link to={getLanguagePath(showcases[2].slug)} className={`relative md:col-span-4 md:row-span-2 ${bgColor} flex flex-col items-center justify-center p-4`}>
        <div className="relative w-full h-full md:w-[65%] md:h-[65%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-02.mp4" 
            className="w-full h-full object-cover transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[65%] pt-3">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[2].title}</h3>
        </div>
      </Link>

      {/* Project 2 (3:4) */}
      <Link to={getLanguagePath(showcases[1].slug)} className={`relative md:col-span-4 aspect-[3/4] ${bgColor} flex flex-col items-center justify-center p-4`}>
        <div className="relative w-full h-full md:w-[65%] md:h-[65%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4" 
            className="w-full h-full object-cover transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[65%] pt-3">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[1].title}</h3>
        </div>
      </Link>

      {/* Quote Block 1 (3:4) */}
      <div className={`md:col-span-4 p-6 flex flex-col justify-center italic ${bgColor} aspect-[3/4]`}>
        <p className={`text-lg md:text-xl font-display font-medium leading-tight mb-4 ${textColor}`}>
          "{t.home.results.quotes[0].quote}"
        </p>
        <p className="section-label text-red-600">— {t.home.results.quotes[0].author}</p>
      </div>

      {/* Project 4 (Wide) */}
      <Link to={getLanguagePath(showcases[3].slug)} className={`relative md:col-span-8 aspect-video ${bgColor} flex flex-col items-center justify-center p-4`}>
        <div className="relative w-full h-full overflow-hidden rounded-md">
          {showcases[3].videoSrc ? (
            <LazyVideo 
              src={showcases[3].videoSrc} 
              className="w-full h-full object-cover transition-all duration-700" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          ) : (
            <img 
              src={showcases[3].imageSrc} 
              alt={showcases[3].title}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
        <div className="w-full pt-3 px-1">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[3].title}</h3>
        </div>
      </Link>

      {/* Project 5: Google I/O (Wide Slideshow) */}
      {showcases[4] && (
        <Link to={getLanguagePath(showcases[4].slug)} className={`relative md:col-span-8 aspect-video ${bgColor} flex flex-col items-center justify-center p-4`}>
          <div className="relative w-full h-full md:w-[65%] md:h-[65%] overflow-hidden rounded-md">
            {googleIOImages.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt={`Google I/O 2026 Stage 0${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-1000 ${googleIOIndex === i ? 'opacity-100' : 'opacity-0'}`}
                referrerPolicy="no-referrer"
              />
            ))}
            {/* Minimalist slider progress dots inside bento box */}
            <div className="absolute bottom-3 right-3 flex gap-1.5 z-10 bg-black/40 px-2.5 py-1 rounded-full">
              {googleIOImages.map((_, i) => (
                <div 
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${googleIOIndex === i ? 'bg-red-500' : 'bg-white/40'}`}
                />
              ))}
            </div>
            {/* Visual Label indicators overlay */}
            <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 border border-white/10 text-[8px] font-mono tracking-widest text-white uppercase rounded-none">
              {googleIOIndex === 0 && "01. PUPPET PLATE"}
              {googleIOIndex === 1 && "02. AI TEXTURE PASS"}
              {googleIOIndex === 2 && "03. GOOGLE FLOW COMP"}
            </div>
          </div>
          <div className="w-[65%] pt-3 flex items-center justify-between">
            <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>
              {showcases[4].title}
            </h3>
            <span className="text-[9px] font-mono text-red-500 tracking-widest uppercase font-bold">
              SLIDESHOW
            </span>
          </div>
        </Link>
      )}

      {/* Quote Block 2 (3:4) */}
      <div className={`md:col-span-4 p-6 flex flex-col justify-center italic ${bgColor} aspect-[3/4]`}>
        <p className={`text-lg md:text-xl font-display font-medium leading-tight mb-4 ${textColor}`}>
          "{t.home.results.quotes[1].quote}"
        </p>
        <p className="section-label text-red-600">— {t.home.results.quotes[1].author}</p>
      </div>
    </div>
  );
};

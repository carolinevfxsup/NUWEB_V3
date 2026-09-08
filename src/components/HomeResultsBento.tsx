import { useState } from 'react';
import { Link } from 'react-router-dom';
import { showcases } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HomeResultsBento = () => {
  const { getLanguagePath } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(showcases.length / itemsPerPage);

  const currentProjects = showcases.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* Carousel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center transition-opacity duration-500">
        {currentProjects.map((project, idx) => {
          const globalIndex = currentPage * itemsPerPage + idx + 1;
          const displayNum = globalIndex < 10 ? `0${globalIndex}` : `${globalIndex}`;
          return (
            <Link 
              key={project.title}
              to={getLanguagePath(project.slug)} 
              className="group relative md:col-span-4 bg-white/5 aspect-[3/4] max-h-[420px] md:max-h-[480px] overflow-hidden block mx-auto w-full"
            >
              {project.videoSrc ? (
                <LazyVideo 
                  src={project.videoSrc} 
                  className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              ) : (
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase block mb-1 font-bold">
                  {displayNum} / {project.subtitle}
                </span>
                <h3 className="text-base md:text-lg font-display font-bold tracking-tight uppercase text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Carousel Navigation Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-1.5 transition-all duration-300 ${
                currentPage === index ? 'w-8 bg-red-600' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

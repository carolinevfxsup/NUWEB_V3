import { Link } from 'react-router-dom';
import { showcases, getAssetUrl } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';

export const ResultsPageBento = () => {
  const { getLanguagePath } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {showcases.map((project) => (
        <Link key={project.slug} to={getLanguagePath(project.slug)} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden bg-black/5 rounded-md">
            {project.videoSrc ? (
              project.mobileVideoSrc ? (
                <>
                  <LazyVideo
                    src={project.videoSrc}
                    className="hidden sm:block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <LazyVideo
                    src={project.mobileVideoSrc}
                    className="block sm:hidden w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </>
              ) : (
                <LazyVideo
                  src={project.videoSrc}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )
            ) : (
              <img
                src={getAssetUrl(project.imageSrc || '')}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          <div className="pt-3">
            <h3 className="text-xs font-display font-bold tracking-tighter uppercase text-black">
              {project.title}
            </h3>
            <p className="text-[10px] text-black/40 uppercase tracking-widest mt-1">
              {project.subtitle}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

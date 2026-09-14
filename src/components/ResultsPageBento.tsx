import { Link } from 'react-router-dom';
import { showcases, getAssetUrl } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';

export const ResultsPageBento = () => {
  const { getLanguagePath } = useLanguage();

  // Quinta do Pinto concept film pinned to the top; everything else
  // keeps the order it already has in constants.ts.
  const conceptFilm = showcases.find((s) => s.slug === '/showcase/quinta-do-pinto-concept-film');
  const rest = showcases.filter((s) => s.slug !== '/showcase/quinta-do-pinto-concept-film');
  const orderedShowcases = conceptFilm ? [conceptFilm, ...rest] : showcases;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {orderedShowcases.map((project) => (
        <Link key={project.slug} to={getLanguagePath(project.slug)} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden bg-black/5 rounded-md">
            {project.videoSrc ? (
              <LazyVideo
                src={project.videoSrc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
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

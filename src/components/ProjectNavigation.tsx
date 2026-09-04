import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectNavigationProps {
  prevProject?: {
    title: string;
    slug: string;
    thumbnail: string;
  };
  nextProject: {
    title: string;
    slug: string;
    thumbnail: string;
  };
}

export const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  const { t, getLanguagePath } = useLanguage();

  return (
    <section className="py-24 border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {prevProject ? (
            <Link to={getLanguagePath(prevProject.slug)} className="group flex items-center gap-8 text-left">
              <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
              <div className="w-24 h-24 overflow-hidden shrink-0 bg-gray-50 rounded-md">
                <img 
                  src={prevProject.thumbnail} 
                  alt={prevProject.title} 
                  className="w-full h-full object-cover transition-all rounded-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-400 mb-2">{t.common.prevProject}</p>
                <h3 className="text-3xl font-sans font-bold italic group-hover:text-primary transition-colors">
                  {prevProject.title}
                </h3>
              </div>
            </Link>
          ) : (
            <Link to={getLanguagePath('/')} className="flex items-center gap-2 font-bold hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> {t.nav.allWork.toUpperCase()}
            </Link>
          )}
          
          <Link to={getLanguagePath(nextProject.slug)} className="group flex items-center gap-8 text-right">
            <div>
              <p className="text-xs font-bold uppercase text-gray-400 mb-2">{t.common.nextProject}</p>
              <h3 className="text-3xl font-sans font-bold italic group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="w-24 h-24 overflow-hidden shrink-0 bg-gray-50 rounded-md">
              <img 
                src={nextProject.thumbnail} 
                alt={nextProject.title} 
                className="w-full h-full object-cover transition-all rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

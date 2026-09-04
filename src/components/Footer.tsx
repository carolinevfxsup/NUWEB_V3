import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { language, getLanguagePath } = useLanguage();
  const isPt = language === 'pt';
  
  return (
    <footer className="bg-red-600 text-white py-16 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-[60px] grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Column */}
        <div className="space-y-8 md:col-span-1">
          <h2 className="text-2xl font-bold">SUBSCRIBE TO STAY IN TOUCH.</h2>
          <div className="relative">
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS.." 
              className="w-full bg-transparent border-b border-white py-2 placeholder-white focus:outline-none"
            />
            <ArrowRight className="absolute right-0 top-2" />
          </div>
          <div className="space-y-2">
            <a href="https://www.linkedin.com/company/112232643/" target="_blank" rel="noopener noreferrer" className="block hover:underline">LinkedIn →</a>
            <a href="https://www.instagram.com/nustudios.agency/" target="_blank" rel="noopener noreferrer" className="block hover:underline">Instagram →</a>
            <a href="https://www.youtube.com/@NUStudiosAIVFX" target="_blank" rel="noopener noreferrer" className="block hover:underline">Youtube →</a>
            <a href="https://www.tiktok.com/@nustudios_ai_vfx" target="_blank" rel="noopener noreferrer" className="block hover:underline">TikTok →</a>
          </div>
          <div className="space-y-2">
            <Link to={getLanguagePath('/onboarding')} className="block hover:underline">Start A Project</Link>
            <a href="mailto:info@nustudios.co.uk" className="block hover:underline">info@nustudios.co.uk</a>
            <a href="mailto:careers@nustudios.co.uk" className="block hover:underline">careers@nustudios.co.uk</a>
          </div>
        </div>

        {/* Middle Column - Navigation */}
        <div className="space-y-8 md:col-span-3">
          <h2 className="text-2xl font-bold">NAVIGATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Main</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to={getLanguagePath('/')} className="hover:underline">Home</Link></li>
                <li><Link to={getLanguagePath('/results')} className="hover:underline">Results</Link></li>
                <li><Link to={getLanguagePath('/industries')} className="hover:underline">Industries</Link></li>
                <li><Link to={getLanguagePath('/about')} className="hover:underline">About</Link></li>
                <li><Link to={getLanguagePath('/contact')} className="hover:underline">Contact</Link></li>
                <li><Link to={getLanguagePath('/blog')} className="hover:underline">Blog</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={getLanguagePath('/creative-direction')} className="hover:underline">
                    {isPt ? 'Direção Criativa' : 'Creative Direction'}
                  </Link>
                </li>
                <li>
                  <Link to={getLanguagePath('/film-animation')} className="hover:underline">
                    {isPt ? 'Filme & Animação' : 'Film & Animation'}
                  </Link>
                </li>
                <li>
                  <Link to={getLanguagePath('/ai-visualisation')} className="hover:underline">
                    {isPt ? 'Visualização por IA' : 'AI Visualisation'}
                  </Link>
                </li>
                <li>
                  <Link to={getLanguagePath('/automation')} className="hover:underline">
                    {isPt ? 'Automações de IA à Medida' : 'Bespoke AI Automations'}
                  </Link>
                </li>
                <li>
                  <Link to={getLanguagePath('/nulaabs')} className="hover:underline">
                    NuLaabs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Industries</h3>
              <ul className="space-y-2 text-sm">
                {industries.map((industry) => (
                  <li key={industry}><Link to={getLanguagePath('/industries')} className="hover:underline">{industry}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-sm">
        ©NUstudios2026
      </div>
    </footer>
  );
};

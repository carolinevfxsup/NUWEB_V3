import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

// Lazy load pages for code-splitting and improved performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Results = lazy(() => import('./pages/Results').then(m => ({ default: m.Results })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const CreativeDirection = lazy(() => import('./pages/pillars/CreativeDirection').then(m => ({ default: m.CreativeDirection })));
const AIVisualisation = lazy(() => import('./pages/pillars/AIVisualisation').then(m => ({ default: m.AIVisualisation })));
const FilmAnimation = lazy(() => import('./pages/pillars/FilmAnimation').then(m => ({ default: m.FilmAnimation })));
const BespokeAutomations = lazy(() => import('./pages/pillars/BespokeAutomations').then(m => ({ default: m.BespokeAutomations })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const ShowcaseGallery = lazy(() => import('./pages/ShowcaseGallery').then(m => ({ default: m.ShowcaseGallery })));
const SaltLily = lazy(() => import('./pages/showcase/SaltLily').then(m => ({ default: m.SaltLily })));
const FranksAustralia = lazy(() => import('./pages/showcase/FranksAustralia').then(m => ({ default: m.FranksAustralia })));
const FranksWebAdSS27 = lazy(() => import('./pages/showcase/FranksWebAdSS27').then(m => ({ default: m.FranksWebAdSS27 })));
const QuintaDoPinto = lazy(() => import('./pages/showcase/QuintaDoPinto').then(m => ({ default: m.QuintaDoPinto })));
const QuintaDoPintoConceptFilm = lazy(() => import('./pages/showcase/QuintaDoPintoConceptFilm').then(m => ({ default: m.QuintaDoPintoConceptFilm })));
const OPalmeiral = lazy(() => import('./pages/showcase/OPalmeiral').then(m => ({ default: m.OPalmeiral })));
const GoogleIO = lazy(() => import('./pages/showcase/GoogleIO').then(m => ({ default: m.GoogleIO })));
const Onboarding = lazy(() => import('./pages/Onboarding').then(m => ({ default: m.Onboarding })));
const Nulaabs = lazy(() => import('./pages/Nulaabs').then(m => ({ default: m.Nulaabs })));

// Loading spinner fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] py-12">
    <div className="w-6 h-6 border-2 border-black/10 border-t-red-600 rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-bg text-text selection:bg-red-600 selection:text-white">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pt" element={<Home />} />
                <Route path="/results" element={<Results />} />
                <Route path="/pt/results" element={<Results />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pt/services" element={<Services />} />
                
                {/* Category Landing Pages */}
                <Route path="/creative-direction" element={<CreativeDirection />} />
                <Route path="/pt/creative-direction" element={<CreativeDirection />} />
                <Route path="/services/creative-direction" element={<CreativeDirection />} />
                <Route path="/pt/services/creative-direction" element={<CreativeDirection />} />

                <Route path="/ai-visualisation" element={<AIVisualisation />} />
                <Route path="/pt/ai-visualisation" element={<AIVisualisation />} />
                <Route path="/services/ai-visualisation" element={<AIVisualisation />} />
                <Route path="/pt/services/ai-visualisation" element={<AIVisualisation />} />

                <Route path="/film-animation" element={<FilmAnimation />} />
                <Route path="/pt/film-animation" element={<FilmAnimation />} />
                <Route path="/services/film-animation" element={<FilmAnimation />} />
                <Route path="/pt/services/film-animation" element={<FilmAnimation />} />

                <Route path="/automation" element={<BespokeAutomations />} />
                <Route path="/pt/automation" element={<BespokeAutomations />} />
                <Route path="/automations" element={<BespokeAutomations />} />
                <Route path="/pt/automations" element={<BespokeAutomations />} />
                <Route path="/bespoke-ai-automations" element={<BespokeAutomations />} />
                <Route path="/pt/bespoke-ai-automations" element={<BespokeAutomations />} />
                <Route path="/services/bespoke-ai-automations" element={<BespokeAutomations />} />
                <Route path="/pt/services/bespoke-ai-automations" element={<BespokeAutomations />} />

                <Route path="/industries" element={<Industries />} />
                <Route path="/pt/industries" element={<Industries />} />
                <Route path="/about" element={<About />} />
                <Route path="/pt/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pt/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pt/blog" element={<Blog />} />
                <Route path="/showcase" element={<ShowcaseGallery />} />
                <Route path="/pt/showcase" element={<ShowcaseGallery />} />
                <Route path="/showcase/salt-lily" element={<SaltLily />} />
                <Route path="/pt/showcase/salt-lily" element={<SaltLily />} />
                <Route path="/showcase/franks-web-ad-ss27" element={<FranksWebAdSS27 />} />
                <Route path="/pt/showcase/franks-web-ad-ss27" element={<FranksWebAdSS27 />} />
                <Route path="/showcase/franks-australia" element={<FranksAustralia />} />
                <Route path="/pt/showcase/franks-australia" element={<FranksAustralia />} />
                <Route path="/showcase/quinta-do-pinto" element={<QuintaDoPinto />} />
                <Route path="/pt/showcase/quinta-do-pinto" element={<QuintaDoPinto />} />
                <Route path="/showcase/quinta-do-pinto-concept-film" element={<QuintaDoPintoConceptFilm />} />
                <Route path="/pt/showcase/quinta-do-pinto-concept-film" element={<QuintaDoPintoConceptFilm />} />
                <Route path="/showcase/o-palmeiral" element={<OPalmeiral />} />
                <Route path="/pt/showcase/o-palmeiral" element={<OPalmeiral />} />
                <Route path="/googleio" element={<GoogleIO />} />
                <Route path="/pt/googleio" element={<GoogleIO />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/pt/onboarding" element={<Onboarding />} />
                <Route path="/nulaabs" element={<Nulaabs />} />
                <Route path="/pt/nulaabs" element={<Nulaabs />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </Router>
  );
}

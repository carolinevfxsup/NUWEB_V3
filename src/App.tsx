import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Wine } from './pages/Wine';

// Helper with auto-retry and cache-buster reload for dynamic imports
function lazyWithRetry<T extends Record<string, any>>(
  factory: () => Promise<T>,
  namedExport: keyof T
) {
  return lazy(async () => {
    try {
      const module = await factory();
      return { default: module[namedExport] };
    } catch (error: any) {
      console.warn(`Dynamic import error for ${String(namedExport)}, attempting retry...`, error);
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const module = await factory();
        return { default: module[namedExport] };
      } catch (retryError) {
        if (typeof window !== 'undefined') {
          const key = `retry_${String(namedExport)}`;
          if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, '1');
            window.location.reload();
          }
        }
        throw retryError;
      }
    }
  });
}

// Lazy load secondary pages with resilient error recovery
const Results = lazyWithRetry(() => import('./pages/Results'), 'Results');
const Services = lazyWithRetry(() => import('./pages/Services'), 'Services');
const Industries = lazyWithRetry(() => import('./pages/Industries'), 'Industries');
const About = lazyWithRetry(() => import('./pages/About'), 'About');
const CreativeDirection = lazyWithRetry(() => import('./pages/pillars/CreativeDirection'), 'CreativeDirection');
const AIVisualisation = lazyWithRetry(() => import('./pages/pillars/AIVisualisation'), 'AIVisualisation');
const FilmAnimation = lazyWithRetry(() => import('./pages/pillars/FilmAnimation'), 'FilmAnimation');
const BespokeAutomations = lazyWithRetry(() => import('./pages/pillars/BespokeAutomations'), 'BespokeAutomations');
const Contact = lazyWithRetry(() => import('./pages/Contact'), 'Contact');
const Blog = lazyWithRetry(() => import('./pages/Blog'), 'Blog');
const ShowcaseGallery = lazyWithRetry(() => import('./pages/ShowcaseGallery'), 'ShowcaseGallery');
const SaltLily = lazyWithRetry(() => import('./pages/showcase/SaltLily'), 'SaltLily');
const FranksAustralia = lazyWithRetry(() => import('./pages/showcase/FranksAustralia'), 'FranksAustralia');
const FranksWebAdSS27 = lazyWithRetry(() => import('./pages/showcase/FranksWebAdSS27'), 'FranksWebAdSS27');
const QuintaDoPinto = lazyWithRetry(() => import('./pages/showcase/QuintaDoPinto'), 'QuintaDoPinto');
const QuintaDoPintoConceptFilm = lazyWithRetry(() => import('./pages/showcase/QuintaDoPintoConceptFilm'), 'QuintaDoPintoConceptFilm');
const OPalmeiral = lazyWithRetry(() => import('./pages/showcase/OPalmeiral'), 'OPalmeiral');
const GoogleIO = lazyWithRetry(() => import('./pages/showcase/GoogleIO'), 'GoogleIO');
const NOS = lazyWithRetry(() => import('./pages/showcase/NOS'), 'NOS');
const Onboarding = lazyWithRetry(() => import('./pages/Onboarding'), 'Onboarding');
const Nulaabs = lazyWithRetry(() => import('./pages/Nulaabs'), 'Nulaabs');

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
            <ErrorBoundary>
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
                  <Route path="/showcase/nos-ai-campaign" element={<NOS />} />
                  <Route path="/pt/showcase/nos-ai-campaign" element={<NOS />} />
                  <Route path="/googleio" element={<GoogleIO />} />
                  <Route path="/pt/googleio" element={<GoogleIO />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/pt/onboarding" element={<Onboarding />} />
                  <Route path="/nulaabs" element={<Nulaabs />} />
                  <Route path="/pt/nulaabs" element={<Nulaabs />} />

                  <Route path="/wine" element={<Wine />} />
                  <Route path="/pt/wine" element={<Wine />} />
                  <Route path="/wineries" element={<Wine />} />
                  <Route path="/pt/wineries" element={<Wine />} />
                  <Route path="/Wineries" element={<Wine />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </Router>
  );
}

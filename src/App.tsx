import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Results } from './pages/Results';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { About } from './pages/About';
import { CreativeDirection } from './pages/pillars/CreativeDirection';
import { AIVisualisation } from './pages/pillars/AIVisualisation';
import { FilmAnimation } from './pages/pillars/FilmAnimation';
import { BespokeAutomations } from './pages/pillars/BespokeAutomations';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { ShowcaseGallery } from './pages/ShowcaseGallery';
import { SaltLily } from './pages/showcase/SaltLily';
import { FranksAustralia } from './pages/showcase/FranksAustralia';
import { FranksWebAdSS27 } from './pages/showcase/FranksWebAdSS27';
import { QuintaDoPinto } from './pages/showcase/QuintaDoPinto';
import { QuintaDoPintoConceptFilm } from './pages/showcase/QuintaDoPintoConceptFilm';
import { OPalmeiral } from './pages/showcase/OPalmeiral';
import { GoogleIO } from './pages/showcase/GoogleIO';
import { Onboarding } from './pages/Onboarding';
import { Nulaabs } from './pages/Nulaabs';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-bg text-text selection:bg-red-600 selection:text-white">
          <Header />
          <main className="flex-1">
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
          </main>
          <Footer />
        </div>
        <Analytics />
      </LanguageProvider>
    </Router>
  );
}

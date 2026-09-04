import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { runDNAScan } from '../services/geminiService';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Zap, ShieldCheck, BarChart3, Loader2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface ScanResult {
  brand_identity: {
    name: string;
    equity_score: number;
    status: string;
  };
  visual_pipeline: {
    stage_1_ecomm: string;
    stage_2_lifestyle: string;
    stage_3_video: string;
  };
  strategic_wins: string[];
  hitl_recommendation: string;
}

export const DNAScan = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get('url') || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await runDNAScan(input);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('An error occurred while scanning. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get('url')) {
      handleScan();
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Section 1: Hero */}
      {!result && (
        <section className="py-24 md:py-32 bg-gray-100 text-gray-900 w-full">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-8">
                {t.dnaScan.title.split(' ')[0]} / Phase 01
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter mb-8 uppercase">
                <span className="serif-pink italic">AI</span> <span className="font-sans text-gray-900">is the Brush.<br />We are the Artist.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-12 font-medium leading-relaxed">
                {t.dnaScan.subtitle}
              </p>

              {/* Input Form */}
              <form 
                onSubmit={handleScan}
                className="w-full flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.dnaScan.inputPlaceholder}
                  className="flex-1 bg-white border border-gray-300 px-6 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-primary text-white px-8 py-4 font-bold text-[11px] tracking-widest uppercase hover:bg-black hover:text-white transition-all whitespace-nowrap disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Analyze Brand'}
                </button>
              </form>
              {error && <p className="text-red-600 text-xs mt-3 font-medium">{error}</p>}
            </motion.div>
          </div>
        </section>
      )}

      <div className="container mx-auto px-6 mt-16">

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
                <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-primary animate-pulse" />
              </div>
              <p className="text-xl font-sans text-gray-400 animate-pulse">
                {t.dnaScan.scanning}
              </p>
            </motion.div>
          )}

          {result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-20"
            >
              {/* Brand Identity Header */}
              <div className="grid md:grid-cols-3 gap-8 border-y-2 border-black py-12">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Brand Name</span>
                  <h2 className="text-3xl font-sans font-bold">{result.brand_identity.name}</h2>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.dnaScan.equityScore}</span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-sans font-bold gradient-text">{result.brand_identity.equity_score}%</span>
                    <BarChart3 className="w-6 h-6 text-primary mb-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.dnaScan.status}</span>
                  <p className="text-xl font-sans">{result.brand_identity.status}</p>
                </div>
              </div>

              {/* Visual Pipeline Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Stage 1 */}
                <div className="group border-2 border-black p-8 bg-gray-50 relative overflow-hidden transition-all hover:bg-white hover:high-end-shadow">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-6 block">Stage 01 / The Anchor</span>
                  <h3 className="text-xl font-sans font-bold mb-4">{t.dnaScan.stage1}</h3>
                  <p className="text-gray-600 font-sans leading-relaxed relative z-10">
                    {result.visual_pipeline.stage_1_ecomm}
                  </p>
                  <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <ShieldCheck className="w-32 h-32 text-black" />
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="group border-2 border-black p-8 bg-black text-white relative overflow-hidden transition-all hover:high-end-shadow">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-6 block">Stage 02 / The Momentum</span>
                  <h3 className="text-xl font-sans font-bold mb-4">{t.dnaScan.stage2}</h3>
                  <p className="text-white/70 font-sans leading-relaxed relative z-10">
                    {result.visual_pipeline.stage_2_lifestyle}
                  </p>
                  <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-32 h-32 text-primary" />
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="group border-2 border-black p-8 bg-primary text-black relative overflow-hidden transition-all hover:high-end-shadow">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-6 block">Stage 03 / The Scale</span>
                  <h3 className="text-xl font-sans font-bold mb-4">{t.dnaScan.stage3}</h3>
                  <p className="text-black/80 font-sans leading-relaxed relative z-10">
                    {result.visual_pipeline.stage_3_video}
                  </p>
                  <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-32 h-32 text-black" />
                  </div>
                </div>
              </div>

              {/* Strategic Wins & Recommendation */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <h3 className="text-2xl font-sans font-bold border-l-4 border-primary pl-6">
                    {t.dnaScan.strategicWins}
                  </h3>
                  <div className="space-y-4">
                    {result.strategic_wins.map((win, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-6 h-6 rounded-full bg-black text-primary flex items-center justify-center text-[10px] font-black shrink-0 mt-1 group-hover:bg-primary group-hover:text-black transition-colors">
                          {i + 1}
                        </div>
                        <p className="text-lg font-sans text-gray-600">{win}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 border-2 border-black bg-gray-50 relative">
                  <h3 className="text-2xl font-sans font-bold mb-6 gradient-text">
                    {t.dnaScan.recommendation}
                  </h3>
                  <p className="text-lg font-sans text-gray-700 leading-relaxed mb-8">
                    {result.hitl_recommendation}
                  </p>
                  
                  <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-1">{t.dnaScan.lockTitle}</span>
                      <span className="text-2xl font-sans font-bold">{t.dnaScan.lockPrice}</span>
                    </div>
                    <button className="w-full sm:w-auto bg-black text-white hover:bg-primary hover:text-black px-8 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                      {t.dnaScan.lockCta} <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

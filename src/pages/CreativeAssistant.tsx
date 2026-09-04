import { useState } from 'react';
import { generateBrandStrategy } from '../services/geminiService';
import { motion } from 'motion/react';
import { Sparkles, Loader2, Zap, Target } from 'lucide-react';

export const CreativeAssistant = () => {
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [strategy, setStrategy] = useState<any>(null);

  const outcomeOptions = [
    'Brand Awareness',
    'Lead Generation',
    'Sales Growth',
    'Content Scaling',
    'Workflow Automation'
  ];

  const toggleOutcome = (outcome: string) => {
    setOutcomes(prev => 
      prev.includes(outcome) 
        ? prev.filter(o => o !== outcome) 
        : [...prev, outcome]
    );
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await generateBrandStrategy(businessName, website, outcomes);
      setStrategy(result);
    } catch (error) {
      console.error(error);
      alert("Failed to generate strategy. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Section 1: Hero */}
      <section className="relative w-full h-screen flex items-end pb-12 md:pb-16 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-primary/20" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-xl md:text-3xl font-bold leading-tight tracking-tighter mb-3 uppercase">
                AI <br />
                <span className="sans-pink">Strategist</span>
              </h1>
              <p className="text-sm md:text-base text-white/80 max-w-sm mb-6 leading-relaxed font-medium">
                Leverage our custom Gemini models to define your brand's digital DNA and scale your creative output.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">

        {!strategy ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-8 border-2 border-black high-end-shadow"
          >
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Business Name</label>
                  <input 
                    type="text"
                    required
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    className="w-full bg-white border-2 border-black/5 p-3 rounded-xl focus:border-primary transition-all"
                    placeholder="e.g. Salt Lily"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Website URL</label>
                  <input 
                    type="url"
                    required
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    className="w-full bg-white border-2 border-black/5 p-3 rounded-xl focus:border-primary transition-all"
                    placeholder="https://yourbrand.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Desired Outcomes</label>
                <div className="flex flex-wrap gap-3">
                  {outcomeOptions.map(outcome => (
                    <button
                      key={outcome}
                      type="button"
                      onClick={() => toggleOutcome(outcome)}
                      className={`px-5 py-2.5 font-bold text-[11px] transition-all border-2 ${
                        outcomes.includes(outcome) 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-black/5 bg-white text-black hover:border-black'
                      }`}
                    >
                      {outcome}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading || !businessName || outcomes.length === 0}
                className="w-full bg-black text-white py-4 font-bold text-xs tracking-widest uppercase hover:bg-primary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Brand...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Strategy
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="bg-black text-white p-8 border-2 border-black high-end-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Sparkles className="w-24 h-24" />
              </div>
              <div className="relative z-10">
                <p className="text-primary font-black text-[10px] tracking-widest uppercase mb-3">Brand Vision</p>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-none mb-6 italic">
                  "{strategy.tagline}"
                </h2>
                <p className="text-base text-white/70 max-w-xl leading-relaxed">
                  {strategy.vision}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-7 border-2 border-black high-end-shadow">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-5">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">AI Potential</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {strategy.aiPotential}
                </p>
              </div>

              <div className="bg-gray-50 p-7 border-2 border-black high-end-shadow">
                <div className="w-10 h-10 bg-black/10 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">Strategy Roadmap</h3>
                <ul className="space-y-3">
                  {strategy.strategySteps.map((step: string, i: number) => (
                    <li key={i} className="flex gap-4 text-sm">
                      <span className="font-black text-primary">0{i+1}</span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button 
                onClick={() => setStrategy(null)}
                className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-all"
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

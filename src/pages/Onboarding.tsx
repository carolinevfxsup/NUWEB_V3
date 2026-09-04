import { OnboardingForm } from '../components/OnboardingForm';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white pt-[116px] pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-end mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="text-red-600 hover:text-red-500 transition-colors z-50"
            aria-label="Close"
          >
            <X size={48} strokeWidth={1} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-white">
            WHERE BRANDS EXPLODE
          </h1>
        </motion.div>
        
        <div className="bg-white text-black p-12 md:p-20 rounded-md max-w-4xl mx-auto">
          <OnboardingForm />
        </div>
      </div>
    </div>
  );
};

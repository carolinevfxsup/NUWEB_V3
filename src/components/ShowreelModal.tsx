import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const ShowreelModal = ({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/jrrKEKi5fBc?autoplay=1" }: ShowreelModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors"
            >
              <X size={32} />
            </button>
            {videoUrl.includes('.mp4') ? (
              <video
                className="w-full h-full object-contain"
                src={videoUrl}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

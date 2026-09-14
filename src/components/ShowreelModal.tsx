import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const formatVideoUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  if (url.includes('youtube.com/watch')) {
    const match = url.match(/[?&]v=([^&]+)/);
    const videoId = match ? match[1] : '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  return url;
};

export const ShowreelModal = ({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/ODjDJbBSkM0?autoplay=1" }: ShowreelModalProps) => {
  const resolvedUrl = formatVideoUrl(videoUrl);

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
            {resolvedUrl.includes('.mp4') ? (
              <video
                className="w-full h-full object-contain"
                src={resolvedUrl}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={resolvedUrl}
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

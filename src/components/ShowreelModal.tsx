import { useState, useEffect } from 'react';
import { X, ExternalLink, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

interface VideoDetails {
  embedUrl: string;
  externalUrl?: string;
  platform: 'Vimeo' | 'YouTube' | 'MP4' | 'Video';
}

const parseVideoDetails = (url: string): VideoDetails => {
  if (!url) {
    return {
      embedUrl: 'https://www.youtube-nocookie.com/embed/ODjDJbBSkM0?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1',
      externalUrl: 'https://www.youtube.com/watch?v=ODjDJbBSkM0',
      platform: 'YouTube'
    };
  }

  // Vimeo parsing
  if (url.includes('vimeo.com/')) {
    const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    const videoId = match ? match[1] : '';
    return {
      // dnt=1 stops tracking bloat, playsinline=1 avoids iOS stalls, quality=auto enables fast adaptive bitrate
      embedUrl: `https://player.vimeo.com/video/${videoId}?autoplay=1&playsinline=1&title=0&byline=0&portrait=0&dnt=1&transparent=0&autopause=0&quality=auto`,
      externalUrl: `https://vimeo.com/${videoId}`,
      platform: 'Vimeo'
    };
  }

  // YouTube shortened youtu.be
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return {
      // youtube-nocookie is faster and avoids third-party tracking delays on mobile
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`,
      externalUrl: `https://www.youtube.com/watch?v=${videoId}`,
      platform: 'YouTube'
    };
  }

  // YouTube watch or embed
  if (url.includes('youtube.com/watch') || url.includes('youtube.com/embed/')) {
    let videoId = '';
    if (url.includes('youtube.com/embed/')) {
      videoId = url.split('youtube.com/embed/')[1]?.split('?')[0];
    } else {
      const match = url.match(/[?&]v=([^&]+)/);
      videoId = match ? match[1] : '';
    }
    return {
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`,
      externalUrl: `https://www.youtube.com/watch?v=${videoId}`,
      platform: 'YouTube'
    };
  }

  // Direct MP4 or video files
  if (url.includes('.mp4')) {
    return {
      embedUrl: url,
      externalUrl: url,
      platform: 'MP4'
    };
  }

  return {
    embedUrl: url,
    externalUrl: url,
    platform: 'Video'
  };
};

export const ShowreelModal = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/ODjDJbBSkM0?autoplay=1"
}: ShowreelModalProps) => {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const [isLoading, setIsLoading] = useState(true);

  const details = parseVideoDetails(videoUrl);

  // Reset loading state whenever modal opens or video changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen, videoUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button positioned top right */}
            <button
              onClick={onClose}
              className="absolute -top-11 right-0 text-white/80 hover:text-red-500 transition-colors p-1 cursor-pointer flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase"
              aria-label="Close modal"
            >
              <span>{isPt ? 'Fechar' : 'Close'}</span>
              <X size={20} />
            </button>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full bg-neutral-950 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              {/* Responsive Loading Indicator for cellular/mobile networks */}
              {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 pointer-events-none transition-opacity duration-300">
                  <Loader2 className="w-8 h-8 text-red-600 animate-spin mb-3" />
                  <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
                    {isPt ? 'A carregar vídeo...' : 'Loading showreel...'}
                  </span>
                </div>
              )}

              {details.platform === 'MP4' ? (
                <video
                  className="w-full h-full object-contain"
                  src={details.embedUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                <iframe
                  className={`w-full h-full transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  src={details.embedUrl}
                  title="Showreel Video"
                  loading="eager"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>

            {/* Mobile-friendly fallback bar */}
            {details.externalUrl && (
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/50 px-1 font-mono">
                <span className="text-white/40 hidden sm:inline">
                  {details.platform === 'Vimeo'
                    ? (isPt ? 'Vimeo HD / 4K Player' : 'Vimeo HD / 4K Player')
                    : (isPt ? 'YouTube Player' : 'YouTube Player')}
                </span>
                <a
                  href={details.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/70 hover:text-red-500 transition-colors ml-auto underline underline-offset-4 font-sans tracking-wide"
                >
                  {isPt ? `Abrir diretamente no ${details.platform}` : `Open directly in ${details.platform}`}
                  <ExternalLink size={12} />
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

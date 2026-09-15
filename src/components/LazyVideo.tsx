import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  showControls?: boolean;
  controlsColor?: string;
  eager?: boolean;
}

export const LazyVideo = ({ src, className, showControls, controlsColor, poster, eager, ...props }: LazyVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(props.muted !== false); // Default to muted unless explicitly false
  const [isPlaying, setIsPlaying] = useState(props.autoPlay !== false); // Default to playing unless explicitly false
  const [hasIntersected, setHasIntersected] = useState(!!eager);

  useEffect(() => {
    if (eager) {
      setHasIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '200px' 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, eager]);

  useEffect(() => {
    if (hasIntersected && videoRef.current && props.autoPlay) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.warn("Autoplay failed:", err);
        });
    }
  }, [hasIntersected, props.autoPlay]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative group overflow-hidden ${className || ''}`}>
      <video
        ref={videoRef}
        src={hasIntersected ? src : undefined}
        className="w-full h-full object-cover"
        muted={isMuted}
        playsInline
        poster={poster}
        preload="none"
        {...props}
      />
      {!hasIntersected && poster && (
        <img
          src={poster}
          alt="Video poster"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
      )}
      {showControls && hasIntersected && (
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`${controlsColor ? `bg-${controlsColor}` : 'bg-black/50'} text-white w-10 h-10 rounded-full backdrop-blur-sm transition-all flex items-center justify-center hover:scale-105 active:scale-95`}
          >
            {isPlaying ? <Pause size={16} strokeWidth={3} /> : <Play size={16} fill="currentColor" />}
          </button>
          <button
            onClick={toggleMute}
            className={`${controlsColor ? `bg-${controlsColor}` : 'bg-black/50'} text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] backdrop-blur-sm transition-all flex items-center gap-2.5 uppercase hover:scale-105 active:scale-95`}
          >
            {isMuted ? (
              <>
                <VolumeX size={14} strokeWidth={2.5} />
                <span>UNMUTE</span>
              </>
            ) : (
              <>
                <Volume2 size={14} strokeWidth={2.5} />
                <span>MUTE</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

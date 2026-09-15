import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  showControls?: boolean;
  controlsColor?: string;
}

export const LazyVideo = ({ src, className, showControls, controlsColor, poster, ...props }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(props.muted !== false); // Default to muted unless explicitly false
  const [isPlaying, setIsPlaying] = useState(props.autoPlay !== false); // Default to playing unless explicitly false
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    setVideoStarted(false);
  }, [src, hasLoaded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasLoaded(true);
        }
      },
      { threshold: 0.05 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current || !hasLoaded) return;

    if (isInView && props.autoPlay) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.warn("Autoplay failed:", err);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, hasLoaded, props.autoPlay]);

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
    <div className="relative w-full h-full group overflow-hidden">
      <video
        ref={videoRef}
        src={hasLoaded ? src : undefined}
        className={className}
        muted={isMuted}
        playsInline
        onPlaying={() => setVideoStarted(true)}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime > 0) {
            setVideoStarted(true);
          }
        }}
        poster={poster}
        {...props}
      />
      {poster && (
        <img
          src={poster}
          alt="Video poster overlay"
          className={`${className} absolute inset-0 w-full h-full object-cover pointer-events-none z-[2] transition-opacity duration-500 ${videoStarted ? 'opacity-0' : 'opacity-100'}`}
          referrerPolicy="no-referrer"
        />
      )}
      {showControls && hasLoaded && (
        <>
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
          </>
      )}
    </div>
  );
};

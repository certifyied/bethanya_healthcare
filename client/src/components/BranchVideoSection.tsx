import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles, MapPin, CheckCircle2, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

export default function BranchVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lazy load video only when user scrolls near this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If unmuted autoplay blocked, fallback to muted play
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true));
          }
        });
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-28 bg-[#0a1a12] text-white overflow-hidden"
    >
      {/* 🌿 Ambient Luxury Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#c2a97a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c2a97a]/15 border border-[#c2a97a]/30 text-[#f5d76e] text-xs uppercase tracking-[0.25em] font-semibold mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Inauguration Film</span>
            </div>

            <h2 className="forum-regular text-3xl sm:text-4xl md:text-6xl text-white font-serif leading-tight mb-4">
              Latest Branch Opening Video
            </h2>

            <p className="font-body text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Step inside the joyous opening ceremony of our new Thonnakkad
              sanctuary — celebrating centuries of authentic Ayurvedic healing
              in God&apos;s Own Country.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Grid: Video Player + Story Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* 🌿 LEFT: The Vertical Video Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={0.1}>
              <div className="relative group">
                {/* Golden glowing border effect */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#c2a97a]/50 via-[#f5d76e]/30 to-emerald-500/30 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

                {/* Smartphone / Luxury Frame Container (9:16 aspect ratio) */}
                <div
                  onClick={handleTogglePlay}
                  className="relative cursor-pointer w-[280px] sm:w-[320px] md:w-[350px] aspect-[9/16] rounded-[2.2rem] overflow-hidden border-2 border-[#c2a97a]/40 bg-black shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                >
                  {/* Lazy-loaded HTML5 Video */}
                  {inView ? (
                    <video
                      ref={videoRef}
                      playsInline
                      preload="none"
                      poster="/vedio/video-poster.webp"
                      onTimeUpdate={handleTimeUpdate}
                      onEnded={handleVideoEnded}
                      className="w-full h-full object-cover"
                    >
                      <source
                        src="/vedio/latest-branch-opening.mp4"
                        type="video/mp4"
                      />
                      <source src="/vedio/IMG_3985.MP4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    /* Instant lightweight poster before scroll reaches viewport */
                    <img
                      src="/vedio/video-poster.webp"
                      alt="Latest Branch Opening preview"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Dark gradient overlay at bottom for controls visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Center Play / Pause Indicator */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/90 text-[#0f2218] shadow-[0_0_30px_rgba(212,175,55,0.6)] transform group-hover:scale-110 transition-all duration-300">
                        <Play className="w-8 h-8 fill-current ml-1" />
                        <span className="absolute -inset-2 rounded-full border-2 border-[#f5d76e]/60 animate-ping pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Video Controls Bar */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-0 inset-x-0 p-4 flex flex-col gap-2 z-20"
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#c2a97a] to-[#f5d76e] transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/90">
                      <button
                        type="button"
                        onClick={handleTogglePlay}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Pause</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Play Film</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleToggleMute}
                        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition"
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4 text-red-400" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-[#f5d76e]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Location badge on top of video */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white">
                    <MapPin className="w-3 h-3 text-[#f5d76e]" />
                    <span>Thonnakkad, Kerala</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 🌿 RIGHT: Highlights & Actions */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="forum-regular text-2xl sm:text-3xl text-[#f5d76e] font-serif mb-3">
                    Auspicious Beginnings at Thonnakkad
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                    Bethanya Ayurveda expanded its healing footprints with the
                    consecration and grand opening of our Thonnakkad healthcare
                    clinic. Rooted in ancient scriptures and nurtured by nature,
                    we are honored to offer authentic treatments to seekers from
                    across Kerala and beyond.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {[
                    "Traditional inaugural lamp lighting ceremony & Vedic blessings",
                    "Authentic Panchakarma therapy suites & consultation chambers",
                    "Pure herbal apothecary stocked with classic formulations",
                    "Expert consultations by experienced senior Ayurvedic doctors",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f5d76e] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>


                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/branches/thonnakkad"
                    className="forum-regular inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-[#0f2218] bg-gradient-to-r from-[#c2a97a] via-[#f5d76e] to-[#a67c2d] shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300"
                  >
                    <span>View Thonnakkad Branch</span>
                  </Link>

                  <a
                    href="tel:+918921799597"
                    className="forum-regular inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-[#f5d76e] border border-[#c2a97a]/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 text-[#f5d76e]" />
                    <span>Call +91 8921799597</span>
                  </a>

                  <a
                    href="https://wa.me/918921799597?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Thonnakkad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="forum-regular inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

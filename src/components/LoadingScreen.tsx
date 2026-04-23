import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fillTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2300);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2700);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      {/* 🌿 SAME BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006B1A]/90 to-[#004D12]/95"></div>

      {/* 🌿 TOP FADE */}
      {/* <div className="absolute top-0 left-0 w-full h-[120px] md:h-[160px] bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none" /> */}

      {/* 🌿 GLOW */}
      <div className="absolute right-[-80px] top-[25%] w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-green-800/20 blur-[100px] rounded-full"></div>

      {/* Bethanya */}
      <h1 className="bethanya-text cinzel-heading relative z-20 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
        Bethanya
      </h1>

      {/* Healthcare */}
      <p className="cinzel-heading relative z-20 mt-4 text-[#c2a97a]/80 tracking-[4px] text-lg md:text-xl lg:text-6xl drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
        Ayurveda
      </p>

      <style>{`
        .bethanya-text {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 700;
          letter-spacing: 6px;
          color: transparent;
          -webkit-text-stroke: 1px #c2a97a;
          position: relative;
          overflow: hidden;
        }

        .bethanya-text::before {
          content: "Bethanya";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          color: #c2a97a;
          white-space: nowrap;
          overflow: hidden;
          clip-path: inset(0 100% 0 0);
          animation: fillText 2.3s ease forwards;
        }

        @keyframes fillText {
          to {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
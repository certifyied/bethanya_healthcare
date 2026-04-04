// import { Leaf } from "lucide-react";

// const LoadingScreen = () => (
//   <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-hero">
//     <Leaf className="w-12 h-12 text-herbal animate-spin-leaf" />
//     <p className="mt-6 font-heading text-xl text-primary-foreground tracking-wider opacity-80">
//       Vriksha
//     </p>
//     <div className="mt-4 w-24 h-0.5 bg-herbal/30 rounded-full overflow-hidden">
//       <div className="h-full bg-herbal rounded-full animate-[loading_1.5s_ease-in-out_infinite]" 
//         style={{ animation: "loading 1.5s ease-in-out infinite" }} />
//     </div>
//     <style>{`
//       @keyframes loading {
//         0% { width: 0%; margin-left: 0; }
//         50% { width: 100%; margin-left: 0; }
//         100% { width: 0%; margin-left: 100%; }
//       }
//     `}</style>
//   </div>
// );

// export default LoadingScreen;



import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f2218]">
      
      {/* Main Animated Text */}
      <h1 className="bethanya-text">
        Bethanya
      </h1>

      {/* Static Subtitle */}
      <p className="forum-regular mt-4 text-[#c2a97a]/80 tracking-[4px] text-sm md:text-base font-body">
        Healthcare
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
          width: 0%;
          height: 100%;
          color: #c2a97a;
          white-space: nowrap;
          overflow: hidden;
          animation: fillText 2.5s ease forwards;
        }

        @keyframes fillText {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
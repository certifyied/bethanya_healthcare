import { Leaf } from "lucide-react";

const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-hero">
    <Leaf className="w-12 h-12 text-herbal animate-spin-leaf" />
    <p className="mt-6 font-heading text-xl text-primary-foreground tracking-wider opacity-80">
      Vriksha
    </p>
    <div className="mt-4 w-24 h-0.5 bg-herbal/30 rounded-full overflow-hidden">
      <div className="h-full bg-herbal rounded-full animate-[loading_1.5s_ease-in-out_infinite]" 
        style={{ animation: "loading 1.5s ease-in-out infinite" }} />
    </div>
    <style>{`
      @keyframes loading {
        0% { width: 0%; margin-left: 0; }
        50% { width: 100%; margin-left: 0; }
        100% { width: 0%; margin-left: 100%; }
      }
    `}</style>
  </div>
);

export default LoadingScreen;

import { useState, useEffect, useCallback } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "opening-ceremony",
    src: "/gallery/branch-opening-ceremony.webp",
    alt: "Branch opening ceremony felicitation",
  },
  {
    id: "clinic-entrance",
    src: "/gallery/thonnakkad-branch-entrance.webp",
    alt: "Thonnakkad branch clinic entrance and surroundings",
  },
  {
    id: "treatment-signboard",
    src: "/gallery/branch-treatments-board.webp",
    alt: "Ayurvedic treatments and specialty care board",
  },
];

export default function BranchGallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for full-screen lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + galleryImages.length) % galleryImages.length
            : 0
        );
      }
    },
    [activeImageIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleKeyDown, activeImageIndex]);

  const activeItem =
    activeImageIndex !== null ? galleryImages[activeImageIndex] : null;

  return (
    <section className="py-20 lg:py-28 bg-[#fdfbf7] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c2a97a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f3d2b]/10 border border-[#1f3d2b]/20 text-[#1f3d2b] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              <Camera className="w-3.5 h-3.5 text-[#a67c2d]" />
              <span>Moments & Highlights</span>
            </div>

            <h2 className="forum-regular text-3xl sm:text-4xl md:text-6xl font-serif text-[#0f2218] leading-tight mb-4">
              Our Visual Gallery
            </h2>

            <p className="font-body text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
              Authentic glimpses from our newly inaugurated healthcare clinic in Thonnakkad.
            </p>
          </div>
        </ScrollReveal>

        {/* 🌿 Pure Pinterest-Style Masonry Grid (No text below, only real branch images) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => setActiveImageIndex(index)}
            >
              <div className="relative rounded-3xl overflow-hidden bg-stone-100 shadow-md hover:shadow-2xl border border-stone-200/80 transition-all duration-500 hover:-translate-y-1.5">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Pinterest-style Dark Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-[#0f2218] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-[#1f3d2b]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌿 Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null
                  ? (prev - 1 + galleryImages.length) % galleryImages.length
                  : 0
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev !== null ? (prev + 1) % galleryImages.length : 0
              );
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <p className="text-xs text-gray-400 mt-3">
              {activeImageIndex !== null ? activeImageIndex + 1 : 1} of{" "}
              {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

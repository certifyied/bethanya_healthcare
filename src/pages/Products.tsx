import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Oils", "Herbs", "Skincare"] as const;

const Products = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">

      {/* 🌿 TOP GREEN SECTION */}
      <div className="relative text-white pt-24 pb-20  ">

        {/* 🌿 DARK BG WITH LIGHT CENTER FADE */}
        <div className="absolute inset-0 bg-[#0f2218] "></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0  ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#c2a97a]/40 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative container mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center py-16 md:py-18">
              <p className="font-body text-[#c2a97a] text-sm tracking-[0.2em] uppercase mb-3">
                Our Collection
              </p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">
                Ayurvedic Products
              </h1>
              <p className="font-body text-[#c2a97a]/80 max-w-lg mx-auto">
                Handcrafted with love using ancient formulations and the purest ingredients from nature.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <img
          src="/images/Flower.png"
          alt="decoration"
          className="
    absolute 
    right-0 
    bottom-[-40px] sm:bottom-[-70px] md:bottom-[-110px]
    w-[120px] sm:w-[160px] md:w-[260px] 
    opacity-100 
    pointer-events-none
    drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]
  "
        />
      </div>
      <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular my-16">
        Products
      </h1>
      {/* 🌿 CATEGORY BUTTONS (COMPLETELY OUTSIDE) */}
      <div className="px-6 mt-10 mb-10">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-body text-sm px-6 py-2.5 rounded-2xl transition-all duration-300 ${active === cat
                    ? "bg-gradient-leaf text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:bg-muted shadow-card"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 🤍 PRODUCTS GRID */}
      <div className="px-6 mt-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

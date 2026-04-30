import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Oils", "Foods", "Skincare", "Wellness"] as const;

const Products = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="min-h-screen">

      {/* 🔽 FULL WIDTH GREEN SECTION */}
      <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

        {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-[1px] bg-[#0a1a12]"></div>
        </div>

        {/* LEFT BOTTOM PNG BORDER */}
        <img
          src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
          alt="border"
          className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
        />

        {/* TITLE */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-9xl forum-regular mt-32 md:mt-40 lg:mt-48 mb-6 
bg-gradient-to-r from-[#c2a97a] via-[#f8e7b0] to-[#d4af37]
bg-clip-text text-transparent
drop-shadow-[0_8px_5px_rgba(0,0,0,0.8)]">
          Products
        </h1>

        {/* CAPTION */}
        <p className="forum-regular text-center text-lg md:text-2xl text-[#c2a97a] max-w-3xl mx-auto px-6 mb-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
          Explore our carefully selected Ayurvedic products crafted with natural ingredients to support healing, balance, and everyday wellness.
        </p>

        {/* CATEGORY SELECTOR */}
<div className="px-6 mt-10 mb-10">
  <div className="w-full">
    <ScrollReveal delay={0.2}>

      {/* 🔹 HEADING */}
      <h3 className="text-center text-2xl md:text-3xl font-medium text-[#c2a97a] mb-6 tracking-wide drop-shadow-[0_4px_5px_rgba(0,0,0,0.8)]">
        Choose Category
      </h3>

      {/* 🔹 HORIZONTAL SCROLL ON SMALL SCREENS */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-start md:justify-center gap-3 sm:gap-4 min-w-max px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`forum-regular relative z-20 font-body text-sm md:text-base px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 whitespace-nowrap flex-shrink-0

bg-[#1f3d2b]
ring-1 ring-[#0f2218]
tracking-wider

${active === cat
                  ? "bg-[#d4af37] text-[#0f2218] ring-[#d4af37]"
                  : "text-[#c2a97a]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    </ScrollReveal>
  </div>
</div>

      </div>

      {/* 🔽 PRODUCTS GRID */}
      <div className="mx-auto max-w-6xl pt-28 px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Products;

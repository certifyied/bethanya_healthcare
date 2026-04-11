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
      <div className="relative pt-24 pb-20">

        {/* 🌿 WHITE BG */}
        <div className="absolute inset-0 bg-white z-0"></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER (NO TOP) */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#1f3d2b]/90 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center py-6 md:py-8 -mt-20 md:-mt-28 flex flex-col items-center">

          {/* 🌿 OPTIONAL LOGO */}
          <img
            src="/images/BETHANYA AYURVEDA HOSPITAL.png"
            alt="Logo"
            className="w-[120px] md:w-[160px] lg:w-[200px] mb-4 object-contain drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
          />

          <ScrollReveal>
            <p className="text-[#1f3d2b] text-sm tracking-[0.2em] uppercase mb-3">
              Our Collection
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
              Ayurvedic Products
            </h1>

            <p className="text-[#c2a97a]/80 max-w-lg mx-auto mt-4">
              Handcrafted with love using ancient formulations and the purest ingredients from nature.
            </p>
          </ScrollReveal>

        </div>

        {/* 🌸 DECOR IMAGE */}
        <img
          src="/images/Flower.png"
          alt="decoration"
          className="absolute right-0 bottom-[-80px] z-20
  w-[180px] md:w-[260px] 
  pointer-events-none 
  drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
        />
      </div>
      <div className="bg-[#0f2218] pt-4 pb-4 relative overflow-hidden">

        {/* LEFT SIDE BACKGROUND IMAGE */}
        {/* <div className="absolute left-0 top-0 h-full w-1/3 bg-[url('/images/your-image.jpg')] bg-cover bg-left opacity-20 pointer-events-none" /> */}

        {/* LEFT BOTTOM PNG BORDER */}
        <img
          src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
          alt="border"
          className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
        />

        <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular my-16 text-[#c2a97a]">
          Products
        </h1>

        {/* CATEGORY BUTTONS */}
        <div className="px-6 mt-10 mb-10">
          <div className="container mx-auto max-w-6xl">
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center gap-3 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`font-body text-sm px-6 py-2.5 rounded-2xl transition-all duration-300 relative
bg-[#0f2218]
border border-[#d4af37]
outline outline-1 outline-[#d4af37]/30
outline-offset-4
${active === cat
                        ? "bg-[#d4af37] text-[#0f2218] shadow-glow"
                        : "text-muted-foreground hover:bg-[#0f2218]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>


      {/* 🤍 PRODUCTS GRID */}
      <div className="relative px-6 mt-6 mb-16 py-16 rounded-[40px]">

        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
      {/* </div> */}
    </div>
  );
};

export default Products;

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

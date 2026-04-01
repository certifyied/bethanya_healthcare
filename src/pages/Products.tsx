import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", "Oils", "Herbs", "Skincare"] as const;

const Products = () => {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Our Collection</p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Ayurvedic Products</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Handcrafted with love using ancient formulations and the purest ingredients from nature.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm px-6 py-2.5 rounded-2xl transition-all duration-300 ${
                  active === cat
                    ? "bg-gradient-leaf text-primary-foreground shadow-glow"
                    : "bg-card text-muted-foreground hover:bg-muted shadow-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

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

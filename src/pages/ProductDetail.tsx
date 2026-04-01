import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Leaf, Droplets, FlaskConical } from "lucide-react";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

const ingredientIcons: Record<string, typeof Leaf> = {
  default: Leaf,
  oil: Droplets,
  extract: FlaskConical,
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-28 pb-20 px-6 min-h-screen text-center">
        <h1 className="font-heading text-3xl text-foreground mb-4">Product Not Found</h1>
        <Link to="/products" className="font-body text-herbal underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <Link to="/products" className="inline-flex items-center gap-2 font-body text-muted-foreground hover:text-forest transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-card bg-card group cursor-zoom-in">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-125"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <span className="font-body text-herbal text-sm tracking-[0.2em] uppercase">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-4xl text-foreground mt-2 mb-3">{product.name}</h1>
              <p className="font-heading text-2xl text-forest font-semibold mb-6">{product.price}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-heading text-lg text-foreground mb-4">Key Ingredients</h3>
                <div className="flex flex-wrap gap-3">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="inline-flex items-center gap-2 bg-card shadow-card rounded-2xl px-4 py-2 font-body text-sm text-foreground">
                      <Leaf className="w-4 h-4 text-herbal" /> {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-heading text-lg text-foreground mb-4">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 font-body text-muted-foreground">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-herbal shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-leaf text-primary-foreground font-body font-medium py-4 rounded-2xl shadow-glow hover:shadow-[0_0_40px_-5px_hsl(122_39%_49%_/_0.5)] transition-all duration-300 hover:scale-[1.02]">
                Add to Cart
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

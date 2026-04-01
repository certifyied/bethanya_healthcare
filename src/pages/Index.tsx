import { Link } from "react-router-dom";
import { Leaf, Droplets, Heart, Shield } from "lucide-react";
import FloatingLeaves from "@/components/FloatingLeaves";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const benefits = [
  { icon: Leaf, title: "100% Natural", desc: "Pure ingredients sourced from ancient forests and organic farms." },
  { icon: Droplets, title: "No Chemicals", desc: "Free from parabens, sulfates, and artificial preservatives." },
  { icon: Heart, title: "Handcrafted", desc: "Each product is lovingly made using traditional Ayurvedic methods." },
  { icon: Shield, title: "Tested & Safe", desc: "Dermatologically tested, safe for all skin types." },
];

const testimonials = [
  { name: "Ananya S.", text: "Vriksha's Kumkumadi oil transformed my skin. I've never felt more radiant!", location: "Mumbai" },
  { name: "Rajesh K.", text: "The Ashwagandha churna has become my daily ritual. My stress levels have dropped significantly.", location: "Bangalore" },
  { name: "Priya M.", text: "Finally, products that are truly natural. My skin thanks me every day.", location: "Delhi" },
];

const Index = () => {
  const featured = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <FloatingLeaves />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="font-body text-herbal text-sm tracking-[0.3em] uppercase mb-4">
              Ancient Wisdom, Modern Wellness
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Rooted in Nature,{" "}
              <span className="italic text-herbal">Powered by Ayurveda</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Discover handcrafted Ayurvedic products that honor centuries of wisdom
              and bring the healing power of nature to your daily rituals.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-leaf text-primary-foreground font-body font-medium px-8 py-4 rounded-2xl shadow-glow hover:shadow-[0_0_40px_-5px_hsl(122_39%_49%_/_0.5)] transition-all duration-300 hover:scale-105"
            >
              <Leaf className="w-5 h-5" />
              Explore Products
            </Link>
          </ScrollReveal>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Our Philosophy</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              The Science of Life
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Ayurveda — the "science of life" — is one of the world's oldest holistic healing systems, 
              developed over 5,000 years ago in India. At Vriksha, we honor this timeless tradition by 
              creating products that balance your body, mind, and spirit through the pure power of nature.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Curated for You</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Featured Products</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featured.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.15}>
                <ProductCard {...product} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="font-body text-forest font-medium border-2 border-forest px-8 py-3 rounded-2xl hover:bg-forest hover:text-primary-foreground transition-all duration-300"
              >
                View All Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Pure by Promise</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-3xl bg-card shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-leaf flex items-center justify-center">
                    <b.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gradient-earth">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground">Loved by Thousands</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10">
                  <p className="font-body text-primary-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-heading text-primary-foreground font-semibold">{t.name}</p>
                    <p className="font-body text-primary-foreground/50 text-sm">{t.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

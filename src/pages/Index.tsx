import { Link } from "react-router-dom";
import { Leaf, Droplets, Heart, Shield } from "lucide-react";
import FloatingLeaves from "@/components/FloatingLeaves";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Banner from "@/components/Banner";

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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mt-[-67px] px-4">

        {/* 🌿 CURVED BACKGROUND (DOES NOT AFFECT TEXT POSITION) */}
        {/* 🌿 CURVED BACKGROUND WITH PERFECT BORDER */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] lg:w-[60%] top-0 bottom-0 -z-10">

          {/* BORDER WRAPPER */}
          <div className="w-full h-full rounded-b-[180px] md:rounded-b-[240px] border border-black/30 p-[6px]">

            {/* GREEN BACKGROUND */}
            <div className="w-full h-full bg-[#1f3d2b] rounded-b-[180px] md:rounded-b-[240px] p-[10px]">

              {/* GOLD INNER LINE (DEEP INSIDE) */}
              <div className="w-full h-full rounded-b-[180px] md:rounded-b-[240px] border border-[#D4AF37]"></div>

            </div>

          </div>

        </div>

        {/* TEXT (UNCHANGED) */}
        <div className="text-center z-10 px-8 -mt-16">
          <h1 className="font-serif text-[#D4AF37] text-4xl md:text-7xl leading-tight tracking-wider scale-x-110">
            Bethanya Healthcare
          </h1>

          <p className="mt-4 text-xs tracking-[0.4em] uppercase text-[#D4AF37]">
            Authentic Ayurveda
          </p>
        </div>

        {/* IMAGE (UNCHANGED) */}
        {/* IMAGE SECTION */}
        <div className="absolute bottom-0 w-full flex justify-center items-end">

          {/* LEFT PNG IMAGE */}
          <img
            src="/images/395fc983a28dadfb76c29d23b78a40ec.png"
            alt="left decoration"
            className="
    absolute 
    left-[-25px] sm:left-[-10px] md:left-[0%]
    bottom-4 sm:bottom-6 md:bottom-10

    w-[80px] 
    sm:w-[100px] 
    md:w-[160px]   /* 👈 smaller for tablet */
    lg:w-[320px]   /* 👈 keep big for desktop */

    object-contain 
    opacity-90
    pointer-events-none
    drop-shadow-[0_20px_25px_rgba(0,0,0,0.60)]
  "
          />

          {/* MAIN IMAGE */}
          <img
            src="/images/Download premium image of Ayurveda spice plant herbs_ by George about ayurveda, ayurveda background, white background, background, and leaf 13798578.png"
            alt="herbs"
            className="w-[90%] md:w-[700px] object-contain 
    drop-shadow-[0_100px_40px_rgba(0,0,0,0.15)]"
          />

        </div>

      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>

            {/* DARK GOLD */}
            <p className="font-body text-[#9c7c1f] text-sm tracking-[0.2em] uppercase mb-3">
              Our Philosophy
            </p>

            {/* DARK GREEN */}
            <h2 className="font-heading text-3xl md:text-5xl text-[#1f3d2b] mb-6">
              The Science of Life
            </h2>

            {/* DARK GREEN with relative container */}
            <div className="relative max-w-2xl mx-auto text-left">
              <p className="font-body text-[#1f3d2b]/100 text-lg leading-relaxed">
                Ayurveda — the "science of life" — is one of the world's oldest holistic healing systems,
                developed over 5,000 years ago in India. At Vriksha, we honor this timeless tradition by
                creating products that balance your body, mind, and spirit through the pure power of nature.
              </p>

              {/* Bottom-left PNG image, responsive translate */}
              <img
                src="/images/0cc4c6cb031fafe691548f47d651493e.png"
                alt="Ayurveda Illustration"
                className="
    absolute bottom-0 left-0
    w-24 h-24 md:w-48 md:h-48
    object-contain

    -translate-x-20 sm:-translate-x-24 md:-translate-x-36
    -translate-y-6 md:-translate-y-8

    drop-shadow-[0_20px_25px_rgba(0,0,0,0.60)]
  "
              />
            </div>

          </ScrollReveal>
        </div>
      </section>


      <Banner />


      {/* Featured Products */}
      <section
        className="py-20 px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/download.jpg')" }} // your uploaded image
      >
        <div className="relative container mx-auto">

          {/* HEADING */}
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-body text-[#c2a97a] text-sm tracking-[0.2em] uppercase mb-3">
                Curated for You
              </p>

              <h2 className="font-heading text-3xl md:text-7xl 
    bg-gradient-to-r from-[#c2a97a] via-[#e6d3a3] to-[#a67c2d] 
    bg-clip-text text-transparent">
                Featured Products
              </h2>
            </div>
          </ScrollReveal>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {featured.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 animate-slideRight"
                style={{ animationDelay: `${i * 0.2}s`, animationFillMode: "forwards" }}
              >
                {/* GOLDEN OUTLINE WRAPPER */}
                <div>
                  <ProductCard {...product} />
                </div>
              </div>
            ))}

          </div>

          {/* BUTTON */}
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link
  to="/products"
  className="
    inline-block px-10 py-3 rounded-full

    forum-regular text-lg lg:text-xl xl:text-3xl font-semibold tracking-wide

    text-black
    bg-gradient-to-r from-[#c2a97a] via-[#e6d3a3] to-[#a67c2d]

    shadow-[0_6px_25px_rgba(194,169,122,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)]

    hover:brightness-110
    hover:shadow-[0_10px_35px_rgba(194,169,122,0.6)]

    transition-all duration-300
  "
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

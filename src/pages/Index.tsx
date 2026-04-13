import { Link } from "react-router-dom";
import { Leaf, Droplets, Heart, Shield } from "lucide-react";
import FloatingLeaves from "@/components/FloatingLeaves";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Banner from "@/components/Banner";
import ServicesPackages from "@/pages/ServicesPackages";
import ServicesSection from "@/components/ServicesSection";
import BranchesSection from "@/components/BranchesSection";
import ProductCarousel from "@/components/ProductCarousel";

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

        {/* 🌿 CURVED BACKGROUND WITH PERFECT BORDER */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[115%] md:w-[105%] lg:w-[95%] top-0 bottom-0 -z-10">

          {/* BORDER WRAPPER */}
          <div className="w-full h-full rounded-b-[180px] md:rounded-b-[240px] border border-black/80 p-[6px]">

            {/* BACKGROUND IMAGE LAYER */}
            <div
              className="w-full h-full rounded-b-[180px] md:rounded-b-[240px] p-[10px] 
  bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: "url('/images/Hero2.jpg')",
              }}
            >

              {/* OPTIONAL DARK / WHITE OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* GOLD INNER LINE */}
              <div className="relative w-full h-full rounded-b-[180px] md:rounded-b-[240px] border border-[#D4AF37]"></div>

            </div>
          </div>
        </div>

        {/* TEXT + LOGO */}
        <div className="text-center z-10 px-8 -mt-16 md:-mt-24 lg:-mt-32 flex flex-col items-center">
          {/* LOGO */}
          {/* <img
            src="/images/BETHANYA AYURVEDA HOSPITAL.png"
            alt="Bethanya Logo"
            className="w-[180px] md:w-[240px] lg:w-[300px] mb-2 
    object-contain 
    drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
          /> */}
          <div className="mt-16 w-[140px] md:w-[200px] lg:w-[260px] aspect-square rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/Bethanya Trade mark-1.jpeg"
              alt="Bethanya Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* SUBTITLE */}
          <p className="mt-7 text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white inline-block border-b border-[#c2a97a] pb-1">
            EMBRACE LIFE | EMBRACE WELLNESS
          </p>

          <p className="forum-regular mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white text-center max-w-2xl mx-auto leading-relaxed">
            Welcome to Bethanya Ayurveda, a serene healing sanctuary rooted in the timeless traditions of Kerala Ayurveda. Here, classical wisdom, pure herbal care, and graceful hospitality come together to restore balance, awaken vitality, and nurture complete well being. Experience our Ayurvedic Massages, Special Treatments, thoughtfully curated Combo Packs, and rejuvenating Spa Therapies.
          </p>
        </div>

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
    md:w-[160px]
    lg:w-[320px]

    object-contain 
    opacity-90
    pointer-events-none
    drop-shadow-[0_10px_05px_rgba(0,0,0,0.60)]

    animate-float
  "
          />


        </div>

      </section>




      {/* Benefits */}
      {/* <section className="py-24 px-6">
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
      </section> */}

      <section className="relative py-24 px-6 overflow-hidden">
        {/* 🌿 TOP RIGHT PNG */}
        <img
          src="/images/c8e87042094b221187b54a21cd70ba6b.png"
          alt="decor"
          className="absolute top-2 right-0 sm:-top-10 w-32 sm:w-40 md:w-60 lg:w-80 pointer-events-none drop-shadow-[0_10px_05px_rgba(0,0,0,0.80)]"
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="font-body text-green-900 text-sm tracking-[0.2em] uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="forum-regular text-5xl md:text-6xl text-foreground">
                Pure by Promise
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="text-center p-6 rounded-3xl bg-card shadow-card hover:shadow-glow transition-all duration-300 border border-[#c2a97a]">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0f2218] flex items-center justify-center">
                    <b.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      <Banner />


      {/* Featured Products */}
      <section className="py-20 px-6 bg-[#0f2218] relative">
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
                Premium Selections
              </h2>
            </div>
          </ScrollReveal>

          {/* ✅ CAROUSEL (ONLY THIS) */}
          <ProductCarousel products={featured} />

          {/* BUTTON */}
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <div className="inline-block rounded-full border border-[#FFD700] p-[2px]">
                <Link
                  to="/products"
                  className="inline-block px-6 py-2 rounded-full
        forum-regular text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide
        text-black
        bg-gradient-to-r from-[#c2a97a] via-[#e6d3a3] to-[#a67c2d]
        shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <ServicesSection />

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
      <BranchesSection />
    </div>
  );
};

export default Index;

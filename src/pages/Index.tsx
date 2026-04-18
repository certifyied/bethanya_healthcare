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
import { motion } from "framer-motion";

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
      <section className="relative min-h-screen bg-[#071a12] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-0">

        {/* 🌿 BACKGROUND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d1f]/90 via-[#071a12]/40 to-[#020d08]/95 z-10"></div>

        {/* 🌿 BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/6a39089268a36d4b20c6a15202e41ac0.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-20 md:opacity-30"
          />
        </div>

        {/* 🌿 TOP FADE */}
        <div className="absolute top-0 left-0 w-full h-[120px] md:h-[160px] bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

        {/* 🌿 GLOW */}
        <div className="absolute right-[-80px] md:right-[-100px] top-[25%] w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-green-800/20 blur-[100px] rounded-full" />

        {/* 🌿 LOGO */}
        <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <div className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-[140px] 2xl:w-[180px] aspect-square rounded-full overflow-hidden">
            <img src="/images/Bethanya_Logo.png" alt="logo" className="w-full h-full object-cover" />
          </div>
          <p className="mt-2 text-[10px] sm:text-xs md:text-xs lg:text-sm tracking-[0.25em] text-[#D4AF37] uppercase text-center">
            Embrace Life | Embrace Wellness
          </p>
        </div>

        {/* 🌿 FLOATING LEAF */}
        <motion.img
          src="/images/8826c6b22fbc58a7e6c3202646061610.png"
          alt="leaf"
          className="absolute -top-10 -right-10 md:-right-16 
  w-[180px] md:w-[240px] lg:w-[300px] xl:w-[420px] 
  opacity-80 pointer-events-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🌿 CONTENT */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* 🌿 LEFT */}
          <div className="max-w-[500px] lg:max-w-[550px] xl:max-w-[750px] mx-auto md:mx-0 pl-8 md:pl-12 lg:pl-16">

            <motion.h1
              className="bodoni-moda mt-24 md:mt-16 lg:mt-12 
  text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl 
  font-semibold text-white leading-[1.1] mb-5 tracking-[0.04em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              Bethanya <br /> Healthcare
            </motion.h1>

            <motion.p
              className="forum-regular text-gray-300 mb-8 leading-relaxed 
  text-base md:text-lg lg:text-base 
  max-w-[420px] md:max-w-[400px] lg:max-w-[450px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            >
              Welcome to Bethanya Ayurveda, a serene healing sanctuary rooted in the timeless traditions of Kerala Ayurveda. Here, classical wisdom, pure herbal care, and graceful hospitality come together to restore balance, awaken vitality, and nurture complete well being.
            </motion.p>

            <Link
              to="/products"
              className="relative px-8 py-4 rounded-full bg-[#1f3d2b] text-white text-base md:text-lg hover:bg-[#163020] transition shadow-lg"
            >
              <span className="absolute inset-[2px] rounded-full border border-[#D4AF37]"></span>
              <span className="relative z-10">Explore Products</span>
            </Link>

          </div>

          {/* 🌿 RIGHT */}
          <div className="relative flex justify-center items-center mt-10 md:mt-10 lg:mt-20 xl:mt-0">

            {/* SHADOW */}
            <div className="absolute bottom-5 w-[160px] h-[40px] bg-black/40 blur-xl rounded-full"></div>

            {/* CARD */}
            <div className="relative z-30 
    w-[200px] md:w-[220px] lg:w-[230px] xl:w-[260px]
    h-[280px] md:h-[300px] lg:h-[320px] xl:h-[360px]
    rounded-[24px] lg:rounded-[28px]
    bg-white/5 backdrop-blur-xl border border-white/10
    flex flex-col items-center justify-between py-5 overflow-hidden">

              {/* 🌿 GLASS EFFECT (FIXED) */}
              <div className="absolute inset-0 rounded-[inherit] 
      bg-gradient-to-t from-transparent via-white/10 to-transparent 
      opacity-40 pointer-events-none z-10" />

              {/* 🌿 PRODUCT */}
              <div className="relative flex justify-center items-center z-20">

                <img
                  src="/images/21285de1f73f9229d9a5fa7283d514a3.png"
                  alt="bg"
                  className="absolute 
    w-[220px] md:w-[260px] lg:w-[280px] 
    opacity-60 md:opacity-70 lg:opacity-80 
    drop-shadow-[0_10px_5px_rgba(0,0,0,0.80)]"
                />

                <img
                  src="/images/9d3f1a6256c5a52679f6c90d177eeb4c.png"
                  alt="product"
                  className="relative z-20 
          w-[140px] md:w-[170px] lg:w-[190px] xl:w-[260px]
          object-contain drop-shadow-[0_10px_05px_rgba(0,0,0,0.80)]"
                />

              </div>
            </div>
          </div>

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

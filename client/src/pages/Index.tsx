import { Link } from "react-router-dom";
import { Leaf, Droplets, Heart, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import Banner from "@/components/Banner";
import BranchVideoSection from "@/components/BranchVideoSection";
import BranchGallerySection from "@/components/BranchGallerySection";
import ServicesSection from "@/components/ServicesSection";
import BranchesSection from "@/components/BranchesSection";
import ProductCarousel from "@/components/ProductCarousel";
import { motion } from "framer-motion";
import HomeAdress from "@/components/HomeAdress";
import Layout from "@/components/layout/Layout";

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
    <Layout>


      <div className="overflow-hidden">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-0">

          {/* 🌿 BACKGROUND GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f2218] to-[#0f2218]"></div>

          {/* 🌿 BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/6a39089268a36d4b20c6a15202e41ac0.webp"
              alt="background"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-20 md:opacity-10"
            />
          </div>

          {/* 🌿 GLASS / BLUR OVERLAY */}
          <div className="absolute inset-0 z-[1] bg-white/5 backdrop-blur-md"></div>

          {/* 🌿 TOP FADE */}
          <div className="absolute top-0 left-0 w-full h-[120px] md:h-[160px] bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

          {/* 🌿 GLOW */}
          <div className="absolute right-[-80px] md:right-[-100px] top-[25%] w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] bg-green-800/20 blur-[100px] rounded-full" />

          {/* 🌿 FLOATING LEAF */}
          <motion.img
            src="/images/8826c6b22fbc58a7e6c3202646061610.webp"
            alt="leaf"
            className="absolute -top-10 -right-10 md:-right-16 
    w-[180px] md:w-[240px] lg:w-[300px] xl:w-[420px] 
    opacity-80 pointer-events-none z-10
    drop-shadow-[0_30px_10px_rgba(0,0,0,0.35)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 🌿 CONTENT (TRUE CENTER) */}
          <div className="relative z-10 w-full flex justify-center items-center text-center mt-20 mb-20">

            <div className="max-w-[850px] mx-auto mt-10 md:mt-16 px-4 sm:px-5">

              <motion.h1
                className="cinzel-heading
    mt-8 sm:mt-14 md:mt-20 lg:mt-24
    text-2xl sm:text-4xl md:text-5xl lg:text-6xl
    font-semibold leading-[1.25]
    mb-6 md:mb-8
    tracking-[0.02em] md:tracking-[0.03em]
    text-center
    bg-gradient-to-r from-[#f7e7a1] via-[#d4af37] to-[#b8860b]
    bg-clip-text text-transparent"
              >
                A Historic Milestone for Bethanya Ayurveda
              </motion.h1>

              {/* Paragraph 1 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                A unique and historic moment in the journey of Bethanya Ayurveda as we opened another branch at Thonackad, conveniently located near Mavelikara town.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                The new branch was inaugurated by <strong className="text-white font-semibold">Adv. Chandy Oommen, MLA</strong>, who graciously honoured the occasion with his presence and formally inaugurated Bethanya Ayurveda, Thonackad, on 22nd August 2026.
              </motion.p>

              {/* Paragraph 3 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                The grand opening ceremony was attended by <strong className="text-white font-semibold">Mrs. Rethi, President of Puliyoor Grama Panchayat</strong>, along with ward members, distinguished political leaders, social workers, well-wishers, and members of the community.
              </motion.p>

              {/* Paragraph 4 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                Earlier, the facilities of Bethanya Ayurveda were dedicated by <strong className="text-white font-semibold">Rev. Sajan Mathew, Senior Pastor of Bethanya Prayer Garden International Ministries</strong>, marking the beginning of a new chapter in the journey of Bethanya Ayurveda.
              </motion.p>

              {/* Paragraph 5 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                Bethanya Ayurveda is a venture under the management of Bethanya Healthcare Pvt. Ltd., led by <strong className="text-white font-semibold">Dr. Krupa Raichel Thomas, Director (Medical &amp; Clinical Affairs)</strong>, and <strong className="text-white font-semibold">Mr. Alex Samson, Director (Administration &amp; Management)</strong>, under the guidance of <strong className="text-white font-semibold">Dr. V. J. Mathew, Chairman</strong>.
              </motion.p>

              {/* Paragraph 6 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-5 md:mb-7
    text-center"
              >
                This milestone marks another significant step in our mission to bring authentic Ayurveda, holistic healing, and compassionate healthcare closer to more people.
              </motion.p>

              {/* Paragraph 7 */}
              <motion.p
                className="forum-regular text-gray-200
    text-base sm:text-lg md:text-xl
    leading-[1.75] md:leading-relaxed
    mb-7 md:mb-9
    text-center"
              >
                Our main branch at Kattanam continues to be the foundation of our journey, while the new branch at Thonackad carries the same vision forward. Both branches provide quality Ayurvedic care with modern facilities, experienced doctors, trained therapists, and dedicated medical staff, ensuring compassionate and professional care for every patient.
              </motion.p>

              {/* Commitment & Motto */}
              <motion.div className="mt-8 mb-6 text-center">
                <p className="forum-regular text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-1">
                  With every new beginning, our commitment remains the same.
                </p>
                <p className="forum-regular text-[#D4AF37] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                  &ldquo;Embrace Wellness | Embrace Life&rdquo;
                </p>
              </motion.div>

              {/* Dedication Quote */}
              <motion.p className="forum-regular italic text-gray-300 text-base sm:text-lg md:text-xl mb-8 text-center">
                &ldquo;To God be the glory for all that He has begun and all that is yet to come.&rdquo;
              </motion.p>

              {/* Brand Logo */}
              <motion.div className="flex justify-center mb-8">
                <img
                  src="/images/Bethanya_Logo.webp"
                  alt="Bethanya Ayurveda"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* CTA Button */}
              <motion.div>
                <Link
                  to="/products"
                  className="inline-block px-6 py-3 md:px-8 md:py-4
      rounded-full bg-[#1f3d2b] hover:bg-[#284f38] transition-colors duration-300 border border-[#c2a97a]/40 shadow-lg
      text-sm md:text-lg text-white"
                >
                  <span className="forum-regular">
                    Explore Products
                  </span>
                </Link>
              </motion.div>

            </div>
          </div>
          <motion.img
            src="/images/cdde68071816c2b47099100d06e01d06.webp"
            alt="leaf"
            className="absolute bottom-[-20px] left-[-20px] 
  w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[320px] 
  opacity-80 pointer-events-none z-10
  drop-shadow-[0_30px_10px_rgba(0,0,0,0.35)]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </section>

        <section className="relative py-24 px-6 overflow-hidden">
          {/* 🌿 TOP RIGHT PNG */}
          <img
            src="/images/c8e87042094b221187b54a21cd70ba6b.webp"
            alt="decor"
            loading="lazy"
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

        <HomeAdress />
        <BranchesSection />

        <Banner />

        {/* Services & Packages Section */}
        <ServicesSection />

        {/* Latest Branch Opening Video Section */}
        <BranchVideoSection />

        {/* Pinterest-Style Masonry Branch Gallery Section */}
        <BranchGallerySection />
        <section className="py-20 px-6 bg-[#0f2218] relative overflow-hidden">

          {/* 🌿 BLURRED BACKGROUND IMAGE */}
          <img
            src="/images/6a39089268a36d4b20c6a15202e41ac0.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover blur-md scale-110 "
          />

          <div className="relative container mx-auto">

            {/* HEADING */}
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="font-body text-[#c2a97a] text-sm tracking-[0.2em] uppercase mb-3">
                  Curated for You
                </p>

                <h2 className="forum-regular font-heading text-3xl md:text-7xl 
        bg-gradient-to-r from-[#c2a97a] via-[#e6d3a3] to-[#a67c2d] 
        bg-clip-text text-transparent">
                  Premium Selections
                </h2>
              </div>
            </ScrollReveal>

            {/* CAROUSEL */}
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

        {/* Testimonials */}
        <section
          className="py-24 px-6 bg-[#0f2218] bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/images/Hero2.webp')", // change path
          }}
        >

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#0f2218]/80"></div>

          <div className="container mx-auto max-w-5xl relative z-10">

            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">
                  Testimonials
                </p>

                <h2 className="forum-regular font-heading text-4xl md:text-6xl text-primary-foreground drop-shadow-[0_6px_15px_rgba(0,0,0,0.4)]">
                  Loved by Thousands
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 0.15}>

                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 
                          border border-white/10
                          shadow-lg hover:shadow-xl transition-all duration-300">

                    <p className="font-body text-primary-foreground/80 italic mb-6 leading-relaxed">
                      "{t.text}"
                    </p>

                    <div>
                      <p className="font-heading text-primary-foreground font-semibold">
                        {t.name}
                      </p>
                      <p className="font-body text-primary-foreground/50 text-sm">
                        {t.location}
                      </p>
                    </div>

                  </div>

                </ScrollReveal>
              ))}
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

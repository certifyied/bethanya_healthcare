import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Combo Packs",
    items: [
      "Abhyangam & Steam Bath",
      "Udwarthanam & Steam Bath",
      "Abhyanga & Shirodhara",
      "Local Massage & Podikizhi",
      "Back Massage + Kativasti",
      "Abhyangam & Podikizhi",
    ],
  },
  {
    title: "Spa Massage",
    items: [
      "Rejuvenation Therapy",
      "Body Spa (Massage & Scrub)",
      "Massage + Scrub + Pack",
      "Deep Relaxation Spa",
      "Herbal Facial & Scrub",
      "Full Body Glow Therapy",
    ],
  },
  {
    title: "Special Treatments",
    items: [
      "Shirodhara",
      "Udwarthanam",
      "Podikizhi",
      "Elakizhi",
      "Njavarakizhi",
      "Pizhichil",
      "Kativasti",
      "Tharpanam",
    ],
  },
  {
    title: "Ayurvedic Massage",
    items: [
      "Abhyangam",
      "Aroma Therapy",
      "Deep Tissue Massage",
      "Marma Massage",
      "Head Massage",
      "Foot Massage",
      "Back Massage",
    ],
  },
];

export default function ServicesSection() {
  const handleServiceClick = (item: string) => {
    const message = `Hello, I would like to know more about ${item}.`;
    const url = `https://wa.me/918921799597?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 relative overflow-hidden bg-[#faf8f5]">
      {/* 🌿 Compact Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 relative z-10">
        <p className="text-xs sm:text-sm tracking-[0.25em] text-[#1f3d2b] uppercase font-bold">
          Our Offerings
        </p>
        <h2 className="forum-regular text-3xl sm:text-4xl md:text-5xl font-serif text-[#0f2218] mt-1.5 mb-2">
          Services & Packages
        </h2>
        <p className="forum-regular text-gray-600 text-sm sm:text-base">
          Click any treatment to chat directly with our consultants on WhatsApp
        </p>
      </div>

      {/* 🌿 Space-Effective Cohesive Luxury Card */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-[#0f2218] rounded-3xl p-5 sm:p-7 md:p-8 border border-[#c2a97a]/30 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col justify-between ${
                  index === 0
                    ? "lg:pr-5"
                    : index === servicesData.length - 1
                    ? "lg:pl-5"
                    : "lg:px-5"
                }`}
              >
                <div>
                  <h3 className="forum-regular text-xl md:text-2xl font-semibold mb-3 text-[#d4af37]">
                    {service.title}
                  </h3>

                  <ul className="forum-regular space-y-1.5 text-sm md:text-[15px] text-gray-200">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        onClick={() => handleServiceClick(item)}
                        className="group/item flex items-center justify-between gap-1.5 cursor-pointer hover:text-[#f5d76e] transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-white/10"
                      >
                        <div className="flex items-start gap-1.5 leading-snug">
                          <span className="text-[#d4af37]">•</span>
                          <span>{item}</span>
                        </div>
                        <span className="text-[11px] text-[#f5d76e] opacity-0 group-hover/item:opacity-100 transition-opacity font-sans shrink-0">
                          Enquire &rarr;
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#c2a97a]/20">
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full py-2 px-3 rounded-full text-xs uppercase tracking-wider font-semibold border border-[#c2a97a]/50 text-[#f5d76e] hover:bg-[#c2a97a] hover:text-[#0f2218] transition-all duration-200 shadow-sm"
                  >
                    Enquire {service.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🌿 Compact Bottom CTA */}
      <div className="text-center mt-8 md:mt-10 relative z-10">
        <Link
          to="/services"
          className="inline-block forum-regular px-7 py-2.5 md:py-3 rounded-full bg-[#1f3d2b] text-[#f5d76e] font-semibold text-base md:text-lg hover:bg-[#163020] transition-all shadow-md hover:scale-105 border border-[#c2a97a]/40"
        >
          Explore All Services & Pricing
        </Link>
      </div>
    </section>
  );
}
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
    // If no branch, put a full stop before at / after service name
    const message = `Hello, I would like to know more about ${item}.`;
    const url = `https://wa.me/918921799597?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* 🌿 Background image with opacity */}
      <div className="absolute inset-0 bg-center bg-white bg-no-repeat bg-cover pointer-events-none"></div>

      {/* 🌿 Heading */}
      <div className="relative mb-16 min-h-[160px] flex items-center justify-center">
        <div className="text-center relative z-10">
          <p className="text-sm tracking-[0.3em] text-[#0f2218] uppercase font-bold">
            Our Offerings
          </p>
          <h2 className="forum-regular text-5xl md:text-7xl font-serif text-[#0f2218] mt-3">
            Services & Packages
          </h2>
          <p className="forum-regular text-gray-600 text-base md:text-xl mt-3">
            Click any treatment to chat directly with our consultants on WhatsApp
          </p>
        </div>
      </div>

      {/* 🌿 Grid with single golden outline */}
      <div className="relative z-10 max-w-7xl mx-auto p-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#0f2218] backdrop-blur-md rounded-2xl p-6 relative">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl p-6 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <h3 className="forum-regular text-2xl md:text-3xl font-semibold mb-4 text-[#d4af37] relative z-10">
                  {service.title}
                </h3>

                <ul className="forum-regular space-y-3 text-base md:text-lg text-gray-200 relative z-10">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleServiceClick(item)}
                      className="group/item flex items-center justify-between gap-2 cursor-pointer hover:text-[#f5d76e] transition-colors p-1 -mx-1 rounded-lg hover:bg-white/5"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>{item}</span>
                      </div>
                      <span className="text-xs text-[#c2a97a] opacity-0 group-hover/item:opacity-100 transition-opacity font-sans">
                        Enquire &rarr;
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c2a97a]/20">
                <button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full py-2.5 px-3 rounded-full text-xs uppercase tracking-wider font-semibold border border-[#c2a97a]/50 text-[#f5d76e] hover:bg-[#c2a97a] hover:text-[#0f2218] transition-all"
                >
                  Enquire {service.title}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌿 CTA */}
      <div className="text-center mt-16 relative z-10">
        <Link
          to="/services"
          className="inline-block forum-regular relative px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#1f3d2b] text-white font-semibold text-lg md:text-xl hover:bg-[#163020] transition shadow-md hover:shadow-lg hover:scale-105 border border-[#c2a97a]/40"
        >
          Explore All Services & Pricing
        </Link>
      </div>
    </section>
  );
}
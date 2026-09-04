import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const branches = [
  {
    id: "kattanam",
    name: "Kattanam",
    fullName: "Bethanya Ayurveda Hospital",
    image: "/images/Gemini_Generated_Image_1ts4f01ts4f01ts4.webp",
    tagline: "Peaceful village wellness & inpatient care",
    link: "/branches/kattanam",
  },
  {
    id: "varkala",
    name: "Varkala",
    fullName: "Bethanya Ayurveda Varkala",
    image: "/images/Gemini_Generated_Image_8121581215812158 (1).webp",
    tagline: "Cliffside serenity & ocean breeze",
    comingSoon: true,
    link: "/branches/varkala",
  },
  {
    id: "thonnakkad",
    name: "Thonnakkad",
    fullName: "Bethanya Ayurveda Thonnakkad",
    image: "/images/Gemini_Generated_Image_plmpgplmpgplmpgp.webp",
    tagline: "Tradition meets healing & clinic",
    link: "/branches/thonnakkad",
  },
];

export default function BranchesSection() {
  return (
    <section className="py-24 px-6 bg-[#f9f9f7]">
      {/* 🌿 Heading */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-[#c9a45c] uppercase font-bold">
          Our Presence
        </p>
        <h2 className="forum-regular text-5xl md:text-7xl font-serif mt-3 text-[#0f2218]">
          Our Branches
        </h2>
        <p className="forum-regular text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4">
          Discover our dedicated healing sanctuaries across Kerala, each designed for deep holistic rejuvenation.
        </p>
      </div>

      {/* 🌿 Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {branches.map((branch, index) => (
          <motion.div key={index} className="relative group">
            <Link to={branch.link} className="block">
              {/* 🌟 Outer Gold Border */}
              <div className="p-[2px] border border-[#c9a45c] rounded-2xl group-hover:shadow-[0_15px_35px_rgba(201,164,92,0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                {/* 🌟 Inner Frame */}
                <div className="p-[6px] border border-[#c9a45c] bg-white rounded-2xl">
                  {/* 🌿 Image Container */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      loading="lazy"
                      className="w-full h-[380px] md:h-[440px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* 🌿 Bottom Content Panel */}
                    <div className="absolute bottom-0 w-full text-center py-6 px-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent rounded-b-xl">
                      <h3 className="text-2xl font-serif text-[#c9a45c] group-hover:text-[#f5d76e] transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-sm text-gray-300 mt-2 line-clamp-1">
                        {branch.tagline}
                      </p>

                      <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#f5d76e] font-bold">
                        <span>Explore Branch</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* 🌟 Coming Soon Badge */}
                    {branch.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/30"></div>

                        {/* FULL WIDTH STRIP */}
                        <div
                          className="w-full text-center py-3 text-sm tracking-[0.3em] uppercase font-semibold
                            bg-white/10 backdrop-blur-lg border-y border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                        >
                          <span className="inline-flex items-center gap-2 text-[#f5d76e] drop-shadow-[0_0_8px_rgba(245,215,110,0.8)] font-bold">
                            <Sparkles className="w-4 h-4" />
                            <span>Opening Soon</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
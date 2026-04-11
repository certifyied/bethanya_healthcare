import { motion } from "framer-motion";

const branches = [
    {
        name: "Kattanam",
        image: "/images/Gemini_Generated_Image_1ts4f01ts4f01ts4.png",
        tagline: "Peaceful village wellness",
    },
    {
        name: "Varkala",
        image: "/images/Gemini_Generated_Image_8121581215812158 (1).png",
        tagline: " Cliffside serenity & ocean breeze",
    },
    {
        name: "Thonnakkad",
        image: "/images/Gemini_Generated_Image_plmpgplmpgplmpgp.png",
        tagline: "Tradition meets healing",
        comingSoon: true, // 👈 add this
    },
];

export default function BranchesSection() {
    return (
        <section className="py-24 px-6 bg-[#f9f9f7]">

            {/* 🌿 Heading */}
            <div className="text-center mb-16">
                <p className="text-sm tracking-[0.3em] text-[#c9a45c] uppercase">
                    Our Presence
                </p>
                <h2 className="text-4xl md:text-5xl font-serif mt-3 text-black">
                    Our Branches
                </h2>
            </div>

            {/* 🌿 Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {branches.map((branch, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                    >
                        {/* 🌟 Outer Gold Border */}
                        <div className="p-[2px] border border-[#c9a45c] rounded-2xl">

                            {/* 🌟 Inner Frame */}
                            <div className="p-[6px] border border-[#c9a45c] bg-white rounded-2xl">
                                {/* 🌿 Image Container */}
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={branch.image}
                                        alt={branch.name}
                                        className="w-full h-[380px] md:h-[440px] lg:h-[500px] object-cover "
                                    />

                                    {/* 🌿 Bottom Content Panel */}
                                    <div className="absolute bottom-0 w-full text-center py-6 px-4 
bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-b-xl">
                                        <h3 className="text-2xl font-serif text-[#c9a45c]">
                                            {branch.name}
                                        </h3>
                                        <p className="text-sm text-gray-300 mt-2">
                                            {branch.tagline}
                                        </p>
                                    </div>
                                    {/* 🌟 Coming Soon Badge */}
                                    {branch.comingSoon && (
                                        <div className="absolute inset-0 flex items-center justify-center z-10">

                                            {/* DARK OVERLAY */}
                                            <div className="absolute inset-0 bg-black/30"></div>

                                            {/* FULL WIDTH STRIP */}
                                            <div
                                                className="
        w-full text-center py-3
        
        text-sm tracking-[0.3em] uppercase font-semibold
        
        bg-white/10
        backdrop-blur-lg
        border-y border-white/20
        
        shadow-[0_8px_30px_rgba(0,0,0,0.2)]
      "
                                            >
                                                <span
                                                    className="
          text-white
          drop-shadow-[0_0_6px_rgba(230,194,122,0.6)]
        "
                                                >
                                                    Coming Soon
                                                </span>
                                            </div>

                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}
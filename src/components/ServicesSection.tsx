import { motion } from "framer-motion";

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
    return (
        <section className="py-24 px-6 relative overflow-hidden">

            {/* 🌿 Background image with opacity */}
            <div
                className="absolute inset-0 bg-center bg-white bg-no-repeat bg-cover pointer-events-none"
            ></div>

            {/* 🌿 Heading with background image */}
            <div className="relative mb-16 min-h-[200px] flex items-center justify-center">

                {/* Optional overlay to make text pop */}
                <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>

                {/* Heading content */}
                <div className="text-center relative z-10">
                    <p className="text-sm tracking-[0.3em] text-[#0f2218] uppercase">
                        Our Offerings
                    </p>
                    <h2 className="forum-regular text-5xl md:text-7xl font-serif text-[#0f2218] mt-3">
                        Services & Packages
                    </h2>
                </div>
            </div>

            {/* 🌿 Grid with single golden outline */}
            <div className="relative z-10 max-w-7xl mx-auto p-1">
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#0f2218] backdrop-blur-md rounded-2xl p-6 relative"
                >
                    {/* Inner golden border */}
                   

                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative group rounded-2xl p-6 overflow-hidden"
                        >
                            <h3 className="forum-regular text-2xl md:text-3xl font-semibold mb-4 text-[#d4af37] relative z-10">
                                {service.title}
                            </h3>

                            <ul className="forum-regular space-y-3 text-base md:text-lg text-gray-200 relative z-10">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#d4af37]">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 🌿 CTA */}
            <div className="text-center mt-16 relative z-10">
                <button className="forum-regular relative px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#1f3d2b] text-white font-semibold text-lg md:text-xl hover:bg-[#163020] transition shadow-md hover:shadow-lg">
                    Explore All Services
                </button>
            </div>
        </section>
    );
}
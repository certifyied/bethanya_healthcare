import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProductCarousel = ({ products }: { products: any[] }) => {
    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev + 1) % products.length);
    const prev = () =>
        setActive((prev) => (prev - 1 + products.length) % products.length);

    /* 🔥 AUTO SLIDE */
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 2000);
        return () => clearInterval(interval);
    }, [active]);

    return (
        <div className="relative flex items-center justify-center 
h-[420px] sm:h-[480px] md:h-[500px] 
overflow-visible">

            {products.map((product, index) => {
                const offset = index - active;

                return (
                    <motion.div
                        key={product.id}
                        className="absolute w-[240px] md:w-[280px] cursor-pointer"

                        animate={{
                            x: offset * 200,
                            scale: offset === 0 ? 1 : 0.8,
                            opacity: offset === 0 ? 1 : 0.25,
                            zIndex: offset === 0 ? 20 : 10 - Math.abs(offset),
                            filter: offset === 0 ? "blur(0px)" : "blur(2px)",
                        }}

                        transition={{ duration: 0.5, ease: "easeInOut" }}

                        /* 🔥 CLICK TO FOCUS */
                        onClick={() => setActive(index)}

                        /* 🔥 CONTROLLED DRAG */
                        drag="x"
                        dragConstraints={{ left: -60, right: 60 }} // ⛔ LIMIT DRAG RANGE
                        dragElastic={0.1} // tighter feel (less stretchy)

                        onDragEnd={(e, info) => {
                            const swipe = info.offset.x;
                            const velocity = info.velocity.x;

                            // 🎯 SMART SWIPE DETECTION
                            if (swipe < -40 || velocity < -500) {
                                next();
                            } else if (swipe > 40 || velocity > 500) {
                                prev();
                            }
                            // else → snap back automatically
                        }}
                    >
                        {/* CARD */}
                        <div className="relative my-16">

                            {/* 🌸 FLOWER (CENTERED BACKGROUND) */}
                            <img
                                src="/images/3341a8bafdc50e1bc5ea0afe04905fa7.png"
                                alt="flower"
                                className="absolute top-1/2 left-1/2 
  -translate-x-1/2 -translate-y-1/2 
  w-[900px] opacity-80 
  pointer-events-none -z-10 
  scale-[1.8]"
                            />

                            {/* ✨ OUTER GOLD OUTLINE */}
                            <div className="absolute -inset-[6px] 
    rounded-t-[200px] rounded-b-[50px] 
    border border-[#c2a97a]/80 pointer-events-none z-0"
                            />

                            {/* CARD */}
                            <div className="overflow-hidden border border-[#c2a97a]/30 shadow-2xl
rounded-t-[200px] rounded-b-[40px]
bg-white/5 backdrop-blur-lg
h-[485px] flex flex-col justify-between 
relative z-10">

                                {/* IMAGE */}
                                <div className="h-[400px] overflow-hidden pointer-events-none">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4 text-center pointer-events-none">
                                    <h3 className="text-[#c2a97a] font-heading text-lg mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-[#c2a97a]/70 text-xs leading-relaxed line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                );
            })}

        </div>
    );
};

export default ProductCarousel;
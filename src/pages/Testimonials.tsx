import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Anjali Nair",
    text: "The therapies here completely transformed my health. I feel more balanced and energetic than ever.",
  },
  {
    name: "Rahul Menon",
    text: "Authentic Ayurvedic treatments and a very calming environment. Highly recommended!",
  },
  {
    name: "Meera Krishnan",
    text: "After Panchakarma, I feel rejuvenated. The staff is very professional and caring.",
  },
];

function Testimonials() {
  return (
    <div className="min-h-screen mt-10 mb-20">

      {/* 🔽 FULL WIDTH GREEN SECTION */}
      <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

        {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-[1px] bg-[#0a1a12]"></div>
        </div>

        {/* LEFT BOTTOM PNG BORDER */}
        <img
          src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
          alt="border"
          className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
        />

        {/* TITLE */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-9xl forum-regular mt-32 md:mt-40 lg:mt-48 mb-6 
bg-gradient-to-r from-[#c2a97a] via-[#f8e7b0] to-[#d4af37]
bg-clip-text text-transparent
drop-shadow-[0_8px_5px_rgba(0,0,0,0.8)]">
  Testimonials
</h1>

        {/* CAPTION */}
        <p className="forum-regular text-center text-lg md:text-2xl text-[#c2a97a] max-w-3xl mx-auto px-6 mb-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
          Hear from our valued clients who experienced the healing touch of authentic Ayurveda and discovered renewed wellness and balance.
        </p>

      </div>

      {/* 🌿 TESTIMONIALS SECTION */}
      <div className="mx-auto max-w-6xl pt-28 px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-[#f5f5f2] p-6 rounded-3xl shadow-md hover:shadow-xl transition duration-300">

                <p className="text-[#4b3a2f] italic mb-4">
                  “{item.text}”
                </p>

                <h4 className="text-[#1f3d2b] font-semibold">
                  — {item.name}
                </h4>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Testimonials;
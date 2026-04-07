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
    <div className="min-h-screen">

      {/* 🌿 HERO SECTION */}
      <div className="relative text-white pt-24 pb-20">

        <div className="absolute inset-0 bg-[#0f2218]"></div>

        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#c2a97a]/40 pointer-events-none"></div>

        <div className="relative container mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="text-center py-16 md:py-18">
              <p className="font-body text-[#c2a97a] text-sm tracking-[0.2em] uppercase mb-3">
                Testimonials
              </p>
              <h1 className="font-heading text-4xl md:text-5xl mb-4">
                What Our Clients Say
              </h1>
              <p className="font-body text-[#c2a97a]/80 max-w-lg mx-auto">
                Real experiences from people who trusted our Ayurvedic healing journey.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <img
          src="/images/Flower.png"
          alt="decoration"
          className="absolute right-0 bottom-[-40px] sm:bottom-[-70px] md:bottom-[-110px]
          w-[120px] sm:w-[160px] md:w-[260px] opacity-100 pointer-events-none
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* 🧾 TITLE */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular my-16">
        Testimonials
      </h1>

      {/* 🌿 TESTIMONIALS SECTION */}
      <div className="px-6 pb-20">
        <div className="container mx-auto max-w-6xl">

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

    </div>
  );
}

export default Testimonials;
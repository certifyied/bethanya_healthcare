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
      <div className="relative pt-24 pb-20">

        {/* 🌿 WHITE BG */}
        <div className="absolute inset-0 bg-white"></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER (NO TOP LINE) */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#1f3d2b]/90 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative container mx-auto max-w-6xl px-6 text-center py-6 md:py-8 -mt-20 md:-mt-28 flex flex-col items-center">

          {/* 🌿 OPTIONAL LOGO */}
          <img
            src="/images/BETHANYA AYURVEDA HOSPITAL.png"
            alt="Logo"
            className="w-[120px] md:w-[160px] lg:w-[200px] mb-4 object-contain drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
          />

          <ScrollReveal>
            <p className="text-[#1f3d2b] text-sm tracking-[0.2em] uppercase mb-3">
              Testimonials
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
              What Our Clients Say
            </h1>

            <p className="text-[#c2a97a]/80 max-w-lg mx-auto mt-4">
              Real experiences from people who trusted our Ayurvedic healing journey.
            </p>
          </ScrollReveal>

        </div>

        {/* 🌸 DECOR IMAGE */}
        <img
          src="/images/Flower.png"
          alt="decoration"
          className="absolute right-0 bottom-[-80px] w-[180px] md:w-[260px] pointer-events-none drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
        />
      </div>

<div className="bg-[#0f2218] pt-4 pb-4 relative overflow-hidden">

  {/* LEFT BOTTOM PNG BORDER */}
  <img
    src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
    alt="border"
    className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
  />

  <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular my-16 text-[#c2a97a]">
    Testimonials
  </h1>

</div>

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
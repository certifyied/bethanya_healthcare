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
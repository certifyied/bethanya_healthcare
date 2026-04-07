import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useNavigate } from "react-router-dom";

const branches = ["KATTANAM", "THONNAKKAD", "VARKALA"];

const servicesData: any = {
  KATTANAM: {
    combo: [
      "Abhyangam & Steam bath",
      "Udwarthanam & Steam bath",
      "Abhyanga & Shirodhara",
      "Local Massage & Local Podikizhi",
      "Back massage, Local podikizhi & Kativasti/Lepanam",
      "Abhyangam & Podikizhi",
    ],
    spa: [
      "Rejuvenation therapy",
      "Body spa (Massage and scrub)",
      "Body massage + Scrub + Pack",
    ],
    special: [
      "Shirodhara", "Udwarthanam", "Podikizhi", "Elakizhi",
      "Naranga kizhi", "Njavarakizhi", "Pizhichil", "Kativasti",
      "Greevavasthi", "Januvasthi", "Meruvasthi", "Kati pitchu",
      "Takradhara", "Ksheera dhara", "Kashaya dhara",
      "Dhanyamla dhara", "Tharpanam", "Karnapooranam",
      "Shirovasthi", "Nasyam",
    ],
    massage: [
      "Abhyangam", "Aroma therapy", "Deep tissue massage",
      "Marma massage", "Head massage", "Face massage",
      "Foot massage", "Back massage",
      "Neck and Shoulder massage",
      "Neck and back massage",
      "Head Neck and back massage",
    ],
  },

  THONNAKKAD: {
    // you can customize later if needed
    combo: ["Abhyangam & Steam bath", "Abhyanga & Shirodhara"],
    spa: ["Rejuvenation therapy"],
    special: ["Shirodhara", "Podikizhi"],
    massage: ["Abhyangam", "Head massage"],
  },

  VARKALA: null, // coming soon
};

const Section = ({ title, items, image, reverse = false, branch }: any) => {
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate(`/appointment?branch=${branch}&service=${title}`);
  };

  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
        } items-center gap-10 mb-20`}
    >
      <div className="w-full md:w-1/2">
        <div
          className="h-[350px] md:h-[450px] w-full rounded-3xl bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#1f3d2b] mb-6">
          {title}
        </h3>

        <ul className="space-y-3 text-[#4b3a2f]">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex gap-3 text-lg">
              <span className="text-[#D4AF37] font-semibold">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* ✅ APPOINTMENT BUTTON */}
        <button
          onClick={handleAppointment}
          className="mt-6 px-6 py-3 bg-[#1f3d2b] text-white rounded-full hover:bg-[#163020] transition"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

function ServicesPackages() {
  const [selectedBranch, setSelectedBranch] = useState("KATTANAM");

  const data = servicesData[selectedBranch];

  return (
    <section id="services" className="bg-white">

      {/* 🌿 TOP GREEN SECTION */}
      <div className="relative text-white pt-24 pb-20">

        {/* 🌿 DARK BG */}
        <div className="absolute inset-0 bg-white"></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER (NO TOP LINE) */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#1f3d2b]/90 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative container mx-auto max-w-6xl px-6 text-center py-6 md:py-8 -mt-20 md:-mt-28 flex flex-col items-center">

  {/* LOGO */}
  <img
    src="/images/BETHANYA AYURVEDA HOSPITAL.png"
    alt="Bethanya Logo"
    className="w-[120px] md:w-[160px] lg:w-[200px] mb-4 
    object-contain 
    drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
  />

  <ScrollReveal>
    <p className="text-[#1f3d2b] text-sm tracking-[0.2em] uppercase mb-3">
      Our Services
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
      Services & Packages
    </h2>

    <p className="text-[#c2a97a]/80 max-w-lg mx-auto mt-4">
      Experience authentic Ayurvedic therapies designed to rejuvenate your body and mind.
    </p>
  </ScrollReveal>

</div>

        {/* 🌸 DECOR IMAGE */}
        <img
          src="/images/Flower.png"
          alt="decoration"
          className="absolute right-0 bottom-[-80px] w-[180px] md:w-[260px] pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* 🔽 REST CONTENT */}
      <div className="container mx-auto max-w-6xl pt-28 px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
            Services & Packages
          </h2>
        </div>

        {/* BRANCH SELECTOR */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {branches.map((branch) => (
            <button
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className={`px-6 py-2 rounded-full border transition ${selectedBranch === branch
                ? "bg-[#1f3d2b] text-white"
                : "bg-white text-[#1f3d2b] border-[#1f3d2b]"
                }`}
            >
              {branch}
            </button>
          ))}
        </div>

        {/* VARKALA COMING SOON */}
        {!data && (
          <div className="text-center py-20">
            <h3 className="text-3xl font-semibold text-[#1f3d2b]">
              Varkala Branch
            </h3>
            <p className="mt-4 text-lg text-[#4b3a2f]">
              Coming Soon 🌿
            </p>
          </div>
        )}

        {/* SERVICES */}
        {data && (
          <>
            <Section
              title="Combo Packs"
              image="/images/8CA5csIHslwV3sQ_pzp-VJomeg6dSWfeoxJbRqYh3f6.jpg"
              items={data.combo}
              branch={selectedBranch}
            />

            <Section
              title="Spa Massage"
              image="/images/DFp7i7MyG3HOnmFWul7p.jpg"
              reverse
              items={data.spa}
              branch={selectedBranch}
            />

            <Section
              title="Special Treatments"
              image="/images/VA9zLVQfBMMJty.jpg"
              items={data.special}
              branch={selectedBranch}
            />

            <Section
              title="Ayurvedic Massage"
              image="/images/Zcu9vir12SYeuV3V7vuPCWLb3E9DG-BpT.jpg"
              reverse
              items={data.massage}
              branch={selectedBranch}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesPackages;
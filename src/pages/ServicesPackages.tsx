import React, { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSearchParams } from "react-router-dom";
import AppointmentModal from "@/components/AppointmentModal";

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

const Section = ({ title, items, image, reverse = false, branch, openEnquiry }: any) => {
  return (
    <div className="mb-20">
      <div
        className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}
items-center gap-10 
p-[6px]  /* 👈 THIS CREATES THE GAP */
rounded-3xl 
border border-[#c2a97a] 
bg-[#0f2218]
shadow-[0_10px_40px_rgba(0,0,0,0.08)]
hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
transition-all duration-300`}
      >
        {/* 🔥 INNER CARD */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 rounded-3xl border border-[#c2a97a]/40 bg-[#0f2218] w-full">

          <div className="w-full md:w-1/2">
            <div
              className="h-[350px] md:h-[450px] w-full rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-[#c2a97a]  text-3xl md:text-4xl font-semibold text-[#1f3d2b] mb-6">
              {title}
            </h3>

            <ul className="space-y-3 text-[#4b3a2f]">
              {items.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 text-lg">
                  <span className="text-[#c2a97a] font-semibold">{i + 1}.</span>
                  <span className="text-[#c2a97a] ">{item}</span>
                </li>
              ))}
            </ul>

            {/* ✅ APPOINTMENT BUTTON */}
            <div className="text-center mt-6">
              <button
                onClick={() => openEnquiry(title)}
                className="px-6 py-3 rounded-2xl transition-all duration-300
    bg-transparent border border-[#d4af37]
    outline outline-1 outline-[#d4af37]/30 outline-offset-4
    text-[#c2a97a]
    hover:bg-[#d4af37] hover:text-[#0f2218]"
              >
                Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function ServicesPackages() {
  const [selectedBranch, setSelectedBranch] = useState("KATTANAM");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const data = servicesData[selectedBranch];

  useEffect(() => {
    const branch = searchParams.get("branch");
    const service = searchParams.get("service");
    setShowEnquiry(Boolean(branch && service));
  }, [searchParams]);

  return (
    <section id="services" className="bg-white">


      {/* 🌿 TOP GREEN SECTION */}
      <div className="relative text-white pt-24 pb-20">

        {/* 🌿 WHITE BG */}
        <div className="absolute inset-0 bg-white z-0"></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER (NO TOP LINE) */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#1f3d2b]/90 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative z-10 container mx-auto max-w-6xl px-6 text-center py-6 md:py-8 -mt-20 md:-mt-28 flex flex-col items-center">

          {/* LOGO */}
          <img
            src="/images/BETHANYA AYURVEDA HOSPITAL.png"
            alt="Bethanya Logo"
            className="w-[120px] md:w-[160px] lg:w-[200px] mb-4 
    object-contain 
    drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
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
          className="absolute right-0 bottom-[-80px] 
  w-[180px] md:w-[260px] 
  pointer-events-none 
  z-20
  drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* 🔽 FULL WIDTH GREEN SECTION */}
      <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

        {/* LEFT BOTTOM PNG BORDER */}
        <img
          src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
          alt="border"
          className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
        />

        {/* TITLE */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular my-16 text-[#c2a97a]">
          Services & Packages
        </h1>

        {/* BRANCH SELECTOR */}
        <div className="px-6 mt-10 mb-10">
          <div className="w-full">
            <ScrollReveal delay={0.2}>

              {/* 🔹 HEADING */}
              <h3 className="text-center text-lg md:text-xl font-medium text-[#c2a97a] mb-6 tracking-wide">
                Choose Our Branch
              </h3>

              <div className="flex justify-center gap-3 flex-wrap">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`font-body text-sm px-6 py-2.5 rounded-2xl transition-all duration-300 relative
bg-[#0f2218]
border border-[#d4af37]
outline outline-1 outline-[#d4af37]/30
outline-offset-4
${selectedBranch === branch
                        ? "bg-[#d4af37] text-[#0f2218] shadow-glow"
                        : "text-muted-foreground hover:bg-[#0f2218]"
                      }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>

            </ScrollReveal>
          </div>
        </div>

      </div>

      {/* 🔽 KEEP REST CONTENT CONSTRAINED */}
      <div className="mx-auto max-w-6xl pt-28 px-6">

        {/* ✅ SELECTED BRANCH NAME */}
        {selectedBranch && (
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1f3d2b] mb-10">
            {selectedBranch} Branch
          </h2>
        )}

        {/* VARKALA COMING SOON */}
        {!data && (
          <div className="text-center py-20">
            {/* <h3 className="text-3xl font-semibold text-[#1f3d2b]">
              Varkala Branch
            </h3> */}
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
              openEnquiry={(service: string) => setSearchParams({ branch: selectedBranch, service })}
            />

            <Section
              title="Spa Massage"
              image="/images/DFp7i7MyG3HOnmFWul7p.jpg"
              reverse
              items={data.spa}
              branch={selectedBranch}
              openEnquiry={(service: string) => setSearchParams({ branch: selectedBranch, service })}
            />

            <Section
              title="Special Treatments"
              image="/images/VA9zLVQfBMMJty.jpg"
              items={data.special}
              branch={selectedBranch}
              openEnquiry={(service: string) => setSearchParams({ branch: selectedBranch, service })}
            />

            <Section
              title="Ayurvedic Massage"
              image="/images/Zcu9vir12SYeuV3V7vuPCWLb3E9DG-BpT.jpg"
              reverse
              items={data.massage}
              branch={selectedBranch}
              openEnquiry={(service: string) => setSearchParams({ branch: selectedBranch, service })}
            />
          </>
        )}
      </div>
      <AppointmentModal
        isOpen={showEnquiry}
        onClose={() => {
          setShowEnquiry(false);
          setSearchParams({});
        }}
      />
    </section>
  );
}

export default ServicesPackages;
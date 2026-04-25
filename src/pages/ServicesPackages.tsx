import React, { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSearchParams } from "react-router-dom";
import AppointmentModal from "@/components/AppointmentModal";

const branches = ["KATTANAM", "VARKALA", "THONNAKKAD"];

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

  VARKALA: {
    // you can customize later if needed
    combo: ["Abhyangam & Steam bath", "Abhyanga & Shirodhara"],
    spa: ["Rejuvenation therapy"],
    special: ["Shirodhara", "Podikizhi"],
    massage: ["Abhyangam", "Head massage"],
  },

  THONNAKKAD: null, // coming soon
};

const Section = ({ title, items, image, reverse = false, branch, openEnquiry }: any) => {
  return (
    <div className="mb-20">
      <div
        className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}
items-center gap-10 
p-[6px]  /* 👈 THIS CREATES THE GAP */
rounded-3xl 
border border-[#0f2218] 
shadow-[0_10px_10px_rgba(0,0,0,0.08)]
hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
transition-all duration-300`}
      >
        {/* 🔥 INNER CARD */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 rounded-3xl border border-[#c2a97a]/40 bg-[#0f2218] w-full overflow-hidden">

          {/* 🌿 BACKGROUND IMAGE WITH BLUR */}
          <img
            src="/images/6a39089268a36d4b20c6a15202e41ac0.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-110"
          />

          {/* OPTIONAL DARK OVERLAY FOR BETTER READABILITY */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full">

            <div className="w-full md:w-1/2">
              <div
                className="h-[350px] md:h-[450px] w-full rounded-3xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="forum-regular text-[#c2a97a] text-4xl md:text-5xl font-semibold text-[#1f3d2b] mb-6 drop-shadow-md">
                {title}
              </h3>

              <ul className="forum-regular space-y-4 text-[#4b3a2f] drop-shadow-md">
                {items.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xl md:text-2xl">
                    <span className="text-[#c2a97a] font-semibold">{i + 1}.</span>
                    <span className="text-[#c2a97a]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* ✅ APPOINTMENT BUTTON */}
              <div className="text-center mt-6">
                <button
                  onClick={() => openEnquiry(title)}
                  className="forum-regular px-8 py-4 text-lg md:text-xl rounded-3xl transition-all duration-300
          bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a]
          border border-[#d4af37]
          outline outline-1 outline-[#d4af37]/30 outline-offset-4
          text-[#0f2218] font-semibold
          hover:scale-105 hover:shadow-[0_8px_20px_rgba(212,175,55,0.35)]"
                >
                  Appointment
                </button>
              </div>
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

      {/* 🔽 FULL WIDTH GREEN SECTION */}
      <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

        {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full">

          <img
            src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
            alt="border"
            className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
          />

          {/* Inner green/dark line */}
          <div className="h-[1px] bg-[#0a1a12]"></div>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-9xl forum-regular mt-32 md:mt-40 lg:mt-48 mb-6 
bg-gradient-to-r from-[#c2a97a] via-[#f8e7b0] to-[#d4af37]
bg-clip-text text-transparent
drop-shadow-[0_8px_5px_rgba(0,0,0,0.8)]">
          Branches & Services
        </h1>

        {/* CAPTION */}
        <p className="forum-regular text-center text-lg md:text-2xl text-[#c2a97a] max-w-3xl mx-auto px-6 mb-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
          Discover our wellness branches and explore authentic Ayurvedic treatments crafted for complete healing and rejuvenation.
        </p>

        {/* BRANCH SELECTOR */}
        <div className="px-6 mt-10 mb-10">
          <div className="w-full">
            <ScrollReveal delay={0.2}>

              {/* 🔹 HEADING */}
              <h3 className="forum-regular text-center text-2xl md:text-3xl font-medium text-[#c2a97a] mb-6 tracking-wide drop-shadow-[0_4px_5px_rgba(0,0,0,0.8)]">
                Choose Our Branch
              </h3>

              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex justify-start md:justify-center gap-3 sm:gap-4 min-w-max px-2">
                  {branches.map((branch) => (
                    <button
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`forum-regular relative z-20 font-body text-sm md:text-base px-5 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 whitespace-nowrap flex-shrink-0

bg-[#1f3d2b]
ring-1 ring-[#0f2218]
tracking-wider

${selectedBranch === branch
                          ? "bg-[#d4af37] text-[#0f2218] ring-[#d4af37]"
                          : "text-[#c2a97a]"
                        }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

            </ScrollReveal>
          </div>
        </div>

      </div>

      {/* 🔽 KEEP REST CONTENT CONSTRAINED */}
      <div className="mx-auto max-w-6xl pt-28 px-6">

        {/* ✅ SELECTED BRANCH NAME */}
        {selectedBranch && (
          <div className="text-center mb-10">
            <h2 className="forum-regular text-3xl md:text-5xl font-extrabold text-[#1f3d2b] leading-none">
              {selectedBranch} Branch
            </h2>

            {/* VERY CLOSE UNDERLINE */}
            <div className="flex justify-center -mt-4 md:-mt-16">
              <img
                src="/images/underline1.png"
                alt="underline"
                className="w-40 md:w-56 object-contain"
              />
            </div>
          </div>
        )}


        {/* VARKALA COMING SOON */}
        {!data && (
          <div className="text-center -mt-16 mb-14">
            <p className="forum-regular mt-4 text-2xl md:text-6xl gold-shine">
              Coming Soon
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
              openEnquiry={(service: string) =>
                setSearchParams({ branch: selectedBranch, service })
              }
            />

            <Section
              title="Spa Massage"
              image="/images/DFp7i7MyG3HOnmFWul7p.jpg"
              reverse
              items={data.spa}
              branch={selectedBranch}
              openEnquiry={(service: string) =>
                setSearchParams({ branch: selectedBranch, service })
              }
            />

            <Section
              title="Special Treatments"
              image="/images/VA9zLVQfBMMJty.jpg"
              items={data.special}
              branch={selectedBranch}
              openEnquiry={(service: string) =>
                setSearchParams({ branch: selectedBranch, service })
              }
            />

            <Section
              title="Ayurvedic Massage"
              image="/images/Zcu9vir12SYeuV3V7vuPCWLb3E9DG-BpT.jpg"
              reverse
              items={data.massage}
              branch={selectedBranch}
              openEnquiry={(service: string) =>
                setSearchParams({ branch: selectedBranch, service })
              }
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
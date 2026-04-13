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


      {/* 🔽 FULL WIDTH GREEN SECTION */}
      <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

        {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full">
          {/* Gold line */}
          <div className="h-[1px] bg-[#c2a97a]"></div>

          {/* Small gap */}
          <div className="h-[3px] bg-[#0f2218]"></div>

          {/* Inner green/dark line */}
          <div className="h-[1px] bg-[#0a1a12]"></div>
        </div>

        {/* LEFT BOTTOM PNG BORDER */}
        <img
          src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
          alt="border"
          className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
        />

        {/* TITLE */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-9xl forum-regular mt-24 md:mt-32 mb-16 text-[#c2a97a]">
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

              <div className="flex justify-center gap-2 flex-nowrap">
                {branches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setSelectedBranch(branch)}
                    className={`relative z-20

font-body 
text-xs md:text-sm 
px-3 md:px-6 
py-1.5 md:py-2.5 
rounded-xl md:rounded-2xl 
transition-all duration-300 
whitespace-nowrap 
flex-shrink-0

bg-[#1f3d2b]
border border-[#d4af37]

ring-1 ring-[#d4af37]/40 ring-offset-2 ring-offset-[#0f2218]  /* 👈 OUTER GOLD LINE */

${selectedBranch === branch
    ? "bg-[#d4af37] text-[#0f2218] ring-[#d4af37]"
    : "text-[#c2a97a]"
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
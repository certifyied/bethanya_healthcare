import React, { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useSearchParams } from "react-router-dom";
import AppointmentModal from "@/components/AppointmentModal";
import Layout from "@/components/layout/Layout";
import { Phone } from "lucide-react";

const branches = ["KATTANAM", "VARKALA", "THONNAKKAD"];

interface ServiceItem {
  title: string;
  image?: string;
}

const servicesData: Record<
  string,
  {
    combo: ServiceItem[];
    spa: ServiceItem[];
    special: ServiceItem[];
    massage: ServiceItem[];
  } | null
> = {
  KATTANAM: {
    combo: [
      { title: "Abhyangam & Steam bath" },
      { title: "Udwarthanam & Steam bath" },
      { title: "Abhyanga & Shirodhara" },
      { title: "Local Massage & Local Podikizhi" },
      { title: "Back massage, Local podikizhi & Kativasti/Lepanam" },
      { title: "Abhyangam & Podikizhi" },
    ],
    spa: [
      { title: "Rejuvenation therapy" },
      { title: "Body spa (Massage and scrub)" },
      { title: "Body massage + Scrub + Pack" },
    ],
    special: [
      { title: "Shirodhara" },
      { title: "Udwarthanam" },
      { title: "Podikizhi" },
      { title: "Elakizhi" },
      { title: "Naranga kizhi" },
      { title: "Njavarakizhi" },
      { title: "Pizhichil" },
      { title: "Kativasti" },
      { title: "Greevavasthi" },
      { title: "Januvasthi" },
      { title: "Meruvasthi" },
      { title: "Kati pitchu" },
      { title: "Takradhara" },
      { title: "Ksheera dhara" },
      { title: "Kashaya dhara" },
      { title: "Dhanyamla dhara" },
      { title: "Tharpanam" },
      { title: "Karnapooranam" },
      { title: "Shirovasthi" },
      { title: "Nasyam" },
    ],
    massage: [
      { title: "Abhyangam" },
      { title: "Aroma therapy" },
      { title: "Deep tissue massage" },
      { title: "Marma massage" },
      { title: "Head massage" },
      { title: "Face massage" },
      { title: "Foot massage" },
      { title: "Back massage" },
      { title: "Neck and Shoulder massage" },
      { title: "Neck and back massage" },
      { title: "Head Neck and back massage" },
    ],
  },
  THONNAKKAD: {
    combo: [
      { title: "Abhyangam & Steam bath" },
      { title: "Abhyanga & Shirodhara" },
    ],
    spa: [
      { title: "Rejuvenation therapy" },
    ],
    special: [
      { title: "Shirodhara" },
      { title: "Podikizhi" },
    ],
    massage: [
      { title: "Abhyangam" },
      { title: "Head massage" },
    ],
  },
  VARKALA: null, // Coming soon
};

const branchAddresses: any = {
  KATTANAM: {
    name: "BETHANYA AYURVEDA",
    address:
      "BETHANYA AYURVEDA HOSPITAL, Santhome Building, Near Pope Pius H.S School, Kattanam, Alappuzha District, Kerala - 690503",
    phone1: "+91 89217 99597",
    phone2: "+91 8867127954",
    email: "bethanyahealthcare@gmail.com",
  },

  VARKALA: {
    name: "BETHANYA AYURVEDA",
    address:
      "BETHANYA AYURVEDA VARKALA, Kshetra Street, North Cliff, Varkala, Kerala",
    phone1: "+91 88671 27954",
    phone2: "+91 8867127954",
    email: "bethanyahealthcare@gmail.com",
  },
  THONNAKKAD: {
    name: "BETHANYA AYURVEDA",
    address:
      'Regd. Office: X/498, "REHOBOTH", Valuparampil Puthen Veedu, Thonnakkad, Chengannur–Mavelikkara Road, Near Thonnakkad Church, Chengannur, Kerala – 689511',
    phone1: "+91 89217 99597",
    phone2: "+91 8867127954",
    email: "bethanyahealthcare@gmail.com",
  },
};

const Section = ({
  title,
  items,
  image,
  reverse = false,
  branch,
}: any) => {
  const sectionImage = items[0]?.image;

  const finalImage = sectionImage
    ? sectionImage.startsWith("http")
      ? sectionImage
      : `${import.meta.env.VITE_API_BASE_URL}/${sectionImage}`
    : image;

  // ❌ If no services → render nothing
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-20">

      {/* 🟢 OUTER BORDER WITH GAP */}
      <div
        className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
          }
        items-center gap-10 
        p-[6px]
        rounded-3xl 
        border border-[#0f2218] 
        shadow-[0_10px_10px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        transition-all duration-300`}
      >

        {/* 🔥 INNER CARD */}
        <div className="relative flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 rounded-3xl border border-[#c2a97a]/40 bg-[#0f2218] w-full overflow-hidden">

          {/* 🌿 BACKGROUND */}
          <img
            src="/images/6a39089268a36d4b20c6a15202e41ac0.webp"
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-110"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full">

            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2">
              <div
                className="h-[350px] md:h-[450px] w-full rounded-3xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url(${finalImage || image})`,
                }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full md:w-1/2">

              <h3 className="forum-regular text-[#c2a97a] text-4xl md:text-5xl mb-6 drop-shadow-md">
                {title}
              </h3>

              {/* ✅ Treatment list with WhatsApp click */}
              <ul className="forum-regular space-y-4 drop-shadow-md">
                {items.map((service: any, i: number) => {
                  const serviceTitle = typeof service === "string" ? service : service.title;
                  const handleServiceClick = () => {
                    const message = `Hello, I would like to know more about ${serviceTitle} at ${branch}.`;
                    const url = `https://wa.me/918921799597?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  };

                  return (
                    <li
                      key={i}
                      onClick={handleServiceClick}
                      className="group flex items-center justify-between gap-3 text-xl md:text-2xl cursor-pointer hover:text-[#f5d76e] transition-colors p-1.5 -mx-1.5 rounded-xl hover:bg-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[#c2a97a] font-semibold">
                          {i + 1}.
                        </span>
                        <span className="text-[#c2a97a] group-hover:text-[#f5d76e]">
                          {serviceTitle}
                        </span>
                      </div>
                      <span className="text-xs text-[#c2a97a] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                        Enquire &rarr;
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CALL NOW BUTTON */}
              <div className="text-center mt-6">
                <a
                  href="tel:+918921799597"
                  className="forum-regular inline-flex items-center gap-2.5 px-8 py-4 text-lg md:text-xl rounded-3xl transition-all duration-300
                  bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a]
                  border border-[#d4af37]
                  outline outline-1 outline-[#d4af37]/30 outline-offset-4
                  text-[#0f2218] font-semibold
                  hover:scale-105 hover:shadow-[0_8px_20px_rgba(212,175,55,0.25)]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Appointment</span>
                </a>
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
    <Layout>

      <section id="services" className="bg-white">

        {/* 🔽 FULL WIDTH GREEN SECTION */}
        <div className="bg-[#0f2218] pt-4 pb-4 relative z-10 overflow-hidden w-full">

          {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full">

            <img
              src="/images/bba3b14fb34e0afa43cfe531b8ab86.webp"
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
                  src="/images/underline1.webp"
                  alt="underline"
                  loading="lazy"
                  className="w-40 md:w-56 object-contain"
                />
              </div>

              {/* ✅ ADDRESS CARD */}
              <div className="-mt-4 mb-0 flex justify-center px-4">
  <div
    className="
      relative overflow-hidden
      bg-[#0f2218]
      border border-[#c2a97a]/30
      rounded-[30px]
      px-6 md:px-10
      py-8
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      max-w-3xl
      w-full
    "
  >
    {/* GOLD GLOW */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-[#f5d76e]/5 pointer-events-none"></div>

    {/* TITLE */}
    <div className="relative z-10 text-center mb-6">
      <h3 className="forum-regular text-2xl md:text-4xl text-[#f5d76e] tracking-wide">
        {branchAddresses[selectedBranch]?.name}
      </h3>

      <div className="w-24 h-[1px] bg-[#c2a97a]/40 mx-auto mt-3"></div>
    </div>

    {/* ADDRESS */}
    <div className="relative z-10 text-center mb-8">
      <p className="forum-regular text-[#e8d7b0] text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
        {branchAddresses[selectedBranch]?.address}
      </p>
    </div>

    {/* CONTACT INFO */}
    <div className="relative z-10 flex flex-col md:flex-row gap-5 justify-center items-stretch">

      {/* PHONE */}
      <div className="flex-1 bg-[#13281d] rounded-2xl border border-[#c2a97a]/20 p-5 text-center hover:border-[#d4af37]/40 transition-all duration-300">
        <p className="text-[#c2a97a] text-xs uppercase tracking-[0.25em] mb-3">
          Phone
        </p>

        <p className="forum-regular text-[#f5d76e] text-sm md:text-lg">
          {branchAddresses[selectedBranch]?.phone1}
        </p>
      </div>

      {/* EMAIL */}
      <div className="flex-1 bg-[#13281d] rounded-2xl border border-[#c2a97a]/20 p-5 text-center hover:border-[#d4af37]/40 transition-all duration-300">
        <p className="text-[#c2a97a] text-xs uppercase tracking-[0.25em] mb-3">
          Email
        </p>

        <p className="forum-regular text-[#f5d76e] text-sm md:text-lg break-all">
          {branchAddresses[selectedBranch]?.email}
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
          )}


          {/* VARKALA COMING SOON */}
          {!data && (
            <div className="text-center mt-16 mb-14">
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
                image="/images/8CA5csIHslwV3sQ_pzp-VJomeg6dSWfeoxJbRqYh3f6.webp"
                items={data.combo}
                branch={selectedBranch}
                openEnquiry={(service: string) =>
                  setSearchParams({ branch: selectedBranch, service })
                }
              />

              <Section
                title="Spa Massage"
                image="/images/DFp7i7MyG3HOnmFWul7p.webp"
                reverse
                items={data.spa}
                branch={selectedBranch}
                openEnquiry={(service: string) =>
                  setSearchParams({ branch: selectedBranch, service })
                }
              />

              <Section
                title="Special Treatments"
                image="/images/VA9zLVQfBMMJty.webp"
                items={data.special}
                branch={selectedBranch}
                openEnquiry={(service: string) =>
                  setSearchParams({ branch: selectedBranch, service })
                }
              />

              <Section
                title="Ayurvedic Massage"
                image="/images/Zcu9vir12SYeuV3V7vuPCWLb3E9DG-BpT.webp"
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
    </Layout>
  );
}

export default ServicesPackages;
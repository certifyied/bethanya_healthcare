import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* 🌿 CONTACT CONTENT */}
      <div className="pb-20 min-h-screen">

        {/* 🌿 FULL WIDTH BG SECTION */}
        <div className="bg-[#0f2218] pt-6 pb-4 relative z-10 overflow-hidden w-full min-h-[544px]">

          {/* 🟢🟡 DOUBLE BORDER BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="h-[1px] bg-[#0a1a12]"></div>
          </div>

          {/* 🌿 LEFT BOTTOM PNG BORDER */}
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
            Contact Us
          </h1>

          {/* SUBTEXT */}
          <p className="forum-regular text-center text-lg md:text-2xl text-[#c2a97a] max-w-3xl mx-auto px-6 mb-16 drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]">
            Connect with our experts and begin your journey towards holistic healing and wellness.
          </p>

        </div>

        {/* 🌿 BRANCH CONTACTS */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                name: "KATTANAM",
                phone: "+91 9894176585",
                mobile: "+91 8867127954",
                email: "bethanyahealthcare@gmail.com",
                address: "BETHANYA AYURVEDA HOSPITAL, Santhome Building, Near Pope Pius H.S School, Kattanam, Alappuzha District, Kerala - 690503",
                available: true,
              },
              {
                name: "VARKKALA",
                phone: "+91 9894176585",
                mobile: "+91 8867127954",
                email: "bethanyahealthcare@gmail.com",
                address: "BETHANYA AYURVEDA KSHETRA RETREAT, Kshetra Street, North Cliff, Varkala, Kerala",
                available: true,
              },
              {
                name: "THONNAKKAD",
                available: false,
              },
            ].map((branch) => (

              <div
                key={branch.name}
                className="
    relative
    bg-[#0f2218]
    border border-[#c2a97a]/40
    outline outline-1 outline-[#0a1a12]
    outline-offset-[6px]
    rounded-3xl
    p-6
    shadow-lg
    hover:shadow-[0_0_30px_rgba(194,169,122,0.25)]
    transition-all duration-300
  "
              >

                <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#c2a97a]/50"></div>

                <h2 className="forum-regular text-2xl md:text-3xl font-semibold text-[#c2a97a] mb-6 tracking-wide text-center leading-snug">
                  BETHANYA AYURVEDA <br />
                  <span className="block mt-1">{branch.name}</span>
                </h2>

                {branch.available ? (

                  <div className="space-y-4 text-sm">

                    <div className="flex items-center gap-3 text-white">
                      <Phone className="w-4 h-4 text-[#c2a97a]" />
                      {branch.phone}
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <Phone className="w-4 h-4 text-[#c2a97a]" />
                      {branch.mobile}
                    </div>

                    <div className="flex items-center gap-3 text-white">
                      <Mail className="w-5 h-5 text-[#c2a97a] flex-shrink-0" />
                      <span className="text-sm md:text-base break-words">
                        {branch.email}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 text-white">
                      <MapPin className="w-5 h-5 text-[#c2a97a] mt-1 flex-shrink-0" />
                      <span>{branch.address}</span>
                    </div>

                  </div>

                ) : (

                  <div className="flex flex-col items-center justify-center py-10">

                    <div className="
        px-8 py-4
        rounded-full
        border border-[#c2a97a]/40
        bg-[#1a3325]
        shadow-[0_0_20px_rgba(194,169,122,0.15)]
      ">
                      <p className="
          font-cinzel
          shine-text
          text-xl md:text-2xl
          text-white
          tracking-wide
          text-center
        ">
                        Opening Soon
                      </p>
                    </div>

                  </div>

                )}

              </div>

            ))}
          </div>
        </div>

        {/* 🌿 MAIN CONTENT */}
        <div className="w-full mt-8 md:mt-12">
          <div className="justify-center items-center w-full">

            <ScrollReveal>
              <div className="
        relative w-full
        min-h-[420px] md:min-h-[500px]
        py-14 md:py-28
        px-5 sm:px-8
        flex items-center justify-center
        overflow-hidden
        border-t border-b border-[#0f2218]
      ">

                <div className="absolute top-3 left-0 w-full h-[1px] bg-[#0f2218]" />
                <div className="absolute bottom-3 left-0 w-full h-[1px] bg-[#0f2218]" />

                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/2d3697190ba6990368958a388543aa8b.jpg')",
                  }}
                />

                <div className="relative z-10 w-full flex flex-col items-center">

                  <h2 className="
            text-center
            text-3xl sm:text-4xl md:text-7xl
            leading-tight
            forum-regular
            text-[#0f2218]
            mb-2
            px-4
          ">
                    Your Path to Balance Starts Here
                  </h2>

                  <img
                    src="/images/underline.png"
                    alt="divider"
                    className="
              mx-auto
              mb-6 md:mb-8
              w-24 sm:w-32 md:w-48
              -mt-6 md:-mt-12
              opacity-80
            "
                  />

                  <form
                    className="
              space-y-4 md:space-y-5
              w-full
              max-w-2xl
              mx-auto
            "
                  >
                    {[
                      { name: "name", label: "Your Name", type: "text" },
                      { name: "email", label: "Email Address", type: "email" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="
                  text-xs sm:text-sm
                  text-[#0f2218]
                  mb-1.5 block
                ">
                          {field.label}
                        </label>

                        <input
                          type={field.type}
                          className="
                    w-full
                    bg-[#0f2218]
                    rounded-xl md:rounded-2xl
                    px-4 md:px-5
                    py-3 md:py-4
                    text-sm md:text-base
                    text-white
                  "
                          placeholder={field.label}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="text-xs sm:text-sm text-[#0f2218] mb-1.5 block">
                        Message
                      </label>

                      <textarea
                        rows={4}
                        className="
                  w-full
                  bg-[#0f2218]
                  rounded-xl md:rounded-2xl
                  px-4 md:px-5
                  py-3
                  text-sm md:text-base
                  text-white
                  resize-none
                "
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
  type="submit"
  className="
    forum-regular
    relative
    w-full
    bg-[#1f3d2b]
    text-white
    text-lg md:text-xl
    py-4 md:py-5
    rounded-2xl
    shadow-lg
    hover:bg-[#274b35]
    transition-all duration-300
  "
>
  Send Message

  <span className="absolute inset-[2px] rounded-2xl border border-[#D4AF37]" />
</button>

                  </form>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
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
                phone: "",
                email: "",
                location: "Varkkala, Kerala",
                available: false,
              },
            ].map((branch) => (
              <div
                key={branch.name}
                className="relative bg-[#0f2218] border border-[#c2a97a]/40 outline outline-1 outline-[#0a1a12] outline-offset-[6px] rounded-3xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(194,169,122,0.25)] transition-all duration-300"
              >

                {/* 🌿 Gold Top Line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#c2a97a]/50"></div>

                <h2 className="forum-regular text-2xl md:text-3xl font-semibold text-[#c2a97a] mb-4 tracking-wide text-center leading-snug">
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
                      <Mail className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#c2a97a] flex-shrink-0" />
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-cinzel shine-text text-xl sm:text-2xl md:text-3xl text-center text-white font-medium tracking-wide leading-tight px-4 drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]">
                      Opening Soon
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* 🌿 MAIN CONTENT */}
        <div className="w-full mt-12">

          <div className=" justify-center items-center w-full">

            {/* FORM */}
            <ScrollReveal>
              <div className="relative w-full min-h-[500px] py-20 md:py-28 flex items-center justify-center overflow-hidden border-t border-b border-[#0f2218]">

                {/* 🌿 INNER TOP LINE */}
                <div className="absolute top-3 left-0 w-full h-[1px] bg-[#0f2218]"></div>

                {/* 🌿 INNER BOTTOM LINE */}
                <div className="absolute bottom-3 left-0 w-full h-[1px] bg-[#0f2218]"></div>

                {/* 🌿 BACKGROUND IMAGE */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/2d3697190ba6990368958a388543aa8b.jpg')",
                  }}
                ></div>

                {/* 🌿 CONTENT */}
                <div className="relative z-10 w-full flex flex-col items-center">

                  <h2 className="text-center text-5xl md:text-7xl forum-regular text-[#0f2218] mb-2">
                    Your Path to Balance Starts Here
                  </h2>

                  <img
                    src="/images/underline.png"
                    alt="divider"
                    className="mx-auto mb-8 w-36 md:w-48 opacity-80 -mt-12 drop-shadow-[0_10px_05px_rgba(0,0,0,0.50)]"
                  />

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5 w-full max-w-2xl mx-auto"
                  >
                    {[
                      { name: "name", label: "Your Name", type: "text" },
                      { name: "email", label: "Email Address", type: "email" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="font-body text-sm text-[#0f2218] mb-1.5 block">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          className="w-full font-body bg-[#0f2218] border border-[#0f2218]/50 rounded-2xl px-5 py-3 text-white placeholder:text-white/40  focus:outline-none focus:ring-2 focus:ring-[#c2a97a]/60 focus:border-[#c2a97a] transition-all duration-300"
                          placeholder={field.label}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="font-body text-sm text-[#0f2218] mb-1.5 block">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full font-body bg-[#0f2218] border border-[#0f2218]/50 rounded-2xl px-5 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#c2a97a]/60 focus:border-[#c2a97a] transition-all duration-300 resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="relative w-full bg-[#1f3d2b] text-primary-foreground font-body font-medium py-4 rounded-2xl"
                    >
                      {submitted ? "Thank You! ✨" : "Send Message"}

                      {/* 🌟 INNER GOLD BORDER */}
                      <span className="absolute inset-[2px] rounded-2xl border border-[#D4AF37] pointer-events-none"></span>
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>

            {/* MAP */}
            {/* <div className="rounded-3xl overflow-hidden shadow-card mt-8 aspect-video bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989983!2d76.88!3d8.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Location Map"
                  />
                </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
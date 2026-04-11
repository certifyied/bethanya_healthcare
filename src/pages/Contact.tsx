import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* 🌿 LUXURY HEADER */}
      <div className="relative pt-24 pb-20">

        {/* 🌿 WHITE BG */}
        <div className="absolute inset-0 bg-white"></div>

        {/* 🟡 OUTER GOLD RING */}
        <div className="absolute inset-0 ring-2 ring-inset ring-[#c2a97a]/60 pointer-events-none"></div>

        {/* 🟡 INNER BORDER (NO TOP LINE) */}
        <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] border-b border-l border-r border-[#1f3d2b]/90 pointer-events-none"></div>

        {/* 🌿 CONTENT */}
        <div className="relative container mx-auto max-w-5xl px-6 text-center py-6 md:py-8 -mt-20 md:-mt-28 flex flex-col items-center">

          {/* 🌿 OPTIONAL LOGO */}
          <img
            src="/images/BETHANYA AYURVEDA HOSPITAL.png"
            alt="Logo"
            className="w-[120px] md:w-[160px] lg:w-[200px] mb-4 object-contain drop-shadow-[0_10px_5px_rgba(0,0,0,0.5)]"
          />

          <ScrollReveal>
            <p className="text-[#1f3d2b] text-sm tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-[#1f3d2b]">
              Contact Us
            </h1>

            <p className="text-[#c2a97a]/80 max-w-lg mx-auto mt-4">
              We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
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

      {/* 🌿 CONTACT CONTENT */}
      {/* 🌿 CONTACT CONTENT */}
      <div className="pb-20 min-h-screen">

        {/* 🌿 FULL WIDTH BG SECTION */}
        <div className="w-full bg-[#0f2218] py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-center text-2xl sm:text-3xl md:text-7xl forum-regular text-[#c2a97a]">
              Your Path to Balance Starts Here
            </h1>
          </div>
        </div>

        {/* 🌿 BRANCH CONTACTS */}
        <div className="max-w-6xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                name: "KATTANAM",
                phone: "+91 98765 11111",
                email: "kattanam@vriksha.in",
                location: "Kattanam, Kerala",
                available: true,
              },
              {
                name: "THONNAKKAD",
                phone: "+91 98765 22222",
                email: "thonnakkad@vriksha.in",
                location: "Thonnakkad, Kerala",
                available: true,
              },
              {
                name: "VARKKALA",
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

                <h2 className="text-xl font-semibold text-[#c2a97a] mb-4 tracking-wide">
                  {branch.name}
                </h2>

                {branch.available ? (
                  <div className="space-y-4 text-sm">

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="w-4 h-4 text-[#c2a97a]" />
                      {branch.phone}
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-[#c2a97a]" />
                      {branch.email}
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-[#c2a97a]" />
                      {branch.location}
                    </div>

                  </div>
                ) : (
                  <p className="text-sm text-[#c2a97a]/70 italic">
                    Opening Soon ✨
                  </p>
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
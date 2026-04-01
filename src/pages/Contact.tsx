import { Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Contact Us</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-body text-sm text-foreground mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    className="w-full font-body bg-card border border-border rounded-2xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-herbal/50 transition-all"
                    placeholder={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="font-body text-sm text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full font-body bg-card border border-border rounded-2xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-herbal/50 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-leaf text-primary-foreground font-body font-medium py-4 rounded-2xl shadow-glow hover:shadow-[0_0_40px_-5px_hsl(122_39%_49%_/_0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                {submitted ? "Thank You! ✨" : "Send Message"}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "hello@vriksha.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Location", value: "Thiruvananthapuram, Kerala, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-leaf flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground">{item.label}</h3>
                    <p className="font-body text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden shadow-card mt-8 aspect-video bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989983!2d76.88!3d8.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb805bbcd47%3A0x15439fab5c5c81cb!2sThiruvananthapuram!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;

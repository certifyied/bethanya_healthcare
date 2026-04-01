import { Leaf, Mountain, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <div className="pt-28 pb-20 min-h-screen">
    {/* Hero */}
    <section className="px-6 pb-20">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="font-body text-herbal text-sm tracking-[0.2em] uppercase mb-3">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            5,000 Years of Healing Wisdom
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Ayurveda is not just a system of medicine — it is a way of life that connects us 
            to the rhythms of nature. At Vriksha, we carry this sacred tradition forward.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="px-6 py-20 bg-card/50">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=700&fit=crop"
            alt="Ayurvedic herbs in nature"
            className="rounded-3xl shadow-card w-full object-cover aspect-[4/5]"
            loading="lazy"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div>
            <h2 className="font-heading text-3xl text-foreground mb-6">From Forest to You</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Every Vriksha product begins its journey in the lush forests and organic farms of Kerala 
              and the Himalayan foothills. We work directly with local farmers and traditional Vaidyas 
              (Ayurvedic practitioners) who have passed down their knowledge through generations.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our formulations follow classical Ayurvedic texts like Charaka Samhita and Sushruta Samhita, 
              ensuring authenticity while meeting modern quality standards.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Tradition Meets Innovation</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: "Sustainably Sourced", desc: "Every ingredient is ethically harvested with respect for the earth and local communities." },
            { icon: Mountain, title: "Himalayan Purity", desc: "Our herbs are grown in pristine environments, free from pollution and modern contaminants." },
            { icon: FlaskConical, title: "Lab Tested", desc: "Ancient wisdom verified by modern science. Every batch is tested for purity and potency." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.15}>
              <div className="text-center p-8 rounded-3xl bg-card shadow-card">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-leaf flex items-center justify-center">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;

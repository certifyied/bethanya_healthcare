import { Leaf, Mountain, FlaskConical } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => (
  <div className="min-h-screen bg-[#0f2218]">

    {/* HERO */}
    <section className="bg-[#0f2218] pt-6 pb-4 relative z-10 overflow-hidden w-full min-h-[544px]">

      {/* Double bottom border */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-[1px] bg-[#0a1a12]" />
      </div>

      {/* Decorative left border */}
      <img
        src="/images/bba3b14fb34e0afa43cfe531b8ab86.png"
        alt="border"
        className="absolute left-0 bottom-0 w-60 opacity-60 pointer-events-none"
      />

      <ScrollReveal>
        <h1
          className="
        text-center
        text-4xl sm:text-5xl md:text-8xl lg:text-9xl
        forum-regular
        mt-32 md:mt-40 lg:mt-48
        mb-6
        bg-gradient-to-r from-[#c2a97a] via-[#f8e7b0] to-[#d4af37]
        bg-clip-text text-transparent
        drop-shadow-[0_8px_5px_rgba(0,0,0,0.8)]"
        >
          About Us
        </h1>

        <p
          className="
        forum-regular
        text-center
        text-lg md:text-2xl
        text-[#c2a97a]
        max-w-3xl mx-auto
        px-6 mb-16
        drop-shadow-[0_4px_2px_rgba(0,0,0,0.6)]"
        >
          Rooted in timeless Ayurvedic wisdom, we bring together authentic healing,
          tradition, and wellness to nurture body, mind, and spirit.
        </p>
      </ScrollReveal>

    </section>


    {/* STORY */}
    {/* WHO WE ARE */}
    <section className="px-6 py-20 bg-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <ScrollReveal>
          <div className="
    rounded-3xl
    border border-[#1f3d2b]
    outline outline-1 outline-[#0a1a12]
    outline-offset-[8px]
    overflow-hidden
    shadow-xl
  ">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&fit=crop"
              alt="Ayurvedic wellness"
              className="w-full object-cover aspect-[4/5]"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl forum-regular text-[#0f2218] mb-10">
              Who We Are
            </h2>

            <p className="forum-regular text-xl md:text-2xl leading-relaxed text-gray-700 mb-8">
              We are a dedicated team of Ayurvedic professionals rooted in the timeless
              healing traditions of Kerala. With proven experience in successfully managing
              a reputed Ayurvedic hospital, our journey is built on trust, compassionate care,
              and authentic treatment practices.
            </p>

            <p className="forum-regular text-xl md:text-2xl leading-relaxed text-gray-700">
              We bring our expertise to a serene coastal destination where healing meets
              calmness and comfort, offering wellness that nurtures body, mind and spirit.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="px-6 py-24 bg-[#f8f5ec]">
      <div className="container mx-auto max-w-5xl text-center">

        <ScrollReveal>
          <h2 className="forum-regular text-4xl md:text-6xl text-[#c2a97a] mb-12">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Authentic Ayurveda",
              desc: "Classical therapies rooted in Kerala’s trusted healing traditions."
            },
            {
              title: "Hospital Expertise",
              desc: "Professional care backed by years of Ayurvedic clinical excellence."
            },
            {
              title: "Wellness Retreat Experience",
              desc: "A peaceful destination blending treatment with rejuvenation."
            }
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-md">
                <h3 className="text-2xl forum-regular text-[#c2a97a] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>


    {/* VALUES */}
    {/* <section className="px-6 py-24 bg-[#0f2218]">
      <div className="container mx-auto max-w-6xl">

        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="forum-regular text-4xl md:text-6xl text-[#c2a97a]">
              Tradition Meets Innovation
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Sustainably Sourced",
              desc: "Every ingredient is ethically harvested with respect for nature."
            },
            {
              icon: Mountain,
              title: "Himalayan Purity",
              desc: "Herbs grown in pristine environments for unmatched purity."
            },
            {
              icon: FlaskConical,
              title: "Lab Tested",
              desc: "Ancient wisdom supported by modern scientific validation."
            },
          ].map((v, i) => (

            <ScrollReveal key={v.title} delay={i * 0.15}>
              <div className="
              bg-[#0f2218]
              border border-[#c2a97a]/40
              outline outline-1 outline-[#0a1a12]
              outline-offset-[6px]
              rounded-3xl
              p-8
              shadow-lg
              text-center">

                <div className="
                w-16 h-16 mx-auto mb-6
                rounded-full
                bg-[#1f3d2b]
                flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-[#c2a97a]" />
                </div>

                <h3 className="text-2xl forum-regular text-[#c2a97a] mb-4">
                  {v.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {v.desc}
                </p>

              </div>
            </ScrollReveal>

          ))}
        </div>

      </div>
    </section> */}

  </div>
);

export default About;
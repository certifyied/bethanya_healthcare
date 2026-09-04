import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import AppointmentModal from "@/components/AppointmentModal";
import { branchesData } from "@/data/branches";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const BranchDetail = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const navigate = useNavigate();
  const [showAppointment, setShowAppointment] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const branchKey = branchId?.toLowerCase() || "kattanam";
  const branch = branchesData[branchKey] || branchesData["kattanam"];

  const isVarkala = branch.id === "varkala";

  const handleServiceWhatsApp = (serviceTitle: string) => {
    const message = `Hello, I would like to know more about ${serviceTitle} at ${branch.name}.`;
    const url = `https://wa.me/918921799597?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const whatsappMessage = isVarkala
    ? `Hello, I would like to book an appointment at Varkala.`
    : `Hello, I would like to book an appointment at ${branch.name}.`;

  const branchWhatsappUrl = `https://wa.me/918921799597?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <Layout>
      <div className="bg-[#fcfaf7] min-h-screen">
        {/* 🌿 HERO SECTION */}
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a1a12] pt-28 pb-16 px-6">
          {/* Background image with layered overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={branch.image}
              alt={branch.displayName}
              fetchPriority="high"
              className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-[#0a1a12]/60 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12]/80 via-transparent to-[#0a1a12]/80" />
          </div>

          {/* Golden decorative accent borders */}
          <div className="absolute inset-6 md:inset-10 border border-[#c2a97a]/30 rounded-3xl pointer-events-none z-10" />

          <div className="relative z-20 max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#c2a97a] mb-6 tracking-widest uppercase">
              <Link to="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:underline">Branches</Link>
              <span>/</span>
              <span className="text-white font-semibold">{branch.name}</span>
            </div>

            {/* Status Pill for Varkala */}
            {isVarkala && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold border shadow-lg backdrop-blur-md transition-all bg-gradient-to-r from-[#d4af37]/30 to-[#f5d76e]/20 border-[#d4af37] text-[#f5d76e]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5d76e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f5d76e]"></span>
                </span>
                <span>Opening Soon • Beachside Sanctuary</span>
              </div>
            )}

            {/* Branch Title */}
            <h1 className="forum-regular text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-[0_8px_15px_rgba(0,0,0,0.8)]">
              {branch.displayName}
            </h1>

            {/* Tagline */}
            <p className="forum-regular text-lg sm:text-2xl md:text-3xl text-[#f5d76e] max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
              "{branch.tagline}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {!isVarkala ? (
                <a
                  href={`tel:${branch.phone1.replace(/\s+/g, "")}`}
                  className="forum-regular inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-lg font-semibold transition-all duration-300
                    bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a]
                    text-[#0f2218] shadow-[0_10px_25px_rgba(212,175,55,0.3)]
                    hover:scale-105 hover:shadow-[0_15px_30px_rgba(212,175,55,0.45)]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Appointment</span>
                </a>
              ) : (
                <a
                  href={branchWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="forum-regular inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-lg font-semibold transition-all duration-300
                    bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a]
                    text-[#0f2218] shadow-[0_10px_25px_rgba(212,175,55,0.3)]
                    hover:scale-105 hover:shadow-[0_15px_30px_rgba(212,175,55,0.45)]"
                >
                  <FaWhatsapp className="w-5 h-5 text-emerald-800" />
                  <span>Pre-Book & Enquire</span>
                </a>
              )}

              <a
                href={branchWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="forum-regular inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-lg font-semibold
                  bg-[#0f2218]/80 text-[#f5d76e] border border-[#c2a97a]/50 backdrop-blur-sm
                  hover:bg-[#1f3d2b] transition-all duration-300 shadow-md hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* 🌿 BRANCH NAVIGATION TABS */}
        <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
          <div className="container mx-auto px-6 py-3 flex items-center justify-center gap-3 md:gap-8 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold hidden sm:inline">
              Other Branches:
            </span>
            {Object.values(branchesData).map((b) => (
              <Link
                key={b.id}
                to={`/branches/${b.id}`}
                className={`forum-regular px-4 py-1.5 rounded-full text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                  b.id === branch.id
                    ? "bg-[#1f3d2b] text-white shadow"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#1f3d2b]"
                }`}
              >
                <span>{b.name}</span>
                {b.status === "opening_soon" && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                    Opening Soon
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* 🌿 OPENING SOON NOTICE FOR VARKALA */}
        {isVarkala && (
          <section className="container mx-auto px-6 pt-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2218] via-[#1a3827] to-[#0a140f] text-white p-8 md:p-14 border border-[#c2a97a]/50 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full filter blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 text-[#f5d76e] text-xs uppercase tracking-widest mb-4 font-semibold">
                  <Sparkles className="w-4 h-4 text-[#f5d76e]" />
                  <span>Exclusive Cliffside Retreat Coming to North Cliff</span>
                </div>

                <h2 className="forum-regular text-3xl sm:text-5xl md:text-6xl text-[#f5d76e] mb-6">
                  Ayurveda Meets the Arabian Ocean
                </h2>

                <p className="forum-regular text-base md:text-xl text-gray-200 leading-relaxed mb-8">
                  We are preparing our brand-new sanctuary at North Cliff, Varkala. Combining authentic Kerala Ayurvedic therapies with cliffside ocean breeze, daily sunrise yoga, and specialized stress-relief treatments.
                </p>

                <div className="p-6 rounded-2xl bg-black/40 border border-[#c2a97a]/30 max-w-xl mx-auto mb-8">
                  <h4 className="text-lg font-semibold text-[#f5d76e] mb-2 font-serif">
                    Early Reservations & Custom Retreats
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Be the first to experience our cliffside therapies. Reach out directly to discuss upcoming dates, personalized wellness consultations, and special inaugural privileges.
                  </p>
                </div>

                <a
                  href={branchWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="forum-regular inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:scale-105 transition-all"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>Pre-Book on WhatsApp (+91 88671 27954)</span>
                </a>
              </div>
            </div>
          </section>
        )}

        {/* 🌿 ABOUT & KEY HIGHLIGHTS */}
        <section className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c2a97a] font-bold mb-3">
                  <span>About This Branch</span>
                </div>
                <h2 className="forum-regular text-3xl sm:text-4xl md:text-5xl text-[#0f2218] mb-6">
                  {branch.displayName}
                </h2>
                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed forum-regular">
                  {branch.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-[#0f2218] mb-6 font-serif tracking-wide">
                    Branch Highlights & Facilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {branch.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2e5b46] flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card: Contact & Location Quick Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#0f2218] text-white p-8 md:p-10 rounded-3xl border border-[#c2a97a]/40 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full filter blur-2xl pointer-events-none"></div>

                <h3 className="forum-regular text-2xl md:text-3xl text-[#f5d76e] mb-2">
                  Visit & Contact
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#c2a97a] mb-6 font-semibold">
                  {branch.branchType}
                </p>

                <div className="space-y-6 text-sm md:text-base">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#f5d76e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#c2a97a] font-bold mb-1">
                        Address
                      </p>
                      <p className="forum-regular text-gray-200 leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#f5d76e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#c2a97a] font-bold mb-1">
                        Direct Phone
                      </p>
                      <div className="forum-regular flex flex-col gap-1 text-[#f5d76e]">
                        <a href={`tel:${branch.phone1.replace(/\s+/g, "")}`} className="hover:underline">
                          {branch.phone1}
                        </a>
                        {branch.phone2 && (
                          <a href={`tel:${branch.phone2.replace(/\s+/g, "")}`} className="hover:underline">
                            {branch.phone2}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#f5d76e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#c2a97a] font-bold mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${branch.email}`}
                        className="forum-regular text-gray-200 hover:text-[#f5d76e] break-all"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#f5d76e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#c2a97a] font-bold mb-1">
                        Hours
                      </p>
                      <p className="forum-regular text-gray-200">
                        {branch.timings}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[#c2a97a]/30 space-y-3">
                  {!isVarkala ? (
                    <a
                      href={`tel:${branch.phone1.replace(/\s+/g, "")}`}
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full font-bold text-[#0f2218] bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a] shadow-lg hover:brightness-110 transition-all hover:scale-[1.02]"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call for Appointment</span>
                    </a>
                  ) : (
                    <a
                      href={branchWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full font-bold text-[#0f2218] bg-gradient-to-r from-[#d4af37] via-[#f5d76e] to-[#c2a97a] shadow-lg hover:brightness-110 transition-all hover:scale-[1.02]"
                    >
                      <FaWhatsapp className="w-5 h-5 text-emerald-900" />
                      <span>Enquire for Opening Dates</span>
                    </a>
                  )}

                  <a
                    href={branchWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🌿 SERVICES SECTION FOR THIS BRANCH */}
        <section className="bg-white py-16 md:py-24 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#c2a97a] font-bold mb-2">
                Available Treatments
              </p>
              <h2 className="forum-regular text-4xl sm:text-5xl md:text-6xl text-[#0f2218]">
                {isVarkala ? "Upcoming Treatments & Retreats" : `Services at ${branch.name}`}
              </h2>
              <p className="forum-regular text-gray-600 text-lg mt-4">
                {isVarkala
                  ? "A preview of the holistic therapies designed for our upcoming cliffside wellness retreat."
                  : "All treatments are tailored individually based on classical Ayurvedic diagnosis."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {branch.services.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl p-8 bg-[#0f2218] text-white border border-[#c2a97a]/30 shadow-xl relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#c2a97a]/30">
                      <h3 className="forum-regular text-2xl sm:text-3xl text-[#f5d76e]">
                        {group.category}
                      </h3>
                      <span className="text-xs text-[#c2a97a] uppercase tracking-wider font-semibold">
                        {group.items.length} Treatments
                      </span>
                    </div>

                    <ul className="space-y-3 forum-regular text-base sm:text-lg text-gray-200">
                      {group.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-center justify-between gap-3 group cursor-pointer hover:text-[#f5d76e] transition-colors p-1.5 -mx-1.5 rounded-lg hover:bg-white/5"
                          onClick={() => handleServiceWhatsApp(item)}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-[#d4af37] font-bold text-sm mt-0.5">
                              {itemIdx + 1}.
                            </span>
                            <span>{item}</span>
                          </div>
                          <span className="text-xs text-[#c2a97a] opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                            Enquire &rarr;
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#c2a97a]/20">
                    <button
                      onClick={() => handleServiceWhatsApp(group.category)}
                      className="w-full py-3 rounded-full text-sm font-semibold tracking-wider uppercase
                        border border-[#c2a97a] text-[#f5d76e] hover:bg-[#c2a97a] hover:text-[#0f2218]
                        transition-all duration-300"
                    >
                      Enquire for {group.category}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to comprehensive services page */}
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 forum-regular text-xl text-[#2e5b46] hover:text-[#1a3827] font-semibold underline underline-offset-8"
              >
                <span>View Full Comprehensive Services & Pricing Catalog</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 🌿 APPOINTMENT MODAL */}
        <AppointmentModal
          isOpen={showAppointment}
          onClose={() => setShowAppointment(false)}
        />
      </div>
    </Layout>
  );
};

export default BranchDetail;

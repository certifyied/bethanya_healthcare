import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-[#0f2218] text-white py-16 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] ring-2 ring-inset ring-[#c2a97a]/60 before:content-[''] before:absolute before:top-[10px] before:left-[10px] before:right-[10px] before:bottom-[10px] before:pointer-events-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-[#1f3d2b] after:pointer-events-none">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Logo + About */}
        <div>
          <div className="mb-4">
            <Link to="/">
              <img
                src="/images/BA_3D_Gold_TM1.webp"
                alt="Bethanya Ayurveda Logo"
                loading="lazy"
                className="h-20 w-20 md:h-24 md:w-24 object-cover cursor-pointer rounded-full"
              />
            </Link>
          </div>

          <p className="forum-regular text-base md:text-lg opacity-80 leading-relaxed max-w-xs">
            Rooted in ancient Ayurvedic wisdom, we bring you classical treatments, holistic therapies, and pure herbal wellness sourced directly from nature.
          </p>
        </div>

        {/* Our Branches */}
        <div>
          <h4 className="forum-regular text-xl md:text-2xl text-[#f5d76e] mb-4">
            Our Branches
          </h4>
          <div className="flex flex-col gap-2.5 forum-regular text-base md:text-lg opacity-85">
            <Link
              to="/branches/kattanam"
              className="hover:text-[#f5d76e] transition-colors flex items-center justify-between"
            >
              <span>Kattanam Hospital</span>
            </Link>
            <Link
              to="/branches/thonnakkad"
              className="hover:text-[#f5d76e] transition-colors flex items-center justify-between"
            >
              <span>Thonnakkad Clinic</span>
            </Link>
            <Link
              to="/branches/varkala"
              className="hover:text-[#f5d76e] transition-colors flex items-center justify-between group"
            >
              <span>Varkala Cliffside</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#d4af37]/20 text-[#f5d76e] border border-[#d4af37]/50">
                Opening Soon
              </span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="forum-regular text-xl md:text-2xl text-[#f5d76e] mb-4">
            Quick Links
          </h4>
          <div className="flex flex-col gap-2.5 forum-regular text-base md:text-lg opacity-85">
            <Link to="/services" className="hover:text-[#f5d76e] transition-colors">
              Services & Packages
            </Link>
            <Link to="/products" className="hover:text-[#f5d76e] transition-colors">
              Products
            </Link>
            <Link to="/about" className="hover:text-[#f5d76e] transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-[#f5d76e] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="forum-regular text-xl md:text-2xl text-[#f5d76e] mb-4">
            Contact
          </h4>
          <div className="flex flex-col gap-2 forum-regular text-sm md:text-base opacity-80 leading-relaxed">
            <span className="font-semibold text-white">
              BETHANYA HEALTHCARE PVT. LTD.
            </span>
            <span>
              Regd. Office: X/498, "REHOBOTH", Valuparampil Puthen Veedu,
              Thonnakkad, Chengannur–Mavelikkara Road,
              Near Thonnakkad Church,
              Chengannur, Kerala – 689511
            </span>
            <span className="pt-2">Email: bethanyahealthcare@gmail.com</span>
            <span>Tel: +91 89217 99597 / +91 88671 27954</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#c2a97a]/20 pt-6 text-center forum-regular text-sm md:text-base opacity-60">
        © {new Date().getFullYear()} Bethanya Ayurveda. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
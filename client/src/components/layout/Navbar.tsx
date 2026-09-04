import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, MapPin, Phone } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const branchesNav = [
  {
    id: "kattanam",
    name: "Kattanam Branch",
    type: "Hospital & Inpatient Care",
    path: "/branches/kattanam",
    badge: null,
  },
  {
    id: "thonnakkad",
    name: "Thonnakkad Branch",
    type: "Ayurvedic Healthcare Clinic",
    path: "/branches/thonnakkad",
    badge: null,
  },
  {
    id: "varkala",
    name: "Varkala Branch",
    type: "Cliffside Sanctuary & Ocean Breeze",
    path: "/branches/varkala",
    badge: "Opening Soon",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const isBranchesActive =
    location.pathname.startsWith("/branches") || location.pathname === "/services";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2"
          : "bg-white shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 🌿 LOGO LEFT WITH HOME LINK */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/BA_3D_Gold_TM1.webp"
            alt="Bethanya Ayurveda logo"
            fetchPriority="high"
            className="w-[75px] sm:w-[85px] md:w-[95px] lg:w-[110px] aspect-square rounded-full object-cover drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* 🌿 CENTER NAV (DESKTOP) */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-9">
          {/* Home Link */}
          <button
            onClick={() => handleNavigate("/")}
            className={`relative cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${
                location.pathname === "/"
                  ? "text-[#1f3d2b] after:w-full"
                  : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
              }`}
          >
            Home
          </button>

          {/* Branches & Services Interactive Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`relative flex items-center gap-1.5 cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors py-2
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
                ${
                  isBranchesActive
                    ? "text-[#1f3d2b] after:w-full"
                    : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
                }`}
              aria-expanded={dropdownOpen}
            >
              <span>Branches & Services</span>
              <ChevronDown
                className={`w-4 h-4 text-[#c2a97a] transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Card */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 xl:w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-[#0f2218] text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-[#c2a97a]/40 overflow-hidden backdrop-blur-xl">
                  {/* Dropdown Header */}
                  <div className="px-5 py-3.5 bg-[#132b1f] border-b border-[#c2a97a]/20 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#f5d76e] font-bold">
                      Our Wellness Branches
                    </span>
                    <span className="text-[11px] text-[#c2a97a]/80">Kerala</span>
                  </div>

                  {/* Branch Items List */}
                  <div className="p-2 space-y-1">
                    {branchesNav.map((b) => (
                      <Link
                        key={b.id}
                        to={b.path}
                        onClick={() => setDropdownOpen(false)}
                        className="group flex items-start justify-between gap-3 p-3 rounded-xl hover:bg-[#1f3d2b] transition-all duration-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#254634] text-[#f5d76e] group-hover:scale-110 transition-transform">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-serif text-sm font-semibold text-white group-hover:text-[#f5d76e] transition-colors flex items-center gap-2">
                              <span>{b.name}</span>
                            </div>
                            <p className="text-xs text-gray-300 leading-snug mt-0.5 font-light">
                              {b.type}
                            </p>
                          </div>
                        </div>

                        {/* Opening Soon Tag on Varkala */}
                        {b.badge && (
                          <span className="relative flex-shrink-0 inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5d76e] text-[#0f2218] shadow-sm animate-pulse">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>{b.badge}</span>
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* All Services & Packages Link */}
                  <div className="p-2 bg-[#09150f] border-t border-[#c2a97a]/20">
                    <Link
                      to="/services"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-[#f5d76e] hover:bg-[#1a3827] transition-all"
                    >
                      <span className="uppercase tracking-wider">
                        Explore All Services & Packages
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products */}
          <button
            onClick={() => handleNavigate("/products")}
            className={`relative cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${
                location.pathname.startsWith("/products")
                  ? "text-[#1f3d2b] after:w-full"
                  : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
              }`}
          >
            Products
          </button>

          {/* Testimonials */}
          <button
            onClick={() => handleNavigate("/testimonials")}
            className={`relative cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${
                location.pathname === "/testimonials"
                  ? "text-[#1f3d2b] after:w-full"
                  : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
              }`}
          >
            Testimonials
          </button>

          {/* About Us */}
          <button
            onClick={() => handleNavigate("/about")}
            className={`relative cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${
                location.pathname === "/about"
                  ? "text-[#1f3d2b] after:w-full"
                  : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
              }`}
          >
            About
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavigate("/contact")}
            className={`relative cinzel-heading text-base lg:text-lg font-semibold tracking-wide text-[#0f2218] transition-colors
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
              after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${
                location.pathname === "/contact"
                  ? "text-[#1f3d2b] after:w-full"
                  : "after:w-0 hover:after:w-full hover:text-[#1f3d2b]"
              }`}
          >
            Contact
          </button>
        </div>

        {/* 🌿 CALL NOW BUTTON (DESKTOP) */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+918921799597"
            className="forum-regular relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1f3d2b] to-[#2a523a]
            text-white text-lg font-semibold hover:from-[#163020] hover:to-[#1f3d2b]
            transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 border border-[#c2a97a]/40"
          >
            <Phone className="w-4 h-4 text-[#f5d76e]" />
            <span>Call Now</span>
          </a>
        </div>

        {/* 📱 MOBILE MENU TOGGLE BUTTON */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#1f3d2b] hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 📱 MOBILE MENU DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col py-4 px-6 gap-2">
            {/* Home */}
            <button
              onClick={() => handleNavigate("/")}
              className={`p-2.5 rounded-xl text-left text-base font-semibold transition ${
                location.pathname === "/"
                  ? "bg-[#1f3d2b] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Home
            </button>

            {/* Branches & Services Mobile Accordion */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50">
              <button
                onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                className="w-full flex items-center justify-between p-3 text-left text-base font-semibold text-gray-900 bg-white"
              >
                <span>Branches & Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#c2a97a] transition-transform duration-200 ${
                    mobileBranchesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileBranchesOpen && (
                <div className="p-2 space-y-1.5 border-t border-gray-100">
                  {branchesNav.map((b) => (
                    <Link
                      key={b.id}
                      to={b.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between p-2.5 rounded-lg text-sm transition ${
                        location.pathname === b.path
                          ? "bg-[#1f3d2b] text-white font-semibold"
                          : "text-gray-700 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#c2a97a]" />
                        <span>{b.name}</span>
                      </div>
                      {b.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                          {b.badge}
                        </span>
                      )}
                    </Link>
                  ))}

                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg text-xs font-bold text-[#2e5b46] hover:bg-white uppercase tracking-wider mt-1 border-t border-gray-100"
                  >
                    <span>All Services & Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Products */}
            <button
              onClick={() => handleNavigate("/products")}
              className={`p-2.5 rounded-xl text-left text-base font-semibold transition ${
                location.pathname.startsWith("/products")
                  ? "bg-[#1f3d2b] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Products
            </button>

            {/* Testimonials */}
            <button
              onClick={() => handleNavigate("/testimonials")}
              className={`p-2.5 rounded-xl text-left text-base font-semibold transition ${
                location.pathname === "/testimonials"
                  ? "bg-[#1f3d2b] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Testimonials
            </button>

            {/* About */}
            <button
              onClick={() => handleNavigate("/about")}
              className={`p-2.5 rounded-xl text-left text-base font-semibold transition ${
                location.pathname === "/about"
                  ? "bg-[#1f3d2b] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              About
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavigate("/contact")}
              className={`p-2.5 rounded-xl text-left text-base font-semibold transition ${
                location.pathname === "/contact"
                  ? "bg-[#1f3d2b] text-white"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              Contact
            </button>

            {/* Call Now CTA button */}
            <div className="pt-2">
              <a
                href="tel:+918921799597"
                className="w-full py-3 rounded-xl bg-[#1f3d2b] text-white flex items-center justify-center gap-2 font-bold tracking-wide shadow-md hover:bg-[#163020] transition"
              >
                <Phone className="w-4 h-4 text-[#f5d76e]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
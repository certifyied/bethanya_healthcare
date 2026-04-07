import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
  { to: "/services", label: "Appointment", isButton: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  // Split links
  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-md py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LEFT NAV */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => handleNavigate(link.to)}
              className={`relative forum-regular text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide ${scrolled ? "text-[#1f3d2b]" : "text-[#1f3d2b]"}
              after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
              ${location.pathname === link.to
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
        
        {/* RIGHT NAV */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          {rightLinks.map((link) =>
            link.isButton ? (
              <button
                key={link.to}
                onClick={() => handleNavigate(link.to)}
                className="relative px-5 py-2 rounded-full bg-[#1f3d2b] text-white font-semibold hover:bg-[#163020] transition shadow-md"
              >
                {/* INNER GOLD BORDER */}
                <span className="absolute inset-[1px] rounded-full border border-[#D4AF37] box-border pointer-events-none"></span>

                {/* TEXT */}
                <span className="relative z-10">{link.label}</span>
              </button>
            ) : (
              <button
                key={link.to}
                onClick={() => handleNavigate(link.to)}
                className={`relative forum-regular text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide 
        ${scrolled ? "text-[#1f3d2b]" : "text-[#1f3d2b]"}
        after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
        ${location.pathname === link.to
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#1f3d2b]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="forum-regular md:hidden bg-white border-t mt-2 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavigate(link.to)}
                className={`relative px-3 py-2 rounded-full text-left text-base font-medium transition
  
    ${link.isButton
                    ? "bg-[#1f3d2b] text-white hover:bg-[#163020]"
                    : location.pathname === link.to
                      ? "text-green-700"
                      : "text-gray-600 hover:text-green-700"
                  }`}
              >
                {/* INNER GOLD BORDER */}
                <span
                  className={`absolute inset-[1px] rounded-full border pointer-events-none ${link.isButton
                    ? "border-[#D4AF37]/70"
                    : location.pathname === link.to
                      ? "border-[#D4AF37]/60"
                      : "border-transparent"
                    }`}
                ></span>

                {/* TEXT */}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Branches & Services" },
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 transition-all duration-300">
        {scrolled && (
          <div className="absolute inset-0 pointer-events-none"></div>
        )}

        <div className="container mx-auto flex items-center justify-between px-6">

          {/* 🌿 LOGO LEFT WITH HOME LINK */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/BA_3D_Gold_TM1.png"
              alt="logo"
              className="
w-[75px]
sm:w-[90px]
md:w-[100px]
lg:w-[130px]
xl:w-[140px]
aspect-square rounded-full object-cover
drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]
"
            />
          </Link>

          {/* 🌿 CENTER NAV */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-5 xl:gap-8">
            {navLinks
              .filter((link) => !link.isButton)
              .map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavigate(link.to)}
                  className={`relative cinzel-heading text-base lg:text-lg xl:text-xl font-semibold tracking-wide
                  text-[#0f2218]
                  after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                  after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
                  ${location.pathname === link.to
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                    }`}
                >
                  {link.label}
                </button>
              ))}
          </div>

          {/* 🌿 APPOINTMENT BUTTON */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavigate("/services")}
              className="forum-regular relative px-5 py-2 rounded-full bg-[#1f3d2b]
              text-white text-xl font-semibold hover:bg-[#163020]
              transition shadow-md"
            >
              <span className="absolute inset-[1px] rounded-full pointer-events-none"></span>
              <span className="relative z-10">Appointment</span>
            </button>
          </div>

          {/* 📱 MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#1f3d2b]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileOpen && (
          <div className="forum-regular lg:hidden bg-white border-t mt-2 animate-fade-in">
            <div className="flex flex-col py-4 px-4 md:px-6 lg:px-8 gap-4">
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
                  <span
                    className={`absolute inset-[1px] rounded-full border pointer-events-none
                    ${link.isButton
                        ? "border-[#D4AF37]/70"
                        : location.pathname === link.to
                          ? "border-[#D4AF37]/60"
                          : "border-transparent"
                      }`}
                  ></span>

                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
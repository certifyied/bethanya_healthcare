import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  // Split links
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "navbar-blur bg-white/90 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LEFT NAV */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative forum-regular text-lg lg:text-xl xl:text-3xl font-semibold tracking-wide transition-all duration-300 ${location.pathname === link.to
                ? "text-forest"
                : "text-accent hover:text-forest"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-1">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="w-7 h-7  text-herbal transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-heading text-[#D4AF37] text-2xl font-bold tracking-tight">
              Bethanya
            </span>
          </Link>
        </div>

        {/* RIGHT NAV */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          {rightLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative forum-regular text-lg lg:text-xl xl:text-3xl font-semibold tracking-wide transition-all duration-300 ${location.pathname === link.to
                ? "text-forest"
                : "text-accent hover:text-forest"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-forest"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden navbar-blur border-t border-border mt-2 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`forum-regular text-base font-medium ${location.pathname === link.to
                  ? "text-forest"
                  : "text-accent hover:text-forest"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

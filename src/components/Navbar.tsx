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
  className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-300"
>
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LEFT NAV */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative forum-regular text-lg lg:text-xl xl:text-3xl font-semibold tracking-wide text-[#1f3d2b]
after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
${location.pathname === link.to ? "after:w-full" : "after:w-0 hover:after:w-full"}
`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-1 ">
          <div className="relative p-[6px] rounded-full ring-2 ring-[#D4AF37]/70">

            {/* INNER BORDER */}
            <div className="rounded-full border border-[#D4AF37]/40 px-5 py-2 bg-[#0f2218] shadow-inner shadow-[#D4AF37]/10">
              <Link to="/" className="flex items-center gap-2 group">
                <Leaf className="w-7 h-7 text-herbal transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-heading text-[#D4AF37] text-2xl font-bold tracking-tight">
                  Bethanya
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* RIGHT NAV */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          {rightLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative forum-regular text-lg lg:text-xl xl:text-3xl font-semibold tracking-wide text-[#1f3d2b]
after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-[#D4AF37] after:transition-all after:duration-300
${location.pathname === link.to ? "after:w-full" : "after:w-0 hover:after:w-full"}
`}
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

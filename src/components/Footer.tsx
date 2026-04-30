import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-[#0f2218] text-white py-16 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] ring-2 ring-inset ring-[#c2a97a]/60 before:content-[''] before:absolute before:top-[10px] before:left-[10px] before:right-[10px] before:bottom-[10px] before:pointer-events-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-[#1f3d2b] after:pointer-events-none">

    <div className="container mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6">

        {/* Logo + About */}
        <div>
          <div className="mb-4">
            <Link to="/">
              <img
                src="/images/BA_3D_Gold_TM1.png"
                alt="Vriksha Logo"
                className="h-24 w-24 md:h-28 md:w-28 object-cover cursor-pointer"
              />
            </Link>
          </div>

          <p className="forum-regular text-base md:text-lg opacity-80 leading-relaxed font-body max-w-xs">
            Rooted in ancient Ayurvedic wisdom, we bring you pure, handcrafted wellness
            products sourced directly from nature.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="forum-regular font-heading text-xl md:text-2xl mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3 font-body text-base md:text-lg opacity-80">
            <Link to="/products" className="forum-regular hover:text-herbal transition-colors">Products</Link>
            <Link to="/about" className="forum-regular hover:text-herbal transition-colors">About Us</Link>
            <Link to="/contact" className="forum-regular hover:text-herbal transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="forum-regular font-heading text-xl md:text-2xl mb-4">Contact</h4>
          <div className="flex flex-col gap-3 font-body text-base md:text-lg opacity-80 leading-relaxed">

            <span className="forum-regular font-medium">
              BETHANYA AYURVEDA PVT. LTD.
            </span>

            <span className="forum-regular">
              Regd. Office: X/498, "REHOBOTH", Valuparampil Puthen Veedu,
              Thonackad, Chengannur–Mavelikkara Road,
              Near Thonackad Church,
              Chengannur, Kerala – 689511
            </span>

            <span className="forum-regular">Email: bethanyahealthcare@gmail.com</span>
            <span className="forum-regular">Tel: 9894176585</span>

          </div>
        </div>

      </div>

      <div className="border-t border-herbal/20 pt-6 text-center font-body text-sm md:text-base opacity-60">
        © {new Date().getFullYear()} Bethanya Ayurveda. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;
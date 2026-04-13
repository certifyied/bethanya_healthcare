import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative bg-[#0f2218] text-white py-16 rounded-t-[50px] shadow-[0_-8px_30px_rgba(0,0,0,0.15)] ring-2 ring-inset ring-[#c2a97a]/60 before:content-[''] before:absolute before:top-[10px] before:left-[10px] before:right-[10px] before:bottom-[10px] before:rounded-t-[40px] before:border-t before:border-l before:border-r before:border-[#c2a97a]/40 before:pointer-events-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[4px] after:bg-[#1f3d2b] after:pointer-events-none">

    <div className="container mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* Logo + About */}
        <div>
          <div className="mb-4">
            <img
              src="/images/Bethanya Trade mark-1.jpeg"
              alt="Vriksha Logo"
              className="h-16 w-16 object-cover rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
            />
          </div>
          <p className="text-sm opacity-80 leading-relaxed font-body max-w-xs">
            Rooted in ancient Ayurvedic wisdom, we bring you pure, handcrafted wellness
            products sourced directly from nature.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80">
            <Link to="/products" className="hover:text-herbal transition-colors">Products</Link>
            <Link to="/about" className="hover:text-herbal transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-herbal transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80 leading-relaxed">
            
            <span className="font-medium">
              BETHANYA HEALTHCARE PVT. LTD.
            </span>

            <span>
              Regd. Office: X/498, "REHOBOTH", Valuparampil Puthen Veedu,
              Thonackad, Chengannur–Mavelikkara Road,
              Near Thonackad Church,
              Chengannur, Kerala – 689511
            </span>

            <span>Email: bethanyahealthcare@gmail.com</span>
            <span>Tel: 9894176585</span>

          </div>
        </div>

      </div>

      <div className="border-t border-herbal/20 pt-6 text-center font-body text-xs opacity-60">
        © {new Date().getFullYear()} Vriksha Ayurveda. All rights reserved.
      </div>

    </div>
  </footer>
);

export default Footer;
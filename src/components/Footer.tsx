import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-hero text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-herbal" />
            <span className="font-heading text-xl font-bold">Vriksha</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed font-body max-w-xs">
            Rooted in ancient Ayurvedic wisdom, we bring you pure, handcrafted wellness
            products sourced directly from nature.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80">
            <Link to="/products" className="hover:text-herbal transition-colors">Products</Link>
            <Link to="/about" className="hover:text-herbal transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-herbal transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-2 font-body text-sm opacity-80">
            <span>hello@vriksha.in</span>
            <span>+91 98765 43210</span>
            <span>Kerala, India</span>
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

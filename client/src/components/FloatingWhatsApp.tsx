import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

const FloatingWhatsApp = ({
  phoneNumber = "918921799597",
  defaultMessage = "Hello, I would like to book an appointment.",
}: FloatingWhatsAppProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat with Bethanya Ayurveda on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.55)] transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
      >
        {/* Subtle Slow Shine Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          <div className="absolute -inset-y-2 -left-6 w-10 bg-gradient-to-r from-transparent via-white/35 to-transparent whatsapp-slow-shine pointer-events-none" />
        </div>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;

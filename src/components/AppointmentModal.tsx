import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const AppointmentModal = ({ isOpen, onClose }: any) => {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    service: "",
  });

  // ✅ Auto-fill branch & service from URL
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      branch: searchParams.get("branch") || "",
      service: searchParams.get("service") || "",
    }));
  }, [searchParams]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Send
  const handleWhatsApp = () => {
    const message = `Appointment Request:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Branch: ${form.branch}
Service: ${form.service}`;

    const url = `https://wa.me/918136951157?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // ✅ Email Send (mailto fallback)
  const handleEmail = () => {
    const subject = "New Appointment Request";
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Branch: ${form.branch}
Service: ${form.service}`;

    window.location.href = `mailto:soorajcpchathanathparampil@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0f2218] w-[90%] max-w-lg rounded-3xl p-8 relative border border-[#c2a97a]">

        {/* ❌ Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X />
        </button>

        <h2 className="text-2xl text-[#c2a97a] mb-6 text-center">
          Book Appointment
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white"
          />

          {/* ✅ Branch (readonly default) */}
          <input
            name="branch"
            value={form.branch}
            readOnly
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white"
          />

          {/* ✅ Service */}
          <input
            name="service"
            value={form.service}
            readOnly
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white"
          />
        </div>

        {/* 🔥 ACTION BUTTONS */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white"
          >
            WhatsApp
          </button>

          <button
            onClick={handleEmail}
            className="flex-1 py-3 rounded-xl bg-[#c2a97a] hover:bg-[#d4af37] text-[#0f2218]"
          >
            Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
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

  const [actionType, setActionType] = useState<"whatsapp" | "email">("whatsapp");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle Submit (used for both buttons)
 const handleSubmit = (e: any) => {
  e.preventDefault();

  const message = `Appointment Request:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Branch: ${form.branch}
Service: ${form.service}`;

  if (actionType === "whatsapp") {
    const url = `https://wa.me/918136951157?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  } else {
    const subject = "New Appointment Request";
    window.location.href = `mailto:soorajcpchathanathparampil@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-[#0f2218] w-full max-w-lg rounded-3xl p-8 relative border border-[#c2a97a]">

        {/* ❌ Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X />
        </button>

        <h2 className="text-2xl text-[#c2a97a] mb-6 text-center">
          Book Appointment
        </h2>

        {/* ✅ FORM */}
        <form
  className="space-y-4"
  onSubmit={(e) => handleSubmit(e)}
>

          <input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            name="branch"
            placeholder="Branch"
            value={form.branch}
            readOnly
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            name="service"
            placeholder="Service"
            value={form.service}
            readOnly
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white outline-none"
          />

          {/* 🔥 ACTION BUTTONS */}
          <div className="flex gap-4 mt-6">

            <button
  type="submit"
  onClick={() => setActionType("whatsapp")}
  className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white"
>
  WhatsApp
</button>

<button
  type="submit"
  onClick={() => setActionType("email")}
  className="flex-1 py-3 rounded-xl bg-[#c2a97a] hover:bg-[#d4af37] text-[#0f2218]"
>
  Email
</button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
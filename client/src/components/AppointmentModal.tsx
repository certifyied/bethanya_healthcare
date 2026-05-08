import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import API from "@/utils/axios";
import { useToast } from "@/hooks/use-toast";

const AppointmentModal = ({ isOpen, onClose }: any) => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Auto-fill branch & service from URL
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      branch: searchParams.get("branch") || "",
      service: searchParams.get("service") || "",
    }));
  }, [searchParams]);

  const [actionType, setActionType] = useState<
    "whatsapp" | "email"
  >("whatsapp");

  // ✅ Handle input changes
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Validation
  const validateForm = () => {

    // Name
    if (!form.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    // Phone
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(form.phone)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  // ✅ Handle Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // ✅ Validate before submit
    if (!validateForm()) return;

    const message = `Appointment Request:

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Branch: ${form.branch}
Service: ${form.service}`;

    // ✅ WHATSAPP
    if (actionType === "whatsapp") {
      const url = `https://wa.me/918136951157?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
      return;
    }

    // ✅ EMAIL API
    try {
      setLoading(true);

      const response = await API.post(
        "/api/contact/send-message",
        {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),

          message: `
Phone: ${form.phone}

Branch: ${form.branch}

Service: ${form.service}
          `,
        }
      );

      if (response.data.success) {

        toast({
          title: "Success",
          description: "Appointment enquiry sent successfully!",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          branch: searchParams.get("branch") || "",
          service: searchParams.get("service") || "",
        });

        onClose();

      } else {
        toast({
          title: "Error",
          description: response.data.message,
          variant: "destructive",
        });
      }

    } catch (error: any) {

      console.log(error);

      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });

    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      <div className="bg-[#0f2218] w-full max-w-lg rounded-3xl p-8 relative border border-[#c2a97a]">

        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X />
        </button>

        <h2 className="text-2xl text-[#c2a97a] mb-6 text-center">
          Book Appointment
        </h2>

        {/* ✅ FORM */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >

          <input
            name="name"
            value={form.name}
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-transparent border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
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
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white outline-none"
          />

          <input
            name="service"
            placeholder="Service"
            value={form.service}
            readOnly
            className="w-full p-3 rounded-xl bg-[#1a3a2a] border border-[#c2a97a]/40 text-white outline-none"
          />

          {/* 🔥 ACTION BUTTONS */}
          <div className="flex gap-4 mt-6">

            <button
              type="submit"
              onClick={() => setActionType("whatsapp")}
              className="flex-1 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
            >
              WhatsApp
            </button>

            <button
              type="submit"
              disabled={loading}
              onClick={() => setActionType("email")}
              className="flex-1 py-3 rounded-xl bg-[#c2a97a] hover:bg-[#d4af37] text-[#0f2218] transition-all duration-300 disabled:opacity-70"
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
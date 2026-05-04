import React, { useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function CreateService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    branch: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("title", formData.title);
      data.append("category", formData.category);
      data.append("branch", formData.branch);
      data.append("image", image);

      await API.post("/api/admin/create-services", data);

      toast.success("Service created successfully");
      navigate("/admin/admin-services");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-gradient-to-br from-[#0f2218] via-[#132a20] to-[#1b3a2c] 
    rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 mt-16 mx-4 md:mx-10">

        <h1 className="cinzel-heading text-3xl md:text-5xl text-white">
          Create your Services
        </h1>

        <p className="forum-regular mt-3 text-white/70 text-lg">
          Manage, filter and control all services across branches.
        </p>
      </div>
      {/* Page Background */}
      <div className="min-h-screen bg-gradient-to-br via-[#eef5f1] to-[#e6efe9] flex items-start justify-center px-4 py-12 mt-10">

        {/* Card */}
        <div className="w-full max-w-2xl 
bg-white/95 backdrop-blur-xl
border border-white/20
rounded-3xl 
shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
p-8 md:p-10 relative overflow-hidden">

          {/* subtle glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-40"></div>

          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-800 mb-1 tracking-tight">
            Create Service
          </h1>
          <br />
          <p className="forum-regular text-black-700 mb-8 text-lg">
            Add a new service to your platform
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label className="block forum-regular
text-lg mb-2">
                Service Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Eg: Full Body Massage"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-[#f9fbfa] text-gray-800 
              border border-gray-200 p-3 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Category + Branch (2 column layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="block forum-regular
text-lg mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-[#f9fbfa] text-gray-800 
                border border-gray-200 p-3 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="Combo Packs">Combo Packs</option>
                  <option value="Spa Massage">Spa Massage</option>
                  <option value="Special Treatments">Special Treatments</option>
                  <option value="Ayurvedic Massage">Ayurvedic Massage</option>
                </select>
              </div>

              <div>
                <label className="block forum-regular
text-lg mb-2">
                  Branch
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full bg-[#f9fbfa] text-gray-800 
                border border-gray-200 p-3 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="KATTANAM">KATTANAM</option>
                  <option value="VARKALA">VARKALA</option>
                  <option value="THONNAKKAD">THONNAKKAD</option>
                </select>
              </div>

            </div>

            {/* Image Upload */}
            <div>
              <label className="block forum-regular
text-lg mb-2">
                Service Image
              </label>

              <div className="border-2 border-dashed border-green-200 rounded-xl p-8 text-center hover:border-[#0f2218] transition cursor-pointer bg-[#f9fbfa]">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileUpload"
                />

                <label htmlFor="fileUpload" className="cursor-pointer forum-regular
text-lg">
                  Upload Image
                </label>
                <p className="text-xs text-gray-400 mt-1">
                  JPG, PNG supported
                </p>

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-5 w-full h-48 object-cover rounded-xl shadow"
                  />
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col gap-3">

              <button
                type="submit"
                disabled={loading}
                className="forum-regular
text-lg w-full 
              bg-gradient-to-r from-[#0f2218] to-emerald-500 
              text-white font-semibold 
              p-3 rounded-xl 
              shadow-md hover:shadow-lg 
              hover:scale-[1.01] transition"
              >
                {loading ? "Creating..." : "Create Service"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/admin/admin-dashboard")}
                className="w-full 
              bg-transparent border border-gray-300 
              text-gray-700 
              p-3 rounded-xl 
              hover:bg-gray-100 transition"
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default CreateService;
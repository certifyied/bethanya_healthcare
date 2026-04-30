import React, { useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { useNavigate } from "react-router-dom";

function CreateService() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    branch: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file change
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!image) {
      alert("Image is required");
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

      alert("Service created successfully");
      navigate("/admin/admin-services");
    } catch (err) {
      console.error(err);
      alert("Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="forum-regular mt-10 p-6 md:p-10 max-w-xl mx-auto">
        <h1 className="forum-regular text-5xl font-bold mb-6">
          Create Service
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="combo">Combo</option>
            <option value="spa">Spa</option>
            <option value="special">Special</option>
            <option value="massage">Massage</option>
          </select>

          {/* Branch */}
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Branch</option>
            <option value="KATTANAM">KATTANAM</option>
            <option value="VARKALA">VARKALA</option>
            <option value="THONNAKKAD">THONNAKKAD</option>
          </select>

          {/* Image Upload */}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-full h-40 object-cover rounded"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded hover:opacity-90"
            >
              {loading ? "Creating..." : "Create Service"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/admin-dashboard")}
              className="w-full bg-gray-300 text-black p-3 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </AdminLayout>
  );
}

export default CreateService;
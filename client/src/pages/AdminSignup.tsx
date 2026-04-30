import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/axios";
import Layout from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");
  setError("");

  try {
    const response = await API.post(
      "/api/admin/signup",
      formData
    );

    setMessage(
      response.data.message || "Admin registered successfully"
    );

    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });

    // ✅ Redirect after 1.5 sec
    setTimeout(() => {
      navigate("/admin-only-portal-login");
    }, 1500);

  } catch (err: any) {
    setError(
      err.response?.data?.message ||
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

    return (
        <Layout>
            <div className="min-h-screen flex items-start justify-center bg-gray-100 px-4 pt-48">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Admin Signup
                    </h2>

                    {message && (
                        <p className="text-green-600 text-sm text-center mb-4">
                            {message}
                        </p>
                    )}

                    {error && (
                        <p className="text-red-600 text-sm text-center mb-4">
                            {error}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter mobile number"
                                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="w-full border rounded-lg px-4 py-2 pr-12 outline-none focus:ring-2 focus:ring-black"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-sm text-gray-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
                        >
                            {loading ? "Registering..." : "Register Admin"}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/admin-only-portal-login"
                            className="text-black font-bold hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminSignup;
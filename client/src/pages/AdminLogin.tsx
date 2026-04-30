import { useState, useEffect } from "react";
import API from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false); // 👈 NEW

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

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
            const response = await API.post("/api/admin/login", formData, {
                withCredentials: true,
            });

            setMessage(response.data.message || "Login successful");
            localStorage.setItem("admin_token", response.data.token);

            setTimeout(() => {
                navigate("/admin/admin-dashboard");
            }, 1000);

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
                        Admin Login
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
                        {/* Email */}
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

                        {/* Password with toggle */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} // 👈 TOGGLE
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    className="w-full border rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-black"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Need to create an admin?{" "}
                        <Link to="/admin-only-portal-signup" className="text-black font-bold hover:underline">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminLogin;
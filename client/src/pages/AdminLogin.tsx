import { useState, useEffect } from "react";
import API from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false); // 👈 NEW

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await API.post<{
                message: string;
                token: string;
            }>("/api/admin/login", formData, {
                withCredentials: true,
            });

            // Save token
            localStorage.setItem("admin_token", response.data.token);

            // Success toast
            toast.success(response.data.message || "Login successful 🎉");

            // Navigate immediately (no delay needed)
            navigate("/admin/admin-dashboard");

        } catch (err) {
            const error = err as AxiosError<{ message: string }>;

            // Error toast
            toast.error(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-[#0f2218] via-[#163126] to-[#1f3a2c] px-4 pt-40">

                {/* Card */}
                <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white mt-10">

                    {/* Logo / Title */}
                    <h2 className="forum-regular text-3xl font-bold text-center mb-2 tracking-wide">
                        Admin Panel
                    </h2>
                    <p className="text-center text-gray-300 mb-6 text-sm">
                        Sign in to continue
                    </p>

                    {/* Messages */}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="admin@example.com"
                                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e5b46]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm text-gray-300">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2e5b46]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-300 hover:text-white"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#2e5b46] text-white font-semibold py-2 rounded-lg hover:bg-[#3a6d55] transition"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-white/20"></div>
                        <span className="px-3 text-gray-400 text-sm">OR</span>
                        <div className="flex-1 h-px bg-white/20"></div>
                    </div>

                    {/* Signup */}
                    <p className="text-center text-sm text-gray-300">
                        New admin?{" "}
                        <Link
                            to="/admin-only-portal-signup"
                            className="text-white font-semibold hover:underline"
                        >
                            Create account
                        </Link>
                    </p>

                </div>
            </div>
        </Layout>
    );
};

export default AdminLogin;
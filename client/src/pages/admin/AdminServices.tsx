import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";

function AdminServices() {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("ALL");

    const fetchServices = async () => {
        try {
            const res = await API.get("/api/admin/admin-services");
            setServices(res.data.services || []);
        } catch (err: any) {
            setError("Failed to load services");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const filteredServices =
        selectedBranch === "ALL"
            ? services
            : services.filter((s) => s.branch === selectedBranch);

    const grouped = {
        combo: filteredServices.filter((s) => s.category === "Combo Packs"),
        spa: filteredServices.filter((s) => s.category === "Spa Massage"),
        special: filteredServices.filter((s) => s.category === "Special Treatments"),
        massage: filteredServices.filter((s) => s.category === "Ayurvedic Massage"),
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">

                    {/* 🔄 Spinner */}
                    <div className="w-12 h-12 border-4 border-[#2e5b46] border-t-transparent rounded-full animate-spin"></div>

                    {/* ✨ Styled Text */}
                    <p className="forum-regular text-lg md:text-xl font-extrabold tracking-wide text-[#0f2218] flex items-center gap-1">
                        Loading Servcies
                    </p>

                </div>
            </AdminLayout>
        );
    }
    if (error) return <div className="p-10 text-red-500">{error}</div>;

    return (
        <AdminLayout>

            {/* 🔥 HEADER */}
            <div className="bg-gradient-to-br from-[#0f2218] via-[#132a20] to-[#1b3a2c] 
    rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 mt-16 mx-4 md:mx-10">

                <h1 className="cinzel-heading text-3xl md:text-5xl text-white">
                    Admin Services
                </h1>

                <p className="forum-regular mt-3 text-white/70 text-lg">
                    Manage, filter and control all services across branches.
                </p>
            </div>

            {/* 🔥 CONTENT */}
            <div className="px-4 md:px-10 py-10 space-y-10">

                {/* 🔹 TOP BAR */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f2218]">
                        All Services ({filteredServices.length})
                    </h2>

                    {/* Branch Filter */}
                    <div className="forum-regular text-lg font-semibold flex flex-col md:flex-row gap-3 md:flex-wrap">
                        {["ALL", "KATTANAM", "VARKALA", "THONNAKKAD"].map((b) => (
                            <button
                                key={b}
                                onClick={() => setSelectedBranch(b)}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all
              ${selectedBranch === b
                                        ? "bg-[#0f2218] text-white shadow-md"
                                        : "bg-gray-100 text-gray-700"
                                    }
              hover:scale-105`}
                            >
                                {b}
                            </button>
                        ))}
                    </div>

                </div>

                {/* 🔹 SERVICES GRID */}
                {filteredServices.length === 0 ? (
                    <div className="text-center text-gray-400 text-lg mt-20">
                        No services found
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {filteredServices.map((s: any) => (
                            <div
                                key={s._id}
                                className="group rounded-2xl bg-white border border-gray-200 
              shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                            >

                                {/* Image */}
                                {s.image && (
                                    <div className="overflow-hidden">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">

                                    {/* Title */}
                                    <h3 className="forum-regular text-xl md:text-2xl font-bold text-[#0f2218] mb-2">
                                        {s.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                                        {s.description || "No description available"}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">

                                        <span className="text-xs px-3 py-1 rounded-full bg-[#0f2218]/10 text-[#0f2218]">
                                            {s.branch}
                                        </span>

                                        <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                                            {s.category}
                                        </span>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </AdminLayout>
    );
}

export default AdminServices;
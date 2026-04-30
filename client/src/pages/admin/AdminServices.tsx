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
            const res = await API.get("/api/admin/services");
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
        combo: filteredServices.filter((s) => s.category === "combo"),
        spa: filteredServices.filter((s) => s.category === "spa"),
        special: filteredServices.filter((s) => s.category === "special"),
        massage: filteredServices.filter((s) => s.category === "massage"),
    };

    if (loading) return <div className="p-10">Loading...</div>;
    if (error) return <div className="p-10 text-red-500">{error}</div>;

    return (
        <AdminLayout>
            <div className="w-full bg-[#0f2218] py-12 md:py-16 mt-16 md:mt-18">

                <div className="text-center max-w-3xl mx-auto px-4">
                    <h1 className="cinzel-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                        Admin Services
                        <span className="forum-regular block text-4xl md:text-6xl font-extrabold mt-1
  bg-gradient-to-r from-[#d4af37] via-[#f6e27a] to-[#d4af37]
  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">
                            Manage & Control
                        </span>
                    </h1>

                    <p className="forum-regular mt-3 text-white/90 text-base md:text-lg lg:text-xl">
                        View, filter, and manage all services across branches and categories.
                    </p>
                </div>

            </div>

            <div className="px-4 md:px-10 py-10">
                {/* <h1 className="text-3xl font-bold mb-6">Admin Services</h1> */}

                {/* 🔹 Branch Filter */}
                <div className="mb-6 flex gap-3 flex-wrap">
                    {["ALL", "KATTANAM", "VARKALA", "THONNAKKAD"].map((b) => (
                        <button
                            key={b}
                            onClick={() => setSelectedBranch(b)}
                            className={`px-5 py-2 rounded-lg transition-all duration-300
  ${selectedBranch === b
                                    ? "bg-[#0f2218] text-white shadow-md"
                                    : "bg-gray-200 text-gray-800"
                                }
  hover:bg-gradient-to-r hover:from-[#d4af37] hover:via-[#f6e27a] hover:to-[#d4af37]
  hover:text-black
  hover:shadow-[0_0_20px_rgba(212,175,55,0.8)]
  hover:scale-105
`}
                        >
                            {b}
                        </button>
                    ))}
                </div>

                {/* 🔁 Categories */}
                {Object.entries(grouped).map(([key, list]) => (
                    <div key={key} className="mb-14">

                        {/* 🔹 Category Title */}
                        <h2 className="forum-regular text-4xl md:text-5xl lg:text-6xl font-extrabold mt-16 md:mt-20 mb-8 capitalize text-[#0f2218]">
                            {key} Services
                        </h2>

                        {list.length === 0 ? (
                            <p className="forum-regular text-gray-400 text-lg">
                                No services in this category
                            </p>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-8">
                                {list.map((s: any) => (
                                    <div
                                        key={s._id}
                                        className="border rounded-xl p-6 shadow-md bg-[#0f2218] hover:shadow-xl transition duration-300 h-full flex flex-col"
                                    >
                                        {s.image && (
                                            <img
                                                src={s.image}
                                                alt={s.title}
                                                className="w-full h-64 md:h-72 object-cover rounded-lg mb-5"
                                            />
                                        )}

                                        <h3 className="forum-regular text-2xl md:text-3xl font-extrabold mb-3 
  bg-gradient-to-r from-[#d4af37] via-[#f6e27a] to-[#d4af37] 
  bg-clip-text text-transparent">
                                            {s.title}
                                        </h3>

                                        <p className="forum-regular text-gray-200 text-base md:text-lg mb-3 leading-relaxed flex-grow">
                                            {s.description || "No description"}
                                        </p>

                                        <div className="forum-regular text-base text-gray-300 space-y-1 mt-auto">
                                            <p>
                                                <strong className="bg-gradient-to-r from-[#d4af37] to-[#f6e27a] bg-clip-text text-transparent">
                                                    Branch:
                                                </strong> {s.branch}
                                            </p>
                                            <p>
                                                <strong className="bg-gradient-to-r from-[#d4af37] to-[#f6e27a] bg-clip-text text-transparent">
                                                    Category:
                                                </strong> {s.category}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}

export default AdminServices;
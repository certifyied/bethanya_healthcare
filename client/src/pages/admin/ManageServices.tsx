import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ManageServices() {
    const navigate = useNavigate();

    const [services, setServices] = useState<any[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const [form, setForm] = useState<any>({
        title: "",
        category: "",
        branch: "",
        description: "",
    });

    const [image, setImage] = useState<File | null>(null);

    // 🔹 Fetch services
    const fetchServices = async () => {
        try {
            const res = await API.get("/api/admin/services");
            setServices(res.data.services || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    // 🔹 Delete
    const handleDelete = async () => {
        try {
            await API.delete(`/api/admin/delete-service/${deleteId}`);
            toast.success("Service deleted successfully");
            setDeleteId(null);
            fetchServices();
        } catch (err) {
            console.error(err);
            toast.error("Delete failed");
        }
    };

    // 🔹 Start Edit
    const handleEdit = (service: any) => {
        setEditingId(service._id);
        setForm({
            title: service.title,
            category: service.category,
            branch: service.branch,
            description: service.description?.[0] || "",
        });
    };

    // 🔹 Update
    const handleUpdate = async () => {
        try {
            const data = new FormData();

            data.append("title", form.title);
            data.append("category", form.category);
            data.append("branch", form.branch);

            if (form.description) {
                data.append("description", form.description);
            }

            if (image) {
                data.append("image", image);
            }

            await API.put(`/api/admin/update-service/${editingId}`, data);

            toast.success("Service updated successfully");
            setEditingId(null);
            setImage(null);
            fetchServices();
        } catch (err) {
            console.error(err);
            toast.error("Update failed");
        }
    };

    return (
        <AdminLayout>

            {/* 🌿 TOP GREEN CARD */}
            <div className="bg-gradient-to-br from-[#0f2218] via-[#132a20] to-[#1b3a2c] 
    rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 mt-16 mx-4 md:mx-10">

                <h1 className="cinzel-heading text-3xl md:text-5xl text-white">
                    Manage your Services
                </h1>

                <p className="forum-regular mt-3 text-white/70 text-lg">
                    Manage, filter and control all services across branches.
                </p>
            </div>

            {/* ⚪ MAIN PAGE */}
            <div className="min-h-screen bg-gray-50 px-6 py-12">

                {/* Header */}


                {/* Content */}
                <div className="max-w-7xl mx-auto">

                    {/* EMPTY STATE */}
                    {services.length === 0 ? (
                        <div className="flex flex-col items-center justify-center text-center py-24">
                            <p className="text-6xl mb-4">🌿</p>

                            <h2 className="text-2xl font-semibold text-gray-700">
                                No services available
                            </h2>

                            <p className="text-gray-400 mt-2 mb-6">
                                Start by creating your first service
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate("/admin/create-service")}
                                    className="bg-gradient-to-r from-green-500 to-emerald-600 
                px-6 py-3 rounded-xl text-white font-semibold shadow"
                                >
                                    Create Service
                                </button>

                                <button
                                    onClick={() => navigate("/admin/admin-dashboard")}
                                    className="bg-gray-800 text-white px-6 py-3 rounded-xl"
                                >
                                    Dashboard
                                </button>
                            </div>
                        </div>
                    ) : (

                        /* 🧩 SERVICES GRID */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                            {services.map((s) => (
                                <div
                                    key={s._id}
                                    className="bg-[#1b3a2c]/95 
                border border-gray-200/20 
                rounded-2xl p-5 shadow-md text-white 
                hover:shadow-lg hover:scale-[1.02] transition"
                                >

                                    {editingId === s._id ? (
                                        <div className="space-y-3">

                                            <input
                                                value={form.title}
                                                onChange={(e) =>
                                                    setForm({ ...form, title: e.target.value })
                                                }
                                                className="w-full bg-white/10 border border-white/20 
                      p-2 rounded text-white"
                                            />

                                            <select
                                                value={form.category}
                                                onChange={(e) =>
                                                    setForm({ ...form, category: e.target.value })
                                                }
                                                className="w-full bg-white/10 border border-white/20 
                      p-2 rounded text-white"
                                            >
                                                <option value="Combo Packs" className="text-black">Combo Packs</option>
                                                <option value="Spa Massage" className="text-black">Spa Massage</option>
                                                <option value="Special Treatments" className="text-black">Special Treatments</option>
                                                <option value="Ayurvedic Massage" className="text-black">Ayurvedic Massage</option>
                                            </select>

                                            <select
                                                value={form.branch}
                                                onChange={(e) =>
                                                    setForm({ ...form, branch: e.target.value })
                                                }
                                                className="w-full bg-white/10 border border-white/20 
                      p-2 rounded text-white"
                                            >
                                                <option value="KATTANAM" className="text-black">KATTANAM</option>
                                                <option value="VARKALA" className="text-black">VARKALA</option>
                                                <option value="THONNAKKAD" className="text-black">THONNAKKAD</option>
                                            </select>

                                            <input
                                                type="file"
                                                onChange={(e) => setImage(e.target.files[0])}
                                                className="text-sm"
                                            />

                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleUpdate}
                                                    className="flex-1 bg-green-500 py-2 rounded text-white"
                                                >
                                                    Save
                                                </button>

                                                <button
                                                    onClick={() => setEditingId(null)}
                                                    className="flex-1 bg-gray-500 py-2 rounded text-white"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {s.image && (
                                                <img
                                                    src={s.image}
                                                    className="w-full h-40 object-cover rounded-xl mb-3"
                                                />
                                            )}

                                            <h3 className="text-lg font-semibold">
                                                {s.title}
                                            </h3>

                                            <p className="text-green-200 text-sm">
                                                {s.category} • {s.branch}
                                            </p>

                                            <p className="text-gray-300 mt-2 text-sm line-clamp-2">
                                                {Array.isArray(s.description)
                                                    ? s.description.join(", ")
                                                    : s.description}
                                            </p>

                                            <div className="flex gap-3 mt-4">
                                                <button
                                                    onClick={() => handleEdit(s)}
                                                    className="flex-1 bg-white text-black py-2 rounded-lg font-medium"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => setDeleteId(s._id)}
                                                    className="flex-1 border border-white/30 py-2 rounded-lg"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>

            {/* 🗑 DELETE MODAL */}
            {deleteId && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl">
                        <h2 className="text-xl font-bold mb-3">
                            Confirm Delete
                        </h2>

                        <p className="text-gray-600 mb-6">
                            This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 rounded bg-gray-200"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded bg-red-600 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </AdminLayout>
    );
}

export default ManageServices;
import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { useNavigate } from "react-router-dom";

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
            setDeleteId(null);
            fetchServices();
        } catch (err) {
            console.error(err);
            alert("Delete failed");
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

            setEditingId(null);
            setImage(null);
            fetchServices();
        } catch (err) {
            console.error(err);
            alert("Update failed");
        }
    };

    return (
        <AdminLayout>
            <div className="p-6 mt-16">
                <h1 className="forum-regular text-5xl font-bold mb-6">
                    Manage Services
                </h1>

                {/* ✅ EMPTY STATE */}
                {services.length === 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-24">
                        <p className="text-5xl mb-4">📦</p>

                        <h2 className="text-xl font-semibold text-gray-700">
                            No services to manage
                        </h2>

                        <p className="text-gray-400 text-sm mt-1 mb-6">
                            Start by creating a new service or go back to dashboard
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate("/admin/create-service")}
                                className="bg-green-600 text-white px-5 py-2 rounded"
                            >
                                Create Service
                            </button>

                            <button
                                onClick={() => navigate("/admin/admin-dashboard")}
                                className="bg-gray-800 text-white px-5 py-2 rounded"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </div>
                ) : (
                    /* ✅ SERVICES GRID */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((s) => (
                            <div
                                key={s._id}
                                className="border rounded-xl p-5 shadow bg-white"
                            >
                                {editingId === s._id ? (
                                    <div className="space-y-3">
                                        <input
                                            value={form.title}
                                            onChange={(e) =>
                                                setForm({ ...form, title: e.target.value })
                                            }
                                            className="w-full border p-2 rounded"
                                        />

                                        <select
                                            value={form.category}
                                            onChange={(e) =>
                                                setForm({ ...form, category: e.target.value })
                                            }
                                            className="w-full border p-2 rounded"
                                        >
                                            <option value="combo">Combo</option>
                                            <option value="spa">Spa</option>
                                            <option value="special">Special</option>
                                            <option value="massage">Massage</option>
                                        </select>

                                        <select
                                            value={form.branch}
                                            onChange={(e) =>
                                                setForm({ ...form, branch: e.target.value })
                                            }
                                            className="w-full border p-2 rounded"
                                        >
                                            <option value="KATTANAM">KATTANAM</option>
                                            <option value="VARKALA">VARKALA</option>
                                            <option value="THONNAKKAD">THONNAKKAD</option>
                                        </select>

                                        <input
                                            type="file"
                                            onChange={(e: any) =>
                                                setImage(e.target.files[0])
                                            }
                                        />

                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleUpdate}
                                                className="bg-green-600 text-white px-4 py-2 rounded"
                                            >
                                                Save
                                            </button>

                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="bg-gray-400 text-white px-4 py-2 rounded"
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
                                                className="w-full h-40 object-cover rounded mb-3"
                                            />
                                        )}

                                        <h3 className="text-xl font-bold">{s.title}</h3>

                                        <p className="text-sm text-gray-500">
                                            {s.category} | {s.branch}
                                        </p>

                                        <p className="text-gray-600 mt-2">
                                            {Array.isArray(s.description)
                                                ? s.description.join(", ")
                                                : s.description}
                                        </p>

                                        <div className="flex gap-3 mt-4">
                                            <button
                                                onClick={() => handleEdit(s)}
                                                className="bg-black text-white px-4 py-2 rounded"
                                            >
                                                Edit
                                            </button>

                                            <button
  onClick={() => setDeleteId(s._id)}
  className="bg-white text-black px-4 py-2 rounded border border-black"
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

            {/* ✅ DELETE MODAL */}
            {deleteId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Confirm Delete
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this service?
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDeleteId(null)}
                                className="px-4 py-2 rounded bg-gray-300"
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
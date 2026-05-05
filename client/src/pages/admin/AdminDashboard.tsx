import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { Link } from "react-router-dom";
import ServiceCategoryChart from "@/components/charts/ServiceCategoryChart";

function AdminDashboard() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState("Admin");

  // ✅ Static categories & branches
  const ALL_CATEGORIES = ["Combo Packs", "Spa Massage", "Special Treatments", "Ayurvedic Massage"];
  const ALL_BRANCHES = ["KATTANAM", "VARKALA", "THONNAKKAD"];

  const fetchServices = async () => {
    try {
      const res = await API.get("/api/admin/services");
      setServices(res.data.services || []);
    } catch (err) {
      console.error("Error fetching services", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);


  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await API.get("/api/admin/admin-profile", {
          withCredentials: true,
        });

        setAdminName(res.data.name || "Admin");
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchAdmin();
  }, []);

  // ✅ Total services
  const totalServices = services.length;

  // ✅ Category count
const categoryCount = ALL_CATEGORIES.reduce((acc: any, cat) => {
  acc[cat] = services.filter(
    (s) =>
      s.category?.toLowerCase().trim() === cat.toLowerCase().trim()
  ).length;
  return acc;
}, {});

const branchCount = ALL_BRANCHES.reduce((acc: any, branch) => {
  acc[branch] = services.filter(
    (s) =>
      s.branch?.toUpperCase().trim() === branch.toUpperCase().trim()
  ).length;
  return acc;
}, {});

  if (loading) {
    return (
      <AdminLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">

          {/* 🔄 Spinner */}
          <div className="w-12 h-12 border-4 border-[#2e5b46] border-t-transparent rounded-full animate-spin"></div>

          {/* ✨ Styled Text */}
          <p className="forum-regular text-lg md:text-xl font-extrabold tracking-wide text-[#0f2218] flex items-center gap-1">
            Loading dashboard
          </p>

        </div>
      </AdminLayout>
    );
  }
  return (
    <AdminLayout>
      <div className="space-y-10 mt-10 md:mt-16 px-4">

        {/* 🔥 HEADER */}
        <div className="bg-gradient-to-br from-[#0f2218] via-[#132a20] to-[#1b3a2c] 
        rounded-3xl p-8 md:p-12 shadow-xl border border-white/5">

          <h1 className="cinzel-heading text-3xl md:text-5xl text-white">
            Welcome back,
          </h1>

          <h2 className="forum-regular mt-2 text-4xl md:text-6xl font-extrabold 
          bg-gradient-to-r from-[#d4af37] via-[#f6e27a] to-[#d4af37]
          bg-clip-text text-transparent">
            {adminName}
          </h2>

          <p className="forum-regular mt-3 text-white/70 text-lg">
            Manage services, branches, and operations efficiently.
          </p>
        </div>

        {/* 🔥 STATS */}
        {/* 🔥 STATS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Total */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
            <p className="forum-regular text-lg md:text-xl font-semibold text-[#0f2218]">
              Total Services
            </p>
            <h2 className="text-6xl md:text-7xl font-extrabold text-[#0f2218] mt-2">
              {totalServices}
            </h2>
          </div>

          {/* Categories */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
            <p className="text-sm text-[#0f2218] mb-3">Categories</p>
            {ALL_CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="flex justify-between text-[#0f2218] text-sm py-1 border-b border-gray-200"
              >
                <span className="capitalize">{cat}</span>
                <span>{categoryCount[cat]}</span>
              </div>
            ))}
          </div>

          {/* Branches */}
          <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-lg">
            <p className="text-sm text-[#0f2218] mb-3">Branches</p>
            {ALL_BRANCHES.map((branch) => (
              <div
                key={branch}
                className="flex justify-between text-[#0f2218] text-sm py-1 border-b border-gray-200"
              >
                <span>{branch}</span>
                <span>{branchCount[branch]}</span>
              </div>
            ))}
          </div>

        </div>

        {/* 🔥 CHART (separate section) */}
        <ServiceCategoryChart services={services} />

        {/* 🔥 ACTION BUTTONS */}
        <div className="grid md:grid-cols-2 gap-6">

          <Link
            to="/admin/create-service"
            className="forum-regular group rounded-2xl p-10 text-center 
bg-gradient-to-r from-green-600 to-emerald-500 
text-white text-3xl md:text-4xl font-bold 
shadow-lg hover:scale-105 transition-all duration-300">
            Create Service
            <p className="text-lg opacity-80 mt-2">
              Add new services to your platform
            </p>
          </Link>

          <Link
            to="/admin/manage-service"
            className="forum-regular group rounded-2xl p-10 text-center 
bg-[#0f2218] border border-white/10 
text-white text-3xl md:text-4xl font-bold tracking-wide leading-tight
shadow-lg hover:scale-105 transition-all duration-300">
            Manage Services
            <p className="text-lg opacity-70 mt-2">
              Edit, delete or update services
            </p>
          </Link>

        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
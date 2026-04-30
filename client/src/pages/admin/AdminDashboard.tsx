import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState("Admin");

  // ✅ Static categories & branches
  const ALL_CATEGORIES = ["combo", "spa", "special", "massage"];
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
      (s) => s.category?.toLowerCase().trim() === cat
    ).length;
    return acc;
  }, {});

  // ✅ Branch count
  const branchCount = ALL_BRANCHES.reduce((acc: any, branch) => {
    acc[branch] = services.filter(
      (s) => s.branch?.toUpperCase().trim() === branch
    ).length;
    return acc;
  }, {});

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-10 text-center text-lg animate-pulse">
          Loading dashboard...
        </div>
      </AdminLayout>
    );
  }
  return (
    <AdminLayout>
      <div className="space-y-10 mt-10 md:mt-16">

        {/* 🔹 Header */}
        <div className="w-full bg-[#0f2218] py-12 md:py-16">

          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="cinzel-heading text-3xl md:text-5xl font-bold text-white leading-tight">
              Welcome back,
              <span className="forum-regular block text-4xl md:text-6xl font-extrabold mt-1
  bg-gradient-to-r from-[#d4af37] via-[#f6e27a] to-[#d4af37]
  bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]">
                {adminName}
              </span>
            </h1>

            <p className="forum-regular mt-3 text-white/90 text-base md:text-lg lg:text-xl">
              Manage services, branches, and operations from your dashboard.
            </p>
          </div>

        </div>

        {/* 🔹 Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* 🔹 Total Services */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 
    shadow-md rounded-xl p-6 border border-green-200 
    flex flex-col justify-center items-center">

            <h2 className="text-sm text-green-700 uppercase tracking-wide">
              Total Services
            </h2>

            <h3 className="text-6xl font-extrabold mt-2 text-green-900">
              {totalServices}
            </h3>
          </div>

          {/* 🔹 Category Counts */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 
    shadow-md rounded-xl p-6 border border-yellow-200">

            <h2 className="text-yellow-700 mb-4 font-semibold">
              Services by Category
            </h2>

            <div className="space-y-2">
              {ALL_CATEGORIES.map((cat) => (
                <div
                  key={cat}
                  className="flex justify-between border-b border-yellow-200 pb-1 text-sm"
                >
                  <span className="capitalize text-gray-700">{cat}</span>
                  <span className="font-semibold text-yellow-800">
                    {categoryCount[cat]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Branch Counts */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 
    shadow-md rounded-xl p-6 border border-blue-200">

            <h2 className="text-blue-700 mb-4 font-semibold">
              Services by Branch
            </h2>

            <div className="space-y-2">
              {ALL_BRANCHES.map((branch) => (
                <div
                  key={branch}
                  className="flex justify-between border-b border-blue-200 pb-1 text-sm"
                >
                  <span className="text-gray-700">{branch}</span>
                  <span className="font-semibold text-blue-800">
                    {branchCount[branch]}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🔹 Actions */}
        <Link
          to="/admin/create-service"
          className="cinzel-heading text-[white] bg-green-600 
  rounded-2xl p-10 
  text-2xl md:text-3xl font-extrabold tracking-wide
  shadow-lg hover:shadow-2xl 
  hover:scale-105 transition-all duration-300 
  text-center flex items-center justify-center"
        >
          Create Service
        </Link>

        <Link
          to="/admin/manage-service"
          className="cinzel-heading bg-[#0f2218] text-white 
  rounded-2xl p-10 
  text-2xl md:text-3xl font-extrabold tracking-wide
  shadow-lg hover:shadow-2xl 
  hover:scale-105 transition-all duration-300 
  text-center flex items-center justify-center"
        >
          Manage Services
        </Link>

      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;
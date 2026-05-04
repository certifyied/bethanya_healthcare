import { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";
import toast from "react-hot-toast";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [error, setError] = useState("");

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // 🔹 Fetch Profile
  const fetchAdminProfile = async () => {
    try {
      setLoading(true);

      const res = await API.get("/api/admin/admin-profile", {
        withCredentials: true,
      });

      const data = {
        name: res.data.name || "",
        email: res.data.email || "",
        mobile: res.data.mobile || "",
      };

      setAdmin(data);
      setForm(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  // 🔹 Handle Input Change
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Update Profile
  const handleUpdate = async () => {
    try {
      setSaving(true);
      setError("");

      const res = await API.put(
        "/api/admin/admin-update",
        form,
        { withCredentials: true }
      );

      setAdmin(res.data.admin);
      setIsEditing(false);
      toast.success("Profile updated successfully");
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Update failed";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setSaving(false);
    }
  };

  // 🔹 Logout
  const handleLogout = async () => {
    try {
      setLogoutLoading(true);

      await API.post(
        "/api/admin/admin-logout",
        {},
        { withCredentials: true }
      );

      toast.success("Logged out successfully");
      localStorage.removeItem("admin_token");
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Logout failed";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLogoutLoading(false);
    }
  };

  const handlePasswordChange = (e: any) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async () => {
    try {
      setPasswordLoading(true);
      setPasswordError("");

      if (!passwordForm.oldPassword || !passwordForm.newPassword) {
        const msg = "Both fields are required";
        setPasswordError(msg);
        toast.error(msg);
        return;
      }

      if (passwordForm.oldPassword === passwordForm.newPassword) {
        const msg = "New password must be different";
        setPasswordError(msg);
        toast.error(msg);
        return;
      }

      await API.put(
        "/api/admin/admin-change-password",
        passwordForm,
        { withCredentials: true }
      );

      toast.success("Password changed successfully");

      setShowPasswordModal(false);
      setPasswordForm({ oldPassword: "", newPassword: "" });

    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Password change failed";
      setPasswordError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">

          {/* 🔄 Spinner */}
          <div className="w-12 h-12 border-4 border-[#2e5b46] border-t-transparent rounded-full animate-spin"></div>

          {/* ✨ Styled Text */}
          <p className="forum-regular text-lg md:text-xl font-extrabold tracking-wide text-[#0f2218] flex items-center gap-1">
            Loading Profile
          </p>

        </div>
      </AdminLayout>
    );
  }
  return (
    <AdminLayout>
      <div className="min-h-screen px-4 md:px-10 py-10">

        {/* 🔥 HEADER */}
        <div className="bg-gradient-to-br from-[#0f2218] via-[#132a20] to-[#1b3a2c] 
rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 mb-10 mt-2 md:mt-6">

          <h1 className="cinzel-heading text-3xl md:text-5xl text-white">
            Admin Profile
          </h1>

          <p className="text-lg forum-regular text-white/70 mt-2">
            Manage your account details and security settings
          </p>
        </div>

        {/* 🔥 PROFILE CARD */}
        <div className="max-w-2xl mx-auto relative">

          {/* 🌿 Glow Background */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-800/20 blur-3xl rounded-full"></div>

          <div className="relative 
  bg-gradient-to-br from-white/10 to-white/5 
  backdrop-blur-2xl 
  border border-white/10 
  rounded-3xl p-8 md:p-10 
  shadow-[0_10px_40px_rgba(0,0,0,0.4)]
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  transition-all duration-500">

            {/* 🔥 Header */}
            <h2 className="text-3xl font-bold text-[#0f2218] mb-2 tracking-wide">
              Personal Information
            </h2>

            <p className="forum-regular text-lg text-[#0f2218]/60 mb-6">
              Update your personal details and keep your account secure
            </p>

            {error && (
              <p className="text-red-500 text-sm mb-4">
                {error}
              </p>
            )}

            {/* 🔥 INPUTS */}
            <div className="space-y-5">

              {/* Name */}
              <div>
                <label className="text-[#0f2218]/70 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={isEditing ? form.name : admin.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full mt-1 p-3 rounded-xl 
          bg-white/70 text-[#0f2218] 
          border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50
          transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[#0f2218]/70 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={isEditing ? form.email : admin.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full mt-1 p-3 rounded-xl 
          bg-white/70 text-[#0f2218] 
          border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50
          transition"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-[#0f2218]/70 text-sm font-medium">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={isEditing ? form.mobile : admin.mobile}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full mt-1 p-3 rounded-xl 
          bg-white/70 text-[#0f2218] 
          border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50
          transition"
                />
              </div>

            </div>

            {/* 🔥 ACTION BUTTONS */}
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="forum-regular text-lg w-full mt-8 py-3 rounded-xl 
        bg-gradient-to-r from-[#d4af37] via-[#f6e27a] to-[#d4af37]
        text-black font-semibold tracking-wide
        shadow-lg hover:scale-105 transition"
              >
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleUpdate}
                  disabled={saving}
                  className="flex-1 py-3 rounded-xl 
          bg-[#0f2218] text-white 
          shadow-md hover:scale-105 transition"
                >
                  {saving ? "Saving..." : "Save"}
                </button>

                <button
                  onClick={() => {
                    setIsEditing(false);
                    setForm(admin);
                  }}
                  className="flex-1 py-3 rounded-xl 
          bg-gray-300 text-[#0f2218] 
          hover:scale-105 transition"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* 🔥 EXTRA ACTIONS */}
            <div className="mt-8 space-y-3">

              <button
                onClick={() => setShowPasswordModal(true)}
                className="forum-regular text-lg w-full py-3 rounded-xl 
        bg-gradient-to-r from-[#0f2218] to-[#1f3a2c] 
        text-white font-semibold tracking-wide
        shadow-md hover:scale-105 transition"
              >
                Change Password
              </button>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="forum-regular text-lg w-full py-3 rounded-xl 
        bg-red-600 text-white 
        hover:bg-red-700 hover:scale-105 transition"
              >
                Logout
              </button>

            </div>

          </div>
        </div>
      </div>{showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">

            <h2 className="text-xl font-bold mb-4">
              Confirm Logout
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="forum-regular px-4 py-2 rounded-xl bg-gray-300  hover:scale-105 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className="forum-regular px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white  hover:scale-105 transition"
              >
                {logoutLoading ? "Logging out..." : "Logout"}
              </button>
            </div>

          </div>
        </div>
      )}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">

            <h2 className="text-xl font-bold mb-4">
              Change Password
            </h2>

            {passwordError && (
              <p className="text-red-500 text-sm mb-3">
                {passwordError}
              </p>
            )}

            {/* 🔹 Old Password */}
            <div className="relative mb-3">
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                placeholder="Old Password"
                value={passwordForm.oldPassword}
                onChange={handlePasswordChange}
                className="w-full border p-2 rounded pr-12"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showOldPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* 🔹 New Password */}
            <div className="relative mb-4">
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                className="w-full border p-2 rounded pr-12"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500"
              >
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* 🔹 Buttons */}
            <div className="forum-regular flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordForm({ oldPassword: "", newPassword: "" });
                  setPasswordError("");
                }}
                className="forum-regular px-4 py-2 bg-gray-300 rounded-xl  hover:scale-105 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleChangePassword}
                disabled={passwordLoading}
                className="px-4 py-2 bg-black text-white rounded-xl  hover:scale-105 transition hover:bg-gray-900"
              >
                {passwordLoading ? "Updating..." : "Update"}
              </button>
            </div>

          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProfile;
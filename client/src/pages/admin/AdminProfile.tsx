import { useEffect, useState } from "react";
import API from "../../utils/axios";
import AdminLayout from "@/components/admin/AdminLayout";

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
    } catch (err: any) {
      setError(err.response?.data?.message || "Update failed");
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

      localStorage.removeItem("admin_token");
      window.location.href = "/";
    } catch (err: any) {
      setError(err.response?.data?.message || "Logout failed");
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
        setPasswordError("Both fields are required");
        return;
      }

      if (passwordForm.oldPassword === passwordForm.newPassword) {
        setPasswordError("New password must be different");
        return;
      }

      await API.put(
        "/api/admin/admin-change-password",
        passwordForm,
        { withCredentials: true }
      );

      alert("Password changed successfully");

      setShowPasswordModal(false);
      setPasswordForm({ oldPassword: "", newPassword: "" });

    } catch (err: any) {
      setPasswordError(
        err.response?.data?.message || "Password change failed"
      );
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  return (
    <AdminLayout>
      <div className="mt-20 flex justify-center">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">

          <h2 className="forum-regular text-4xl font-bold text-center mb-6">
            Admin Profile
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          {/* Name */}
          <div className="mb-3">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={isEditing ? form.name : admin.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={isEditing ? form.email : admin.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label className="font-semibold">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={isEditing ? form.mobile : admin.mobile}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          {/* ACTION BUTTONS */}
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="forum-regular w-full bg-black text-white py-2 rounded-xl mt-4 "
            >
              Edit Profile
            </button>
          ) : (
            <div className="forum-regular flex gap-3 mt-4">
              <button
                onClick={handleUpdate}
                disabled={saving}
                className="forum-regular flex-1 bg-[#0f2218] text-white py-2 rounded-xl "
              >
                {saving ? "Saving..." : "Save"}
              </button>

              <button
                onClick={() => {
                  setIsEditing(false);
                  setForm(admin);
                }}
                className="flex-1 bg-gray-400 text-white py-2 rounded-xl "
              >
                Cancel
              </button>
            </div>
          )}

          {/* LOGOUT */}
          <button
            onClick={() => setShowPasswordModal(true)}
            className="forum-regular w-full bg-black text-white py-2 rounded-xl mt-3 "
          >
            Change Password
          </button>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="forum-regular w-full bg-red-600 text-white py-2 rounded-xl mt-3  hover:scale-105 transition"
          >
            Logout
          </button>
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
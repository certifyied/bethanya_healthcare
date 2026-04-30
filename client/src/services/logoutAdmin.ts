import API from "../utils/axios";

export const logoutAdmin = async () => {
  try {
    const res = await API.post("/logout");

    localStorage.removeItem("admin");

    alert(res.data.message);
  } catch (error) {
    console.error("Logout failed");
  }
};
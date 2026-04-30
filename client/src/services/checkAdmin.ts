import API from "../utils/axios";
import { Admin } from "../types/admin";

interface CheckAdminResponse {
  success: boolean;
  message: string;
  admin: Admin;
}

export const checkAdmin = async (): Promise<Admin | null> => {
  try {
    const res = await API.get<CheckAdminResponse>("/api/admin/check-admin");

    return res.data.admin;
  } catch (error) {
    console.log("Admin not authenticated");
    return null;
  }
};
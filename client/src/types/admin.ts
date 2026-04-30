export interface Admin {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  admin: Admin;
}
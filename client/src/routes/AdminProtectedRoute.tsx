import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAdmin } from "../services/checkAdmin";

interface Props {
  children: JSX.Element;
}

const AdminProtectedRoute = ({ children }: Props) => {
  const [admin, setAdmin] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      const data = await checkAdmin();
      
      if (!data) {
        // Clear stale token if verification fails to prevent redirect loops
        localStorage.removeItem("admin_token");
      }

      setAdmin(data);
      // alert(data)
      setLoading(false);
    };

    verifyAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!admin) return <Navigate to="/" />;

  return children;
};

export default AdminProtectedRoute;
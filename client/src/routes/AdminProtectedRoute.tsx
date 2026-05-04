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

  if (loading)
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f2218]">

      {/* Glass Card */}
      <div className="relative px-10 py-12 rounded-[40px] 
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-xl border border-white/10 
        shadow-[0_0_60px_rgba(0,0,0,0.6)]">

        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] 
          bg-gradient-to-r from-green-400/20 via-emerald-500/20 to-teal-400/20 
          blur-2xl opacity-40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center">

          {/* Spinner */}
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>

          {/* Text */}
          <p className="forum-regular text-white/80 font-extrabold tracking-wide text-sm">
            Verifying access...
          </p>

        </div>
      </div>

    </div>
  );

  if (!admin) return <Navigate to="/" />;

  return children;
};

export default AdminProtectedRoute;
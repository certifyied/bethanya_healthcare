import { useState, useEffect } from "react";
import { Menu, X, Settings, Bell, User } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const adminLinks = [
    { to: "/admin/admin-dashboard", label: "Dashboard" },
    { to: "/admin/admin-services", label: "Services" },
    //   { to: "/admin/admin-profile", label: "Profile" },
];

const AdminHeader = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const isProfileActive = location.pathname === "/admin/admin-profile";
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavigate = (path: string) => {
        navigate(path);
        setMobileOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">

            <div className="container mx-auto flex items-center justify-between px-6">

                {/* 🔥 LOGO (LEFT - unchanged) */}
                <Link to="/admin/admin-dashboard">
                    <img
                        src="/images/BA_3D_Gold_TM1.png"
                        alt="logo"
                        className="w-[90px] md:w-[110px] lg:w-[120px] rounded-full object-cover"
                    />
                </Link>

                {/* 🌿 RIGHT SIDE */}
                <div className="hidden lg:flex items-center gap-4 ml-auto">

                    {/* NAV LINKS (PILL STYLE) */}
                    <div className="flex items-center gap-2 bg-[#f5f5f5] px-2 py-1 rounded-full">
                        {adminLinks.map((link) => {
                            const active = location.pathname === link.to;

                            return (
                                <button
                                    key={link.to}
                                    onClick={() => handleNavigate(link.to)}
                                    className={`forum-regular px-6 py-2.5 rounded-full text-base lg:text-lg font-semibold transition-all duration-300
  ${active
                                            ? "bg-[#0f2218] text-white shadow-sm"
                                            : "text-gray-700 hover:bg-gray-200"
                                        }
`}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* ICONS */}
                    <div className="flex items-center gap-2 ml-2">

                        {/* 👤 PROFILE ICON */}
                        <button
                            onClick={() => navigate("/admin/admin-profile")}
                            className={`w-11 h-11 rounded-full flex items-center justify-center transition border
        ${isProfileActive
                                    ? "bg-[#0f2218] text-white border-[#0f2218]"
                                    : "bg-gray-100 hover:bg-gray-200 border-gray-200"
                                }
    `}
                        >
                            <User size={20} />
                        </button>
                    </div>
                </div>

                {/* 📱 MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden text-[#1f3d2b]"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* 📱 MOBILE MENU */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t mt-2">
                    <div className="flex flex-col py-4 px-4 gap-4">
                        {adminLinks.map((link) => (
                            <button
                                key={link.to}
                                onClick={() => handleNavigate(link.to)}
                                className={`px-4 py-2 rounded-full text-left text-sm
                  ${location.pathname === link.to
                                        ? "bg-black text-white"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }
                `}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default AdminHeader;
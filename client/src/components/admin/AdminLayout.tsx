import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <AdminHeader />

      {/* ✅ Added pt-24 to avoid header overlap */}
      <main className="flex-grow p-6 pt-24">
        {children}
      </main>

      <AdminFooter />

    </div>
  );
};

export default AdminLayout;
// import { lazy, Suspense, useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import LoadingScreen from "@/components/LoadingScreen";
// import ServicesPackages from "./pages/ServicesPackages";
// import Testimonials from "./pages/Testimonials";
// import ScrollToTop from "./components/ScrollToTop";
// import AdminSignup from "./pages/AdminSignup";
// import AdminLogin from "./pages/AdminLogin";

// const Index = lazy(() => import("./pages/Index"));
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const queryClient = new QueryClient();

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1800);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <LoadingScreen />;

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//         <ScrollToTop/>
//             <Navbar />
//             <Suspense fallback={<LoadingScreen />}>
//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/services" element={<ServicesPackages />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/products/:id" element={<ProductDetail />} />
//                 <Route path="/testimonials" element={<Testimonials />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/admin-only-portal-signup" element={<AdminSignup />} />
//                 <Route path="/admin-only-portal-login" element={<AdminLogin />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </Suspense>
//             <Footer />
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;





import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

import ServicesPackages from "./pages/ServicesPackages";
import Testimonials from "./pages/Testimonials";
import AdminSignup from "./pages/AdminSignup";
import AdminLogin from "./pages/AdminLogin";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminServices from "./pages/admin/AdminServices";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateService from "./pages/admin/CreateService";
import ManageServices from "./pages/admin/ManageServices";

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPackages />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              {/* Admin Auth Routes */}
              <Route
                path="/admin-only-portal-signup"
                element={<AdminSignup />}
              />

              <Route
                path="/admin-only-portal-login"
                element={<AdminLogin />}
              />

              {/* Protected Admin Route */}
              <Route
                path="/admin/admin-profile"
                element={
                  <AdminProtectedRoute>
                    <AdminProfile />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="/admin/admin-services"
                element={
                  <AdminProtectedRoute>
                    <AdminServices />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="/admin/admin-dashboard"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="/admin/create-service"
                element={
                  <AdminProtectedRoute>
                    <CreateService />
                  </AdminProtectedRoute>
                }
              />
              <Route
                path="/admin/manage-service"
                element={
                  <AdminProtectedRoute>
                    <ManageServices />
                  </AdminProtectedRoute>
                }
              />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";
import ServicesPackages from "./pages/ServicesPackages";
import Testimonials from "./pages/Testimonials";
import SplashScreen from "@/components/SplashScreen";
import { Toaster } from "react-hot-toast";
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BranchDetail = lazy(() => import("./pages/BranchDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700); // match SplashScreen timing

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <BrowserRouter>
          <ScrollToTop />

          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="w-10 h-10 border-4 border-[#2e5b46] border-t-transparent rounded-full animate-spin"></div>
              </div>
            }
          >
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<ServicesPackages />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/branches/:branchId" element={<BranchDetail />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

        </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import PageTransition from '../components/PageTransition';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Product = lazy(() => import('../pages/Product'));
const Features = lazy(() => import('../pages/Features'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Contact = lazy(() => import('../pages/Contact'));
const Careers = lazy(() => import('../pages/Careers'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));

// Product sub-pages
const POS = lazy(() => import('../pages/product/POS'));
const Inventory = lazy(() => import('../pages/product/Inventory'));
const Billing = lazy(() => import('../pages/product/Billing'));
const CustomerVendor = lazy(() => import('../pages/product/CustomerVendor'));
const GSTTaxation = lazy(() => import('../pages/product/GSTTaxation'));
const Reports = lazy(() => import('../pages/product/Reports'));
const MultiBranch = lazy(() => import('../pages/product/MultiBranch'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
  </div>
);

const AppRouter = () => {
  const location = useLocation();

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/product"
              element={
                <PageTransition>
                  <Product />
                </PageTransition>
              }
            />
            <Route
              path="/product/pos"
              element={
                <PageTransition>
                  <POS />
                </PageTransition>
              }
            />
            <Route
              path="/product/inventory"
              element={
                <PageTransition>
                  <Inventory />
                </PageTransition>
              }
            />
            <Route
              path="/product/billing"
              element={
                <PageTransition>
                  <Billing />
                </PageTransition>
              }
            />
            <Route
              path="/product/customer-vendor"
              element={
                <PageTransition>
                  <CustomerVendor />
                </PageTransition>
              }
            />
            <Route
              path="/product/gst-taxation"
              element={
                <PageTransition>
                  <GSTTaxation />
                </PageTransition>
              }
            />
            <Route
              path="/product/reports"
              element={
                <PageTransition>
                  <Reports />
                </PageTransition>
              }
            />
            <Route
              path="/product/multi-branch"
              element={
                <PageTransition>
                  <MultiBranch />
                </PageTransition>
              }
            />
            <Route
              path="/features"
              element={
                <PageTransition>
                  <Features />
                </PageTransition>
              }
            />
            <Route
              path="/pricing"
              element={
                <PageTransition>
                  <Pricing />
                </PageTransition>
              }
            />
            <Route
              path="/blog"
              element={
                <PageTransition>
                  <Blog />
                </PageTransition>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <PageTransition>
                  <BlogPost />
                </PageTransition>
              }
            />
            <Route
              path="/case-studies"
              element={
                <PageTransition>
                  <CaseStudies />
                </PageTransition>
              }
            />
            <Route
              path="/faq"
              element={
                <PageTransition>
                  <FAQ />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/careers"
              element={
                <PageTransition>
                  <Careers />
                </PageTransition>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageTransition>
                  <Privacy />
                </PageTransition>
              }
            />
            <Route
              path="/terms"
              element={
                <PageTransition>
                  <Terms />
                </PageTransition>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </MainLayout>
  );
};

export default AppRouter;


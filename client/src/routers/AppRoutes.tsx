import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';

// Lazy-loaded pages
const HomePage = lazy(() => import('@/pages/home/HomePage'));
const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'));
const ProductDetail = lazy(() => import('@/pages/productDetail/ProductDetail'));
const ProductPage = lazy(() => import('@/pages/product/ProductPage'));

// Lazy-loaded layouts
const HomeLayout = lazy(() => import('@/layouts/HomeLayout'));
const BaseLayout = lazy(() => import('@/layouts/BaseLayout'));
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'));

const AppRoutes = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<div className="py-10 text-center">Loading...</div>}>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<HomeLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route element={<BaseLayout />}>
              <Route path="/detail" element={<ProductDetail />} />
              <Route path="/product" element={<ProductPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route element={<AuthLayout />}>
              <Route
                path="/login"
                element={<Navigate to={`/${user?.role}`} />}
              />
              <Route
                path="/register"
                element={<Navigate to={`/${user?.role}`} />}
              />
            </Route>
            <Route
              path="/customer/*"
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <>Customer</>
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff/*"
              element={
                <ProtectedRoute allowedRoles={['staff']}>
                  <>Staff</>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <>Admin</>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to={`/${user?.role}`} />} />
            <Route path="*" element={<div>Page not found</div>} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

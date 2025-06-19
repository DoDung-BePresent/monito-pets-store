import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

/**
 * Layouts
 */
import AuthLayout from '@/layouts/AuthLayout';
import BaseLayout from '@/layouts/BaseLayout';
import StaffLayout from '@/layouts/StaffLayout';
import AdminLayout from '@/layouts/AdminLayout';

/**
 * Components
 */
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';

/**
 * Pages
 */
import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';

import StaffDashboard from '@/pages/staff/StaffDashboard';
import ProductsManagement from '@/pages/staff/product/ProductsManagement';
import PetsManagement from '@/pages/staff/pet/PetsManagement';
import OrdersManagement from '@/pages/staff/order/OrdersManagement';
import CategoriesManagement from '@/pages/staff/CategoriesManagement';
import ColorsManagement from '@/pages/staff/ColorsManagement';
import BreedsManagement from '@/pages/staff/breed/BreedsManagement';

import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import LoadingScreen from '@/pages/common/LoadingScreen';
import AddProduct from '@/pages/staff/product/AddProduct';
import StaffManagement from '@/pages/admin/StaffManagement';

const AppRoutes = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return (
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
    );
  }

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Navigate to={`/${user?.role}`} />} />
        <Route path="/register" element={<Navigate to={`/${user?.role}`} />} />
      </Route>

      <Route
        path="/customer/*"
        element={<ProtectedRoute allowedRoles={['customer']} />}
      />
      <Route
        path="/staff/*"
        element={<ProtectedRoute allowedRoles={['staff', 'admin']} />}
      >
        <Route element={<StaffLayout />}>
          <Route index element={<StaffDashboard />} />
          <Route path="products" element={<ProductsManagement />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="pets" element={<PetsManagement />} />
          <Route path="orders" element={<OrdersManagement />} />
          <Route path="categories" element={<CategoriesManagement />} />
          <Route path="colors" element={<ColorsManagement />} />
          <Route path="breeds" element={<BreedsManagement />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={<ProtectedRoute allowedRoles={['admin']} />}
      >
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="staff" element={<StaffManagement />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to={`/${user?.role}`} />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;

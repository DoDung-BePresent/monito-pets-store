/**
 * Node modules
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * Layouts
 */
import { MainLayout } from "@/layouts/MainLayout";

/**
 * Pages
 */
import { HomePage } from "@/pages/home/HomePage";
import LoginPage from "@/pages/auth/LoginPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        {/* Auth routes */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

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

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

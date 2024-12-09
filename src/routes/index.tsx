import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Whitepaper from "@/pages/Whitepaper";

export const AppRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="whitepaper" element={<Whitepaper />} />
    </Routes>
  );
};
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import CatalogPage from "./views/CatalogPage";
import BaseLayout from "./views/BaseLayout";

export default function App() {

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
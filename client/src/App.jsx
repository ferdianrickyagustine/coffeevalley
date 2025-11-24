import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import CatalogPage from "./views/CatalogPage";
import DistributorPage from "./views/DistributorPage";
import AddDistributorPage from "./views/AddDistributorPage";
import EditDistributorPage from "./views/EditDistributorPage";
import BaseLayout from "./views/BaseLayout";
import UploadPage from "./views/UploadPage";

export default function App() {

  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/distributors" element={<DistributorPage />} />
          <Route path="/distributors/add" element={<AddDistributorPage />} />
          <Route path="/distributors/edit/:id" element={<EditDistributorPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./views/LoginPage";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
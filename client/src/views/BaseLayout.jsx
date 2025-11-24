import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function BaseLayout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      await axios.get("http://localhost:3000/home", {
        withCredentials: true
      });
      setLoading(false);
    } catch (error) {
      toast.error("Please login first");
      navigate("/login");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
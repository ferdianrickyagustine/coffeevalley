import axios from "axios";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";


export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post("http://localhost:3000/logout", {}, {
        withCredentials: true
      });
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  }

  return (
    <nav className="w-full bg-white">
      <div className="bg-white px-4 sm:px-8 py-2 sm:py-4">
        <img 
          src="https://i.postimg.cc/L5SVBWpq/home.png" 
          alt="Coffee Valley" 
          className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28"
        />
      </div>

      <div className="bg-red-950 text-white">
        <div className="flex items-center w-full">
          <Link 
            to="/" 
            className="flex-1 py-3 hover:bg-red-900 border-r border-red-900 font-medium text-xs sm:text-base text-center"
          >
            Home
          </Link>
          <Link 
            to="/catalog" 
            className="flex-1 py-3 hover:bg-red-900 border-r border-red-900 font-medium text-xs sm:text-base text-center"
          >
            Catalog
          </Link>
          <Link 
            to="/order-status" 
            className="flex-1 py-3 hover:bg-red-900 border-r border-red-900 font-medium text-xs sm:text-base text-center"
          >
            Order Status
          </Link>
          <Link 
            to="/distributors" 
            className="flex-1 py-3 hover:bg-red-900 border-r border-red-900 font-medium text-xs sm:text-base text-center"
          >
            Distributors
          </Link>
          <Link 
            to="/upload" 
            className="flex-1 py-3 hover:bg-red-900 border-r border-red-900 font-medium text-xs sm:text-base text-center"
          >
            Upload
          </Link>
          <button 
            onClick={handleLogout}
            className="flex-1 py-3 hover:bg-red-900 font-medium text-xs sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

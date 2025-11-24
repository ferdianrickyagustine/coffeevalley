import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import DistributorForm from "../components/DistributorForm";

export default function AddDistributorPage() {
    const navigate = useNavigate();

    async function handleSubmit(e, name, city, state, country, phone, email) {
        e.preventDefault();
        try {
            const body = { name, city, state, country, phone, email };
            await axios.post("http://localhost:3000/distributors", body, {
                withCredentials: true
            });
            toast.success("Successfully added distributor");
            navigate("/distributors");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add distributor");
        }
    }

    return (
        <div className="p-4 mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Add New Distributor
                </h1>
            </div>

            <div className="bg-white shadow-sm p-6">
                <DistributorForm 
                    handleSubmit={handleSubmit}
                    propName="Add Distributor"
                />
            </div>
        </div>
    );
}

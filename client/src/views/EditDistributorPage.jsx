import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import DistributorForm from "../components/DistributorForm";

export default function EditDistributorPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [dataDistributor, setDataDistributor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDistributor();
    }, []);

    async function fetchDistributor() {
        try {
            const response = await axios.get(`http://localhost:3000/distributors/${id}`, {
                withCredentials: true
            });
            setDataDistributor(response.data);
        } catch (error) {
            toast.error("Failed to load distributor");
            navigate("/distributors");
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e, name, city, state, country, phone, email) {
        e.preventDefault();
        try {
            const body = { name, city, state, country, phone, email };
            await axios.put(`http://localhost:3000/distributors/${id}`, body, {
                withCredentials: true
            });
            toast.success("Successfully updated distributor");
            navigate("/distributors");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update distributor");
        }
    }

    if (loading) {
        return (
            <div className="p-8 text-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="p-4 mx-auto">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Edit Distributor
                </h1>
            </div>

            <div className="bg-white shadow-sm p-6">
                <DistributorForm 
                    handleSubmit={handleSubmit}
                    propName="Update Distributor"
                    dataDistributor={dataDistributor}
                />
            </div>
        </div>
    );
}

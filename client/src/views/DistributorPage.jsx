import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router";

export default function DistributorPage() {
    const [distributors, setDistributors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDistributors();
    }, []);

    async function fetchDistributors() {
        try {
            const response = await axios.get("http://localhost:3000/distributors", {
                withCredentials: true
            });
            setDistributors(response.data);
        } catch (error) {
            toast.error("Failed to load distributors");
        } finally {
            setLoading(false);
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
                    Distributors
                </h1>
            </div>

            <div className="bg-white shadow-sm mb-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">Distributor Name</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">City</th>
                            <th className="py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {distributors.map((dist) => (
                            <tr key={dist.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{dist.name}</td>
                                <td className="py-3 px-4 text-gray-600">{dist.city}</td>
                                <td className="py-3 px-4 text-right">
                                    <Link 
                                        to={`/distributors/edit/${dist.id}`}
                                        className="text-red-950 hover:text-red-900 underline text-sm"
                                    >
                                        [Edit]
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <Link 
                    to="/distributors/add"
                    className="text-red-950 hover:text-red-900 underline text-sm"
                >
                    [Add]
                </Link>
            </div>
        </div>
    );
}

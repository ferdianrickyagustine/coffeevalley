import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CatalogPage() {
    const [beans, setBeans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllBeans();
    }, []);

    async function getAllBeans() {
        try {
            const response = await axios.get("http://localhost:3000/catalog", {
                withCredentials: true
            });
            setBeans(response.data);
        } catch (error) {
            toast.error("Failed to load catalog");
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
                    Catalog
                </h1>
            </div>

            <div className="bg-white shadow-sm">
                <table className="w-full">
                    <thead>
                        <tr className="text-center bg-gray-50">
                            <th className="py-3 px-4 font-semibold text-gray-700">Bean</th>
                            <th className="py-3 px-4 font-semibold text-gray-700">Description</th>
                            <th className="py-3 px-4 font-semibold text-gray-700">Price/Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beans.map((bean) => (
                            <tr key={bean.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{bean.name}</td>
                                <td className="py-3 px-4 text-gray-600 text-sm">{bean.description}</td>
                                <td className="py-3 px-4 font-semibold text-gray-800">
                                    ${bean.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {beans.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No beans available
                    </div>
                )}
            </div>
        </div>
    )
}
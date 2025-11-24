import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function HomePage() {
    const [bean, setBean] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBeanOfTheDay();
    }, []);

    async function fetchBeanOfTheDay() {
        try {
            const response = await axios.get("http://localhost:3000/home", {
                withCredentials: true
            });
            setBean(response.data);
        } catch (error) {
            toast.error("Failed to load bean of the day");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="p-8 text-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!bean) {
        return (
            <div className="p-8 text-center">
                <p>No bean of the day available</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col p-4 mx-auto">
            <label className="text-2xl font-bold text-gray-800">
                Bean of the Day
            </label>
            <label className="mb-4">
                {bean.name}
            </label>

            <label className="text-2xl font-bold text-gray-800">Sale Price</label>
            <label className="mb-4">
                ${bean.sale_price}
            </label>

            <label className="text-2xl font-bold text-gray-800">Description</label>
            <label>
                {bean.description}
            </label>
        </div>
    );
}
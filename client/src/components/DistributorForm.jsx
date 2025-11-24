import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { countries } from "../data/countries";

export default function DistributorForm({ handleSubmit, propName, dataDistributor }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (dataDistributor) {
            setName(dataDistributor.name || "");
            setCity(dataDistributor.city || "");
            setState(dataDistributor.state || "");
            setCountry(dataDistributor.country || "");
            setPhone(dataDistributor.phone || "");
            setEmail(dataDistributor.email || "");
        }
    }, [dataDistributor]);

    return (
        <form onSubmit={(e) => handleSubmit(e, name, city, state, country, phone, email)}>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">City</label>
                <input 
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">State</label>
                <input 
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Country</label>
                <select 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                >
                    <option value="">-- Select Country --</option>
                    {countries.map((countryName) => (
                        <option key={countryName} value={countryName}>
                            {countryName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
            </div>

            <div className="flex gap-3">
                <button 
                    type="submit"
                    className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-900"
                >
                    {propName}
                </button>
                <button 
                    type="button"
                    onClick={() => navigate("/distributors")}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

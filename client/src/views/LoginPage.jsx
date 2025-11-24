import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                "http://localhost:3000/login",
                { userId, password },
                { withCredentials: true } 
            );

            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="flex flex-col justify-center items-center h-auto w-full max-w-md bg-gray-200 rounded-lg shadow-lg border-2 border-gray-300/50 p-6 sm:p-8">
                <div className="flex flex-col justify-center items-center mb-6">
                    <img src="https://i.postimg.cc/0QNqYwZC/image-removebg-preview.png" alt="logo" border="0" className="w-32" />
                    <label className="text-brown-600 text-2xl font-bold italic">Coffee Valley</label>
                    <label>Taste the love in every cup!</label>
                    <label className="text-gray-500 text-sm">One Alewife Center 3rd Floor</label>
                    <label className="text-gray-500 text-sm">Cambridge, MA 02140</label>
                </div>
                {error && (
                    <div className="w-full mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full">
                        <label>User ID: </label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="mt-2 p-2 rounded border border-gray-300 w-full"
                            id="userId"
                            onChange={(e) => setUserId(e.target.value)}
                            value={userId}
                        />
                    </div>
                    <div className="w-full mt-4">
                        <label>Password: </label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="mt-2 p-2 rounded border border-gray-300 w-full" 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <button type="submit" className="mt-6 bg-gray-600 text-white px-4 py-2 rounded hover:bg-brown-700 w-full">Login</button>
                </form>
            </div>

        </div>
    )
}
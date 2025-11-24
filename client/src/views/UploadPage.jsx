import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function UploadPage() {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");
    
    function handleFileChange(e) {
        setFile(e.target.files[0]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (!file) {
            toast.error("Please select a file");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("document", file);
            formData.append("author", author);

            await axios.post("http://localhost:3000/upload", formData, {
                withCredentials: true,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            toast.success("Successfully added document");
            setTitle("");
            setFile(null);
            setAuthor("");
            document.getElementById("fileInput").value = "";
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to upload document");
        }
    }

    return (
        <div className="p-4 sm:p-8 max-w-4xl mx-auto">
            <div className="bg-white shadow-sm p-6 mb-8">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Document File</label>
                        <div className="flex gap-2">
                            <input
                                id="fileInput"
                                type="file"
                                onChange={handleFileChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-900"
                    >
                        Add Document
                    </button>
                </form>
            </div>

            <div className="bg-white shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Document Library</h2>
                <p className="text-gray-600">There are currently no reports in the library.</p>
            </div>
        </div>
    );
}
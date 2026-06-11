"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    if (!name || !imageUrl) {
      toast.error("Please fill out both field input configurations.");
      return;
    }

    
    setLoading(true);
    try {
      const { data, error } = await authClient.user.update({
        name: name,
        image: imageUrl,
      });

      if (error) {
        throw new Error(error.message || "Credential updates rejected.");
      }

      if (data?.user) {
        setUser(data.user);
      }

      toast.success("Profile credentials adjusted successfully!");
      
      router.push("/my-profile");
      router.refresh();
    } catch (err) {
      toast.error(err.message || "An infrastructure error occurred during update.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 px-4 py-8">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100">
        <form onSubmit={handleUpdateFormSubmit} className="card-body p-6 gap-3">
          
          <h2 className="text-xl font-black text-indigo-900 tracking-tight">Update Information</h2>
          <p className="text-xs text-gray-400 font-semibold mb-2">Modify your account profile display markers instantly.</p>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">New Profile Name</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. John Doe" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="form-control mt-1">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">New Image URL</label>
            <input 
              type="url" 
              required 
              placeholder="https://unsplash.com..." 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
            />
          </div>

          <div className="form-control mt-4">
            <button 
              type="submit" 
              disabled={loading} 
              className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-10 w-full rounded-lg border-none normal-case tracking-wide text-xs shadow-md"
            >
              {loading ? "Saving Changes..." : "Update Information"}
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

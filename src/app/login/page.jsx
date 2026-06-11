"use client";
import React, { useState, useContext } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useContext(AuthContext);
  
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await authClient.signIn.email({
        email: email,
        password: password,
      });

      if (data?.user) {
        setUser(data.user);
      }

      toast.success("Welcome back to SkillSphere!");
      router.push(callbackUrl); 
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Invalid credentials. Please verify and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLoginClick = async () => {
    try {
      await authClient.signIn.social({ 
        provider: "google", 
        callbackUrl: callbackUrl 
      });
    } catch (err) {
      toast.error("Google authentication service connection issue.");
    }
  };

  
  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 px-4 py-8">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100">
        <form onSubmit={handleLoginSubmit} className="card-body p-6 gap-3">
          
          <h2 className="text-2xl font-black text-center text-indigo-900 tracking-tight">Account Login</h2>
          <p className="text-center text-xs text-gray-400 font-semibold mb-2">Access your training space and dashboard modules</p>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="name@domain.com" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="form-control mt-1">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-10 rounded-lg border-none normal-case tracking-wide text-xs w-full mt-3 shadow-md"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          
          <div className="divider text-[10px] text-gray-400 font-bold uppercase tracking-widest my-1">OR</div>
          
          <button 
            type="button" 
            onClick={handleGoogleLoginClick} 
            className="btn btn-sm btn-outline border-gray-200 text-gray-700 h-10 text-xs rounded-lg font-bold w-full normal-case flex items-center justify-center gap-2"
          >
            Continue with Google
          </button>
          
          <p className="text-xs text-center mt-3 font-medium text-gray-500">
            Do not have an account? <Link href="/register" className="link link-primary font-bold">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

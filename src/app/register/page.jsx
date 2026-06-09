"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        image: photoUrl,
      });
      toast.success("Account initialized! Forwarding to validation...");
      router.push("/login");
    } catch (err) {
      toast.error(err.message || "Credential authentication loop issue.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuthClick = async () => {
    try {
      await authClient.signIn.social({ provider: "google", callbackUrl: "/" });
    } catch (err) {
      toast.error("Social directory single sign-on timeout.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[85vh] bg-gray-50 px-4 py-8">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100">
        <form onSubmit={handleRegisterSubmit} className="card-body p-6 gap-3">
          <h2 className="text-2xl font-black text-center text-indigo-900 tracking-tight">Create Account</h2>
          <p className="text-center text-xs text-gray-400 font-semibold mb-2">Join SkillSphere today and grow your skills</p>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Full Display Name</label>
            <input type="text" required placeholder="John Doe" className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" value={name} onChange={e => setName(e.target.value)} />
          </div>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Email Address</label>
            <input type="email" required placeholder="name@domain.com" className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Custom Photo URL Link</label>
            <input type="url" required placeholder="https://host.com" className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
          </div>
          
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Account Password</label>
            <input type="password" required placeholder="••••••••" className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button type="submit" disabled={loading} className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-10 rounded-lg border-none normal-case tracking-wide text-xs w-full mt-2">
            {loading ? "Registering account..." : "Register"}
          </button>
          
          <div className="divider text-[10px] text-gray-400 font-bold uppercase tracking-widest my-1">OR</div>
          
          <button type="button" onClick={handleGoogleAuthClick} className="btn btn-sm btn-outline border-gray-200 text-gray-700 h-10 text-xs rounded-lg font-bold w-full normal-case">
            Continue with Google
          </button>
          
          <p className="text-xs text-center mt-2 font-medium text-gray-500">
            Already registered? <Link href="/login" className="link link-primary font-bold">Log In here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

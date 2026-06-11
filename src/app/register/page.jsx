"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  // State parameters for form management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Execute the signup request using Better Auth client actions
      const { data, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: name,
        image: photoUrl, // Better Auth maps avatars to the 'image' property field
      });

      if (error) {
        throw new Error(error.message || "Registration parameter rejected by authentication engine.");
      }

      toast.success("Account created successfully! Redirecting to login window...");
      
      // Assignment Rule: On successful registration, navigate them straight to the Login page.
      router.push("/login");
      router.refresh();
    } catch (err) {
      toast.error(err.message || "An infrastructure error occurred during credential creation.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegisterClick = async () => {
    try {
      await authClient.signIn.social({ 
        provider: "google", 
        callbackUrl: "/" // Assignment Rule: Redirect directly back to Home on social authentication
      });
    } catch (err) {
      toast.error("Google authentication link failure.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50 px-4 py-10">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100">
        <form onSubmit={handleRegisterSubmit} className="card-body p-6 gap-3">
          
          <h2 className="text-2xl font-black text-center text-indigo-900 tracking-tight">Create Student Account</h2>
          <p className="text-center text-xs text-gray-400 font-semibold mb-2">Join SkillSphere to instantly track and unlock lesson modules</p>
          
          {/* Input 1: Full Name */}
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Full Name</label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Jane Doe" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={name} 
              onChange={e => setName(e.target.value)} 
            />
          </div>

          {/* Input 2: Email Address */}
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Email Address</label>
            <input 
              type="email" 
              required 
              placeholder="name@domain.com" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>

          {/* Input 3: Profile Photo URL string link */}
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Profile Photo URL</label>
            <input 
              type="url" 
              required 
              placeholder="https://unsplash.com..." 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={photoUrl} 
              onChange={e => setPhotoUrl(e.target.value)} 
            />
          </div>

          {/* Input 4: Password field configuration */}
          <div className="form-control">
            <label className="label-text font-bold text-gray-700 text-xs mb-1">Account Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="input input-bordered h-10 text-xs rounded-lg bg-gray-50/50 focus:outline-none focus:border-indigo-900 w-full" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          {/* Submit Action Registration Button */}
          <div className="form-control mt-3">
            <button 
              type="submit" 
              disabled={loading}
              className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-10 w-full rounded-lg border-none normal-case tracking-wide text-xs shadow-md"
            >
              {loading ? <span className="loading loading-spinner loading-xs"></span> : "Register"}
            </button>
          </div>

          {/* Social Divider Interface */}
          <div className="divider text-[10px] uppercase font-bold text-gray-400 my-1">OR</div>

          {/* Google Authentication Trigger */}
          <button 
            type="button"
            onClick={handleGoogleRegisterClick}
            className="btn btn-sm btn-outline border-gray-200 hover:bg-gray-50 hover:text-gray-900 font-bold h-10 w-full rounded-lg normal-case tracking-wide text-xs text-gray-600 gap-2"
          >
            {/* Minimal Inline Google G Graphic */}
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.97 1 12 1 7.35 1 3.39 3.68 1.48 7.57l3.87 3C6.27 7.54 8.89 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.45 12.3c0-.82-.07-1.6-.2-2.3H12v4.37h6.42c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.37-4.88 3.37-8.46z"/>
              <path fill="#FBBC05" d="M5.35 14.43c-.23-.68-.36-1.41-.36-2.16s.13-1.48.36-2.16L1.48 7.11C.53 9.02 0 11.15 0 13.43s.53 4.41 1.48 6.32l3.87-3.32z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-4.3 1.09-3.11 0-5.73-2.5-6.67-5.53L1.46 16.1C3.37 20.01 7.33 23 12 23z"/>
            </svg>
            Continue with Google
          </button>

          {/* Toggle Redirection Link Back to Login Screen */}
          <p className="text-center text-xs font-semibold text-gray-400 mt-3">
            Already have an active profile?{" "}
            <Link href="/login" className="text-indigo-900 font-bold hover:underline">
              Log In
            </Link>
          </p>
          
        </form>
      </div>
    </div>
  );
}

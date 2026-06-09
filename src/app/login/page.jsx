// app/login/page.jsx
"use client";
import { useState, Suspense } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const { loginWithEmail, loginWithGoogle, showToast } = useApp();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Captures target location for redirect behavior
  const from = searchParams.get("from") || "/";

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLocalError("");
    try {
      await loginWithEmail(email, password);
      showToast("Welcome back!");
      router.replace(from);
    } catch (err) {
      const msg = err.message.replace("Firebase: ", "");
      setLocalError(msg);
      showToast(msg, "error");
    }
  };

  const handleGoogleAuth = async () => {
    setLocalError("");
    try {
      await loginWithGoogle();
      showToast("Authenticated with Google successfully");
      router.replace("/");
    } catch (err) {
      const msg = err.message.replace("Firebase: ", "");
      setLocalError(msg);
      showToast(msg, "error");
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "60px auto", padding: "30px", background: "white", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#1F2937" }}>Login</h2>
      
      {localError && <div style={{ color: "#EF4444", background: "#FEE2E2", padding: "10px", borderRadius: "4px", marginBottom: "15px", fontSize: "14px", fontWeight: "60px" }}>{localError}</div>}

      <form onSubmit={handleEmailLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#3B82F6", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
      </form>

      <div style={{ margin: "20px 0", textAlign: "center", color: "#9CA3AF" }}>or</div>

      <button onClick={handleGoogleAuth} style={{ width: "100%", padding: "12px", backgroundColor: "#FFFFFF", color: "#1F2937", border: "1px solid #D1D5DB", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <img src="https://idfy.com" alt="Google" style={{ width: "18px" }} /> Continue with Google
      </button>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#4B5563" }}>
        New to SkillSphere? <Link href="/register" style={{ color: "#3B82F6", textDecoration: "none" }}>Register here</Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading Auth Config...</div>}>
      <LoginForm />
    </Suspense>
  );
}

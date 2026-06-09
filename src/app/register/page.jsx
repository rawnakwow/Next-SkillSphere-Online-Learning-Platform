// app/register/page.jsx
"use client";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");
  const { registerWithEmail, loginWithGoogle, showToast } = useApp();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLocalError("");
    try {
      const res = await registerWithEmail(email, password);
      await updateProfile(res.user, {
        displayName: name,
        photoURL: photoUrl
      });
      showToast("Registration completed! Please log in.");
      router.replace("/login");
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
    <div style={{ maxWidth: "420px", margin: "50px auto", padding: "30px", background: "white", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#1F2937" }}>Registration</h2>

      {localError && <div style={{ color: "#EF4444", background: "#FEE2E2", padding: "10px", borderRadius: "4px", marginBottom: "15px", fontSize: "14px" }}>{localError}</div>}

      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Photo URL Link</label>
          <input type="url" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#4B5563", fontWeight: "bold" }}>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px", border: "1px solid #D1D5DB", borderRadius: "4px", boxSizing: "border-box" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#10B981", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>Register</button>
      </form>

      <div style={{ margin: "20px 0", textAlign: "center", color: "#9CA3AF" }}>or</div>

      <button onClick={handleGoogleAuth} style={{ width: "100%", padding: "12px", backgroundColor: "#FFFFFF", color: "#1F2937", border: "1px solid #D1D5DB", borderRadius: "4px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <img src="https://idfy.com" alt="Google" style={{ width: "18px" }} /> Sign up with Google
      </button>

      <p style={{ textAlign: "center", marginTop: "20px", color: "#4B5563" }}>
        Already registered? <Link href="/login" style={{ color: "#3B82F6", textDecoration: "none" }}>Login here</Link>
      </p>
    </div>
  );
}

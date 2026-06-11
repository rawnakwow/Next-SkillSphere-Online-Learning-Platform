"use client";
import React, { createContext, useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const { data: session, isPending: sessionPending } = authClient.useSession();

  
  useEffect(() => {
    if (!sessionPending) {
      setUser(session?.user || null);
      setIsPending(false);
    }
  }, [session, sessionPending]);

  const logout = async () => {
    try {
      setIsPending(true);
      await authClient.signOut();
      setUser(null);
    } catch (err) {
      console.error("Logout runtime execution fault:", err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isPending, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

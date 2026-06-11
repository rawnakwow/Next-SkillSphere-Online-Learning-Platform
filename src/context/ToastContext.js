 "use client";
import React, { createContext } from "react";
import { Toaster } from "react-hot-toast";

export const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  return (
    <ToastContext.Provider value={null}>
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#ffffff",
            color: "#1e1b4b", 
            fontSize: "12px",
            fontWeight: "600",
            borderRadius: "12px",
            border: "1px solid #f3f4f6",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          },
          success: {
            iconTheme: {
              primary: "#312e81", 
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#dc2626", 
              secondary: "#ffffff",
            },
          },
        }}
      />
    </ToastContext.Provider>
  );
}

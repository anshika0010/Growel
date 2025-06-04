// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 z-50 backdrop-blur-md">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-red-200 h-16 w-16"></div>
      <style>{`
        .loader {
          border-top-color: #ed1212; /* purple-500 */
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

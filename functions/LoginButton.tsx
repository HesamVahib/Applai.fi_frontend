"use client";
import { useState } from "react";

export default function LoginButton() {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    const msg = "Login functionality coming soon! 🚀";
    setError(msg);
    window.alert(msg);
    setTimeout(() => setError(null), 4000);
  };

 return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white py-0 px-4 rounded-md"
      >
        Login / Sign Up
      </button>
    </div>
  );
}

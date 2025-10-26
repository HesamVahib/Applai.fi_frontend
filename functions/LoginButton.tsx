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
    <div className="flex flex-col items-center gap-2 ">
      <button
        onClick={handleLogin}
        className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white/80 py-1.5 px-5 rounded-lg transition-colors duration-200 relative -top-1.5 font-light"
      >
        Login/Signup
      </button>
    </div>
  );
}

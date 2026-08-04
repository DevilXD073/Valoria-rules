"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl transition hover:scale-110"
    >
      <ArrowUp size={22} />
    </button>
  );
}

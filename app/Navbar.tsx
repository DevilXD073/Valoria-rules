"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Globe, ShoppingCart, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      name: "Rules",
      href: "#rules",
      icon: <BookOpen size={18} />,
    },
    {
      name: "Website",
      href: "https://valoriasmp.fun",
      icon: <Globe size={18} />,
    },
    {
      name: "Store",
      href: "https://store.valoriasmp.fun",
      icon: <ShoppingCart size={18} />,
    },
    {
      name: "Discord",
      href: "https://discord.gg/YOURINVITE",
      icon: <MessageCircle size={18} />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg">
            V
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ValoriaSMP
            </h1>
            <p className="text-xs text-gray-400">
              Official Rulebook
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#09090b]/95 backdrop-blur-xl">
          <div className="flex flex-col p-4">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-blue-400"
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mb-10">

      <div className="glass flex items-center rounded-2xl border border-white/10 px-5 py-4">

        <Search className="mr-3 text-slate-400" size={20} />

        <input
          type="text"
          placeholder="Search rules..."
          className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

      </div>

    </div>
  );
}

"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
}

export default function SearchBar({
  query,
  setQuery,
}: SearchBarProps) {
  return (
    <div className="sticky top-20 z-30 mb-8">
      <div className="glass flex items-center rounded-2xl border border-white/10 bg-[#0f172a]/80 px-5 py-4 backdrop-blur-xl">

        <Search
          size={20}
          className="mr-3 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search rules, items, punishments..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

        {query && (
          <button
            onClick={() => setQuery("")}
            className="ml-3 rounded-lg p-1 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {query && (
        <p className="mt-2 px-2 text-sm text-slate-400">
          Searching for{" "}
          <span className="font-semibold text-blue-400">
            "{query}"
          </span>
        </p>
      )}
    </div>
  );
}

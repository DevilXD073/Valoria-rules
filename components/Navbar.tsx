"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#050816]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
            V
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              ValoriaSMP Rules
            </h1>

            <p className="text-xs text-slate-400">
              Official Season 3 Rulebook
            </p>
          </div>
        </a>

        <a
          href="https://discord.gg/YOURINVITE"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500"
        >
          Discord
        </a>
      </div>
    </header>
  );
}

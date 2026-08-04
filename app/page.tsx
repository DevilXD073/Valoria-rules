import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import RuleSection from "@/components/RuleSection";
import BackToTop from "@/components/BackToTop";
import { rules } from "@/data/rules";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Rulebook */}
      <section
        id="rules"
        className="container mx-auto max-w-7xl px-6 py-24"
      >
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            📜 Official Rulebook
          </span>

          <h2 className="mt-6 text-5xl font-black">
            ValoriaSMP{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Season 3
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Every player is expected to follow these rules. Failure to do so may
            result in warnings, temporary suspensions, or permanent bans.
          </p>
        </div>

        {/* Sidebar + Content */}
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div>
            <SearchBar />

            <div className="space-y-8">
              {rules.map((section) => (
                <RuleSection
                  key={section.id}
                  section={section}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                ValoriaSMP
              </span>
            </h3>

            <p className="mt-2 max-w-sm text-slate-400">
              Official Season 3 Rulebook.
              <br />
              Play Fair • Respect Everyone • Have Fun.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <a
              href="#rules"
              className="transition hover:text-blue-400"
            >
              Rules
            </a>

            <a
              href="https://valoriasmp.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              Website
            </a>

            <a
              href="https://store.valoriasmp.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              Store
            </a>

            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-400"
            >
              Discord
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ValoriaSMP. All Rights Reserved.
        </div>
      </footer>

      {/* Floating Back To Top */}
      <BackToTop />
    </main>
  );
}

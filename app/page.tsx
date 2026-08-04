import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RuleSection from "@/components/RuleSection";
import { rules } from "@/data/rules";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Rulebook */}
      <section
        id="rules"
        className="container mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            📜 Official Rulebook
          </span>

          <h2 className="mt-6 text-5xl font-black">
            ValoriaSMP{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Rules
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Please read these rules carefully before joining ValoriaSMP
            Season 3. Failure to follow them may result in warnings,
            temporary suspensions, or permanent bans.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {rules.map((section) => (
            <RuleSection
              key={section.id}
              section={section}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 text-center md:flex-row">
          <div>
            <h3 className="text-xl font-bold">
              ValoriaSMP
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Official Season 3 Rulebook
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <a
              href="https://valoriasmp.fun"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Website
            </a>

            <a
              href="https://store.valoriasmp.fun"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Store
            </a>

            <a
              href="https://discord.gg/YOURINVITE"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              Discord
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ValoriaSMP. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}

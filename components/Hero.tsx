import { BookOpen, ChevronDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 text-center">

        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur">
          <ShieldCheck size={16} />
          Official ValoriaSMP Season 3 Rulebook
        </div>

        {/* Title */}
        <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            ValoriaSMP
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Every player is expected to follow these rules. By joining
          ValoriaSMP Season 3, you agree to play fairly, respect others,
          and help create an enjoyable experience for everyone.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="#rules"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(59,130,246,.45)]"
          >
            <BookOpen size={20} />
            Read Rules
          </a>

          <a
            href="https://discord.gg/YOURINVITE"
            target="_blank"
            className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-blue-500 hover:bg-white/10"
          >
            Join Discord
          </a>

        </div>

        {/* Info Card */}
        <div className="mt-16 w-full max-w-3xl rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 backdrop-blur">

          <h3 className="mb-3 text-xl font-bold text-yellow-300">
            ⚠ Important Notice
          </h3>

          <p className="leading-7 text-slate-300">
            The rules listed here may change at any time to improve gameplay,
            fix exploits, or maintain fairness.
            <br />
            <br />
            <strong>Mace Rituals</strong> are currently under review and may be
            removed, adjusted, or added in future updates.
            Stay tuned in the{" "}
            <span className="font-semibold text-blue-400">
              #rules
            </span>{" "}
            channel on Discord for any official announcements.
          </p>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-slate-400">
          <ChevronDown size={34} />
        </div>

      </div>
    </section>
  );
}

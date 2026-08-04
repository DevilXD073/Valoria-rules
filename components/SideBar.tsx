"use client";

import { rules } from "@/data/rules";

export default function Sidebar() {
  return (
    <aside className="sticky top-24 hidden h-fit w-72 lg:block">
      <div className="glass rounded-3xl p-6">

        <h2 className="mb-5 text-xl font-bold text-white">
          📚 Navigation
        </h2>

        <nav className="space-y-2">
          {rules.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
            >
              <span>{section.icon}</span>
              {section.title}
            </a>
          ))}
        </nav>

      </div>
    </aside>
  );
}

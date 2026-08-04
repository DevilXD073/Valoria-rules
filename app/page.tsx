"use client";

import { useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import RuleSection from "@/components/RuleSection";
import BackToTop from "@/components/BackToTop";

import { ruleSections } from "@/data/rules";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    if (!search.trim()) return ruleSections;

    return ruleSections
      .map((section) => ({
        ...section,
        rules: section.rules.filter((rule) =>
          rule.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((section) => section.rules.length > 0);
  }, [search]);

  return (
    <>
      <Navbar />

      <Hero />

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-10">
        <Sidebar sections={ruleSections} />

        <main className="flex-1">
          <SearchBar value={search} onChange={setSearch} />

          <div className="mt-8 space-y-10">
            {filteredSections.map((section) => (
              <RuleSection
                key={section.id}
                id={section.id}
                title={section.title}
                rules={section.rules}
              />
            ))}
          </div>
        </main>
      </div>

      <BackToTop />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import { rules } from "@/data/rules";

export function useSearch() {
  const [query, setQuery] = useState("");

  const filteredRules = useMemo(() => {
    if (!query.trim()) return rules;

    const search = query.toLowerCase();

    return rules
      .map((section) => ({
        ...section,
        rules: section.rules?.filter((rule) =>
          rule.toLowerCase().includes(search)
        ),
        table: section.table?.filter(
          (row) =>
            row.item.toLowerCase().includes(search) ||
            row.value.toLowerCase().includes(search)
        ),
      }))
      .filter(
        (section) =>
          section.title.toLowerCase().includes(search) ||
          (section.rules && section.rules.length > 0) ||
          (section.table && section.table.length > 0)
      );
  }, [query]);

  return {
    query,
    setQuery,
    filteredRules,
  };
}

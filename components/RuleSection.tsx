import { RuleSection as RuleSectionType } from "@/data/rules";

interface Props {
  section: RuleSectionType;
}

export default function RuleSection({ section }: Props) {
  return (
    <section
      id={section.id}
      className="glass mb-8 rounded-3xl border border-white/10 p-8 shadow-lg"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-4xl">{section.icon}</span>

        <div>
          <h2 className="text-3xl font-bold text-white">
            {section.title}
          </h2>

          {section.description && (
            <p className="mt-1 text-slate-400">
              {section.description}
            </p>
          )}
        </div>
      </div>

      {/* Rules List */}
      {section.rules && (
        <ul className="space-y-3">
          {section.rules.map((rule, index) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <span className="mt-0.5 text-blue-400">✔</span>

              <span className="leading-7 text-slate-200">
                {rule}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Table */}
      {section.table && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full">
            <thead className="bg-blue-600/20">
              <tr>
                <th className="px-5 py-4 text-left font-semibold text-white">
                  Item
                </th>

                <th className="px-5 py-4 text-left font-semibold text-white">
                  Limit / Cooldown
                </th>
              </tr>
            </thead>

            <tbody>
              {section.table.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-white/10 hover:bg-white/5"
                >
                  <td className="px-5 py-4 text-slate-200">
                    {row.item}
                  </td>

                  <td className="px-5 py-4 font-medium text-blue-400">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Notice */}
      {section.notice && (
        <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
          <h3 className="mb-2 text-lg font-bold text-yellow-300">
            ⚠ Important Notice
          </h3>

          <p className="leading-7 text-yellow-100">
            {section.notice}
          </p>
        </div>
      )}
    </section>
  );
}

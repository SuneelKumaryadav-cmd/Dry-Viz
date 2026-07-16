import { useState } from "react";
import {
  Braces,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";

type VariableType = "int" | "string" | "dict" | "list" | "bool" | "none";
type VariableStatus = "updated" | "waiting" | "changed";
type VariableValue = number | string | boolean | null | Record<string, number> | number[];

interface VariableEntry {
  id: string;
  name: string;
  type: VariableType;
  scope: string;
  status: VariableStatus;
  lastUpdated: string;
  value: VariableValue;
}

const variableEntries: VariableEntry[] = [
  {
    id: "n",
    name: "n",
    type: "int",
    scope: "local",
    status: "updated",
    lastUpdated: "12s ago",
    value: 5,
  },
  {
    id: "function_name",
    name: "function_name",
    type: "string",
    scope: "local",
    status: "waiting",
    lastUpdated: "2m ago",
    value: "calculate_fibonacci",
  },
  {
    id: "memo",
    name: "memo",
    type: "dict",
    scope: "closure",
    status: "changed",
    lastUpdated: "just now",
    value: { 0: 0, 1: 1 },
  },
  {
    id: "fib_sequence",
    name: "fib_sequence",
    type: "list",
    scope: "global",
    status: "updated",
    lastUpdated: "4s ago",
    value: [0, 1, 1, 2, 3],
  },
  {
    id: "is_base_case",
    name: "is_base_case",
    type: "bool",
    scope: "local",
    status: "waiting",
    lastUpdated: "30s ago",
    value: false,
  },
  {
    id: "result",
    name: "result",
    type: "none",
    scope: "local",
    status: "waiting",
    lastUpdated: "1m ago",
    value: null,
  },
];

const typeStyles: Record<VariableType, string> = {
  int: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  string: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  dict: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  list: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  bool: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  none: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
};

const statusStyles: Record<VariableStatus, { label: string; dot: string; text: string; pulse: boolean }> = {
  updated: { label: "Updated", dot: "bg-emerald-400", text: "text-emerald-400", pulse: true },
  changed: { label: "Changed", dot: "bg-amber-400", text: "text-amber-400", pulse: true },
  waiting: { label: "Waiting", dot: "bg-zinc-600", text: "text-zinc-500", pulse: false },
};

function isContainerType(type: VariableType): boolean {
  return type === "dict" || type === "list";
}

function formatPreview(entry: VariableEntry): string {
  if (entry.type === "dict") {
    const count = Object.keys(entry.value as Record<string, number>).length;
    return `{ ${count} ${count === 1 ? "key" : "keys"} }`;
  }
  if (entry.type === "list") {
    const count = (entry.value as number[]).length;
    return `[ ${count} ${count === 1 ? "item" : "items"} ]`;
  }
  if (entry.type === "string") {
    return `"${entry.value as string}"`;
  }
  if (entry.type === "bool") {
    return entry.value ? "true" : "false";
  }
  if (entry.type === "none") {
    return "None";
  }
  return String(entry.value);
}

export function VariablesPanel() {
  const [query, setQuery] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredEntries = variableEntries.filter((entry) =>
    entry.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-md rounded-3xl border border-zinc-800/60 bg-zinc-950/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80">
            <Braces className="h-4 w-4 text-blue-400" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-zinc-100">
              Variables
            </h2>
            <p className="text-[11px] text-zinc-500">Live execution state</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11px] font-medium text-emerald-400">
              Live
            </span>
          </div>
          <span className="rounded-full border border-zinc-800/60 bg-zinc-900/60 px-2.5 py-1 text-[11px] text-zinc-500">
            {variableEntries.length} variables
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-600" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search variables"
            className="w-full rounded-xl border border-zinc-800/60 bg-zinc-900/40 py-2 pl-9 pr-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-700 focus:bg-zinc-900/70"
          />
        </div>
        <button
          type="button"
          aria-label="Filter variables"
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border border-zinc-800/60 bg-zinc-900/40 text-zinc-500 transition-colors hover:border-zinc-700 hover:text-zinc-300"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mt-5 flex max-h-[520px] flex-col gap-3 overflow-y-auto pr-1">
        {filteredEntries.length === 0 && (
          <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/20 px-4 py-8 text-center text-xs text-zinc-600">
            No variables match &ldquo;{query}&rdquo;
          </div>
        )}

        {filteredEntries.map((entry) => {
          const container = isContainerType(entry.type);
          const expanded = expandedIds.has(entry.id);
          const status = statusStyles[entry.status];

          return (
            <div
              key={entry.id}
              className="group rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-4 transition-all duration-300 hover:border-zinc-700/70 hover:bg-zinc-900/60 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-1.5 w-1.5 rounded-full ${status.dot} ${
                      status.pulse ? "animate-pulse" : ""
                    }`}
                  />
                  <span className="font-mono text-xs text-zinc-500">
                    {entry.name}
                  </span>
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${typeStyles[entry.type]}`}
                >
                  {entry.type}
                </span>
              </div>

              <div className="mt-3">
                {container ? (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(entry.id)}
                    className="flex w-full items-center justify-between gap-2 text-left"
                  >
                    <span className="truncate font-mono text-lg font-semibold text-zinc-50">
                      {formatPreview(entry)}
                    </span>
                    {expanded ? (
                      <ChevronDown className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                    ) : (
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-600" />
                    )}
                  </button>
                ) : (
                  <span className="block truncate font-mono text-lg font-semibold text-zinc-50">
                    {formatPreview(entry)}
                  </span>
                )}
              </div>

              {container && expanded && (
                <div className="mt-3 space-y-1.5 rounded-xl border border-zinc-800/50 bg-black/20 p-3">
                  {entry.type === "dict" &&
                    Object.entries(entry.value as Record<string, number>).map(
                      ([key, val]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between font-mono text-xs"
                        >
                          <span className="text-zinc-500">{key}</span>
                          <span className="text-zinc-300">{val}</span>
                        </div>
                      )
                    )}
                  {entry.type === "list" &&
                    (entry.value as number[]).map((val, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between font-mono text-xs"
                      >
                        <span className="text-zinc-500">[{index}]</span>
                        <span className="text-zinc-300">{val}</span>
                      </div>
                    ))}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between border-t border-zinc-800/40 pt-3">
                <span className="rounded-md bg-zinc-800/40 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
                  {entry.scope}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-medium ${status.text}`}>
                    {status.label}
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    {entry.lastUpdated}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

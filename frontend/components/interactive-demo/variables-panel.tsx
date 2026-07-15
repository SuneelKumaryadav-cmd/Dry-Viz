"use client";

import { Database } from "lucide-react";

export function VariablesPanel() {
  const variables = [
    { name: "n", value: "5", type: "int" },
    { name: "result", value: "8", type: "int" },
    { name: "temp", value: "13", type: "int" },
    { name: "left", value: "3", type: "int" },
    { name: "right", value: "5", type: "int" },
  ];

  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-[#0d0d12] border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <Database className="w-4 h-4 text-zinc-400" />
        <span className="text-zinc-300">Variables</span>
      </div>

      <div className="grid grid-cols-3 px-4 py-2 text-xs text-zinc-500 border-b border-white/10">
        <span>Name</span>
        <span>Value</span>
        <span>Type</span>
      </div>

      {variables.map((v) => (
        <div
          key={v.name}
          className="grid grid-cols-3 px-4 py-2 border-b border-white/5"
        >
          <span className="text-zinc-200">{v.name}</span>
          <span className="text-blue-400">{v.value}</span>
          <span className="text-zinc-500">{v.type}</span>
        </div>
      ))}
    </div>
  );
}
"use client";

import { memo, useMemo } from "react";
import { ChevronDown, Layers } from "lucide-react";
import type { ExecutionState } from "./demo-section";

interface CallStackProps {
  executionState: ExecutionState;
}

export const CallStack = memo(function CallStack({ executionState }: CallStackProps) {
  // Reverse the array so the newest frame (top of the stack) renders first
  const displayStack = useMemo(
    () => [...executionState.stack].reverse(),
    [executionState.stack]
  );

  return (
    <div className="w-full rounded-3xl border border-zinc-800/60 bg-zinc-950/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-2.5 border-b border-zinc-800/60 pb-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80">
          <Layers className="h-3.5 w-3.5 text-blue-400" strokeWidth={2} />
        </div>
        <h3 className="text-sm font-medium tracking-wide text-zinc-200">
  Runtime Stack
</h3>
      </div>

      <div className="flex flex-col">
        {displayStack.length === 0 ? (
          <div className="flex items-center justify-center py-6 animate-in fade-in duration-300">
            <span className="text-sm font-medium text-zinc-500">
              No active function calls
            </span>
          </div>
        ) : (
          displayStack.map((frame, index) => {
            // Since the array is reversed, the 0th item is the active/newest frame
            const isActive = index === 0;

            return (
              <div 
               key={`${frame}-${index}`}
                className="flex flex-col animate-in fade-in slide-in-from-top-2 duration-300 ease-out"
              >
                <div
                  className={
                    isActive
                      ? "rounded-xl border-l-2 border-blue-500 bg-blue-500/10 px-4 py-3 shadow-[0_0_24px_-4px_rgba(59,130,246,0.45)] transition-colors duration-300"
                      : "rounded-xl border-l-2 border-zinc-800 bg-zinc-900/30 px-4 py-3 transition-colors duration-300"
                  }
                >
                  <span
                    className={
                      isActive
                        ? "font-mono text-sm font-medium text-zinc-100 transition-colors duration-300"
                        : "font-mono text-sm text-zinc-600 transition-colors duration-300"
                    }
                  >
                    {frame}
                  </span>
                </div>

                {index < displayStack.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ChevronDown
                      className="h-3.5 w-3.5 text-zinc-700"
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
});
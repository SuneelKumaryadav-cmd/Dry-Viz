import { useState, useEffect, memo } from "react";
import { BrainCircuit } from "lucide-react";
import type { ExecutionState } from "./demo-section";

interface AIPanelProps {
  executionState: ExecutionState;
}

export const AIPanel = memo(function AIPanel({ executionState }: AIPanelProps) {
  const targetExplanation = executionState.explanation || "";
  const targetInsight = executionState.aiInsight ?? "";

  const [displayedExplanation, setDisplayedExplanation] = useState(targetExplanation);
  const [displayedInsight, setDisplayedInsight] = useState(targetInsight);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (
      targetExplanation === displayedExplanation &&
      targetInsight === displayedInsight
    ) {
      return;
    }

    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setDisplayedExplanation(targetExplanation);
      setDisplayedInsight(targetInsight);
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [targetExplanation, targetInsight, displayedExplanation, displayedInsight]);

  return (
    <div className="flex flex-col w-full h-full bg-[#0d0d12]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Panel Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#18181b] border-b border-white/5">
        <BrainCircuit className="w-4 h-4 text-zinc-400" />
        <span className="text-sm font-medium text-zinc-300">
          AI Explanation
        </span>
      </div>

      {/* Panel Body */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
          <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Current Execution
          </h4>

          <p 
            className={`text-sm text-zinc-300 leading-relaxed transition-opacity duration-300 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {displayedExplanation}
          </p>
        </div>

        <div className="flex flex-col gap-2 p-4 bg-white/[0.03] border border-white/5 rounded-xl">
          <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            AI Insight
          </h4>

          <p 
            className={`text-sm text-zinc-300 leading-relaxed transition-opacity duration-300 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {displayedInsight}
          </p>
        </div>
      </div>
    </div>
  );
});
"use client";

// React
import { useState, useEffect, useCallback } from "react";

// Icons
import { Play, RotateCcw, Pause, type LucideIcon } from "lucide-react";

// Components
import { CodeEditor } from "./code-editor";
import { VariablesPanel } from "./variables-panel";
import { AIPanel } from "./ai-panel";
import { CallStack } from "./call-stack";

// ============================================================================
// CONSTANTS & MOCKS
// ============================================================================
import {
  EXECUTION_SPEED_MS,
  INITIAL_STEP,
} from "./constants";
// Future: This will be replaced by the actual Parser output
import { MOCK_EXECUTION_STEPS } from "./mock-data";

const TOTAL_STEPS = MOCK_EXECUTION_STEPS.length;

// ============================================================================
// TYPES
// ============================================================================
import type { RunState } from "./types";
import type { ExecutionState } from "./types";

export interface ButtonConfig {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================
export function DemoSection() {
  // --- State ---
  const [runState, setRunState] = useState<RunState>("idle");
  const [stepIndex, setStepIndex] = useState<number>(INITIAL_STEP);

  // --- Derived State ---
  const executionState: ExecutionState = {
    stepIndex,
    runState,
    ...MOCK_EXECUTION_STEPS[Math.min(stepIndex, TOTAL_STEPS - 1)],
  };

  // --- Execution Controller (Recursive Timeout equivalent via useEffect) ---
  useEffect(() => {
    if (runState !== "running") return;

    const timeoutId = setTimeout(() => {
      setStepIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;
        
        if (nextIndex >= TOTAL_STEPS - 1) {
          setRunState("completed");
          return TOTAL_STEPS - 1;
        }
        
        return nextIndex;
      });
    }, EXECUTION_SPEED_MS);

    return () => clearTimeout(timeoutId);
  }, [runState, stepIndex]); // Dependency on stepIndex makes it natively recursive

  // --- Handlers ---
  const handleStart = useCallback(() => setRunState("running"), []);
  const handlePause = useCallback(() => setRunState("paused"), []);
  
  const handleRestart = useCallback(() => {
    setRunState("idle");
    setStepIndex(INITIAL_STEP);
  }, []);

  // --- Configuration ---
  const buttonConfigs: Record<RunState, ButtonConfig> = {
    idle: {
      icon: Play,
      label: "Run Visualization",
      onClick: handleStart,
    },
    running: {
      icon: Pause,
      label: "Pause Visualization",
      onClick: handlePause,
    },
    paused: {
      icon: Play,
      label: "Resume Visualization",
      onClick: handleStart,
    },
    completed: {
      icon: RotateCcw,
      label: "Restart Visualization",
      onClick: handleRestart,
    },
  };

  const currentButtonConfig = buttonConfigs[runState];
  const ButtonIcon = currentButtonConfig.icon;

  // --- Render ---
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Try Dry Viz
          </h2>

          <p className="text-lg text-zinc-400">
            Experience code execution before you even sign up.
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Left - Hero Code Editor (75%) */}
            <div className="lg:col-span-9 flex flex-col min-w-0 h-full">
              <CodeEditor executionState={executionState} />
            </div>

            {/* Right - Supporting Panels (25%) */}
            <div className="lg:col-span-3 flex flex-col gap-6 min-w-0">
              <VariablesPanel executionState={executionState} />
              <AIPanel executionState={executionState} />
              <CallStack executionState={executionState} />
            </div>

          </div>

          {/* Controller Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={currentButtonConfig.onClick}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold text-lg transition-colors"
            >
              <ButtonIcon className="w-5 h-5 fill-current" />
              {currentButtonConfig.label}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
"use client";
import { Play, BrainCircuit } from "lucide-react";
import { CodeEditor } from "./code-editor";
import { VariablesPanel } from "./variables-panel";
export function DemoSection() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Try Dry Viz
          </h2>
          <p className="text-lg text-zinc-400">
            Experience code execution before you even sign up.
          </p>
        </div>

        {/* Premium Glass Container */}
        <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-8">
          
          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px]">
            
           <CodeEditor />

           <VariablesPanel />
            {/* RIGHT: AI Explanation */}
            <div className="flex flex-col bg-[#0d0d12] border border-white/5 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/5">
                <BrainCircuit className="w-4 h-4 text-zinc-400" />
                <span className="text-sm font-medium text-zinc-300">AI Explanation</span>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-4 opacity-50">
                <div className="w-full h-20 rounded-xl bg-zinc-800/50 p-4 flex flex-col gap-2">
                  <div className="w-full h-3 rounded bg-zinc-700" />
                  <div className="w-5/6 h-3 rounded bg-zinc-700" />
                  <div className="w-4/6 h-3 rounded bg-zinc-700" />
                </div>
                <div className="w-full h-24 rounded-xl bg-zinc-800/50 p-4 flex flex-col gap-2">
                  <div className="w-full h-3 rounded bg-zinc-700" />
                  <div className="w-3/4 h-3 rounded bg-zinc-700" />
                  <div className="w-full h-3 rounded bg-zinc-700" />
                  <div className="w-2/5 h-3 rounded bg-zinc-700" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Action Area */}
          <div className="flex justify-center items-center mt-4">
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-semibold text-lg transition-colors cursor-pointer">
              <Play className="w-5 h-5 fill-current" />
              Run Visualization
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
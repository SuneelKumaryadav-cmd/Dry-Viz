"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Play, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Layers,
  Database
} from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[30rem] w-[50rem] rounded-full bg-white/[0.03] blur-[120px] mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Side: Copy & CTAs */}
          <motion.div 
            className="flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-md transition-colors hover:bg-white/10">
                <Sparkles className="h-4 w-4 text-white" />
                <span>AI Powered Code Visualization</span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="mt-8 text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl"
            >
              Master Code <br className="hidden sm:block" />
              <span className="text-zinc-400">Before You Run It.</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed"
            >
              Understand variables, memory, stack, heap, recursion and algorithms visually with AI-powered explanations.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button className="group w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95">
                Start Visualizing
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              
              <button className="group w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900/50 px-6 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-zinc-800 hover:border-white/20 active:scale-95">
                <Play className="h-4 w-4 fill-current opacity-80 transition-opacity group-hover:opacity-100" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 text-sm text-zinc-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-zinc-400" />
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-zinc-400" />
                <span>Supports Python, Java, C++, JavaScript and more.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 opacity-50 blur-lg" />
            
            {/* Window Container */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-2xl backdrop-blur-xl">
              
              {/* Top Bar */}
              <div className="flex h-10 items-center justify-between border-b border-white/10 bg-white/5 px-4">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600/80" />
                </div>
                <div className="text-xs font-medium text-zinc-500 font-mono">
                  main.py
                </div>
                <div className="w-10" /> {/* Spacer for centering */}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 h-[28rem]">
                
                {/* Code Editor (Left) */}
                <div className="col-span-3 border-r border-white/10 bg-[#0a0a0c] flex flex-col font-mono text-[13px] leading-6 overflow-hidden relative">
                  <div className="flex h-full">
                    {/* Line Numbers */}
                    <div className="w-12 flex-shrink-0 border-r border-white/5 bg-white/[0.02] py-4 text-right pr-3 text-zinc-600 select-none">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    {/* Code Content */}
                    <div className="flex-1 p-4 overflow-hidden whitespace-pre text-zinc-300">
                      <div><span className="text-purple-400">def</span> <span className="text-blue-400">fibonacci</span>(n):</div>
                      <div>    <span className="text-purple-400">if</span> n {"<="} <span className="text-orange-400">1</span>:</div>
                      <div>        <span className="text-purple-400">return</span> n</div>
                      <div>    <span className="text-purple-400">return</span> fibonacci(n-<span className="text-orange-400">1</span>) + fibonacci(n-<span className="text-orange-400">2</span>)</div>
                      <div className="h-6" />
                      <div><span className="text-zinc-500"># Start execution</span></div>
                      <div>result = fibonacci(<span className="text-orange-400">5</span>)</div>
                      <div><span className="text-blue-400">print</span>(result)</div>
                    </div>
                  </div>

                  {/* Active Line Highlight */}
                  <motion.div 
                    initial={{ top: "8rem" }}
                    animate={{ top: ["8rem", "4.5rem", "6rem", "8rem"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-6 bg-white/5 border-l-2 border-white pointer-events-none"
                  />
                </div>

                {/* Visualizer Panels (Right) */}
                <div className="col-span-2 hidden md:flex flex-col bg-zinc-950/50">
                  {/* Variables */}
                  <div className="flex-1 border-b border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Database className="h-3.5 w-3.5 text-zinc-400" />
                      <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Variables</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex justify-between items-center rounded bg-white/5 px-2 py-1.5 border border-white/5">
                        <span className="text-zinc-400">n</span>
                        <span className="text-orange-400">3</span>
                      </div>
                      <div className="flex justify-between items-center rounded bg-white/5 px-2 py-1.5 border border-white/5">
                        <span className="text-zinc-400">result</span>
                        <span className="text-zinc-600 italic">undefined</span>
                      </div>
                    </div>
                  </div>

                  {/* Call Stack */}
                  <div className="flex-1 p-4 relative">
                    <div className="flex items-center gap-2 mb-3">
                      <Layers className="h-3.5 w-3.5 text-zinc-400" />
                      <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Call Stack</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded bg-white/10 px-2 py-1.5 border border-white/10 text-blue-300"
                      >
                        fibonacci(n=3)
                      </motion.div>
                      <div className="rounded bg-white/5 px-2 py-1.5 text-zinc-500">
                        fibonacci(n=4)
                      </div>
                      <div className="rounded bg-white/5 px-2 py-1.5 text-zinc-500">
                        fibonacci(n=5)
                      </div>
                      <div className="rounded bg-white/5 px-2 py-1.5 text-zinc-500">
                        &lt;module&gt;
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-64 rounded-xl border border-white/20 bg-zinc-900/90 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/10 p-1.5">
                    <Cpu className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">AI Assistant</h4>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Notice how the recursive call to <span className="text-blue-300 font-mono">fibonacci(3)</span> is added to the stack before <span className="text-blue-300 font-mono">fibonacci(4)</span> can complete.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
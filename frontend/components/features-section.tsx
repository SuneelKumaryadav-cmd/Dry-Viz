"use client";

import { motion } from "framer-motion";
import { Play, Brain, Database, Layers, Activity, Code2 } from "lucide-react";

const FEATURES = [
  {
    title: "Step-by-Step Execution",
    description: "Watch your code execute line by line.",
    icon: <Play className="w-6 h-6 text-blue-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex flex-col justify-center gap-2 font-mono overflow-hidden">
        <div className="w-3/4 h-2.5 rounded-full bg-zinc-800/50" />
        <motion.div
          animate={{
            backgroundColor: ["rgba(39, 39, 42, 0.5)", "rgba(59, 130, 246, 0.4)", "rgba(39, 39, 42, 0.5)"],
            boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 12px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-2.5 rounded-full bg-zinc-800/50 flex items-center px-2"
        >
          <div className="w-1/2 h-1 rounded-full bg-blue-400/80" />
        </motion.div>
        <div className="w-5/6 h-2.5 rounded-full bg-zinc-800/50" />
        <div className="w-2/3 h-2.5 rounded-full bg-zinc-800/50" />
      </div>
    ),
  },
  {
    title: "AI Code Explanation",
    description: "Understand every execution step in simple language.",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 backdrop-blur-md rounded-2xl p-3 shadow-[0_0_20px_rgba(168,85,247,0.15)] flex gap-3 items-start w-5/6"
        >
          <div className="mt-1">
            <Brain className="w-4 h-4 text-purple-400" />
          </div>
          <div className="flex flex-col gap-2 w-full pt-1">
            <div className="w-full h-1.5 rounded-full bg-purple-400/40" />
            <div className="w-4/5 h-1.5 rounded-full bg-purple-400/20" />
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Memory Visualization",
    description: "Visualize Stack, Heap and Variables live.",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex items-center justify-center gap-4 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              height: i === 2 ? ["40px", "60px", "40px"] : "40px",
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className="w-12 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex flex-col justify-end p-1"
          >
            <div className="w-full h-1/3 bg-emerald-400/40 rounded-sm" />
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Call Stack Explorer",
    description: "Watch recursive calls expand and collapse.",
    icon: <Layers className="w-6 h-6 text-orange-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex flex-col-reverse items-center justify-center overflow-hidden">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              times: [0, 0.2, 0.8, 1],
            }}
            className="w-2/3 h-6 mb-[-4px] bg-orange-500/10 border border-orange-500/30 rounded-md backdrop-blur-sm z-10 shadow-lg"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Complexity Analysis",
    description: "View Time and Space Complexity instantly.",
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative px-6 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 overflow-hidden group"
        >
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent skew-x-12"
          />
          <span className="font-mono font-bold text-rose-300 tracking-wider">
            O(N log N)
          </span>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Multi Language Support",
    description: "Python, Java, C++, JavaScript and more.",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    preview: (
      <div className="relative h-32 w-full bg-[#0d0d12] rounded-xl border border-white/5 p-4 flex flex-wrap items-center justify-center gap-2 overflow-hidden">
        {["JS", "PY", "C++", "JAVA"].map((lang, idx) => (
          <motion.div
            key={lang}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.3,
              ease: "easeInOut",
            }}
            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold text-cyan-300"
          >
            {lang}
          </motion.div>
        ))}
      </div>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Everything You Need To Understand Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            Dry Viz combines visualization, AI and execution tracing into one
            powerful learning platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 flex flex-col gap-6">
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-zinc-400">
                  {feature.description}
                </p>

                <div className="mt-auto pt-4">
                  {feature.preview}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
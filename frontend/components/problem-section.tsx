"use client";

import { motion, type Variants } from "framer-motion";
import {
  FastForward,
  EyeOff,
  Waypoints,
  Layers,
  Bug,
  BrainCircuit,
} from "lucide-react";

const PROBLEMS = [
  {
    title: "Variables change too fast",
    description:
      "Mentally tracking state across complex loops, conditions, and function calls quickly becomes overwhelming.",
    icon: FastForward,
  },
  {
    title: "Memory is invisible",
    description:
      "You can't see how objects are allocated, linked by references, or garbage collected in real-time.",
    icon: EyeOff,
  },
  {
    title: "Recursion is confusing",
    description:
      "Visualizing the call stack folding and unfolding in your head leads to endless logic errors and frustration.",
    icon: Waypoints,
  },
  {
    title: "Stack & Heap are difficult to understand",
    description:
      "Abstract memory concepts remain purely abstract when you can't observe the physical layout of your data.",
    icon: Layers,
  },
  {
    title: "Debugging wastes hours",
    description:
      "Relying on endless console.log statements and clunky debuggers drains your productivity and focus.",
    icon: Bug,
  },
  {
    title: "AI explanations lack visualization",
    description:
      "Standard text-based AI models can explain code syntax, but they can't visually show you how it executes step-by-step.",
    icon: BrainCircuit,
  },
];

export function ProblemSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Developers Struggle
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Programming isn't difficult because of syntax. It's difficult because
            you can't see what's happening inside your code.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              >
                {/* Subtle top gradient on hover */}
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900/50 border border-white/10 text-zinc-400 shadow-inner group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Centered Closing Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <span className="text-lg sm:text-xl font-medium tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Dry Viz makes every line of code visible.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, type Variants } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Layers, 
  Lightbulb 
} from "lucide-react";

const STEPS = [
  {
    title: "Paste Your Code",
    description: "Paste Python, Java, C++, JavaScript or other supported languages.",
    icon: Code2,
  },
  {
    title: "AI Analyzes",
    description: "Our AI understands your code structure and execution flow.",
    icon: Cpu,
  },
  {
    title: "Visualize Execution",
    description: "Watch variables, memory, stack, heap and algorithms update live.",
    icon: Layers,
  },
  {
    title: "Understand Everything",
    description: "Receive simple AI explanations for every execution step.",
    icon: Lightbulb,
  },
];

export function HowItWorks() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950">
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
            How Dry Viz Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From code to complete understanding in just a few steps.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 mx-auto max-w-3xl relative">
          
          {/* Connecting Vertical Line */}
          <div className="absolute left-[27px] sm:left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-1/2 md:-ml-px md:top-8 md:bottom-8" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 sm:space-y-16"
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Desktop Layout Pattern (Alternating) */}
                  <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end pr-16' : 'justify-start pl-16 order-last'}`}>
                    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] w-full max-w-sm text-left">
                      <h3 className="text-xl font-semibold text-white">
                        <span className="text-zinc-500 mr-2 font-mono text-sm">0{index + 1}</span>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node (Centered on Desktop, Left on Mobile) */}
                  <div className="absolute left-0 md:relative md:left-auto md:mx-auto flex h-14 w-14 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full border-[4px] border-zinc-950 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 transition-transform duration-300 group-hover:scale-110">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-inner">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-300 transition-colors group-hover:text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Mobile Layout Pattern */}
                  <div className="ml-20 sm:ml-28 md:hidden w-full pt-1 sm:pt-3">
                    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-white/20">
                      <h3 className="text-lg font-semibold text-white">
                        <span className="text-zinc-500 mr-2 font-mono text-xs">0{index + 1}</span>
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
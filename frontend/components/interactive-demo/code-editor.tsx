import React from "react";

export function CodeEditor() {
  const codeLines = [
    {
      num: 1,
      code: (
        <>
          <span className="text-pink-400">def</span>{" "}
          <span className="text-blue-400">calculate_fibonacci</span>(n):
        </>
      ),
    },
    {
      num: 2,
      code: (
        <>
          {"    "}
          <span className="text-zinc-500 italic">
            # Returns the nth Fibonacci number
          </span>
        </>
      ),
    },
    {
      num: 3,
      code: (
        <>
          {"    "}
          <span className="text-pink-400">if</span> n {"<="}{" "}
          <span className="text-orange-400">1</span>:
        </>
      ),
    },
    {
      num: 4,
      code: (
        <>
          {"        "}
          <span className="text-pink-400">return</span> n
        </>
      ),
    },
    {
      num: 5,
      code: (
        <>
          {"    "}
          <span className="text-pink-400">return</span>{" "}
          <span className="text-blue-400">calculate_fibonacci</span>(n -{" "}
          <span className="text-orange-400">1</span>) +{" "}
          <span className="text-blue-400">calculate_fibonacci</span>(n -{" "}
          <span className="text-orange-400">2</span>)
        </>
      ),
      active: true,
    },
    {
      num: 6,
      code: "",
    },
    {
      num: 7,
      code: (
        <>
          result = <span className="text-blue-400">calculate_fibonacci</span>(
          <span className="text-orange-400">5</span>)
        </>
      ),
    },
    {
      num: 8,
      code: (
        <>
          <span className="text-blue-400">print</span>(
          <span className="text-green-400">f"The result is: </span>
          <span className="text-blue-300">{"{"}result{"}"}</span>
          <span className="text-green-400">"</span>)
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-[#0d0d12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm sm:text-base">
      {/* Editor Header / Title Bar */}
      <div className="flex items-end bg-[#18181b] border-b border-white/5 pt-3 px-4">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2 mb-3 mr-6">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
        </div>

        {/* File Tab */}
        <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d12] border-t-2 border-t-blue-500 border-l border-r border-white/5 rounded-t-md text-zinc-300 text-xs sm:text-sm shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
          <span className="text-blue-400">
            {/* Minimal Python-like logo representation */}
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.686 2 6 4.686 6 8v1h12V8c0-3.314-2.686-6-6-6zM10 5a1 1 0 110 2 1 1 0 010-2z" />
              <path d="M12 22c3.314 0 6-2.686 6-6v-1H6v1c0 3.314 2.686 6 6 6zm2-3a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </span>
          main.py
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 py-4 overflow-x-auto">
        <div className="min-w-max flex flex-col">
          {codeLines.map((line) => (
            <div
              key={line.num}
              className={`flex w-full group ${
                line.active
                  ? "bg-blue-500/[0.15] border-l-2 border-blue-500"
                  : "border-l-2 border-transparent hover:bg-white/[0.02]"
              }`}
            >
              {/* Line Number */}
              <div
                className={`w-12 sm:w-16 flex-shrink-0 text-right pr-4 select-none ${
                  line.active ? "text-blue-400 font-medium" : "text-zinc-600"
                }`}
              >
                {line.num}
              </div>

              {/* Code */}
              <div
                className={`flex-1 whitespace-pre pr-4 ${
                  line.active ? "text-zinc-100" : "text-zinc-300"
                }`}
              >
                {line.code || " "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
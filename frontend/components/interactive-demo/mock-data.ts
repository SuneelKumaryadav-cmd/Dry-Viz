import type { ExecutionStep } from "./types";

/* ============================================================================
 * Mock Execution Data
 *
 * Temporary execution steps used by the landing page demo.
 * These will be replaced by the real execution engine output.
 * ========================================================================== */

export const MOCK_EXECUTION_STEPS: ExecutionStep[] = [
  {
    currentLine: 1,
    variables: {},
    stack: [],
    explanation: "Program execution has started.",
    aiInsight:
      "The runtime is preparing the execution environment before processing the first statement.",
  },

  {
    currentLine: 2,
    variables: {
      a: 10,
    },
    stack: ["main()"],
    explanation: "Variable 'a' has been initialized with the value 10.",
    aiInsight:
      "Memory has been allocated for variable 'a', making it available for future operations.",
  },

  {
    currentLine: 3,
    variables: {
      a: 10,
      b: 20,
    },
    stack: ["main()"],
    explanation: "Variable 'b' has been initialized with the value 20.",
    aiInsight:
      "Both operands are now available, allowing arithmetic operations to be performed safely.",
  },

  {
    currentLine: 4,
    variables: {
      a: 10,
      b: 20,
      sum: 30,
    },
    stack: ["main()", "add()"],
    explanation: "The add() function has been invoked to calculate the result.",
    aiInsight:
      "A new function call creates a runtime stack frame, isolating local execution from the caller.",
  },

  {
    currentLine: 5,
    variables: {
      a: 10,
      b: 20,
      sum: 30,
    },
    stack: [],
    explanation: "Program execution completed successfully.",
    aiInsight:
      "The function has returned its result, all stack frames have been removed, and the program has terminated normally.",
  },
];
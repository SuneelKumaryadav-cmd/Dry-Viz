export type RunState =
  | "idle"
  | "running"
  | "paused"
  | "completed";

export interface ExecutionStep {
  currentLine: number;
  variables: Record<string, unknown>;
  stack: string[];
  explanation: string;
  aiInsight?: string;
}

export interface ExecutionState extends ExecutionStep {
  stepIndex: number;
  runState: RunState;
}

export interface ButtonConfig {
  label: string;
  onClick: () => void;
}
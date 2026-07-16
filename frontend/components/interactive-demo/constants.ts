import type { RunState } from "./types";

export const EXECUTION_SPEED_MS = 1000;

export const INITIAL_STEP = 0;

export const BUTTON_LABELS: Record<RunState, string> = {
  idle: "Run Visualization",
  running: "Pause Visualization",
  paused: "Resume Visualization",
  completed: "Restart Visualization",
};

export const DEMO_FILE_NAME = "main.py";

export const DEMO_TITLE = "Try Dry Viz";

export const DEMO_SUBTITLE =
  "Experience code execution before you even sign up.";

export const EDITOR_LANGUAGE = "Python";
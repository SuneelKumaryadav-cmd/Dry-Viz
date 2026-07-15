# Chapter 6: Functional Requirements

## 6.1 Introduction

This document defines the functional capabilities of Dry Viz — what the system must do. It's intended as a foundation for UI design and backend development. For it to also serve as a foundation for **testing** (as claimed below in the original scope), the individual requirements need boundary conditions, not just verb lists — see the worked example in 6.4.4 (Parser Engine) for what that looks like versus what's written elsewhere in this chapter.

---

## 6.2 Open Prioritization Question

Compare Engine (6.4.9) and Replay Engine (6.4.10) are both marked **P1** below. But Chapter 1's Core Philosophy, Chapter 2's Product Principles ("every visualization is interactive by default — not an optional extra"), and Chapter 3's Problem 9 all treat comparison and replay as core to what makes Dry Viz different, not nice-to-haves. Either:

- these should be **P0**, matching how they're pitched elsewhere, or
- V1 genuinely ships without full compare/replay, in which case say so plainly rather than let the vision chapters imply otherwise.

Pick one before this goes in front of a reviewer who's read the earlier chapters too.

---

## 6.3 Core Functional Modules

Authentication, Dashboard, Code Editor, Parser Engine, Execution Engine, Visualization Engine, Complexity Engine, AI Engine, Compare Engine, Replay Engine, History, Projects, Settings.

---

## 6.4 Module Requirements

### 6.4.1 Authentication

**Requirements:** Register, login, logout, reset password, verify email.
**Future:** Google login, GitHub login.
**Priority:** P1

### 6.4.2 Dashboard

**Requirements:** Display recent projects, continue-learning state, recent visualizations, statistics, quick actions.
**Priority:** P1

### 6.4.3 Code Editor

**Requirements:** Write, paste, edit, and delete code; select programming language; change theme; import sample code; run visualization.
**Supported languages:** Python, Java, C, C++, JavaScript.
**Priority:** P0

### 6.4.4 Parser Engine

**Requirements:** Detect programming language, parse source code, generate an abstract syntax tree, validate syntax, identify functions/loops/variables, detect recursion, detect data structures.
**Priority:** P0

**Worked example — turning this into a testable requirement:**
"Detect recursion" as written can't be graded pass/fail. A testable version: *"Given a function that calls itself directly or through another function in the same file, the parser shall flag it as recursive. Mutual recursion across files is out of scope for V1."* That single sentence defines what "detect recursion" actually covers and what it doesn't — worth doing for each bullet above before this becomes a QA checklist rather than a feature list.

### 6.4.5 Execution Engine

**Requirements:** Execute code step-by-step, maintain execution state, track function calls, track variable updates, track memory allocation, track loop iterations.
**Priority:** P0

### 6.4.6 Visualization Engine

**Requirements:** Visualize variables, arrays, strings, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, sorting, and searching.
**Priority:** P0

### 6.4.7 Complexity Engine

**Requirements:** Calculate time complexity, calculate space complexity, display operation count, show growth graph, explain Big-O.
**Priority:** P0

*(See 6.2's sibling question: is "explain Big-O" here rule-based/deterministic, or handed off to the AI Engine's natural-language layer? If the latter, the explanation can be wrong in a way a computed number can't — worth deciding which engine owns it.)*

### 6.4.8 AI Engine

**Requirements:** Explain code, explain errors, explain algorithms, suggest improvements, detect patterns, recommend better approaches.
**Priority:** P0

### 6.4.9 Compare Engine

**Requirements:** Compare brute-force, better, and optimal approaches on execution time, memory usage, time complexity, and space complexity.
**Priority:** P1 *(see 6.2)*

### 6.4.10 Replay Engine

**Requirements:** Replay execution, pause, resume, jump to any step, control playback speed.
**Priority:** P1 *(see 6.2)*

### 6.4.11 History

**Requirements:** Save previous visualizations, executions, and AI explanations.
**Priority:** P2

### 6.4.12 Projects

**Requirements:** Create, save, rename, delete, export, and import projects.
**Priority:** P2

### 6.4.13 Settings

**Requirements:** Customize theme, font size, language, keyboard shortcuts, AI preferences.
**Priority:** P2

---

## 6.5 Non-Functional Requirements

Adjectives like "responsive" and "quickly" aren't requirements until they have a number attached — a developer can't build against "smooth." Proposed targets below; confirm or adjust rather than treating them as settled:

| Requirement (as written) | Proposed measurable version |
|---|---|
| Be responsive | Usable on viewports down to 768px width; no horizontal scroll on desktop breakpoints |
| Support modern browsers | Latest two versions of Chrome, Firefox, Safari, and Edge |
| Load visualizations quickly | Visualization renders within 2 seconds for programs under 200 lines |
| Provide smooth animations | Animations run at 60fps on the target browser set above |
| Maintain accurate execution | Execution trace matches the actual language runtime's output and variable states, verified against a test-case suite |
| Handle invalid code gracefully | Syntax errors return a specific line/column and message rather than a crash; infinite loops are caught by a timeout (define the threshold) |

---

## 6.6 Success Criteria

Rewritten as pass/fail conditions rather than a restated feature list:

- A user can paste valid code in any V1-supported language and receive a step-by-step execution trace.
- Time and space complexity are calculated and match expected values for a defined test-case suite covering common algorithms.
- The AI Engine produces an explanation for at least [define %] of test-case programs without factual errors against the actual trace.
- A user can replay any completed execution from any step.
- A user can compare brute-force, better, and optimal versions of a solved problem on at least the four metrics in 6.4.9.
- A user can save a project and reload it with full execution history intact.

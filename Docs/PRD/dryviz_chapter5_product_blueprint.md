# Chapter 5: Product Blueprint

## 5.1 Overview

The Product Blueprint defines the structure of the Dry Viz application — every page, module, screen, and navigation path a user will interact with. It's the foundation for UI/UX design and feature implementation. Backend architecture and API design need more than Section 5.6 currently provides (see note there) before this can serve as their foundation too.

---

## 5.2 Open Architecture Question

Before this blueprint is build-ready, one contradiction needs a decision:

- **Section 5.4.4 (Code Editor)** treats Visualize and AI as *buttons inside the editor* — implying one continuous session: paste code, then trigger panels within it.
- **Section 5.5 (Navigation)** and **Section 5.3 (Sitemap)** treat Visualizations, Compare, and AI Tutor as *independent top-level destinations*, reachable directly from the sidebar at any time — the same way Dashboard or History are.

These are two different systems. Pick one: (a) a single workspace where Visualization/Complexity/Compare/AI are tabs or panels tied to an active code session, or (b) separate routes, in which case define what each shows with no active session (empty state? last session? a picker?). This decision affects routing, state management, and API shape — worth settling before backend work starts.

---

## 5.3 Product & User Flow

Landing Page → Authentication → Dashboard → Code Editor → Visualize → Complexity Analysis → AI Explanation → Replay → Save Project → Share → History

---

## 5.4 Application Sitemap

```
Dry Viz
├── Landing Page
├── Authentication
│   ├── Login
│   ├── Register
│   ├── Forgot Password
│   └── Email Verification
├── Dashboard
├── Code Editor
├── Visualization
├── Complexity
├── Compare
├── AI Tutor
├── History
├── Projects
├── Profile
└── Settings
```

---

## 5.5 Page & Module Specifications

### 5.5.1 Landing Page

**Purpose:** Introduce Dry Viz and communicate its value before signup.
**Sections:** Hero, Features, Supported Languages, How It Works, Product Demo, Testimonials, FAQ, Pricing (future), Footer.
**Primary actions:** Get Started, Try Demo, Login.

### 5.5.2 Authentication

**Purpose:** Let users securely access Dry Viz.
**Screens:** Login, Register, Forgot Password, Email Verification.
**Future:** Google, GitHub, and Microsoft login.

### 5.5.3 Dashboard

**Purpose:** Main workspace after login.
**Widgets:** Continue Learning, Recent Projects, Recent Visualizations, Statistics, Learning Progress, Quick Actions.
**Navigation:** Open Editor, View History, Open Saved Project.

### 5.5.4 Code Editor

**Purpose:** Write or paste code to run through Dry Viz.
**Components:** Monaco Editor, Language Selector, Theme Switcher, Run Button, Visualize Button, AI Button, Reset Button.
**Supported languages (V1):** Python, Java, C, C++, JavaScript.
**Future:** Rust, Go, Kotlin.

### 5.5.5 Visualization

**Purpose:** Display interactive code execution.
**Components:** Timeline, Variable Tracker, Memory Viewer, Execution Flow, Current-Line Highlight, Stack Visualization, Heap Visualization, Function Calls, Loop Animation, Conditional Flow.
**Controls:** Play, Pause, Next Step, Previous Step, Speed Control, Restart.

### 5.5.6 Complexity Analysis

**Purpose:** Explain algorithm efficiency.
**Modules:** Time Complexity, Space Complexity, Operation Counter, Complexity Graph, Big-O Explanation, Growth Visualization.

### 5.5.7 Compare Mode

**Purpose:** Compare multiple solutions side by side.
**Views:** Brute Force, Better, Optimal.
**Compared on:** Execution time, memory usage, operation count, complexity.

### 5.5.8 AI Tutor

**Purpose:** Explain programming concepts in context.
**Capabilities:** Explain code, explain errors, suggest improvements, detect patterns, recommend better solutions, answer questions.
**Future:** Voice tutor, interactive mentor.

### 5.5.9 History

**Purpose:** Store previous work.
**Includes:** Saved visualizations, shared links, recent sessions, replay history.

### 5.5.10 Projects

**Purpose:** Manage saved coding projects.
**Features:** Create, rename, delete, duplicate, export, import.

### 5.5.11 Profile

**Purpose:** Manage user profile.
**Sections:** Personal information, learning statistics, achievements.
**Future:** Badges, streaks.

### 5.5.12 Settings

**Purpose:** Customize the application.
**Options:** Theme, language, editor font size, keyboard shortcuts, AI preferences, notification settings.

---

## 5.6 Navigation Structure

**Top navigation:** Logo, Dashboard, Editor, History, Projects, Settings, Profile.
**Sidebar:** Dashboard, Editor, Visualizations, Compare, AI Tutor, History, Settings.

*(Resolves once 5.2 is decided — a session-scoped model likely drops Visualizations/Compare/AI Tutor from persistent sidebar nav; a routed model keeps them.)*

---

## 5.7 Core Product Modules (Technical Architecture)

*One-line purposes below are inferred from context elsewhere in this document — confirm or correct rather than treating as settled.*

- **Frontend** — renders the Editor, Visualization, and Dashboard UI.
- **Backend** — API layer connecting the frontend to the engines below.
- **Database** — stores users, projects, saved visualizations, and history.
- **Parser Engine** — converts submitted source code into an execution trace.
- **Execution Engine** — runs the traced steps, producing the state-by-state record the Visualization Engine renders.
- **Visualization Engine** — turns the execution trace into the animated timeline, memory views, and algorithm animations.
- **Complexity Engine** — derives time and space complexity from the execution trace.
- **AI Engine** — generates natural-language explanations from the trace and code.

This section — not Section 5.1's blanket claim — is what "foundation for API development and backend architecture" actually needs to rest on. It's still thin relative to that claim; a real architecture chapter would need data models and API contracts, not just module names.

---

## 5.8 Future Expansion

Classroom Mode, Teacher Dashboard, Student Analytics, Team Collaboration, Plugin Marketplace, API Access, Mobile Application, Desktop Application.

*Reconcile with Chapter 1's roadmap — API Access, Mobile Application, and Desktop Application don't appear there. Keep one canonical future-roadmap list when the full PRD is assembled, not three.*

---

## 5.9 Blueprint Goal

Every screen, feature, and workflow inside Dry Viz should serve one objective: help users understand programming visually.

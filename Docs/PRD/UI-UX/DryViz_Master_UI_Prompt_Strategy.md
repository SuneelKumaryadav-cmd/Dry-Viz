# DryViz — Master UI Prompt Strategy

## 🎯 The Core Idea

Instead of writing 8 separate UI/UX documents for every screen, we create **ONE single Master UI Prompt** (~400–600 lines) that Claude can reuse across every screen to generate the entire frontend — with a consistent design language throughout.

Founder mindset: don't over-document, prompt smart and let Claude build directly.

> ⭐ **MOST IMPORTANT RULE**
> Don't ask Claude *"Design a Landing Page."*
> Ask: *"You are the Lead Product Designer at Linear, Cursor, and Vercel. Design a premium SaaS landing page for DryViz..."*
>
> The framing makes a huge difference in output quality.

---

## 🤝 Why This Approach

DryViz is a **visual product**. Time spent crafting one exceptional, reusable master prompt is worth more than time spent writing lots of UI documentation.

The Master Prompt should define:
- Brand identity
- Color palette
- Typography
- Design philosophy
- Every page
- Every layout
- Every animation
- Every interaction
- Responsive behavior
- Component rules

This is a better use of time for a solo founder — one strong prompt, reused everywhere, keeps the whole app visually consistent.

---

## 📄 Screen-by-Screen Breakdown

### 1️⃣ Landing Page

**Goal:** First impression = "Wow." Modern SaaS. Premium developer tool.

**Style:**
- Dark theme
- Animated background
- Glassmorphism

**Sections:**
- Hero Section
- Product Demo Video
- Features
- Supported Languages
- How It Works
- Testimonials
- FAQ
- CTA
- Footer

---

### 2️⃣ Dashboard

**Goal:** After login, should feel like **Cursor + Linear**.

**Includes:**
- Welcome Card
- Continue Learning
- Recent Projects
- Recent Visualizations
- Learning Statistics
- Weekly Progress
- Quick Actions
- Recent Activity
- Left Sidebar
- Top Navbar

---

### 3️⃣ Code Editor ⭐ (The Heart of the Product)

**Layout:**
```
------------------------------------------------------
Navbar
------------------------------------------------------
Sidebar
   ↓
Code Editor
   ↓
AI Panel
   ↓
Bottom Panel
   Variables | Memory | Timeline | Complexity
------------------------------------------------------
```

**Includes:**
- Monaco Editor
- Language Selector
- Theme Switcher
- Run
- Visualize
- AI Explain
- Save Project
- Share
- Full Screen

---

### 4️⃣ Visualization ⭐⭐⭐ (Most Important Page — Should Feel Futuristic)

**Layout:**
```
--------------------------------------------------
Top Toolbar
--------------------------------------------------
Execution Timeline
   ↓
Visualization Canvas
   ↓
Variables
   ↓
Memory
   ↓
Call Stack
   ↓
AI Explanation
   ↓
Replay Controls
--------------------------------------------------
```

**Needs:**
- Timeline
- Variable Tracker
- Memory Viewer
- Call Stack
- Heap
- Animation Controls (Speed, Next, Previous, Replay)

---

### 5️⃣ Compare (Split Screen)

**Layout:**
```
Brute Force
   ↓
Optimal
```

**Shows:**
- Execution
- Complexity
- Operations
- Memory
- Runtime

---

### 6️⃣ Settings

**Needs:**
- Appearance
- Themes
- Editor
- Keyboard
- AI
- Account
- Notifications

---

### 7️⃣ Mobile Version

**Version 1: Read Only.** No editor.

**Only includes:**
- Replay
- AI Explanation
- Dashboard

---

## 🚀 Next Step

Build the single Master UI Prompt covering brand identity, color system, typography, design philosophy, and all 7 screens above — written in the "Lead Product Designer at Linear/Cursor/Vercel" persona style — so Claude generates the entire frontend with one consistent design language.

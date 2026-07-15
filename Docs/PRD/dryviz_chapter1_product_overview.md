# Chapter 1: Product Overview

## 1.1 Product Name & Tagline

**Dry Viz**

> Master Code Before You Run It.

Version 1.0 | Status: Draft | Author: Sky (Founder) | Last Updated: July 12, 2026

---

## 1.2 Executive Summary

Dry Viz is an AI-powered visual coding platform that helps students understand how code actually runs, not just what it outputs. Instead of executing a program and returning a result, Dry Viz breaks execution into individual steps and visualizes how every line affects variables, memory, data structures, function calls, recursion, and algorithms — combining execution, visualization, AI explanation, and complexity analysis into a single workflow.

---

## 1.3 Vision

To become a leading platform for understanding programming through visualization — where students watch code execute instead of memorizing what it's supposed to do. Every algorithm, data structure, function call, recursive step, and variable change should be observable, not inferred.

---

## 1.4 Mission

To simplify programming education by turning source code into a step-by-step visual learning experience — helping students learn faster by watching execution unfold instead of reading static explanations.

---

## 1.5 Problem Statement

Programming students consistently run into the same obstacles:

1. **Memorization over understanding** — Students memorize code patterns without understanding what happens when the code runs.
2. **Invisible state changes** — Most learners have no way to see how variables change during execution.
3. **Abstract algorithms** — DSA is hard to learn because students can't "see" how an algorithm behaves step by step.
4. **Complexity without intuition** — Big-O gets memorized, not understood; students can't explain *why* an algorithm has a given time or space complexity.
5. **Tool fragmentation** — Learning is split across LeetCode, HackerRank, GeeksforGeeks, ChatGPT, YouTube, and Visualgo, which breaks concentration and slows progress.
6. **Practice over comprehension** — Most existing platforms optimize for solving problems, not for understanding how the underlying code executes.

---

## 1.6 Solution

Dry Viz lets a student paste code from any supported source and immediately see how it behaves. The platform:

- Parses the source code
- Executes it step by step
- Tracks variable state
- Visualizes memory
- Animates algorithm behavior
- Explains logic using AI
- Calculates time and space complexity
- Compares brute-force vs. optimal approaches
- Allows replay of any execution

The goal isn't just to run code — it's to make the run legible.

---

## 1.7 Core Philosophy

1. **Visual First** — See execution before reading about it.
2. **Learning First** — Optimize for understanding, not just for solving.
3. **Every Line Matters** — Every statement gets a visual representation.
4. **Transparency** — No hidden steps: every variable change, memory allocation, loop iteration, and recursive call is visible.
5. **Comparison Improves Learning** — Show brute-force, better, and optimal side by side instead of only the final answer.
6. **Complexity Is Visual** — Time and space complexity are demonstrated, not just stated.

---

## 1.8 Target Audience

| Tier | Audience |
|---|---|
| Primary | College students, DSA learners, placement-prep students, coding-interview candidates |
| Secondary | Coding clubs, professors, bootcamps, universities |
| Future | Software engineers, companies, enterprise training teams |

---

## 1.9 Product Positioning

**Dry Viz is not:** an online judge, a LeetCode or HackerRank clone, an IDE, or a code editor.

**Dry Viz is:** an AI visual learning platform, a code execution visualizer, an interactive DSA learning tool, and a programming education companion.

---

## 1.10 Competitive Landscape

| Platform | Core focus | Gap Dry Viz addresses |
|---|---|---|
| LeetCode / HackerRank | Problem-solving, judging | No execution visualization |
| GeeksforGeeks | Static tutorials/articles | No interactivity or step tracing |
| Visualgo | Canned algorithm animations | Doesn't run the student's own code |
| ChatGPT | Text explanation on request | No persistent visual/step-by-step state |

Dry Viz's edge is combining execution, visualization, AI explanation, and complexity analysis in one place, instead of requiring students to stitch these together across tools.

*Note: verify these characterizations against the current versions of each platform before presenting this externally — features change.*

---

## 1.11 Initial Scope (V1)

**Supported languages:** Python, Java, C, C++, JavaScript

**Core features:**
- AI Dry Run
- Step-by-step execution
- Variable tracking
- Memory visualization
- AI explanation
- Error explanation
- Time complexity analysis
- Space complexity analysis
- Replay
- Share visualization

---

## 1.12 Long-Term Roadmap *(post-V1, aspirational)*

- Advanced AI tutor
- Interactive learning paths
- Coding interview preparation modules
- Classroom mode
- University dashboard
- Team collaboration
- Enterprise learning
- Personalized AI mentor
- Plugin ecosystem

These are directional, not committed scope — several (university dashboard, enterprise learning) require organizational partnerships beyond a single-developer build.

---

## 1.13 Success Metrics

Outcomes need a defined measurement and a target to function as metrics. Fill in targets before this goes in front of reviewers:

| Outcome | Proposed Metric | Target |
|---|---|---|
| Faster algorithm comprehension | Time-to-correct-explanation on a post-lesson quiz, vs. a control group | TBD |
| Less tool-switching | Average session length / external tab switches per session | TBD |
| Improved problem-solving | Pre/post assessment score delta | TBD |
| Complexity understanding | % of users who can correctly identify Big-O after use | TBD |
| Engagement | Weekly active users, session completion rate, replay usage rate | TBD |
| Retention | 7-day / 30-day return rate | TBD |

---

## 1.14 Product Motto

> Learn Programming by Seeing It.

# Chapter 3: Problem Statement

## 3.1 Introduction

Programming is one of the most valuable skills a student can develop, yet a large share of learners can produce working code without understanding how or why it works. Most learning platforms teach syntax or provide practice problems, but very few explain what happens internally as code executes. The result: students memorize solutions instead of understanding them. Dry Viz is built to address this gap directly.

---

## 3.2 Current Learning Challenges

Ten challenges recur across programming education, and they compound one another: invisible execution produces memorization, memorization produces shaky fundamentals, and shaky fundamentals produce the lost confidence described in 3.2.10.

### 3.2.1 Students Memorize Instead of Understanding

Most beginners copy code from YouTube, ChatGPT, GeeksforGeeks, or friends. They may get the correct output without understanding why the solution works, how variables change, how loops execute, how recursion works, or why one solution is better than another. The result is weak programming fundamentals.

### 3.2.2 Code Execution Is Invisible

Programming languages execute internally, out of view. Students never see variable updates, stack or heap memory, function calls, loop execution, conditional branching, or object creation — only the final output. That makes the language itself feel opaque.

### 3.2.3 Data Structures Are Difficult to Visualize

Linked lists, trees, graphs, hash maps, heaps, queues, and stacks all change dynamically during execution. Without a visual, students have to hold every state change in their head — which raises the difficulty of learning structures that are inherently spatial.

### 3.2.4 Algorithms Feel Abstract

Binary search, merge sort, quicksort, BFS, DFS, Dijkstra, dynamic programming — most tutorials explain these with text or static diagrams. Students still can't see how the algorithm actually progresses step by step.

### 3.2.5 Time Complexity Is Poorly Understood

Students memorize O(1), O(log n), O(n), O(n log n), and O(n²) without understanding why an algorithm has that complexity. They can't visualize operation counts, growth rate, or best/average/worst case — so Big-O becomes a memorization topic instead of a logical one.

### 3.2.6 Space Complexity Is Ignored

Most platforms focus on time complexity alone. Few explain memory allocation, memory growth, recursive stack usage, auxiliary space, or temporary-variable overhead — so students never learn to reason about memory optimization.

### 3.2.7 Students Depend on Multiple Platforms

A typical workflow looks like: LeetCode → ChatGPT → GeeksforGeeks → YouTube → Visualgo → Google → back to LeetCode. Constant platform-switching interrupts focus and slows learning.

### 3.2.8 Existing Platforms Focus on Solving, Not Understanding

Most platforms are built for practice, interviews, and assessment. Very few help students understand *why* a solution works — learning and practicing are treated as separate experiences instead of one.

### 3.2.9 Brute Force vs. Optimal Solutions Are Rarely Compared

Students often know the optimal solution without understanding why the brute-force approach fails, why an intermediate approach improves on it, or why the optimal approach is efficient. Without that comparison, optimization is hard to internalize.

### 3.2.10 Beginners Lose Confidence

When execution is invisible, small mistakes become confusing rather than instructive. That frustration is a major reason students abandon programming practice altogether.

---

## 3.3 Why This Matters

These problems compound rather than stand alone: solving 3.2.1 without solving 3.2.2 just moves the memorization up one level. Dry Viz's approach to this — and the resulting feature set — is covered in **Chapter 1**. This chapter's job is narrower: establish that the problem is real, specific, and worth designing against, not re-sell the product.

---

## 3.4 Conclusion

Programming shouldn't feel like magic. Students deserve to see every step between writing code and producing output. Dry Viz exists to make that invisible process visible — not just to execute code, but to make it understandable.

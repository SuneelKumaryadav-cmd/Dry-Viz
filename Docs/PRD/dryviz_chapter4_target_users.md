# Chapter 4: Target Users

## 4.1 Introduction

Dry Viz is designed to help people understand programming through interactive visualization. Although programming touches many types of users, Version 1 targets a specific audience deliberately — building a genuinely good product for a narrow group beats a mediocre one for everyone.

---

## 4.2 Primary Target Audience

These users are the highest priority — every major V1 and V2 feature should primarily solve their problems.

Worth naming directly: the three segments below overlap substantially in practice. A third-year CS student preparing for placements *is* a DSA learner *is* a placement-prep student — largely the same person described at different points in their degree, not three independent audiences. Read this section as one core wedge user (a placement-track CS student) viewed through three angles, not three separate P0s competing for attention.

### 4.2.1 College Students

**Who:** Students pursuing Computer Science, IT, AI, Data Science, Software Engineering, or related degrees.
**Goals:** Learn programming, understand DSA, complete assignments, prepare for placements.
**Pain points:** Can't follow code execution; struggle to visualize algorithms and recursion; weak grasp of complexity; overreliance on YouTube tutorials.
**How Dry Viz helps:** Step-by-step execution, variable tracking, memory visualization, algorithm visualization, AI explanation.
**Priority:** P0

### 4.2.2 DSA Learners

**Who:** Students specifically preparing Data Structures and Algorithms.
**Goals:** Learn DSA, understand algorithms, improve problem-solving.
**Pain points:** Hard to visualize; hard to reason about optimization; recursion is confusing; dynamic programming feels opaque.
**How Dry Viz helps:** Interactive algorithm visualization, brute-force vs. better vs. optimal comparison, replay, AI tutor.
**Priority:** P0

### 4.2.3 Placement Preparation Students

**Who:** Students actively preparing for campus placement drives.
**Goals:** Crack coding interviews, improve coding speed, deepen understanding.
**Pain points:** Memorize solutions without being able to explain the logic; weak fundamentals under interview pressure.
**How Dry Viz helps:** Execution understanding, optimization reasoning, complexity visualization, pattern recognition.
**Priority:** P0

---

## 4.3 Secondary Target Audience

Important, but not the V1 focus.

### 4.3.1 Coding Bootcamps

**Goals:** Teach programming, demonstrate algorithms.
**Possible features:** Classroom mode, instructor dashboard, student progress tracking.
**Priority:** P2

### 4.3.2 Professors

**Goals:** Teach visually, demonstrate execution live.
**Possible features:** Presentation mode, live visualization, classroom dashboard.
**Priority:** P2

### 4.3.3 Universities

**Goals:** Improve programming education at the department level.
**Possible features:** LMS integration, department dashboard, student analytics.
**Priority:** P3

---

## 4.4 Future Target Audience

Later versions may extend to software engineers, coding mentors, companies, interview trainers, and enterprise learning teams. Not scoped for V1 or V2.

---

## 4.5 User Personas

Three composites, one per primary segment above.

### 4.5.1 Rahul — the DSA + placement blend

20, third-year CS student. Trying to crack placements while DSA — specifically dynamic programming, recursion, and complexity — still doesn't fully click. Currently bounces between LeetCode, ChatGPT, and GeeksforGeeks without a way to tie what he reads back to what his own code actually does. Dry Viz's value for Rahul: visual explanations tied to his own submitted code, plus replay so a confusing failed attempt doesn't just disappear.

### 4.5.2 Priya — the early-stage beginner

18, first-year engineering student. Still building basic fluency — loops and variable state don't yet feel intuitive, and she loses track of what's happening inside her own program. Dry Viz's value for Priya: step-by-step execution she can pause and rewind, so "what just happened" stops being a mystery.

### 4.5.3 Arjun — the interview-ready candidate

22, deep in placement prep. Knows the optimal solution to most problems he's practiced but freezes when an interviewer asks him to justify why it's optimal or walk through the reasoning. Dry Viz's value for Arjun: comparison mode (brute force vs. optimal) and AI explanations he can use to rehearse the *why*, not just the *what*.

---

## 4.6 User Goals

Across segments, students should be able to: understand code, learn algorithms, understand complexity, learn visually, compare solutions, replay execution, and rebuild confidence.

---

## 4.7 User Journey

Problem → Paste Code → Visualize → Understand → Replay → Compare → Learn → Apply → Solve More Problems

---

## 4.8 Out of Scope

Version 1 will not target: competitive programming platforms, enterprise companies, cloud IDE users, general software development, web development learning, or mobile development learning. The initial focus stays on programming fundamentals and DSA.

---

## 4.9 Product Focus

Every proposed feature should answer one question: *will this help students understand programming better?* If the answer is no, it doesn't ship.

---

## 4.10 Conclusion

Understanding these users is what turns a feature list into a product. Dry Viz isn't trying to build many average features for everyone — it's building an exceptional learning experience for a specific, well-understood group of students. Every future decision should prioritize learning, clarity, and visualization over breadth.

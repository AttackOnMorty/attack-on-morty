---
title: Refactoring
date: '2023-12-25'
spoiler: Improving the design of existing code.
---

> Improving the design of existing code.

---

- [Why](#why)
- [What](#what)
- [When](#when)
- [How](#how)
- [References](#references)

---

## Why

- Refactoring improves the design of software
- Refactoring makes software easier to understand
- Refactoring helps find bugs
- Refactoring helps program faster (from a long term perspective)

## What

- Refactoring (noun): a change made to the internal structure of software to make it **easier to understand** and **cheaper to modify** without changing its observable behavior.
- Refactoring (verb): to restructure software by applying a series of refactorings without changing its observable behavior.

## When

> The Rule of Three: Three strikes, then you refactor

### When to Refactor

- Opportunistic refactoring
  - Preparatory refactoring: Making it easier to add a feature
  - Comprehension refactoring: Making the code easier to understand
  - Litter-Pickup refactoring
- Planned refactoring
  - Long-Term refactoring
  - Refactoring during code reviews

### When Not to Refactor

- No need to modify it
- It's easier to rewrite it

## How

> The Two Hats: Switch between adding functionality and refactoring

1. Find [Bad Smells in Code](https://refactoring.guru/refactoring/smells)
2. Apply [Refactoring Techniques](https://refactoring.guru/refactoring/techniques)

## References

- [Refactoring: Improving the Design of Existing Code (2nd Edition)](https://www.amazon.com.au/Refactoring-Improving-Existing-Addison-Wesley-Signature-ebook/dp/B07LCM8RG2)
- [Refactoring Guru](https://refactoring.guru/refactoring)

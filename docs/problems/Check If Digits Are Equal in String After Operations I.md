---
date: 2025-10-22
difficulty: Easy
num: 3461
related_topics:
  - Combinatorics
  - Math
  - Number Theory
  - Simulation
  - String
return: Done
---

# Problem: 3461. Check If Digits Are Equal In String After Operations I

## Description

## Approach / Thoughts
simulate stack

## Solution
```python
class Solution:
    def hasSameDigits(self, s: str) -> bool:
        stack = [int(c) for c in s]
        N = n = len(stack)

        for _ in range(N-2):
            tmp = []
            for i in range(1, n):
                x = stack[i-1]
                y = stack[i]

                tmp.append((x + y) % 10)
            n = len(tmp)
            stack = tmp

        return stack[0] == stack[1]
```

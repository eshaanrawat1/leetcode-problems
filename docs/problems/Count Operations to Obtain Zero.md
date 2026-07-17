---
date: 2025-11-09
difficulty: Easy
num: 2169
related_topics:
  - Math
  - Simulation
return: Done
---

# Problem: 2169. Count Operations To Obtain Zero

## Description

## Approach / Thoughts
simulate

## Solution
```python
class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        ops = 0
        while num1 and num2:
            if num1 <= num2:
                num2 -= num1
            else:
                num1 -= num2
            ops += 1
        return ops
```

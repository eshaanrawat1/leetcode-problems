---
date: 2025-09-16
difficulty: Hard
num: 2197
related_topics:
  - Array
  - Math
  - Number Theory
  - Stack
return: Done
---

# Problem: 2197. Replace Non Coprime Numbers In Array

## Description

## Approach / Thoughts
stack for continuous replacement if not coprime

## Solution
```python
class Solution:
    def replaceNonCoprimes(self, nums: List[int]) -> List[int]:
        stack = []
        for n in nums:
            while stack and gcd(n, stack[-1]) != 1:
                n = lcm(n, stack.pop())
            stack.append(n)
        return stack
```

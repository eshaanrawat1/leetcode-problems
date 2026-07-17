---
date: 2025-02-09
difficulty: Easy
num: 3174
related_topics:
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 3174. Clear Digits

## Description
pop char next to digit

## Approach / Thoughts
stack

## Solution
```python
class Solution:
    def clearDigits(self, s: str) -> str:
        stack = []
        for c in s:
            if c.isdigit() and stack:
                stack.pop()
            if not c.isdigit():
                stack.append(c)
        return ''.join(stack)
```

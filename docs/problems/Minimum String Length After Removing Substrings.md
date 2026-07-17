---
date: 2024-10-06
difficulty: Easy
num: 2696
related_topics:
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 2696. Minimum String Length After Removing Substrings

## Description

## Approach / Thoughts
stack

## Solution
```python
class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        for c in s:
            if stack and stack[-1] == 'A' and c == 'B':
                stack.pop()
            elif stack and stack[-1] == 'C' and c == 'D':
                stack.pop()
            else:
                stack.append(c)
        return len(stack)
```

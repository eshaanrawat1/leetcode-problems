---
date: 2025-02-11
difficulty: Medium
num: 1910
related_topics:
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 1910. Remove All Occurrences Of A Substring

## Description

## Approach / Thoughts
check substring end in stack

## Solution
```python
class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        n, sublen = len(s), len(part)
        p_list = list(part)
        stack = []

        def match():
            stack_len = len(stack)
            if stack[stack_len-sublen:] == p_list:
                for _ in range(sublen):
                    stack.pop()

        
        for c in s:
            stack.append(c)
            match()
        
        return ''.join(stack)
```

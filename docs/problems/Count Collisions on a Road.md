---
date: 2025-10-05
difficulty: Medium
num: 2211
related_topics:
  - Simulation
  - Stack
  - String
return: Done
---

# Problem: 2211. Count Collisions On A Road

## Description

## Approach / Thoughts
check collision cases

## Solution
```python
class Solution:
    def countCollisions(self, directions: str) -> int:
        res = 0
        
        stack = []
        for d in directions:
            if stack and d == 'L' and stack[-1] == 'R':
                res += 2
                stack.pop()
                while stack and stack[-1] == 'R':
                    res += 1
                    stack.pop()
                stack.append('S')
            elif stack and d == 'L' and stack[-1] == 'S':
                res += 1
            elif d == 'S':
                while stack and stack[-1] == 'R':
                    res += 1
                    stack.pop()
                stack.append(d)
            else:
                stack.append(d)
        return res
```

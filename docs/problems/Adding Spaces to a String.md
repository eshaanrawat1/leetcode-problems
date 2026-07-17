---
date: 2024-12-02
difficulty: Medium
num: 2109
related_topics:
  - Array
  - Simulation
  - String
  - Two-Pointer
return: Done
---

# Problem: 2109. Adding Spaces To A String

## Description

## Approach / Thoughts
loop and check index

## Solution
```python
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        res = []
        spaces = set(spaces)

        for i, c in enumerate(s):
            if i in spaces:
                res.append(' ')
            res.append(c)
        return ''.join(res)
```

---
date: 2024-12-05
difficulty: Medium
num: 2337
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 2337. Move Pieces To Obtain A String

## Description
same, can swap positions

## Approach / Thoughts
check indices of each letter and check if less or greater

## Solution
```python
class Solution:
    def canChange(self, start: str, target: str) -> bool:
        s1 = [(l, i) for i, l in enumerate(start) if (l == 'L' or l == 'R')]
        s2 = [(l, i) for i, l in enumerate(target) if (l == 'L' or l == 'R')]

        if len(s1) != len(s2):
            return False

        for p1, p2 in zip(s1, s2):
            l1, i1 = p1
            l2, i2 = p2

            if l1 != l2:
                return False

            if l1 == 'L' and i1 < i2:
                return False
            
            if l1 == 'R' and i1 > i2:
                return False

        return True            
```

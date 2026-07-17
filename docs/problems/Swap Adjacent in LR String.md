---
date: 2024-12-05
difficulty: Medium
num: 777
related_topics:
  - String
  - Two-Pointer
return: Done
---

# Problem: 777. Swap Adjacent In Lr String

## Description
same as 2337, check swap

## Approach / Thoughts
same, track indices

## Solution
```python
class Solution:
    def canTransform(self, start: str, result: str) -> bool:
        s1 = [(l, i) for i, l in enumerate(start) if (l == 'R' or l == 'L')]
        s2 = [(l, i) for i, l in enumerate(result) if (l == 'R' or l == 'L')]

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

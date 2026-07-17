---
date: 2025-08-09
difficulty: Medium
num: 986
related_topics:
  - Array
  - Line Sweep
  - Two-Pointer
return: Done
---

# Problem: 986. Interval List Intersections

## Description

## Approach / Thoughts
two pointers with both lists, keep the one with longer end time

## Solution
```python
class Solution:
    def intervalIntersection(self, first: List[List[int]], second: List[List[int]]) -> List[List[int]]:
        f = s = 0
        n1 = len(first)
        n2 = len(second)

        intersec = []
        while f < n1 and s < n2:
            s1, e1 = first[f]
            s2, e2 = second[s]

            if s1 <= s2 <= e1 or s2 <= s1 <= e2:
                start = max(s1, s2)
                end = min(e1, e2)
                intersec.append([start, end])

            if (e1, s1) <= (e2, s2):
                f += 1
            else:
                s += 1
        return intersec
```

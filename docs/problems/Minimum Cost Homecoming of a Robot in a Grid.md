---
date: 2024-10-26
difficulty: Medium
num: 2087
related_topics:
  - Array
  - Greedy
return: Done
---

# Problem: 2087. Minimum Cost Homecoming Of A Robot In A Grid

## Description
all shortest paths are the same

## Approach / Thoughts
row and col costs

## Solution
```python
class Solution:
    def minCost(self, startPos: List[int], homePos: List[int], rowCosts: List[int], colCosts: List[int]) -> int:
        dx = 1 if startPos[0] < homePos[0] else -1
        dy = 1 if startPos[1] < homePos[1] else -1

        rcost = ccost = 0

        r = startPos[0]
        while r != homePos[0]:
            rcost += rowCosts[r + dx]
            r += dx

        c = startPos[1]
        while c != homePos[1]:
            ccost += colCosts[c + dy]
            c += dy
            
        return rcost + ccost
```

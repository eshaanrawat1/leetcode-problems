---
date: 2026-01-15
difficulty: Medium
num: 2975
related_topics:
  - Array
  - Enumeration
  - Hash Table
return: Done
---

# Problem: 2975. Maximum Square Area By Removing Fences From A Field

## Description
calc diff

## Approach / Thoughts
side lengths add 1 and end bounds

side length is any combination of i,j

see if same length removal can be made

## Solution
```python
class Solution:
    def maximizeSquareArea(self, m: int, n: int, hBars: List[int], vBars: List[int]) -> int:

        def calc(g):
            diffs = set()
            for i in range(len(g)):
                for j in range(i+1, len(g)):
                    diffs.add(abs(g[i]-g[j]))
            return diffs

        hgroups = SortedSet([1] + hBars + [m])
        vgroups = SortedSet([1] + vBars + [n])

        hdiff = calc(hgroups)
        vdiff = calc(vgroups)        

        res = -1
        for x in hdiff:
            if x in vdiff:
                res = max(res, x)
        return (res*res) % (10**9+7) if res != -1 else -1
```

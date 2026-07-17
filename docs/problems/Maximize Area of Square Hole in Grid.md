---
date: 2026-01-15
difficulty: Medium
num: 2943
related_topics:
  - Array
  - Sorting
return: Done
---

# Problem: 2943. Maximize Area Of Square Hole In Grid

## Description

## Approach / Thoughts
find max common diffs

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def maximizeSquareHoleArea(self, n: int, m: int, hBars: List[int], vBars: List[int]) -> int:
        
        def calc(bars):
            ss = SortedSet(bars)
            vis = set()
            N = len(ss)

            groups = []
            
            i = 0
            while i < N:
                tmp = [ss[i]-1]
                x = ss[i]
                flag = False

                while x in ss and x not in vis:
                    tmp.append(x)
                    vis.add(x)
                    x += 1
                    flag = True

                if flag: tmp.append(x)
                if len(tmp) > 1: groups.append(tmp[:])
                i += 1

            diffs = set()
            for g in groups:
                for i in range(len(g)):
                    for j in range(i+1, len(g)):
                        diffs.add(abs(g[i]-g[j]))
            return diffs

        hdiff = calc(hBars)
        vdiff = calc(vBars)        

        res = 1
        for x in hdiff:
            if x in vdiff:
                res = max(res, x)
        return res*res
```

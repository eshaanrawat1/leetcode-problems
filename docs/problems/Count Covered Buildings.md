---
date: 2025-12-11
difficulty: Medium
num: 3531
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 3531. Count Covered Buildings

## Description

## Approach / Thoughts
not first in row or first in col

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def countCoveredBuildings(self, n: int, buildings: List[List[int]]) -> int:
        freq = defaultdict(SortedSet)

        for r, c in buildings:
            freq[f"{r}r"].add(c)
            freq[f"{c}c"].add(r)

        res = 0
        for r, c in buildings:
            ck = f"{c}c"
            if freq[ck] and (freq[ck][0] == r or freq[ck][-1] == r):
                continue

            rk = f"{r}r"
            if freq[rk] and (freq[rk][0] == c or freq[rk][-1] == c):
                continue

            res += 1
        return res
```

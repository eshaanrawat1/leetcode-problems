---
date: 2025-10-07
difficulty: Medium
num: 1488
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
return: Review
---

# Problem: 1488. Avoid Flood In The City

## Description
same, can dry lakes

## Approach / Thoughts
if we see potential flood, check if there are 0s we can use to dry, closest 0 after the first rain

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:

        n = len(rains)
        res = [-1] * n

        floods = {}
        saves = SortedSet()

        for i, r in enumerate(rains):
            if r == 0:
                saves.add(i)
                res[i] = 1
                continue

            if r not in floods:
                floods[r] = i
                continue

            day_flooded = floods[r]
            save_idx = saves.bisect_right(day_flooded)
            if save_idx >= len(saves):
                return []
            dry_day = saves[save_idx]
            res[dry_day] = r
            saves.discard(dry_day)
            floods[r] = i

        return res
```

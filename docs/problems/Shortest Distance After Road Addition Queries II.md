---
date: 2025-05-01
difficulty: Hard
num: 3244
related_topics:
  - Array
  - Graph
  - Greedy
  - Ordered Set
return: Done
---

# Problem: 3244. Shortest Distance After Road Addition Queries Ii

## Description

## Approach / Thoughts
since no roads partially overlap

whenever we make a new road, erase everything in between

use binary search to find upper and lower bounds

## Solution
```python
from sortedcontainers import SortedList

class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        
        def erase(l, r):
            start = bisect.bisect_left(sl, l)
            end = bisect.bisect_right(sl, r)

            vals = [sl[i] for i in range(start, end)]
            for v in vals:
                sl.remove(v)
        
        
        sl = SortedList(range(n))
        res = []
        for x, y in queries:      
            erase(x+1, y-1)
            res.append(len(sl)-1)
        return res
```

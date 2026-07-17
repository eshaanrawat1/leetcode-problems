---
date: 2024-09-27
difficulty: Hard
num: 1851
related_topics:
  - Array
  - Binary Search
  - Heap (Priority Queue)
  - Line Sweep
  - Sorting
return: Done
---

# Problem: 1851. Minimum Interval To Include Each Query

## Description

## Approach / Thoughts
sort queries and intervals

line sweep and process potential range in heap

lazy pop if expired interval

## Solution
```python
class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        original_queries = queries[:]
        intervals.sort()
        queries.sort()

        cache = {}
        pq, i = [], 0

        for q in queries:

            while i < len(intervals) and intervals[i][0] <= q:
                s, e = intervals[i]
                heapq.heappush(pq, (e-s+1, s, e))
                i += 1

            while pq and q > pq[0][2]:
                heapq.heappop(pq)
            
            cache[q] = pq[0][0] if pq else -1

        return [cache[q] for q in original_queries]
```

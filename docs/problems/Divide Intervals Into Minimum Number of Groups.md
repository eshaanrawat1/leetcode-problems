---
date: 2024-10-11
difficulty: Medium
num: 2406
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Prefix Sum
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2406. Divide Intervals Into Minimum Number Of Groups

## Description
make new group if intervals overlap

## Approach / Thoughts
keep min interval on the top, if we can, chain it to that

## Solution
```python
class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        pq, cnt = [], 0
        intervals.sort(key=lambda x: (x[0], x[1]))

        for start, end in intervals:
            if not pq:
                heapq.heappush(pq, end)
                cnt += 1
            else:
                if start <= pq[0]:
                    heapq.heappush(pq, end)
                    cnt += 1
                else:
                    heapq.heappop(pq)
                    heapq.heappush(pq, end)
        return cnt
```

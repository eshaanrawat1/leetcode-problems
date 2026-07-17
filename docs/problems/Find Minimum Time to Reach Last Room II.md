---
date: 2025-05-07
difficulty: Medium
num: 3342
related_topics:
  - Array
  - Dynamic Programming
  - Heap (Priority Queue)
  - Matrix
  - Shortest Path
return: Done
---

# Problem: 3342. Find Minimum Time To Reach Last Room Ii

## Description

## Approach / Thoughts
dijkstra with toggle for 1 or 2 second wait

## Solution
```python
class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        pq = [[0, 0, 0, True]]
        shortest = {(0, 0): 0}

        n, m = len(moveTime), len(moveTime[0])

        def in_bounds(r, c):
            return 0 <= r < n and 0 <= c < m

        while pq:
            t, r, c, alt = heapq.heappop(pq)

            for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                wait_time = 1 if alt else 2
                if in_bounds(nr, nc) and (nr, nc) not in shortest:
                    new_time = max(t+wait_time, moveTime[nr][nc]+wait_time)
                    heapq.heappush(pq, (new_time, nr, nc, not alt))
                    shortest[(nr, nc)] = new_time

        return shortest[(n-1, m-1)]
```

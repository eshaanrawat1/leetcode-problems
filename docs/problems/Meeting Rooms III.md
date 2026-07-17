---
date: 2025-01-01
difficulty: Hard
num: 2402
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
  - Simulation
  - Sorting
return: Done
---

# Problem: 2402. Meeting Rooms Iii

## Description

## Approach / Thoughts
2 heaps for rooms - available and not - handle delays

## Solution
```python
class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        meetings.sort()
        rooms = [0] * n

        av = []
        pq = list(range(n))
        heapq.heapify(pq)

        for s, e in meetings:

            while av and av[0][0] <= s:
                end, r = heapq.heappop(av)
                heapq.heappush(pq, r)

            if pq:
                cur = heapq.heappop(pq)
                rooms[cur] += 1
                heapq.heappush(av, (e, cur))
            else:
                end, r = heapq.heappop(av)
                rooms[r] += 1
                heapq.heappush(av, (e+end-s, r))
        
        res = max_room = -inf
        for i, n in enumerate(rooms):
            if n > res:
                res = n
                max_room = i
        return max_room
```

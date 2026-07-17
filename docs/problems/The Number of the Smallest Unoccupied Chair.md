---
date: 2024-10-10
difficulty: Medium
num: 1942
related_topics:
  - Array
  - Hash Table
  - Heap (Priority Queue)
return: Done
---

# Problem: 1942. The Number Of The Smallest Unoccupied Chair

## Description
friends with intervals, try to get smallest unoccupied chair

## Approach / Thoughts
intervals with heap

when friend arrives, pop seat from heap, when leave add pack

min seat in heap is one to return

## Solution
```python
class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        target_idx = None

        intervals = []
        for i, t in enumerate(times):
            intervals.append([t[0], i, 1])
            intervals.append([t[1], i, -1])

            if i == targetFriend:
                target_idx = i

        intervals.sort(key = lambda x: (x[0], x[-1]))

        pq = list(range(len(times)))
        idx_to_seat = {}

        for t, i, sign in intervals:
            if target_idx == i:
                return pq[0]

            if sign == 1:
                taken_seat = heapq.heappop(pq)
                idx_to_seat[i] = taken_seat
            else:
                available_seat = idx_to_seat[i]
                heapq.heappush(pq, available_seat)
```

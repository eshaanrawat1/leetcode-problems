---
date: 2024-12-11
difficulty: Easy
num: 2558
related_topics:
  - Array
  - Heap (Priority Queue)
  - Simulation
return: Done
---

# Problem: 2558. Take Gifts From The Richest Pile

## Description

## Approach / Thoughts
heap

## Solution
```python
class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        pq = [-g for g in gifts]
        heapq.heapify(pq)

        while k:
            val = -heapq.heappop(pq)
            val = int(sqrt(val))
            heapq.heappush(pq, -val)
            k -= 1
        return sum(-p for p in pq)
```

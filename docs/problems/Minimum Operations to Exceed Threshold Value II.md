---
date: 2025-02-12
difficulty: Medium
num: 3066
related_topics:
  - Array
  - Heap (Priority Queue)
  - Simulation
return: Done
---

# Problem: 3066. Minimum Operations To Exceed Threshold Value Ii

## Description

## Approach / Thoughts
push pop heap

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        pq = nums[:]
        heapq.heapify(pq)

        ops = 0
        while pq:
            if pq[0] >= k:
                return ops

            x = heapq.heappop(pq)
            y = heapq.heappop(pq)

            heapq.heappush(pq, min(x, y) * 2 + max(x, y))
            ops += 1
```

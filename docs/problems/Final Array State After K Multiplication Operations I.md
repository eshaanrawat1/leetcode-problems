---
date: 2024-12-15
difficulty: Easy
num: 3264
related_topics:
  - Array
  - Heap (Priority Queue)
  - Math
  - Simulation
return: Done
---

# Problem: 3264. Final Array State After K Multiplication Operations I

## Description

## Approach / Thoughts
heap pop min

## Solution
```python
class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
        pq = [(n, i) for i, n in enumerate(nums)]
        heapq.heapify(pq)

        while k:
            val, idx = heapq.heappop(pq)
            val *= multiplier
            heapq.heappush(pq, (val, idx))
            k -= 1
        
        res = [-1] * len(nums)
        for n, i in pq:
            res[i] = n
        return res
```

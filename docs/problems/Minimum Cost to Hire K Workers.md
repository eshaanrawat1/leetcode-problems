---
date: 2024-05-10
difficulty: Hard
num: 857
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
  - Sorting
return: Review
---

# Problem: 857. Minimum Cost To Hire K Workers

## Description
min cost with ratios

## Approach / Thoughts
sort and greedy take smallest ratios while taking max qualities first in reverse

## Solution
```python
class Solution:
    def mincostToHireWorkers(self, quality: List[int], wage: List[int], k: int) -> float:
        res = float("inf")

        pairs = [(wage[i] / quality[i], quality[i]) for i in range(len(quality))]
        pairs.sort(key=lambda x:x[0])
        maxHeap = []

        total_quality = 0
        for rate, q in pairs:
            total_quality += q
            heapq.heappush(maxHeap, -q)

            if len(maxHeap) > k:
                total_quality -= (-1 * heapq.heappop(maxHeap))
            
            if len(maxHeap) == k:
                res = min(res, total_quality * rate)

        return res
```

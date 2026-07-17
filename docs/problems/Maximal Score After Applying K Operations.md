---
date: 2024-10-13
difficulty: Medium
num: 2530
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
return: Done
---

# Problem: 2530. Maximal Score After Applying K Operations

## Description
same, take a number, replace it with div

## Approach / Thoughts
greedy, maxheap

## Solution
```python
class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        pq = [-n for n in nums]
        heapq.heapify(pq)

        total = 0
        for _ in range(k):
            val = -heapq.heappop(pq)
            total += val
            heapq.heappush(pq, -ceil(val / 3))
        return total
```

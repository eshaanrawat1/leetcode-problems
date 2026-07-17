---
date: 2025-10-14
difficulty: Medium
num: 2208
related_topics:
  - Array
  - Greedy
  - Heap (Priority Queue)
return: Done
---

# Problem: 2208. Minimum Operations To Halve Array Sum

## Description

## Approach / Thoughts
max heap until decrease sum

## Solution
```python
class Solution:
    def halveArray(self, nums: List[int]) -> int:
        cur = sum(nums)
        target = cur / 2

        pq = [-n for n in nums]
        heapq.heapify(pq)
        ops = 0

        while pq and cur > target:
            val = heapq.heappop(pq)
            val *= -1

            cur = (cur - val + (val / 2))
            heapq.heappush(pq, -val / 2)         
            ops += 1
        return ops
```

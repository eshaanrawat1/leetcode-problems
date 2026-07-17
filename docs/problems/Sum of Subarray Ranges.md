---
date: 2025-03-24
difficulty: Medium
num: 2104
related_topics:
  - Array
  - Monotonic Stack
  - Stack
return: Done
---

# Problem: 2104. Sum Of Subarray Ranges

## Description

## Approach / Thoughts
two heaps

## Solution
```python
class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0

        for i in range(n):
            max_heap = []
            min_heap = []

            for j in range(i, n):
                heapq.heappush(max_heap, -nums[j])
                heapq.heappush(min_heap, nums[j])

                res += (-max_heap[0] - min_heap[0])

        return res
```

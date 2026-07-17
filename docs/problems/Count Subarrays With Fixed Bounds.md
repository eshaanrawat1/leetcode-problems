---
date: 2025-04-27
difficulty: Hard
num: 2444
related_topics:
  - Array
  - Monotonic Queue
  - Queue
  - Sliding Window
return: Review
---

# Problem: 2444. Count Subarrays With Fixed Bounds

## Description
same, number of subarrays with max and min elements as mink maxk

## Approach / Thoughts
sliding window, jump over invalid

increment for number of subarrays ending at r, stretch up to l

## Solution
```python
class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        l = res = 0
        cur_min = cur_max = -1

        for r, v in enumerate(nums):
            if v == minK: cur_min = r
            if v == maxK: cur_max = r

            if v < minK or v > maxK: 
                l = r + 1
                continue

            res += max(0, min(cur_min, cur_max) - l + 1)
        return res
            
```

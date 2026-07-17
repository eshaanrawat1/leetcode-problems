---
date: 2026-03-24
difficulty: Medium
num: 918
related_topics:
  - Senior Staff
  - Array
  - Divide and Conquer
  - Dynamic Programming
  - Queue
  - Monotonic Queue
return: Review
---

# Problem:  

## Description
Given a **circular integer array** `nums` of length `n`, return _the maximum possible sum of a non-empty **subarray** of_ `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
where can max occur
- in middle of array (use kadanes)
- circular (use reverse to find min subarray sum, subtract from total)

## Solution
```python
class Solution:
    def maxSubarraySumCircular(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        maxval = max(nums)
        if maxval <= 0:
            return maxval


        total = 0
        curmax, curmin = -inf, inf
        maxsum, minsum = -inf, inf

        for x in nums:
            total += x

            curmax = max(x, x + curmax)
            maxsum = max(maxsum, curmax)
            curmax = max(curmax, 0)

            curmin = min(x, x + curmin)
            minsum = min(minsum, curmin)
        
        return max(maxsum, total - minsum)
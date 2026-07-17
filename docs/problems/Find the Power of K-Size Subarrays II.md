---
date: 2025-01-19
difficulty: Medium
num: 3255
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 3255. Find The Power Of K Size Subarrays Ii

## Description
same, k size subarray max element in consec streak

## Approach / Thoughts
count streaks, if ≥ k then max element which is element at index

## Solution
```python
class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        dp = [1] * (n + 1)

        for i in range(1, n):
            if nums[i] == nums[i-1] + 1:
                dp[i] += dp[i-1]

        res = []
        for i in range(k-1, n):
            if dp[i] >= k:
                res.append(nums[i])
            else:
                res.append(-1)
        return res
```

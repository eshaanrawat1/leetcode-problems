---
date: 2024-12-20
difficulty: Medium
num: 2962
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 2962. Count Subarrays Where Max Element Appears At Least K Times

## Description

## Approach / Thoughts
total subarrays - less than k times

## Solution
```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        m = max(nums)
        N = len(nums)
        subs = N * (N + 1) // 2

        l = res = cnt = 0
        for r in range(N):
            if nums[r] == m:
                cnt += 1

            while cnt >= k:
                if nums[l] == m:
                    cnt -= 1
                l += 1
            res += r - l + 1

        return subs - res
```

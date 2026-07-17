---
date: 2025-07-21
difficulty: Medium
num: 1695
related_topics:
  - Array
  - Hash Table
  - Sliding Window
return: Done
---

# Problem: 1695. Maximum Erasure Value

## Description
max subarray sum of unique values

## Approach / Thoughts
sliding window

## Solution
```python
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        res = l = cur = 0
        cnt = Counter()

        for r, v in enumerate(nums):
            while cnt[v] > 0:
                cnt[nums[l]] -= 1
                cur -= nums[l]
                l += 1
            
            cur += v
            cnt[v] += 1
            res = max(res, cur)
        return res
```

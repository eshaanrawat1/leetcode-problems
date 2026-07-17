---
date: 2025-12-20
difficulty: Hard
num: 2488
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Done
---

# Problem: 2488. Count Subarrays With Median K

## Description

## Approach / Thoughts
1 - median must be included in subarray, can find candidates on the right

2 - need a way to encode number of bigger and smaller nums with prefix sums

avoid double count

## Solution
```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)

        target_idx = -inf
        for i, v in enumerate(nums):
            if v == k:
                target_idx = i
                break

        left = [1 if x > k else -1 for x in nums[:target_idx]] + [0]
        right = [1 if x > k else -1 for x in nums[target_idx+1:]]

        ll, rr = len(left), len(right)
        for i in range(ll-2, -1, -1):
            left[i] += left[i+1]
        for i in range(1, rr):
            right[i] += right[i-1]

        lcnt = Counter(left)
        rcnt = Counter(right)

        res = 1
        for r in right:
            res += lcnt[-r] + lcnt[-r+1]

        return res + lcnt[0] + lcnt[1] - 1
```

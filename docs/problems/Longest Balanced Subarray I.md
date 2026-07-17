---
date: 2026-02-09
difficulty: Medium
num: 3719
related_topics:
  - Array
  - Divide and Conquer
  - Hash Table
  - Prefix Sum
  - Segment Tree
  - Senior
return: Done
---

# Problem: 3719. Longest Balanced Subarray I

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def longestBalanced(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0

        for i in range(n):
            seen = set()
            even = odd = 0
            for j in range(i, n):
                if nums[j] not in seen:
                    odd += (nums[j] % 2 == 1)
                    even += (nums[j] % 2 == 0)
                seen.add(nums[j])

                if even == odd:
                    res = max(res, j-i+1)
        return res
```

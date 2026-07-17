---
date: 2024-06-24
difficulty: Medium
num: 1004
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Sliding Window
return: Done
---

# Problem: 1004. Max Consecutive Ones Iii

## Description
find max consecutive 1s if can flip k 0s to 1

## Approach / Thoughts
sliding window, keep track of number of 0s, shrink window when invalid

## Solution
```python
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        res = flips = 0

        l = 0
        for r in range(len(nums)):
            if nums[r] == 0:
                flips += 1

            while flips > k:
                if nums[l] == 0:
                    flips -= 1
                l += 1
            
            res = max(res, r-l+1)
        return res
```

---
date: 2025-11-23
difficulty: Medium
num: 718
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Hash Function
  - Rolling Hash
  - Sliding Window
return: Done
---

# Problem: 718. Maximum Length Of Repeated Subarray

## Description

## Approach / Thoughts
hash subarrays binary search on length

## Solution
```python
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)

        def check(thresh_len):
            seen = {tuple(nums1[i:i+thresh_len]) for i in range(m-thresh_len+1)}

            for i in range(n-thresh_len+1):
                if tuple(nums2[i:i+thresh_len]) in seen:
                    return True
            return False

        l, r = 0 , min(m, n)
        res = 0

        while l <= r:
            mid = (l + r) // 2
            if check(mid):
                l = mid + 1
                res = mid
            else:
                r = mid - 1
        return res
```

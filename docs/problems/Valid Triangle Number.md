---
date: 2025-09-25
difficulty: Medium
num: 611
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 611. Valid Triangle Number

## Description
same, valid number of triplets make triangle

## Approach / Thoughts
check pairs in n^2 and binary search for possible ends

## Solution
```python
class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        if n < 3:
            return 0

        def search(start, max_len):
            l, r = start, n-1
            res = None

            while l <= r:
                m = (l + r) // 2
                if nums[m] >= max_len:
                    r = m - 1
                else:
                    l = m + 1
                    res = m
            return res - start if res else 0

        res = 0
        for i in range(n):
            x = nums[i]
            for j in range(i+1, n):
                y = nums[j]
                res += search(j, x+y)
        return res
                
```

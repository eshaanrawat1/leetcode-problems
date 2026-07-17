---
date: 2025-01-06
difficulty: Medium
num: 413
related_topics:
  - Array
  - Dynamic Programming
  - Sliding Window
return: Done
---

# Problem: 413. Arithmetic Slices

## Description
same, subarrays

## Approach / Thoughts
check diff

## Solution
```python
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        n = len(nums)

        res = 0
        for i in range(n-2):
            diff = nums[i+1] - nums[i]
            for j in range(i+2, n):
                if nums[j] - nums[j-1] == diff:
                    res += 1
                else:
                    break
        return res
```

---
date: 2024-08-02
difficulty: Medium
num: 2134
related_topics:
  - Array
  - Sliding Window
return: Done
---

# Problem: 2134. Minimum Swaps To Group All 1'S Together Ii

## Description

## Approach / Thoughts
find all holes in each window

## Solution
```python
class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        win_size = nums.count(1)

        zero_count = 0
        for i in range(win_size):
            if nums[i] == 0:
                zero_count += 1
        res = zero_count

        nums *= 2

        l = 0
        for r in range(win_size, len(nums)):
            if nums[r] == 0:
                zero_count += 1
            
            if nums[l] == 0:
                zero_count -= 1
            l += 1

            res = min(res, zero_count)
        return res
```

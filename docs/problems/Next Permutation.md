---
date: 2024-10-16
difficulty: Medium
num: 31
related_topics:
  - Array
  - Two-Pointer
return: Review
---

# Problem: 31. Next Permutation

## Description

## Approach / Thoughts
find next greater element from right, last next greater

reverse suffix from swap on

## Solution
```python
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # 1 3 2
        # 2 3 1

        for i in range(len(nums)-1,-1,-1):
            next_greater, next_idx = nums[i], i

            for j in range(i + 1, len(nums)):
                if nums[j] > nums[i]:
                    next_greater = nums[j]
                    next_idx = j

            if next_idx != i:
                nums[i], nums[next_idx] = nums[next_idx], nums[i]
                sorted_part = sorted(nums[i+1:])

                l = 0
                for k in range(i+1, len(nums)):
                    nums[k] = sorted_part[l]
                    l += 1
                return

        l, r = 0, len(nums)-1
        while l < r:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1
            r -= 1
```

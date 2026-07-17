---
date: 2023-12-15
difficulty: Medium
num: 15
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 15. 3Sum

## Description
Find 3 triplets such that the three add up to 0 with no duplicates.

## Approach / Thoughts
1. Sort the array

1. Choose a focus point of i

1. Iterate through two pointer technique for rest of the array using two sum sorted approach

## Solution
```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []

        for i in range(len(nums)):
            left = i + 1
            right = len(nums) - 1

            while left < right:
                if nums[i] + nums[left] + nums[right] == 0:
                    if ([nums[i], nums[left], nums[right]]) not in res:
                        res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                elif nums[i] + nums[left] + nums[right] < 0:
                    left += 1
                else:
                    right -= 1
        return res
```

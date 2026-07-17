---
date: 2023-12-23
difficulty: Medium
num: 1679
related_topics:
  - Array
  - Hash Table
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 1679. Max Number Of K Sum Pairs

## Description
Find the number of pairs that sum to k in a given array

## Approach / Thoughts
1. Sort the array

1. Use two pointer approach from left and right to find sum that equals k

1. Use counter to store number of unique pairs

## Solution
```python
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        l, r, operations = 0, len(nums) - 1, 0

        while l < r:
            if nums[l] + nums[r] == k:
                operations += 1
                l += 1
                r -= 1
            elif nums[l] + nums[r] < k:
                l += 1
            else:
                r -= 1
        return operations
```

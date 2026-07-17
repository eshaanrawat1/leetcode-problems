---
date: 2024-09-25
difficulty: Medium
num: 1658
related_topics:
  - Array
  - Binary Search
  - Hash Table
  - Prefix Sum
  - Sliding Window
return: Done
---

# Problem: 1658. Minimum Operations To Reduce X To Zero

## Description
same, take from both ends

## Approach / Thoughts
invert problem

max subarray to keep in the middle that sums to sum(nums) - x

## Solution
```python
class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        cur_sum = l = 0
        ops, goal = -1, sum(nums) - x

        for r in range(len(nums)):
            cur_sum += nums[r]

            while l < len(nums) and cur_sum > goal:
                cur_sum -= nums[l]
                l += 1

            if cur_sum == goal:
                ops = max(ops, r - l + 1)
            
        if ops == -1:
            return ops
        return len(nums) - ops
```

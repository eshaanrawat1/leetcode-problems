---
date: 2024-04-16
difficulty: Easy
num: 1991
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 1991. Find Middle Index In Array

## Description
Same as 724

## Approach / Thoughts
Prefix left and right

## Solution
```python
class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        left_sum, right_sum = 0, sum(nums)

        for i in range(len(nums)):
            right_sum -= nums[i]

            if left_sum == right_sum: return i
            left_sum += nums[i]
        
        return -1
```

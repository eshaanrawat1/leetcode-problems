---
date: 2024-04-13
difficulty: Medium
num: 213
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 213. House Robber Ii

## Description
Same as 1, but circle so first and last are adj

## Approach / Thoughts
Get max between include first, include last, and if one element edge case

## Solution
```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        return max(nums[0], self.helper(nums[1:]), self.helper(nums[:-1]))
        
    def helper(self, nums):
        first = second = 0

        for n in nums:
            temp = max(first + n, second)
            first = second
            second = temp
        return second
```

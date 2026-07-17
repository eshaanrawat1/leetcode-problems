---
date: 2024-02-04
difficulty: Medium
num: 238
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 238. Product Of Array Except Self

## Description
Same as title

## Approach / Thoughts
Store prefix product in resultant array, multiply each index with postfix product

Main thing is just finding out how to calculate the prefix product at a given index

## Solution
```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums)-1,-1,-1):
            res[i] *= postfix 
            postfix *= nums[i]
        return res
```

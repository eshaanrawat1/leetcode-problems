---
date: 2024-01-31
difficulty: Medium
num: 2966
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 2966. Divide Array Into Arrays With Max Difference

## Description
Divide an array into arrays of length three such that the max difference in each subarray is less than k.

## Approach / Thoughts
Sort the array split it three ways. Iterate again to check difference between first and last element in subarray.

## Solution
```python
class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        res = [[] for _ in range(len(nums) // 3)]
        
        for i in range(len(nums)):
            res[i // 3].append(nums[i])
        
        for ls in res:
            if ls[-1] - ls[0] > k:
                return []
        return res
```

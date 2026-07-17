---
date: 2024-02-26
difficulty: Medium
num: 47
related_topics:
  - Array
  - Backtracking
return: Done
---

# Problem: 47. Permutations Ii

## Description
All unique permutations

## Approach / Thoughts
Same as 46 Permutations I but use a set to keep track of unique values

## Solution
```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        unique = set()
        self.dfs(nums, [], res, unique)
        return res

    def dfs(self, nums, stored, res, unique):
        if not nums:
            if tuple(stored) not in unique:
                res.append(stored)
                unique.add(tuple(stored))
            return 
        
        for i in range(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], stored+[nums[i]], res, unique)
```

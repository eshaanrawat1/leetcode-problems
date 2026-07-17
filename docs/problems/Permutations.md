---
date: 2024-02-26
difficulty: Medium
num: 46
related_topics:
  - Array
  - Backtracking
return: Done
---

# Problem: 46. Permutations

## Description
Find all permutations from an array.

## Approach / Thoughts
dfs helper function that takes stored

pop each index from nums using slicing, then add to stored

## Solution
```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        self.dfs(nums, [], res)
        return res

    def dfs(self, nums, stored, res):
        if not nums:
            res.append(stored)
        
        for i in range(len(nums)):
            self.dfs(nums[:i]+nums[i+1:], stored+[nums[i]], res)
```

---
date: 2024-01-27
difficulty: Medium
num: 78
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
return: Done
---

# Problem: 78. Subsets

## Description
Return all subsets of an array.

## Approach / Thoughts
Use a dfs helper function to make a decision tree. Either choose element at the index or don’t choose for every point in the tree, which can be done with pops.

Base case is index out of bounds

## Solution
```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res, subset = [], []
        def dfs(i):
            if i >= len(nums):
                res.append(subset[:])
                return
            
            subset.append(nums[i])
            dfs(i+1)

            subset.pop()
            dfs(i+1)
        dfs(0)
        return res
```

---
date: 2024-01-27
difficulty: Medium
num: 90
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
return: Done
---

# Problem: 90. Subsets Ii

## Description
Find all unique sorted subsets.

## Approach / Thoughts
Sort the array and backtrack to find subsets

## Solution
```python
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res, subs = [], []
        unique = set()
        def dfs(i):
            if i >= len(nums):
                if tuple(subs) not in unique:
                    res.append(subs[:])
                unique.add(tuple(subs[:]))
                return

            subs.append(nums[i])
            dfs(i+1)

            subs.pop()
            dfs(i+1)
        dfs(0)
        return res
```

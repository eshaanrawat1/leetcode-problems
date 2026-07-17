---
date: 2024-07-08
difficulty: Medium
num: 1035
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1035. Uncrossed Lines

## Description
variation of lcs

## Approach / Thoughts
if match, skip both + 1, else compare pairs of both moves

## Solution
```python
class Solution:
    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:
        dp = {}
        def dfs(i, j):
            if i == len(nums1) or j == len(nums2):
                return 0
            if (i, j) in dp:
                return dp[(i, j)] 
            
            res = 0
            if nums1[i] == nums2[j]:
                res = 1 + dfs(i+1, j+1)
            else:
                res = max(dfs(i,j+1), dfs(i+1, j))

            dp[(i, j)] = res
            return res
            
        return dfs(0, 0)
```

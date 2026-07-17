---
date: 2024-08-10
difficulty: Medium
num: 494
related_topics:
  - Array
  - Backtracking
  - Dynamic Programming
return: Done
---

# Problem: 494. Target Sum

## Description
add signs to array, all ways to add to target

## Approach / Thoughts
draw decision tree

choose states of cur_sum and cur_index

## Solution
```python
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        dp = {}
        def dfs(i, cur_sum):
            if i == len(nums) and cur_sum == target:
                return 1
            if i >= len(nums):
                return 0
            if (i, cur_sum) in dp:
                return dp[(i, cur_sum)]

            dp[(i, cur_sum)] = dfs(i+1, cur_sum + -nums[i]) + dfs(i+1, cur_sum + nums[i])
            return dp[(i, cur_sum)]
        return dfs(0, 0)
```

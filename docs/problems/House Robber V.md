---
date: 2026-05-07
difficulty: Medium
num: 3840
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem: 3840. House Robber V

## Description
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed and is protected by a security system with a color code.

You are given two integer arrays `nums` and `colors`, both of length `n`, where `nums[i]` is the amount of money in the `ith` house and `colors[i]` is the color code of that house.

You **cannot rob two adjacent** houses if they share the **same color** code.

Return the **maximum** amount of money you can rob.

## Approach / Thoughts
[[Biweekly Contest 176]]

dp on adjacent runs

## Solution
```python
class Solution:
    def rob(self, nums: List[int], colors: List[int]) -> int:

        @lru_cache(None)
        def dfs(end, k):
            if k >= end:
                return 0

            take = nums[k] + dfs(end, k+2)
            skip = dfs(end, k+1)
            return max(take, skip)
                
        
        res = i = j = 0
        n = len(nums)

        while i < n:
            j = i

            while j < n and colors[i] == colors[j]:
                j += 1

            res += dfs(j, i)
            i = j
        return res
```
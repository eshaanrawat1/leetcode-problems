---
date: 2026-05-16
difficulty: Hard
num: 3500
related_topics:
  - Array
  - Dynamic Programming
  - Prefix Sum
return: Review
---

# Problem: 3500. Minimum Cost to Divide Array Into Subarrays

## Description
You are given two integer arrays, `nums` and `cost`, of the same size, and an integer `k`.

You can divide `nums` into subarrays. The cost of the `ith` subarray consisting of elements `nums[l..r]` is:

	`(nums[0] + nums[1] + ... + nums[r] + k * i) * (cost[l] + cost[l + 1] + ... + cost[r])`.

**Note** that `i` represents the order of the subarray: 1 for the first subarray, 2 for the second, and so on.

Return the **minimum** total cost possible from any valid division.

## Approach / Thoughts
[[Biweekly Contest 153]]

dp with prefix sum
algebra - penalty cost gets carried forward

## Solution
```python
class Solution:
    def minimumCost(self, nums, cost, k):

        n = len(nums)
        psn = nums[:]
        psc = cost[:]

        for i in range(1, n):
            psn[i] += psn[i-1]
            psc[i] += psc[i-1]
        tc = psc[-1]

        @lru_cache(None)
        def dfs(i):
            if i >= n:
                return 0

            res = inf            
            for j in range(i, n):
                a = psn[j]
                b = psc[j] - psc[i-1] if i != 0 else psc[j]
                rem = tc - psc[j]
                res = min(res, a*b + b*k + k*rem + dfs(j+1))
            return res
            
        return dfs(0)
```
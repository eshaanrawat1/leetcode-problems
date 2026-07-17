---
date: 2025-05-02
difficulty: Hard
num: 3250
related_topics:
  - Array
  - Combinatorics
  - Dynamic Programming
  - Math
  - Prefix Sum
return: Done
---

# Problem: 3250. Find The Count Of Monotonic Pairs I

## Description
same, arr1[i] + arr2[i] = nums[i] and arr1 is increasing, arr2 is decreasing

## Approach / Thoughts
dfs, consider all possible values at index, keep track of previous values for both arrays

## Solution
```python
class Solution:
    def countOfPairs(self, nums: List[int]) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        
        dp = [[-1] * 51 for _ in range(n)]

        def dfs(i, prev_a, prev_b):
            if i >= n:
                return 1
            if dp[i][prev_a] != -1:
                return dp[i][prev_a]

            res = 0
            for j in range(nums[i]+1):
                k = nums[i] - j
                if j >= prev_a and k <= prev_b:
                    res += dfs(i+1, j, k)

            dp[i][prev_a] = res % MOD
            return dp[i][prev_a]

        return dfs(0, 0, 50)
```

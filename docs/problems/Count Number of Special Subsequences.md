---
date: 2026-03-15
difficulty: Hard
num: 1955
related_topics:
  - Senior Staff
  - Array
  - Dynamic Programming
return:
---

# Problem:  

## Description
A sequence is **special** if it consists of a **positive** number of `0`s, followed by a **positive** number of `1`s, then a **positive** number of `2`s.

- For example, `[0,1,2]` and `[0,0,1,1,1,2]` are special.
- In contrast, `[2,1,0]`, `[1]`, and `[0,1,2,0]` are not special.

Given an array `nums` (consisting of **only** integers `0`, `1`, and `2`), return _the **number of different subsequences** that are special_. Since the answer may be very large, **return it modulo** `109 + 7`.

A **subsequence** of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. Two subsequences are **different** if the **set of indices** chosen are different.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
keep track of prev, if cur = prev or cur = prev+1, then is valid subsequence
if by end of seq, prev = 2, is valid

## Solution
```python
class Solution:
    def countSpecialSubsequences(self, nums: List[int]) -> int:
        n = len(nums)
        mod = 10**9+7

        dp = [[-1] * 4 for _ in range(n)]

        def dfs(i, prev):
            if i == n:
                return prev == 2
            if dp[i][prev] != -1:
                return dp[i][prev]

            res = dfs(i+1, prev) % mod
            if nums[i] == prev or nums[i] == prev+1:
                res += dfs(i+1, nums[i])

            dp[i][prev] = res % mod
            return res % mod
        return dfs(0, -1)
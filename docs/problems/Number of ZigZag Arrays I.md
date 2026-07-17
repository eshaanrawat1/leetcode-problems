---
date: 2026-03-11
difficulty: Medium
num: 3699
related_topics:
  - Senior Staff
  - Dynamic Programming
  - Prefix Sum
return: Review
---

# Problem:  

## Description
You are given three integers `n`, `l`, and `r`.

A **ZigZag** array of length `n` is defined as follows:

- Each element lies in the range `[l, r]`.
- No **two** adjacent elements are equal.
- No **three** consecutive elements form a **strictly increasing** or **strictly decreasing** sequence.

Return the total number of valid **ZigZag** arrays.

Since the answer may be large, return it **modulo** `109 + 7`.

A **sequence** is said to be **strictly increasing** if each element is strictly greater than its previous one (if exists).

A **sequence** is said to be **strictly decreasing** if each element is strictly smaller than its previous one (if exists).

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
dp with prefix sum -> what is the recurrence that each `dp[i][j]` depends on

Special category of: [[Prefix Sum]]

Other learnings
- relative ordering (l to r doesn't matter just number relative to left or right)
- writing out the recurrence in terms of `dp[i][j]` is very helpful, esp when prefix optimizations can't be done top down 
- try for symmetry - ie don't need to handle both zig zags just multiply by two

## Solution
```python
class Solution:
    def zigZagArrays(self, n: int, l: int, r: int) -> int:
        mod = 10**9+7

        dp = [[0] * (r+1) for _ in range(n)]
        dp[0] = [1] * (r+1)

        # dp[i][v] -> seq of len i, ending at v
        
        # i & 1 -> next number is inc
        # dp[i][v] = sum(dp[i-1][u]) where u > v
        # for each v, calc pref sum

        # else -> next number is dec
        # dp[i][v] = sum(dp[i-1][u]) where u < v

        # pre -> prefix sum of dp[i-1] (arr of all v)
        # 1 ... 15 ... 100

        for i in range(1, n):
            pre = dp[i-1][:]
            for j in range(1, r+1):
                pre[j] += pre[j-1]

            if i & 1:
                for v in range(l, r+1):
                    val = pre[-1] - pre[v]
                    dp[i][v] = val % mod
            else:
                for v in range(l, r+1):
                    val = pre[v-1]
                    dp[i][v] = val % mod
        return sum(dp[-1]) * 2 % mod
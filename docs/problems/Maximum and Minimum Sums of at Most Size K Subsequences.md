---
date: 2026-05-13
difficulty: Medium
num: 3428
related_topics:
  - Array
  - Math
  - Dynamic Programming
  - Sorting
  - Combinatorics
return:
---

# Problem: 3428. Maximum and Minimum Sums of at Most Size K Subsequences

## Description
You are given an integer array `nums` and a positive integer `k`. Return the sum of the **maximum** and **minimum** elements of all ****subsequences** of `nums` with **at most** `k` elements.

Since the answer may be very large, return it **modulo** `109 + 7`.

## Approach / Thoughts
[[Weekly Contest 433]]

sort and count
use combs + mod inv for fast

## Solution
```python
class Solution:
    def minMaxSums(self, nums: List[int], k: int) -> int:
        mod = 10**9+7
        n = len(nums)

        f = [1]
        for i in range(1, n+1):
            f.append(f[-1] * i % mod)

        modinv = {x : pow(x, mod-2, mod) for x in f}

        def calc(nums):
            res = 0
            for i in range(n):
                rem = n - i - 1
                for j in range(k):
                    if j > rem:
                        break
                    c = f[rem] * modinv[f[rem-j]] % mod * modinv[f[j]] % mod   
                    res += nums[i] * c
                    res %= mod
            return res

        s = sorted(nums)
        return (calc(s) + calc(s[::-1])) % mod
```
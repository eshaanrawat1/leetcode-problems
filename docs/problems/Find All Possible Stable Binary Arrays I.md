---
date: 2026-03-10
difficulty: Medium
num: 3219
related_topics:
  - Staff
  - Dynamic Programming
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given 3 positive integers `zero`, `one`, and `limit`.

A binary array `arr` is called **stable** if:

- The number of occurrences of 0 in `arr` is **exactly** `zero`.
- The number of occurrences of 1 in `arr` is **exactly** `one`.
- Each subarray of `arr` with a size greater than `limit` must contain **both** 0 and 1.

Return the _total_ number of **stable** binary arrays.

Since the answer may be very large, return it **modulo** `109 + 7`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
how many runs of 0s or 1s can be placed alternating 
ie, if limit is 10, iterate from 1-10, can place this many 0s if prev = 1 and vice versa
keep alternating while valid

Learnings
- think in terms of alternates -> knapsack on sequences rather than individual elements

## Solution
```python
class Solution:
    def numberOfStableArrays(self, zero: int, one: int, limit: int) -> int:
        mod = 10**9+7

        @lru_cache(None)
        def dfs(zc, oc, prev):
            if zc == zero and oc == one:
                return 1

            p0 = p1 = 0
            for i in range(1, limit+1):
                if zc + i <= zero and prev != 0:
                    p0 += dfs(zc+i, oc, 0)
                    p0 %= mod
                    
                if oc + i <= one and prev != 1:
                    p1 += dfs(zc, oc+i, 1)
                    p1 %= mod
                    
            return (p0 + p1) % mod
        
        return dfs(0, 0, None)
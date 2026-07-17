---
date: 2025-12-16
difficulty: Medium
num: 823
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
  - Sorting
return: Done
---

# Problem: 823. Binary Trees With Factors

## Description
number of ways to build binary tree such that each non leaf node has 2 children x,y where x*y = node.val

## Approach / Thoughts
get factors and dp

dp[x] how many ways to create a binary tree with x as root

dp[x] = dp[left] * dp[right] where left, right are factor pairs

## Solution
```python
class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        dp = {a:1 for a in arr}

        factor_set = defaultdict(set)
        arr_set = set(arr)

        def get_factors(n):
            factors = set()
            for i in range(1, ceil(sqrt(n))+1):
                if n % i == 0:
                    factors.add(i)
                    factors.add(n//i)

            pairs = set()
            for f in factors:
                if f in arr_set and n / f in arr_set:
                    pairs.add(f)

                    x, y = f, n//f
                    x, y = min(x,y), max(x,y)
                    if (x,y) not in factor_set[n]:
                        factor_set[n].add((x, y))

        arr.sort()
        for a in arr:
            get_factors(a)
        
        res = 0
        mod = pow(10,9) + 7

        for a in arr:
            for x, y in factor_set[a]:
                v = 2 if x != y else 1
                dp[a] += (v * (dp[x] * dp[y]))
                dp[a] %= mod

        return sum(dp.values()) % mod
```

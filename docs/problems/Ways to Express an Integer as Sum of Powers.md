---
date: 2025-08-14
difficulty: Medium
num: 2787
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 2787. Ways To Express An Integer As Sum Of Powers

## Description
same powers of x

## Approach / Thoughts
knapsack take skip

max possible val is root of that power

## Solution
```python
class Solution:
    def numberOfWays(self, n: int, x: int) -> int:
        max_bound = ceil(pow(n, 1/x) + 1) if x != 1 else n
        MOD = (10 ** 9 + 7)

        @lru_cache(None)
        def dfs(i, cur_sum):
            if cur_sum > n:
                return 0
            if i > max_bound:
                return 1 if cur_sum == n else 0

            if cur_sum + pow(i, x) > n:
                return dfs(i+1, cur_sum) % MOD

            take = dfs(i+1, cur_sum + pow(i, x)) % MOD
            skip = dfs(i+1, cur_sum) % MOD

            return (take + skip) % MOD

        return dfs(1, 0) % MOD
```

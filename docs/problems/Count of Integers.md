---
date: 2026-01-05
difficulty: Hard
num: 2719
related_topics:
  - Dynamic Programming
  - Math
  - String
return: Done
---

# Problem: 2719. Count Of Integers

## Description

## Approach / Thoughts
digit dp and bound, hi - lo

## Solution
```python
class Solution:
    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:
        mod = 10**9+7

        @lru_cache(None)
        def dfs(i, N, bound, cur_max, dig_max, dig_sum):
            if dig_sum > dig_max:
                return 0
            if i >= N:
                return 1

            res = 0
            if bound:
                cur_place = int(cur_max[i])
                for j in range(cur_place+1):
                    if j == cur_place:
                        res += dfs(i+1, N, True, cur_max, dig_max, dig_sum+j)
                    else:
                        res += dfs(i+1, N, False, cur_max, dig_max, dig_sum+j)
            else:
                for j in range(10):
                    res += dfs(i+1, N, False, cur_max, dig_max, dig_sum+j)
 
            return res

        nn1 = str(int(num1)-1)
        m = len(num2)
        n = len(nn1)

        hi = dfs(0, m, True, num2, max_sum, 0) - dfs(0, m, True, num2, min_sum-1, 0)
        lo = dfs(0, n, True, nn1, max_sum, 0) - dfs(0, n, True, nn1, min_sum-1, 0)
        return (hi - lo) % mod
```

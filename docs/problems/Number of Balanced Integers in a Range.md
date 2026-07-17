---
date: 2026-01-04
difficulty: Hard
num: 3791
related_topics:
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 3791. Number Of Balanced Integers In A Range

## Description
same, sum odd index digits = sum even index digits

## Approach / Thoughts
digit dp, track bound to see if num > high

f(hi) - f(low-1) : inclusive

## Solution
```python
class Solution:
    def countBalanced(self, low: int, high: int) -> int:
        m = len(str(high))
        n = len(str(low-1))

        @lru_cache(None)
        def dfs(i, N, bound, hi, diff):
            if i >= N:
                return (diff == 0)

            res = 0
            sign = 1 if i % 2 == 0 else -1

            if bound:
                cur_max = int(str(hi)[i])
                for j in range(cur_max+1):
                    if j == cur_max:
                        res += dfs(i+1, N, True, hi, diff+sign*j)
                    else:
                        res += dfs(i+1, N, False, hi, diff+sign*j)
            else:
                for j in range(10):
                    res += dfs(i+1, N, False, hi, diff+sign*j)
            return res

        return dfs(0, m, True, high, 0) - dfs(0, n, True, low-1, 0)
```

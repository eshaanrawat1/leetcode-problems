---
date: 2026-06-05
difficulty: Hard
num: 2801
related_topics:
  - String
  - Dynamic Programming
return:
---

# Problem: 2801. Count Stepping Numbers in Range

## Description
Given two positive integers `low` and `high` represented as strings, find the count of **stepping numbers** in the inclusive range `[low, high]`.

A **stepping number** is an integer such that all of its adjacent digits have an absolute difference of **exactly** `1`.

Return *an integer denoting the count of stepping numbers in the inclusive range* `[low, high]`*. *

Since the answer may be very large, return it **modulo** `109 + 7`.

**Note:** A stepping number should not have a leading zero.

## Approach / Thoughts
[[Digit DP]]

same deal, tight bounds and all - but only difference is we add 1 at the end (means the number is valid up to now)
- every branch we take must be valid, so when we reach the end it is valid
- handle special case of all leading 0s and single digit (prev == -1) case
- subtract 1 at the end since 0 is valid technically 
## Solution
```python
class Solution:
    def countSteppingNumbers(self, low: str, high: str) -> int:
        mod = 10**9+7

        def f(num):
            s = str(num)
            n = len(s)

            @lru_cache(None)
            def dp(i, tight, prev, l0):
                if i >= n:
                    return 1

                res = 0
                lim = int(s[i]) if tight else 9

                for j in range(lim+1):
                    t = tight and (j == lim)
                    nl0 = l0 and (j == 0)

                    if nl0:
                        res += dp(i+1, t, -1, nl0)

                    elif prev == -1:
                        res += dp(i+1, t, j, nl0)

                    elif abs(j-prev) == 1:
                        res += dp(i+1, t, j, nl0)

                return res 

            return dp(0, True, -1, True)


        l, r = max(0, int(low)-1), int(high)
        res = f(r) - (f(l) - 1) - 1
        return res % mod
```
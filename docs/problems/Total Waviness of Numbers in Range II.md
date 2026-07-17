---
date: 2026-06-05
difficulty: Hard
num: 3753
related_topics:
  - Math
  - Dynamic Programming
return: Review
---

# Problem: 3753. Total Waviness of Numbers in Range II

## Description
You are given two integers `num1` and `num2` representing an **inclusive** range `[num1, num2]`.

The **waviness** of a number is defined as the total count of its **peaks** and **valleys**:

	- A digit is a **peak** if it is **strictly greater** than both of its immediate neighbors.

	- A digit is a **valley** if it is **strictly less** than both of its immediate neighbors.

	- The first and last digits of a number **cannot** be peaks or valleys.

	- Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range `[num1, num2]`.

## Approach / Thoughts
[[Digit DP]]

hard digit dp - got 99% of the intuition but didn't realize that i wasn't enumerating all numbers
- that would be impossible and tle
- we enumerate every group of 3 - think of a top down tree -> when we find a waviness, that contributes 1 to every possible number that has this prefix somewhere

## Solution
```python
class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        p10 = [10**i for i in range(16)]

        def f(num):
            s = str(num)
            n = len(s)

            def cnt(i, tight):
                if tight:
                    sub = s[i+1:] or '0'
                    return int(sub)+1
                
                return p10[n-i-1]

            @lru_cache(None)
            def dp(i, tight, p2, p1, l0):
                if i >= n:
                    return 0

                res = 0
                lim = int(s[i]) if tight else 9

                for j in range(lim+1):
                    t = tight and (j == lim)
                    nl0 = l0 and (j == 0)
                    suf = cnt(i, t)

                    if nl0:
                        res += dp(i+1, t, -1, -1, nl0)

                    elif p1 > p2 and p1 > j and p2 != -1:
                        res += suf + dp(i+1, t, p1, j, nl0)
                    
                    elif p1 < p2 and p1 < j and p2 != -1:
                        res += suf + dp(i+1, t, p1, j, nl0)

                    else:
                        res += dp(i+1, t, p1, j, nl0)
                return res

            return dp(0, True, -1, -1, True)

        return f(num2) - f(max(0, num1-1))
```
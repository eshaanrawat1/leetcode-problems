---
date: 2026-05-21
difficulty: Medium
num: 2571
related_topics:
  - Dynamic Programming
  - Greedy
  - Bit Manipulation
return:
---

# Problem: 2571. Minimum Operations to Reduce an Integer to 0

## Description
You are given a positive integer `n`, you can do the following operation **any** number of times:

	Add or subtract a **power** of `2` from `n`.

Return *the **minimum** number of operations to make *`n`* equal to *`0`.

A number `x` is power of `2` if `x == 2i` where `i >= 0`*.*

## Approach / Thoughts
dp relation - find closest power of 2, dp calc the difference

can also use bit shifts - eliminate consecutive runs of 1s greedy style
use & 3 to check

## Solution
```python
class Solution:
    def minOperations(self, n: int) -> int:

        powers = [pow(2,i) for i in range(18)]
        dp = Counter()

        for p in powers:
            dp[p] = 1

        for i in range(n+1):
            if dp[i] == 1:
                continue

            l = powers[bisect_right(powers, i) - 1]
            r = powers[bisect_right(powers, i)]
            
            ld = i - l
            rd = r - i

            dp[i] = min(1 + dp[ld], 1 + dp[rd])

        return dp[n]
        
        
class Solution:
    def minOperations(self, n: int) -> int:
        res = 0
        while n > 0:
            if n == 1:
                return res + 1
            if n == 3:
                return res + 2

            if n & 3 == 3:
                n += 1
                res += 1
            else:
                if n & 1:
                    res += 1      
            n >>= 1
        return res
```
---
date: "2026-07-06"
difficulty: "Hard"
rating: 2070
num: "1808"
related_topics:
  - "math"
  - "recursion"
  - "number-theory"
  - "product-sequence"
return:
---

# Problem: 1808. Maximize Number of Nice Divisors

## Approach / Thoughts

becomes a reduction problem - the exponents only matter so find the maximum sequence of numbers who sum to primeFactor and max product - basically everything can be reduced to 2s and 3s, so greedily take 3s and handle the edge case where we have remainder 1 - remove a 3 and add a 2

thought it was dp initially because sum could be constructed by halves but that was too limiting - also didn't realize that this was a simple greedy proof for always taking 3s which seems obvious in hindsight

## Solution

```python
class Solution:
    def maxNiceDivisors(self, primeFactors: int) -> int:
        # 5
        # 2 2 2 2 2 = 32
        # div = 2, 4, 8, 16, 32

        # finding the number n is probably irrelevant
        # most likely some combinatorics type problem based
        # on the number of unique prime factors

        # 2 3 5 7 11
        # want to minimize uniqueness as much as possible?
        # above example only has 1 valid factor - itself

        # maybe some kind of dp recurrence

        # 1 -> 1                     base case
        # 2 -> 2                     base case
        # 3 -> 3                     base case
        # 4 -> 4 (dp[2] * dp[2])
        # 5 -> 6 (dp[2] * dp[3])
        # 6 -> 9 (dp[3] * dp[3])
        # 7 -> 12 (dp[3] * dp[4])
        # 8 -> 18 (dp[3] * dp[5])    outlier even
        # 9 -> 27 (dp[3] * dp[3] * dp[3]) OR (dp[3] * dp[6]) outlier odd
        # 10 -> 36 (dp[5] * dp[5])
        # 11 -> 54 (dp[5] * dp[6])
        # 12 -> 81 (dp[6] * dp[6])
        # 13 -> 108 (dp[6] * dp[7])
        # 14 -> 162 (dp[6] * dp[8])  outlier even

        # max sequence product where seq sums to primeFactor
        # only take 2s and 3s 
        # mostly take 3s
        # primeFactors = 10
        # 3 3 3 -> cant take 2
        # 3 3 2 2

        mod = 10**9+7
        if primeFactors <= 3:
            return primeFactors

        threes, rem = divmod(primeFactors, 3)
        if rem == 0:
            return pow(3, threes, mod)
        
        if rem == 1:
            return pow(3, threes-1, mod) * 4 % mod

        return pow(3, threes, mod) * 2 % mod
```

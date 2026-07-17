---
date: 2024-12-07
difficulty: Hard
num: 2338
related_topics:
  - Combinatorics
  - Dynamic Programming
  - Math
  - Number Theory
return: Review
---

# Problem: 2338. Count The Number Of Ideal Arrays

## Description
arrays where i + 1 div i

## Approach / Thoughts
dp for basic case of how many increasing number sequences we can have

i.e. 1, 2, 4, 8 etc

stars and bars

## Solution
```python
class Solution:
    def idealArrays(self, n: int, maxValue: int) -> int:
        # factors
        factors = defaultdict(list)
        for i in range(1, maxValue):
            j = i * 2
            while j <= maxValue:
                factors[j].append(i)
                j += i

        # dp - seq of len i, end with j, div by k
        dp = [[0] * (maxValue+1) for _ in range(15)]
        for i in range(1, maxValue+1):
            dp[1][i] = 1

        for i in range(2, min(n+1, 15)):
            for j in range(1, maxValue+1):
                for k in factors[j]:
                    dp[i][j] += dp[i-1][k]

        for i in range(1, min(n+1, 15)):
            for j in range(1, maxValue+1):
                dp[i][0] += dp[i][j]

        # stars and bars
        res = 0
        for i in range(1, min(n+1, 15)):
            res += comb(n-1, i-1) * dp[i][0]
        return res % (10 ** 9 + 7)
```

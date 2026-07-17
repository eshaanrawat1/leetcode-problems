---
date: 2024-02-07
difficulty: Medium
num: 279
related_topics:
  - BFS
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 279. Perfect Squares

## Description
Find the minimum number of perfect squares that sum up to n

## Approach / Thoughts
Find all perfect squares

Use a DP solution to build from the bottom up - similar to coin change but coins are squares

- how many squares does it take to make 0

- how many does it take to make 1

- dp[2] = the minimum between itself (which is originally a large number) and dp[2-1] because 1 is the only coin so dp[2] = 1+ dp[1] and we know dp[1] is 1

## Solution
```python
class Solution:
    def numSquares(self, n: int) -> int:
        perfects = []
        for i in range(int(math.sqrt(n)+1)):
            if i*i <= n:
                perfects.append(i*i)
        
        dp = [n+1] * (n+1)
        dp[0] = 0

        for i in range(1, n+1):
            for p in perfects:
                if i - p >= 0:
                    dp[i] = min(dp[i], 1 + dp[i-p])

        return dp[n]
```

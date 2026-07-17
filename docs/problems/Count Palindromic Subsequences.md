---
date: 2025-07-04
difficulty: Hard
num: 2484
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 2484. Count Palindromic Subsequences

## Description
same, of length 5

## Approach / Thoughts
dp around prefix and suffix

## Solution
```python
class Solution:
    def countPalindromes(self, s: str) -> int:
        res, MOD = 0, 10 ** 9 + 7
        for x in range(10):
            for y in range(10):
                pattern = f"{x}{y}|{y}{x}"
                dp = [0, 0, 0, 0, 0, 1]

                for i in range(len(s)):
                    for j in range(5):
                        if s[i] == pattern[j] or j == 2:
                            dp[j] += dp[j+1]
                res = (res + dp[0]) % MOD
        return res
```

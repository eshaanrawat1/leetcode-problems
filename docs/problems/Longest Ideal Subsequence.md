---
date: 2024-04-24
difficulty: Medium
num: 2370
related_topics:
  - Dynamic Programming
  - Hash Table
  - String
return: Review
---

# Problem: 2370. Longest Ideal Subsequence

## Description
variation of LIS with check of ascii

## Approach / Thoughts
first LIS

then change to run 26 * n instead of all past ones

## Solution
```python
class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        dp = [0] * 26

        for index in s:
            letter = ord(index) - ord('a')
            best = 0

            for prev in range(26):
                diff = abs(letter - prev)
    
                if diff <= k:
                    best = max(best, dp[prev])

            dp[letter] = max(dp[letter], best+1)
        return max(dp)
```

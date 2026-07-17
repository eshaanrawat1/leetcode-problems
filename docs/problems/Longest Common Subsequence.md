---
date: 2024-04-24
difficulty: Medium
num: 1143
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1143. Longest Common Subsequence

## Description
LCS of two strings

## Approach / Thoughts
2d dp matrix consider case of eq and not, work from last cell in reverse to first

## Solution
```python
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        dp = [[0 for c in range(len(text2)+1)] for r in range(len(text1)+1)]
        for r in range(len(text1)-1,-1,-1):
            for c in range(len(text2)-1,-1,-1):
                if text1[r] == text2[c]:
                    dp[r][c] = 1 + dp[r+1][c+1]
                else:
                    dp[r][c] = max(dp[r+1][c], dp[r][c+1])
        return dp[0][0]
```

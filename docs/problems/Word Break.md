---
date: 2024-05-24
difficulty: Medium
num: 139
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
  - Memoization
  - String
  - Trie
return: Done
---

# Problem: 139. Word Break

## Description
see if we can break a word

## Approach / Thoughts
subproblems, bottom up check if can be broken from back

## Solution
```python
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s)+1)
        dp[-1] = True

        S = len(s)
        for i in range(len(s)-1,-1,-1):
            for w in wordDict:
                W = len(w)
                if (i + W) <= S and s[i : i + W] == w:
                    dp[i] = dp[i+W]
                if dp[i]:
                    break
        return dp[0]
```

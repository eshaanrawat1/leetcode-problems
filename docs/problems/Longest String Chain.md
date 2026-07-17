---
date: 2024-07-08
difficulty: Medium
num: 1048
related_topics:
  - Array
  - Dynamic Programming
  - Hash Table
  - Sorting
  - String
  - Two-Pointer
return: Done
---

# Problem: 1048. Longest String Chain

## Description

## Approach / Thoughts
sort strings by length

for each string check if prev chain exists, if it does find LIS

## Solution
```python
class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        dp = {}
        for word in sorted(words, key=len):
            dp[word] = 1
            for i in range(len(word)):
                prev = word[:i] + word[i+1:]
                if prev in dp:
                    dp[word] = max(dp[word], dp[prev] + 1)
        return max(dp.values())
```

---
date: 2025-05-16
difficulty: Medium
num: 2901
related_topics:
  - Array
  - Dynamic Programming
  - String
return: Done
---

# Problem: 2901. Longest Unequal Adjacent Groups Subsequence Ii

## Description
same, groups not equal and edit between adjacent is 1

## Approach / Thoughts
lis

## Solution
```python
class Solution:
    def getWordsInLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        n = len(words)

        def edit(w1, w2):
            if len(w1) != len(w2):
                return False

            res = 0
            for c1, c2 in zip(w1, w2):
                if c1 != c2:
                    res += 1
            return res <= 1

        dp = [1] * n
        idx = [[i] for i in range(n)]

        for i in range(n-1,-1,-1):
            for j in range(i+1, n):
                w1 = words[i]
                w2 = words[j]

                g1 = groups[i]
                g2 = groups[j]

                if edit(w1, w2) and g1 != g2:
                    if 1 + dp[j] > dp[i]:
                        dp[i] = 1 + dp[j]
                        idx[i] = [i] + idx[j]

        res = []
        for v in idx:
            if len(v) > len(res):
                res = v

        return [words[i] for i in res]
```

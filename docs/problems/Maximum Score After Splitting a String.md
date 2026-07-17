---
date: 2024-12-31
difficulty: Easy
num: 1422
related_topics:
  - Prefix Sum
  - String
return: Done
---

# Problem: 1422. Maximum Score After Splitting A String

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def maxScore(self, s: str) -> int:
        score = 0
        for i in range(1, len(s)):
            a = s[:i].count('0') + s[i:].count('1')
            score = max(score, a)
        return score
```

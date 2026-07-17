---
date: 2025-01-06
difficulty: Easy
num: 1408
related_topics:
  - Array
  - String
  - String Matching
return: Done
---

# Problem: 1408. String Matching In An Array

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        n = len(words)

        res = []
        for i in range(n):
            for j in range(n):
                if i != j and words[i] in words[j]:
                    res.append(words[i])
                    break
        return res
```

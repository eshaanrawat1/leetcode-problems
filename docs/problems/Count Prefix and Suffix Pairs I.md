---
date: 2025-01-07
difficulty: Easy
num: 3042
related_topics:
  - Array
  - Hash Function
  - Rolling Hash
  - String
  - String Matching
  - Trie
return: Done
---

# Problem: 3042. Count Prefix And Suffix Pairs I

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        res = 0
        for i, x in enumerate(words):
            for j in range(i+1, len(words)):
                y = words[j]
                if y.startswith(x) and y.endswith(x):
                    res += 1
        return res            
```

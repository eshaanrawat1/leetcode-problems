---
date: 2025-07-03
difficulty: Easy
num: 3330
related_topics:
  - String
return: Done
---

# Problem: 3330. Find The Original Typed String I

## Description
repeated characters could be less, find possible numbers of strings

## Approach / Thoughts
check consecutive groupings

## Solution
```python
class Solution:
    def possibleStringCount(self, word: str) -> int:
        res = i = 0
        N = len(word)
        
        while i < N:
            j = i
            while j < N and word[i] == word[j]:
                j += 1
            
            letters = j - i
            res += letters - 1
            i = j
        return res + 1
```

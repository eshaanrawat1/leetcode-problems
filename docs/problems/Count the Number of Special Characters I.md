---
date: 2024-04-25
difficulty: Easy
num: 3120
related_topics:
  - Hash Table
  - String
return: Done
---

# Problem: 3120. Count The Number Of Special Characters I

## Description
Check if lower and upper in string

## Approach / Thoughts
Keep track of ascii in set

## Solution
```python
class Solution:
    def numberOfSpecialChars(self, word: str) -> int:
        cnt = 0

        wset = set(word)
        for i in range(26):
            lower = i + 97
            upper = i + 65

            if chr(lower) in wset and chr(upper) in wset:
                cnt += 1
        return cnt
```

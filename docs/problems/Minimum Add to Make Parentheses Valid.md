---
date: 2024-10-08
difficulty: Medium
num: 921
related_topics:
  - Greedy
  - Stack
  - String
return: Done
---

# Problem: 921. Minimum Add To Make Parentheses Valid

## Description

## Approach / Thoughts
count mismatch open and close

## Solution
```python
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        o = c = 0
        max_o = max_c = 0

        for i in range(len(s)):
            o = o + 1 if s[~i] == '(' else o - 1
            c = c + 1 if s[i] == ')' else c - 1

            max_o = max(max_o, o)
            max_c = max(max_c, c)
        return max_o + max_c
```

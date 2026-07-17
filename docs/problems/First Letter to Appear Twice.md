---
date: 2024-12-10
difficulty: Easy
num: 2351
related_topics:
  - Bit Manipulation
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 2351. First Letter To Appear Twice

## Description

## Approach / Thoughts
set

## Solution
```python
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        se = set()
        for c in s:
            if c in se:
                return c
            se.add(c)
```

---
date: 2024-07-24
difficulty: Medium
num: 3227
related_topics:
  - Brainteaser
  - Game Theory
  - Math
  - String
return: Done
---

# Problem: 3227. Vowels Game In A String

## Description
alice can remove odd num of vowels

## Approach / Thoughts
alice only loses when there are no vowels

## Solution
```python
class Solution:
    def doesAliceWin(self, s: str) -> bool:
        return any(ch in 'aeiou' for ch in s)
```

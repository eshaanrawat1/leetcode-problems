---
date: 2024-09-10
difficulty: Easy
num: 2220
related_topics:
  - Bit Manipulation
return: Done
---

# Problem: 2220. Minimum Bit Flips To Convert Number

## Description

## Approach / Thoughts
string and check diff

## Solution
```python
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        s = bin(start)[2:]
        g = bin(goal)[2:]

        s = '0' * (50 - len(s)) + s
        g = '0' * (50 - len(g)) + g

        flips = 0
        for i in range(50):
            if s[i] != g[i]:
                flips += 1
        return flips
```

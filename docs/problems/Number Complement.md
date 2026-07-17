---
date: 2024-08-21
difficulty: Easy
num: 476
related_topics:
  - Bit Manipulation
return: Done
---

# Problem: 476. Number Complement

## Description

## Approach / Thoughts
find opposite

## Solution
```python
class Solution:
    def findComplement(self, num: int) -> int:
        s = bin(num)[2:]

        total = j = 0
        for i in range(len(s)-1,-1,-1):
            if s[i] == '0':
                total += (2 ** j)
            j += 1
        return total
```

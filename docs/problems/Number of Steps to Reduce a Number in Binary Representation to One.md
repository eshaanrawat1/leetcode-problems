---
date: 2024-05-28
difficulty: Medium
num: 1404
related_topics:
  - Bit Manipulation
  - String
return: Done
---

# Problem: 1404. Number Of Steps To Reduce A Number In Binary Representation To One

## Description
reduce number to 1

## Approach / Thoughts
convert from binary and count

## Solution
```python
class Solution:
    def numSteps(self, s: str) -> int:
        n = 0

        idx = 0
        for i in range(len(s)-1,-1,-1):
            if s[i] == '1':
                n += (2 ** idx)
            idx += 1
        
        count = 0
        while n != 1:
            if n % 2 == 0:
                n //= 2
            else:
                n += 1
            count += 1
        return count
```

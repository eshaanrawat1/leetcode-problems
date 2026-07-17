---
date: 2025-12-07
difficulty: Easy
num: 1925
related_topics:
  - Enumeration
  - Math
return: Done
---

# Problem: 1925. Count Square Sum Triples

## Description

## Approach / Thoughts
brute force doubles

## Solution
```python
class Solution:
    def countTriples(self, n: int) -> int:
        res = 0
        for i in range(1, n+1):
            for j in range(1, n+1):
                csq = pow(i,2) + pow(j,2)
                if sqrt(csq) == int(sqrt(csq)) and sqrt(csq) <= n:
                    res += 1
        return res
```

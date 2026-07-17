---
date: 2024-10-18
difficulty: Medium
num: 1545
related_topics:
  - Recursion
  - Simulation
  - String
return: Done
---

# Problem: 1545. Find Kth Bit In Nth Binary String

## Description
same, process string with instructions

## Approach / Thoughts
follow process, build on previous string

## Solution
```python
class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def invert(s):
            res = []
            for c in s:
                if c == '0':
                    res.append('1')
                else:
                    res.append('0')
            return ''.join(res)

        s = "0"
        for i in range(2, n+1):
            s = s + "1" + invert(s)[::-1]
        return s[k-1]
```

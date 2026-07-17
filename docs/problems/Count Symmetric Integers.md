---
date: 2025-04-10
difficulty: Easy
num: 2843
related_topics:
  - Enumeration
  - Math
return: Done
---

# Problem: 2843. Count Symmetric Integers

## Description
same, sum of first n == sum of last n

## Approach / Thoughts
brute force count all digits

## Solution
```python
class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        res = 0
        for i in range(low, high+1):
            s = str(i)
            N = len(s)
            if N % 2 == 0:
                first = sum(int(c) for c in s[:N//2])
                last = sum(int(c) for c in s[N//2:])
                res += (first == last)
        return res
```

---
date: 2025-01-04
difficulty: Medium
num: 2381
related_topics:
  - Array
  - Prefix Sum
  - String
return: Done
---

# Problem: 2381. Shifting Letters Ii

## Description
same, shift in range

## Approach / Thoughts
prefix sum

## Solution
```python
class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        n = len(s)
        ps = [0] * (n + 1)

        for a, b, sign in shifts:
            if sign == 0:
                ps[a] -= 1
                ps[b+1] += 1
            else:
                ps[a] += 1
                ps[b+1] -= 1

        for i in range(1, n):
            ps[i] += ps[i-1]

        res = list(s)
        for i in range(n):
            idx = ps[i] % 26
            l = (ord(res[i]) - ord('a') + idx) % 26
            res[i] = chr(l + 97)

        return ''.join(res)
```

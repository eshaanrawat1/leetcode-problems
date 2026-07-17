---
date: 2025-12-27
difficulty: Medium
num: 1888
related_topics:
  - Dynamic Programming
  - Sliding Window
  - String
return: Done
---

# Problem: 1888. Minimum Number Of Flips To Make The Binary String Alternating

## Description

## Approach / Thoughts
rotation can be covered with s+s and fixed length sliding window len(s) to cover all possible starts

check cost for o1, o2 only two alternating

## Solution
```python
class Solution:
    def minFlips(self, s: str) -> int:
        ss = s + s 
        n = len(s)

        o1 = '10' * n
        o2 = '01' * n
        o1c = o2c = 0

        l = 0
        for i in range(n):
            o1c += (s[i] != o1[i])
            o2c += (s[i] != o2[i])

        res = min(o1c, o2c)
        for r in range(n, 2*n):
            o1c -= (ss[l] != o1[l])
            o2c -= (ss[l] != o2[l])

            o1c += (ss[r] != o1[r])
            o2c += (ss[r] != o2[r])
            l += 1

            res = min(res, o1c, o2c)
        return res
            
```

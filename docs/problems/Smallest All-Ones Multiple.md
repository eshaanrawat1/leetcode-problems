---
date: 2025-12-28
difficulty: Medium
num: 3790
related_topics:
  - Math
return: Done
---

# Problem: 3790. Smallest All Ones Multiple

## Description

## Approach / Thoughts
check remainder

## Solution
```python
class Solution:
    def minAllOneMultiple(self, k: int) -> int:
        # 7:01 
        # forgot mod trick, tried to handle big ints
        # easy after mod

        if k % 2 == 0 or k % 5 == 0:
            return -1 

        res = cnt = 1
        while True:
            if res % k == 0:
                return cnt
            res = (res * 10 + 1) % k
            cnt += 1
```

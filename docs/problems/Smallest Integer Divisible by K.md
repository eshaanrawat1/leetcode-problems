---
date: 2025-11-24
difficulty: Medium
num: 1015
related_topics:
  - Hash Table
  - Math
return: Done
---

# Problem: 1015. Smallest Integer Divisible By K

## Description
same, x % k == 0, x is only 1s

## Approach / Thoughts
keep 1s only track mod rules

## Solution
```python
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if k % 2 == 0 or k % 5 == 0:
            return -1

        x = res = 1
        for _ in range(10**5):
            if x % k == 0:
                return res

            x = (x * 10 + 1) % k
            res += 1
        return -1
```

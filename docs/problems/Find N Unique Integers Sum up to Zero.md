---
date: 2025-09-06
difficulty: Easy
num: 1304
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 1304. Find N Unique Integers Sum Up To Zero

## Description

## Approach / Thoughts
add 0 if odd, add +i, -i

## Solution
```python
class Solution:
    def sumZero(self, n: int) -> List[int]:
        res = []
        if n % 2 == 1:
            res.append(0)
            n -= 1

        for i in range(1, n // 2 + 1):
            res.append(i)
            res.append(-i)
        return res
```

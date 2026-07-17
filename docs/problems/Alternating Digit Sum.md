---
date: 2024-11-01
difficulty: Easy
num: 2544
related_topics:
  - Math
return: Done
---

# Problem: 2544. Alternating Digit Sum

## Description

## Approach / Thoughts
check sign and get digit

## Solution
```python
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        res = 0

        sign = 1 if len(str(n)) % 2 == 1 else -1

        while n > 0:
            res += (sign * (n % 10))
            n //= 10
            sign *= -1
        return res
        
```

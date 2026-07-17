---
date: 2024-08-16
difficulty: Easy
num: 415
related_topics:
  - Math
  - Simulation
  - String
return: Done
---

# Problem: 415. Add Strings

## Description

## Approach / Thoughts
add and account for carry

## Solution
```python
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        if len(num1) < len(num2):
            num1, num2 = num2, num1
        N1, N2 = len(num1), len(num2)

        num1, num2 = num1[::-1], num2[::-1]

        i = carry = 0
        res = []

        while i < N1 or carry:
            v1 = int(num1[i]) if i < N1 else 0
            v2 = int(num2[i]) if i < N2 else 0

            cur_sum = v1 + v2 + carry
            carry = cur_sum // 10
            
            res.append(str(cur_sum % 10))
            i += 1

        return ''.join(res[::-1])
```

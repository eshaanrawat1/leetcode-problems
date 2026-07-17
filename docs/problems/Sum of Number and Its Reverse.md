---
date: 2024-01-20
difficulty: Medium
num: 2443
related_topics:
  - Enumeration
  - Math
return: Done
---

# Problem: 2443. Sum Of Number And Its Reverse

## Description
Return true if a number n can be expressed as the sum of a number and its reverse.

## Approach / Thoughts
Constraint is small enough to check every number and its reverse by string conversion.

## Solution
```python
class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        if num == 0:
            return True
            
        for i in range(num):
            if i + int(str(i)[::-1]) == num:
                return True
        return False
```

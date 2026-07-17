---
date: 2025-05-26
difficulty: Easy
num: 2894
related_topics:
  - Math
return: Done
---

# Problem: 2894. Divisible And Non Divisible Sums Difference

## Description

## Approach / Thoughts
count and loop

## Solution
```python
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1 = num2 = 0
        for i in range(1, n+1):
            if i % m:
                num1 += i
            else:
                num2 += i
        return num1 - num2
```

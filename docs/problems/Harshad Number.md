---
date: 2024-03-31
difficulty: Easy
num: 3099
related_topics:
  - Array
return: Done
---

# Problem: 3099. Harshad Number

## Description
Return if number is divisible by the sum of its digits

## Approach / Thoughts
Add digits and convert

## Solution
```python
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        total, num = 0, x
        while num > 0:
            total += num % 10
            num //= 10
        
        return total if x % total == 0 else -1
```

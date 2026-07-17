---
date: 2026-07-07
difficulty: Easy
num: 263
related_topics:
  - Math
return:
---

# Problem: 263. Ugly Number

## Description
An **ugly number** is a *positive* integer which does not have a prime factor other than 2, 3, and 5.

Given an integer `n`, return `true` *if* `n` *is an **ugly number***.

## Approach / Thoughts
div

## Solution
```python
class Solution:
    def isUgly(self, n: int) -> bool:
        if n == 0:
            return False

        while n != 1:
            if n % 2 == 0: n //= 2
            elif n % 3 == 0: n //= 3
            elif n % 5 == 0: n //= 5
            else: return False
        return True
```
---
date: 2026-06-03
difficulty: Medium
num: 3751
related_topics:
  - Math
  - Dynamic Programming
  - Enumeration
return:
---

# Problem: 3751. Total Waviness of Numbers in Range I

## Description
You are given two integers `num1` and `num2` representing an **inclusive** range `[num1, num2]`.

The **waviness** of a number is defined as the total count of its **peaks** and **valleys**:

	A digit is a **peak** if it is **strictly greater** than both of its immediate neighbors.

	A digit is a **valley** if it is **strictly less** than both of its immediate neighbors.

	The first and last digits of a number **cannot** be peaks or valleys.

	Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range `[num1, num2]`.

## Approach / Thoughts
brute force count peaks and valleys

## Solution
```python
class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        
        def cnt(num):
            res = 0

            s = str(num)
            for i in range(1, len(s)-1):
                prv = int(s[i-1])
                cur = int(s[i])
                nxt = int(s[i+1])

                if cur > prv and cur > nxt:
                    res += 1

                if cur < prv and cur < nxt:
                    res += 1
            return res

        return sum(cnt(x) for x in range(num1, num2+1))
```
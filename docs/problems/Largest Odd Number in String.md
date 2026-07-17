---
date: 2023-12-07
difficulty: Easy
num: 1903
related_topics:
  - Greedy
  - Math
  - String
return: Done
---

# Problem: 1903. Largest Odd Number In String

## Description
Given a string representing a number, find the largest odd number inside of it.

## Approach / Thoughts
Find the right-most odd digit because that will make the largest odd number. Set a check at the very end and decrement until odd.

## Solution
```python
class Solution:
    def largestOddNumber(self, num: str) -> str:
        check = len(num) - 1

        while check >= 0:
            if int(num[check]) % 2 == 1:
                return num[:check+1]
            check -= 1
        return ""
```

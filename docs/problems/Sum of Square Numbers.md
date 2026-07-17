---
date: 2024-06-16
difficulty: Medium
num: 633
related_topics:
  - Binary Search
  - Math
  - Two-Pointer
return: Done
---

# Problem: 633. Sum Of Square Numbers

## Description
see if number is pythagorean triple

## Approach / Thoughts
check if one square exists

## Solution
```python
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for a in range(int(sqrt(c))+1):
            b = sqrt(c - a*a) 
            if b == int(b):
                return True
        return False
```

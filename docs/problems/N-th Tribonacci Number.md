---
date: 2024-03-30
difficulty: Easy
num: 1137
related_topics:
  - Dynamic Programming
  - Math
  - Memoization
return: Done
---

# Problem: 1137. N Th Tribonacci Number

## Description
Same as problem

## Approach / Thoughts
Tabulation

## Solution
```python
class Solution:
    def tribonacci(self, n: int) -> int:
        first, second, third = 0, 1, 1
        for i in range(n):
            first, second, third = second, third, first + second + third
        
        return first
```

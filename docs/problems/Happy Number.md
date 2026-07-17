---
date: 2024-04-05
difficulty: Easy
num: 202
related_topics:
  - Hash Table
  - Math
  - Two-Pointer
return: Done
---

# Problem: 202. Happy Number

## Description
Check if number is happy, sum squares until we get to 1

## Approach / Thoughts
Check if we get a loop in set

## Solution
```python
class Solution:
    def isHappy(self, n: int) -> bool:
        visited = set()

        while n > 1:
            n = sum([int(i) ** 2 for i in str(n)])

            if n in visited:
                return False
            visited.add(n)
        return True
```

---
date: 2024-03-12
difficulty: Easy
num: 2485
related_topics:
  - Math
  - Prefix Sum
return: Done
---

# Problem: 2485. Find Pivot Integer

## Description
Find number where everything to the left is equal to everything on the right of that number

## Approach / Thoughts
Prefix sum with some non-inclusive checks

## Solution
```python
class Solution:
    def pivotInteger(self, n: int) -> int:
        prefix = [0] * (n + 1)
        pre = 0
        for i in range(n+1):
            pre += i
            prefix[i] = pre

        for i in range(1, len(prefix)):
            if prefix[i-1] == (prefix[-1] - prefix[i]):
                return i
        return -1
```

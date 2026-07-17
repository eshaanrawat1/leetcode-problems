---
date: 2024-08-16
difficulty: Easy
num: 1523
related_topics:
  - Math
return: Done
---

# Problem: 1523. Count Odd Numbers In An Interval Range

## Description

## Approach / Thoughts
check cases

## Solution
```python
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        if low % 2 and high % 2:
            return (high - low ) // 2 + 1
        elif low % 2 or high % 2:
            return (high - low ) // 2 + 1
        else:
            return (high - low ) // 2 
```

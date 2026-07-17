---
date: 2025-05-10
difficulty: Easy
num: 1550
related_topics:
  - Array
return: Done
---

# Problem: 1550. Three Consecutive Odds

## Description

## Approach / Thoughts
loop

## Solution
```python
class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for i in range(len(arr)-2):
            if arr[i] % 2 == 1 and arr[i+1] % 2 == 1 and arr[i+2] % 2 == 1:
                return True
        return False
```

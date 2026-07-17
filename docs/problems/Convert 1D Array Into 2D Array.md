---
date: 2024-08-31
difficulty: Easy
num: 2022
related_topics:
  - Array
  - Matrix
  - Simulation
return: Done
---

# Problem: 2022. Convert 1D Array Into 2D Array

## Description

## Approach / Thoughts
check if dimensions match, build array

## Solution
```python
class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        if m * n != len(original):
            return []

        i, res = 0, []
        while i < len(original):
            res.append(original[i:i+n])
            i += n
        return res
```

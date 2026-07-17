---
date: 2025-12-27
difficulty: Easy
num: 1351
related_topics:
  - Array
  - Binary Search
  - Matrix
return: Done
---

# Problem: 1351. Count Negative Numbers In A Sorted Matrix

## Description

## Approach / Thoughts
brute force count

## Solution
```python
class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        res = 0
        for row in grid:
            for x in row:
                res += (x < 0)
        return res
```

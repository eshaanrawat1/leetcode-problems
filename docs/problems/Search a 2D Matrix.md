---
date: 2024-05-13
difficulty: Medium
num: 74
related_topics:
  - Array
  - Binary Search
  - Matrix
return: Done
---

# Problem: 74. Search A 2D Matrix

## Description

## Approach / Thoughts
binary search throw away rows then cols

## Solution
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])

        top, bot = 0, ROWS-1
        while top < bot:
            mid = (top + bot) // 2
            if matrix[mid][0] == target or matrix[mid][-1] == target:
                return True
            elif matrix[mid][0] > target:
                bot = mid - 1
            elif matrix[mid][0] < target < matrix[mid][-1]:
                top = mid
                break
            else:
                top = mid + 1

        l, r = 0, COLS-1
        while l <= r:
            mid = (l + r) // 2
            if matrix[top][mid] == target:
                return True
            elif matrix[top][mid] > target:
                r = mid - 1
            else:
                l = mid + 1
        return False
```

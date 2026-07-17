---
date: 2024-07-19
difficulty: Easy
num: 1380
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 1380. Lucky Numbers In A Matrix

## Description
find num which is min in row max in col

## Approach / Thoughts
just do it

## Solution
```python
class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        ROWS, COLS = len(matrix), len(matrix[0])
        mins = []

        for r in range(ROWS):
            tmp = [1e9, 1e9]
            for c in range(COLS):
                if matrix[r][c] < tmp[0]:
                    tmp = [matrix[r][c], c]
            mins.append(tmp)

        res = []
        for m in mins:
            val, col = m
            columns = [matrix[i][col] for i in range(ROWS)]

            if val == max(columns):
                res.append(val)
        return res
```

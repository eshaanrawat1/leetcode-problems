---
date: 2024-07-20
difficulty: Medium
num: 1605
related_topics:
  - Array
  - Greedy
  - Matrix
return: Review
---

# Problem: 1605. Find Valid Matrix Given Row And Column Sums

## Description

## Approach / Thoughts
greedy, start with max in each row and shift to the left

## Solution
```python
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        ROWS, COLS = len(rowSum), len(colSum)
        res = [[0] * COLS for _ in range(ROWS)]

        for r in range(ROWS):
            res[r][0] = rowSum[r]

        for c in range(COLS):
            cur_col_sum = 0
            for r in range(ROWS):
                cur_col_sum += res[r][c]

            cur_row = 0
            while cur_col_sum > colSum[c]:
                diff = cur_col_sum - colSum[c]
                shift = min(res[cur_row][c], diff)
                res[cur_row][c] -= shift
                res[cur_row][c+1] += shift
                cur_col_sum -= shift
                cur_row += 1
        return res
```

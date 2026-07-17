---
date: 2024-11-23
difficulty: Medium
num: 1975
related_topics:
  - Array
  - Greedy
  - Matrix
return: Done
---

# Problem: 1975. Maximum Matrix Sum

## Description
same, flip adjacent negatives

## Approach / Thoughts
check case of 0 and 1 negative

## Solution
```python
class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        N = len(matrix)
        neg_cnt = zero_cnt = 0
        total, max_neg = 0, float("inf")

        for r in range(N):
            for c in range(N):
                total += abs(matrix[r][c])
                max_neg = min(max_neg, abs(matrix[r][c]))

                if matrix[r][c] < 0:
                    neg_cnt += 1

                if matrix[r][c] == 0:
                    zero_cnt += 1

        if zero_cnt > 0:
            return total

        if neg_cnt % 2 == 1:
            return total + (2 * -max_neg)

        return total
```

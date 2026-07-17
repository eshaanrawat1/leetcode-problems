---
date: 2024-02-26
difficulty: Easy
num: 1572
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 1572. Matrix Diagonal Sum

## Description
Calculate diagonal sum of matrix

## Approach / Thoughts
Check if i == j or sum is equal to the length of matrix -1 (works since square matrix).

## Solution
```python
class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        total = 0
        for i in range(len(mat)):
            for j in range(len(mat)):
                if i == j or i + j == len(mat)-1:
                    total += mat[i][j]
        return total
        
```

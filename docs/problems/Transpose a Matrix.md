---
date: 2023-12-09
difficulty: Easy
num: 867
related_topics:
  - Array
  - Matrix
  - Simulation
return: Done
---

# Problem: 867. Transpose A Matrix

## Description
Return a transposed matrix

## Approach / Thoughts
First, create an array using a list comprehension. Transpose swaps rows and columns so a 3x2 matrix becomes a 2x3 matrix. When using list comprehensions, we create columns first with len(matrix) amount of rows.

Then assign t[j][i] to matrix[i][j]

## Solution
```python
class Solution:
    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:
        transposed = [[0 for c in range(len(matrix))] for r in range(len(matrix[0]))]

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                transposed[j][i] = matrix[i][j]

        return transposed
```

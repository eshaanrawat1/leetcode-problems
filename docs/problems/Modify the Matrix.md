---
date: 2024-02-15
difficulty: Easy
num: 3033
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 3033. Modify The Matrix

## Description
Replace each -1 entry with the max element in the column

## Approach / Thoughts
Create a column array and store the max element in each column in there

Change the array in place only changing the -1 elements

## Solution
```python
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        col_maxes = [float("-inf")] * len(matrix[0])
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if matrix[r][c] > col_maxes[c]:
                    col_maxes[c] = matrix[r][c]
                    
        for r in range(len(matrix)):
            for c in range(len(matrix[0])):
                if matrix[r][c] == -1:
                    matrix[r][c] = col_maxes[c]
                    
        return matrix
```

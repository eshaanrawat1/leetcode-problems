---
date: 2024-02-26
difficulty: Easy
num: 2133
related_topics:
  - Array
  - Hash Table
  - Matrix
return: Done
---

# Problem: 2133. Check If Every Row And Column Contains All Numbers

## Description
Same as problem, numbers from 1 to n inclusive where n is length of square matrix.

## Approach / Thoughts
Check if duplicates based on constraints

## Solution
```python
class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)

        for i in range(len(matrix)):
            if len(set(matrix[i])) != n: return False
            if len(set([matrix[j][i] for j in range(n)])) != n: return False
        return True
            
```

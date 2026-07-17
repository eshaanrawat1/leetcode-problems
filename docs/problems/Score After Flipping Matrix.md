---
date: 2024-05-12
difficulty: Medium
num: 861
related_topics:
  - Array
  - Bit Manipulation
  - Greedy
  - Matrix
return: Done
---

# Problem: 861. Score After Flipping Matrix

## Description
max score

## Approach / Thoughts
get max rows and max cols and then count binary

## Solution
```python
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        for i in range(m):
            if grid[i][0] == 0:
                for j in range(n):
                    grid[i][j] = 1 - grid[i][j]

        for j in range(1, n):
            count_zero = 0
            for i in range(m):
                if grid[i][j] == 0:
                    count_zero += 1
            if count_zero > m - count_zero:
                for i in range(m):
                    grid[i][j] ^= 1
        

        score = 0
        for i in range(m):
            for j in range(n):
                cScore = grid[i][j] << (n-j-1)
                score += cScore
        return score
```

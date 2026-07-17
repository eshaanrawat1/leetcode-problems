---
date: 2026-05-29
difficulty: Medium
num: 304
related_topics:
  - Array
  - Design
  - Matrix
  - Prefix Sum
return:
---

# Problem: 304. Range Sum Query 2D - Immutable

## Description
Given a 2D matrix `matrix`, handle multiple queries of the following type:

	Calculate the **sum** of the elements of `matrix` inside the rectangle defined by its **upper left corner** `(row1, col1)` and **lower right corner** `(row2, col2)`.

Implement the `NumMatrix` class:

	`NumMatrix(int[][] matrix)` Initializes the object with the integer matrix `matrix`.

	`int sumRegion(int row1, int col1, int row2, int col2)` Returns the **sum** of the elements of `matrix` inside the rectangle defined by its **upper left corner** `(row1, col1)` and **lower right corner** `(row2, col2)`.

You must design an algorithm where `sumRegion` works on `O(1)` time complexity.

## Approach / Thoughts
r2, c2 is the bottom right of the rectangle - thats the sum of the rectangle from 0,0 to r2, c2

if we have all of these prefix sums, we can eliminate the top portion of the box (everything above r1) and the left portion (left of c1)

handle the strip in the top left that is double counted

## Solution
```python
class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.matrix = matrix

        self.m = len(self.matrix)
        self.n = len(self.matrix[0])

        self.ps = [row[:] for row in self.matrix]
        self._build_prefix()


    def _build_prefix(self):
        for j in range(1, self.n):
            self.ps[0][j] += self.ps[0][j-1]

        for i in range(1, self.m):
            for j in range(self.n):
                if j == 0:
                    self.ps[i][j] += self.ps[i-1][j]
                else:
                    self.ps[i][j] += self.ps[i-1][j]
                    self.ps[i][j] += self.ps[i][j-1]
                    self.ps[i][j] -= self.ps[i-1][j-1]


    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        
        tot = self.ps[row2][col2]
        l = r = overlap = 0
        
        if row1 != 0:
            r = self.ps[row1-1][col2]
        
        if col1 != 0:
            l = self.ps[row2][col1-1]

        if row1 != 0 and col1 != 0:
            overlap = self.ps[row1-1][col1-1]

        return tot - l - r + overlap


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
```
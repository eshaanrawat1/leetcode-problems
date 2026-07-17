---
date: 2023-12-28
difficulty: Hard
num: 37
related_topics:
  - Array
  - Backtracking
  - Hash Table
  - Matrix
return: Done
---

# Problem: 37. Sudoku Solver

## Description
Solve a sudoku board

## Approach / Thoughts
Use backtracking

## Solution
```python
class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        def is_valid(row: int, col: int, g: str) -> bool:
            r, c = row // 3 * 3, col // 3 * 3

            not_in_row = g not in board[row]
            not_in_col = g not in [board[i][col] for i in range(9)]
            not_in_box = g not in [board[i][j] for i in range(r, r+3) for j in range(c, c+3)]

            return not_in_row and not_in_col and not_in_box

        def solve(row = 0, col = 0) -> bool:
            if row == 9:
                return True
            elif col == 9:
                return solve(row + 1, 0)
            elif board[row][col] != '.':
                return solve(row, col + 1)
            else:
                for guess in range(1, 10):
                    if is_valid(row, col, str(guess)):
                        board[row][col] = str(guess)
                        if solve(row, col + 1):
                            return True
                        board[row][col] = '.'
                return False 

        solve()
```

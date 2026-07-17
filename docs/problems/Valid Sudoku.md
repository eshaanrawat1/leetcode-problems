---
date: 2023-12-28
difficulty: Medium
num: 36
related_topics:
  - Array
  - Hash Table
  - Matrix
return: Done
---

# Problem: 36. Valid Sudoku

## Description
Check if a valid sudoku board exists from filled positions

## Approach / Thoughts
Iterate through each cell and check if that number is

- not in the row

- not in the col

- not in the box

Also check that the number doesn’t conflict with itself

## Solution
```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:

        # Helper function to check if valid
        def is_valid(row: int, col: int, val: int) -> bool:
            # Check the row 
            for c in range(len(board[0])):
                if val == board[row][c] and c != col:
                    return False

            # Check the col
            for r in range(len(board)):
                if val == board[r][col] and r != row: 
                    return False

            # Check the box 
            x_pos = row // 3
            y_pos = col // 3

            for r in range(x_pos * 3, x_pos * 3 + 3):
                for c in range(y_pos * 3, y_pos * 3 + 3):
                    if val == board[r][c] and (r != row and c != col):
                        return False 

            # no flags, is valid
            return True

        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] != '.' and not is_valid(i, j, board[i][j]):
                    return False
        return True
```

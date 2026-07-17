---
date: 2024-07-01
difficulty: Hard
num: 52
related_topics:
  - Backtracking
return: Done
---

# Problem: 52. N Queens Ii

## Description
same as first nqueens, count the number of solutions

## Approach / Thoughts
backtrack

## Solution
```python
class Solution:
    def totalNQueens(self, n: int) -> int:
        board = [['.'] * n for _ in range(n)]

        def is_valid(r, c):
            if 'Q' in board[r]:
                return False
            
            for i in range(n):
                if board[i][c] == 'Q':
                    return False
            
            pos_diag = r + c
            neg_diag = r - c

            for i in range(n):
                for j in range(n):
                    if i + j == pos_diag and board[i][j] == 'Q':
                        return False
                    if i - j == neg_diag and board[i][j] == 'Q':
                        return False
            return True

        self.count = 0
        def dfs(cur_row):
            if cur_row == n:
                self.count += 1
                return
            
            for c in range(n):
                if is_valid(cur_row, c):
                    board[cur_row][c] = 'Q'
                    dfs(cur_row+1)
                    board[cur_row][c] = '.'

        dfs(0)
        return self.count 
```

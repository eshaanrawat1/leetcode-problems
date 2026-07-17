---
date: 2024-07-01
difficulty: Hard
num: 51
related_topics:
  - Array
  - Backtracking
return: Done
---

# Problem: 51. N Queens

## Description
find all possible n queens arrangements

## Approach / Thoughts
dfs backtracking

## Solution
```python
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        board = [['.'] * n for _ in range(n)]

        def is_valid(r, c):
            if 'Q' in board[r]:
                return False
            
            for i in range(n):
                if board[i][c] == 'Q':
                    return False

            for row in range(n):
                for col in range(n):
                    if (row + col) == (r + c) and board[row][col] == 'Q':
                        return False
                    if (row - col) == (r - c) and board[row][col] == 'Q':
                        return False
            return True
        
        res = []
        def dfs(cur_row):
            if cur_row == n:
                tmp = ["".join(row) for row in board]
                res.append(tmp)
                return

            for c in range(n):
                if is_valid(cur_row, c):
                    board[cur_row][c] = 'Q'
                    dfs(cur_row+1)
                    board[cur_row][c] = '.'
        dfs(0)
        return res
```

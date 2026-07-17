---
date: 2024-05-22
difficulty: Medium
num: 130
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 130. Surrounded Regions

## Description
flip all surrounded regions

## Approach / Thoughts
flip temp all protected regions

wipe everything

reconvert protected

## Solution
```python
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        ROWS, COLS = len(board), len(board[0])

        # rows
        for c in range(COLS):
            self.dfs(board, 0, c)
            self.dfs(board, ROWS-1, c)

        # cols
        for r in range(ROWS):
            self.dfs(board, r, 0)
            self.dfs(board, r, COLS-1)

        # flip post check
        for r in range(ROWS):
            for c in range(COLS):
                if board[r][c] == 'O':
                    board[r][c] = 'X'
                elif board[r][c] == '#':
                    board[r][c] = 'O'
                

    def dfs(self, board, r , c):
        ROWS, COLS = len(board), len(board[0])

        if r < 0 or r == ROWS or c < 0 or c == COLS:
            return 
        if board[r][c] == 'X' or board[r][c] == '#':
            return
            
        if board[r][c] == 'O':
            board[r][c] = '#'

        
        self.dfs(board, r+1, c)
        self.dfs(board, r-1, c)
        self.dfs(board, r, c+1)
        self.dfs(board, r, c-1)
```

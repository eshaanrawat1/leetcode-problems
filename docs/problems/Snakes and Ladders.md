---
date: 2025-05-30
difficulty: Medium
num: 909
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 909. Snakes And Ladders

## Description

## Approach / Thoughts
bfs over all possible choices, handle busy work of converting cells to positions

## Solution
```python
class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        goal = n * n

        cords = {}
        def cell_to_cord():
            direction = i = 1
            res = []

            while i <= goal:
                j = i
                temp = []
                while j < i + n:
                    temp.append(j)
                    j += 1
                i = j

                if direction == -1:
                    temp.reverse()
                res.append(temp.copy())
                direction *= -1
            
            res.reverse()
            for i in range(n):
                for j in range(n):
                    cords[res[i][j]] = (i, j)
        cell_to_cord()
                
        q = deque([[1, 0]])
        visit = {1}

        while q:
            cur, steps = q.popleft()
            if cur == goal:
                return steps

            for nei in range(cur+1, min(cur+6, goal)+1):
                r, c = cords[nei]

                if board[r][c] != -1:
                    val = board[r][c]
                    if val not in visit:
                        visit.add(val)
                        q.append((val, steps+1))
                else:
                    if nei not in visit:
                        visit.add(nei)
                        q.append((nei, steps+1))
        return -1
```

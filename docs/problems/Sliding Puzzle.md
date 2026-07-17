---
date: 2024-11-24
difficulty: Hard
num: 773
related_topics:
  - Array
  - BFS
  - Matrix
return: Done
---

# Problem: 773. Sliding Puzzle

## Description
solve sliding tile puzzle minsteps

## Approach / Thoughts
bfs of all possible states

## Solution
```python
class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:

        def find_zero(state):
            row_idx = col_idx = None

            for r in range(2):
                for c in range(3):
                    if cur_state[r][c] == 0:
                        row_idx = r
                        col_idx = c
                        return (row_idx, col_idx)

        def swap_vertical(r, c, s):
            if r == 0:
                s = [s[0][:], s[1][:]]
                s[r][c], s[r+1][c] = s[r+1][c], s[r][c]
                return (tuple(s[0]), tuple(s[1]))
            else:
                s = [s[0][:], s[1][:]]
                s[r][c], s[r-1][c] = s[r-1][c], s[r][c]
                return (tuple(s[0]), tuple(s[1]))

        def swap_left(r, c, s):
            if c != 0:
                s = [s[0][:], s[1][:]]
                s[r][c], s[r][c-1] = s[r][c-1], s[r][c]
                return (tuple(s[0]), tuple(s[1]))

        def swap_right(r, c, s):
            if c != 2:
                s = [s[0][:], s[1][:]]
                s[r][c], s[r][c+1] = s[r][c+1], s[r][c]
                return (tuple(s[0]), tuple(s[1]))


        state = (tuple(board[0]), tuple(board[1]))

        visit = {state}
        q = deque([[state, 0]])

        while q:
            state, steps = q.popleft()
            if state == ((1,2,3), (4,5,0)):
                return steps

            cur_state = [list(state[0]), list(state[1])]
            r, c = find_zero(cur_state)

            x = swap_vertical(r, c, cur_state)
            y = swap_left(r, c, cur_state)
            z = swap_right(r, c, cur_state)

            if x and x not in visit:
                q.append([x, steps + 1])
                visit.add(x)
            if y and y not in visit:
                q.append([y, steps + 1])
                visit.add(y)
            if z and z not in visit:
                q.append([z, steps + 1])
                visit.add(z)
        return -1
```

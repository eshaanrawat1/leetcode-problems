---
date: 2025-12-30
difficulty: Hard
num: 1970
related_topics:
  - Array
  - BFS
  - Binary Search
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 1970. Last Day Where You Can Still Cross

## Description
same, new cell flooded each day

## Approach / Thoughts
bfs + binary search

## Solution
```python
class Solution:
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        
        def in_bounds(r, c):
            return 1 <= r <= row and 1 <= c <= col

        forbidden = {}
        for i, cell in enumerate(cells):
            forbidden[tuple(cell)] = i+1
        
        def bfs(max_day):
            q = deque()
            visit = set()

            for c in range(1, col+1):
                sink_day = forbidden[(1, c)]
                if sink_day > max_day:
                    q.append([1, c])
                    visit.add((1, c))

            while q:
                x, y = q.popleft()
                if x == row:
                    return True

                for nx, ny in [[x+1,y], [x-1,y], [x,y+1], [x,y-1]]:
                    if in_bounds(nx, ny) and (nx, ny) not in visit:
                        sink_day = forbidden[(nx, ny)]
                        if sink_day > max_day:
                            q.append((nx, ny))
                            visit.add((nx, ny))
            return False

        l, r = 0, row*col
        res = -1

        while l <= r:
            m = (l + r) // 2
            if bfs(m):
                res = m
                l = m + 1
            else:
                r = m - 1
        return res 


        
```

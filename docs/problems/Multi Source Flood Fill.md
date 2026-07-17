---
date: 2026-04-21
difficulty: Medium
num: 3905
related_topics:
  - Array
return:
---

# Problem:  

## Description
You are given two integers `n` and `m` representing the number of rows and columns of a grid, respectively.

You are also given a 2D integer array `sources`, where `sources[i] = [ri, ci, color​​​​​​​i]` indicates that the cell `(ri, ci)` is initially colored with `colori`. All other cells are initially uncolored and represented as 0.

At each time step, every currently colored cell spreads its color to all adjacent **uncolored** cells in the four directions: up, down, left, and right. All spreads happen simultaneously.

If **multiple** colors reach the same uncolored cell at the same time step, the cell takes the color with the **maximum** value.

The process continues until no more cells can be colored.

Return a 2D integer array representing the final state of the grid, where each cell contains its final color.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
bfs, greedy fill biggest colors, iterate in steps

## Solution
```python
class Solution:
    def colorGrid(self, n: int, m: int, sources: list[list[int]]):
        grid = [[0] * m for _ in range(n)]

        def in_bounds(r, c):
            return 0 <= r < n and 0 <= c < m

        pq = [[0, -color, r, c] for r,c,color in sources]
        heapq.heapify(pq)
        
        vis = {(r, c) for r,c,_ in sources}
        
        while pq:
            for _ in range(len(pq)):
                step, color, r, c = heapq.heappop(pq)
                color *= -1
                grid[r][c] = color
                
                for nr, nc in [[r+1,c], [r-1, c], [r,c+1], [r,c-1]]:
                    if in_bounds(nr, nc) and (nr, nc) not in vis:
                        heapq.heappush(pq, [step+1, -color, nr, nc])
                        vis.add((nr, nc))
        return grid
                
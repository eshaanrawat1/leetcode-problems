---
date: 2024-07-17
difficulty: Medium
num: 1631
related_topics:
  - Array
  - BFS
  - Binary Search
  - DFS
  - Heap (Priority Queue)
  - Matrix
  - Union Find
return: Review
---

# Problem: 1631. Path With Minimum Effort

## Description

## Approach / Thoughts
binary search, keep checking if min path is possible

## Solution
```python
class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        ROWS, COLS = len(heights), len(heights[0])

        def in_bounds(r, c):
            if r < 0 or c < 0 or r == ROWS or c == COLS:
                return False 
            return True

        def bfs(threshold):
            q = deque([[0, 0]])
            visit = set()

            while q:
                r, c = q.popleft()
                current = heights[r][c]

                if (r, c) == (ROWS-1, COLS-1):
                    return True
                if (r, c) in visit:
                    continue
                visit.add((r, c))

                for x, y in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                    if in_bounds(x, y) and abs(heights[x][y] - current) <= threshold:
                        q.append([x, y])
            return False


        l, r = 0, 10000001
        min_diff = float("inf")

        while l <= r:
            m = (l + r) // 2
            if bfs(m):
                r = m - 1
                min_diff = m
            else:
                l = m + 1
        return min_diff
```

---
date: 2025-09-22
difficulty: Medium
num: 427
related_topics:
  - Array
  - Divide and Conquer
  - Matrix
  - Tree
return: Done
---

# Problem: 427. Construct Quad Tree

## Description

## Approach / Thoughts
check leaf section and recursion

## Solution
```python
"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""

class Solution:
    def construct(self, grid: List[List[int]]) -> 'Node':

        def is_leaf(grid):
            vals = set()
            for row in grid:
                for v in row:
                    vals.add(v)
            return len(vals) == 1

        def dfs(grid):
            if len(grid) == 1 or is_leaf(grid):
                return Node(grid[0][0], True, None, None, None, None)

            n = len(grid)

            tl = dfs([row[:n//2] for row in grid[:n//2]])
            tr = dfs([row[n//2:] for row in grid[:n//2]])
            bl = dfs([row[:n//2] for row in grid[n//2:]])
            br = dfs([row[n//2:] for row in grid[n//2:]])

            if all([tl.val, tr.val, bl.val, br.val]):
                return Node(1, False, tl, tr, bl, br)
            return Node(0, False, tl, tr, bl, br)

        return dfs(grid) 
```

---
date: 2024-07-17
difficulty: Easy
num: 733
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
return: Done
---

# Problem: 733. Flood Fill

## Description

## Approach / Thoughts
normal dfs

handle edge case where fill color is already exist

## Solution
```python
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        ROWS, COLS = len(image), len(image[0])
        origin_color = image[sr][sc]

        def dfs(r, c):
            if r < 0 or c < 0 or r == ROWS or c == COLS:
                return 
            if image[r][c] != origin_color:
                return
            
            image[r][c] = color
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)
            
        if image[sr][sc] != color:
            dfs(sr, sc)
        return image
```

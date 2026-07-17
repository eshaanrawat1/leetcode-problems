---
date: 2024-07-04
difficulty: Medium
num: 785
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 785. Is Graph Bipartite

## Description
find if it could be split into two disjoint sets

## Approach / Thoughts
graph coloring alternating

## Solution
```python
class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:
        def bfs(node):
            colors = {}

            q = deque([[node, 1]])
            while q:
                cur, col = q.popleft()
                if cur in colors and colors[cur] != col:
                    return False
                elif cur in colors:
                    continue
                colors[cur] = col
                for nei in graph[cur]:
                    q.append([nei, col * -1])
            return True

        for i in range(len(graph)):
            if not bfs(i):
                return False
        return True
```

---
date: 2024-04-20
difficulty: Easy
num: 1971
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 1971. Find If Path Exists In Graph

## Description
Same as title

## Approach / Thoughts
bfs with q

## Solution
```python
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        path = defaultdict(list)

        for src, dest in edges:
            path[src].append(dest)
            path[dest].append(src)

        q = deque([[-1, source]])
        visited = set()

        while q:
            for i in range(len(q)):
                src, dest = q.popleft()
                if dest == destination:
                    return True
                for v in path[dest]:
                    if (dest, v) in visited: continue
                    q.append([dest, v])
                    visited.add((dest, v))

        return False
```

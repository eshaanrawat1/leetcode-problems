---
date: 2026-02-27
difficulty: Hard
num: 847
related_topics:
  - BFS
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - Graph Theory
  - Principal
return: Review
---

# Problem: 847. Shortest Path Visiting All Nodes

## Description

## Approach / Thoughts
bfs, dont revisit states can revisit nodes

bitmask to keep track

## Solution
```python
class Solution:
    def shortestPathLength(self, graph: List[List[int]]) -> int:
        n = len(graph)

        seen = (1 << n) - 1
        visit = [[0] * (seen+1) for _ in range(n)]

        q = deque()
        for i in range(n):
            q.append((i, 1 << i, 0))

        while q:
            node, mask, cnt = q.popleft()
            if mask == seen:
                return cnt

            for nei in graph[node]:
                new_mask = mask | (1 << nei)
                if visit[nei][new_mask]:
                    continue

                q.append((nei, new_mask, cnt+1))
                visit[nei][new_mask] = 1
```

---
date: 2025-01-30
difficulty: Hard
num: 2068
related_topics:
  - BFS
  - Graph
return: Review
---

# Problem: 2068. Shortest Cycle In A Graph

## Description

## Approach / Thoughts
brute force bfs for each node

keep track of parent to child cycle, track dist as we go

## Solution
```python
class Solution:
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for src, dst in edges:
            adj[src].append(dst)
            adj[dst].append(src)

        def bfs(start):
            dist = [0] * n
            dist[start] = 1

            parent = [-1] * n
            q = deque([[start, 1]])
            shortest = inf

            while q:
                cur, level = q.popleft()

                for nei in adj[cur]:
                    if not dist[nei]:
                        parent[nei] = cur
                        dist[nei] = level+1
                        q.append([nei, level+1])
                    elif parent[nei] != cur and parent[cur] != nei:
                        shortest = min(shortest, dist[cur] + dist[nei] - 1)
            return shortest

        res = inf
        for i in range(n):
            res = min(res, bfs(i))
        return res if res != inf else -1
```

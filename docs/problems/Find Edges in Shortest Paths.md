---
date: 2025-12-11
difficulty: Hard
num: 3123
related_topics:
  - BFS
  - DFS
  - Graph
  - Heap (Priority Queue)
  - Shortest Path
return: Review
---

# Problem: 3123. Find Edges In Shortest Paths

## Description

## Approach / Thoughts
shortest path breaking the edge, consider u before v and v before u

if addition of edge is same min cost, it can be in a min path

## Solution
```python
class Solution:
    def findAnswer(self, n: int, edges: List[List[int]]) -> List[bool]:
        adj = [[] for _ in range(n)]
        for s, d, w in edges:
            adj[s].append((d, w))
            adj[d].append((s, w))

        def shortest_path(src, dst):
            shortest = [inf] * n
            shortest[src] = 0

            pq = [[0, src]]
            while pq:
                d1, n1 = heapq.heappop(pq)

                if d1 > shortest[n1]:
                    continue

                for n2, d2 in adj[n1]:
                    if d1+d2 < shortest[n2]:
                        shortest[n2] = d1+d2
                        heapq.heappush(pq, (d1+d2, n2))
            return shortest

        dist_from_0 = shortest_path(0, n-1)
        dist_from_e = shortest_path(n-1, 0)

        # dist(0, u) + w + dist(v, n-1) = dist(0, n-1)
        # dist(0, v) + w + dist(u, n-1) = dist(0, n-1)

        res = []
        for u, v, w in edges:
            c1 = dist_from_0[u] + w + dist_from_e[v]
            c2 = dist_from_0[v] + w + dist_from_e[u]

            if (c1 != inf and c1 == dist_from_0[n-1]) or (c2 != inf and c2 == dist_from_0[n-1]):
                res.append(True)
            else:
                res.append(False)
        return res
```

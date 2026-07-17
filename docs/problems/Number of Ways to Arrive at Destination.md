---
date: 2025-03-22
difficulty: Medium
num: 1976
related_topics:
  - Dynamic Programming
  - Graph
  - Shortest Path
  - Topological Sort
return: Review
---

# Problem: 1976. Number Of Ways To Arrive At Destination

## Description
same, dijkstra number of shortest paths

## Approach / Thoughts
same, consider case where find new shortest path and equal path

## Solution
```python
class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        adj = defaultdict(list)
        for s, d, w in roads:
            adj[s].append((d, w))
            adj[d].append((s, w))

        dist = [inf] * n
        dist[0] = 0

        cnt = [0] * n
        cnt[0] = 1

        pq = [(0, 0)]
        while pq:
            d1, n1 = heapq.heappop(pq)
            
            for n2, d2 in adj[n1]:
                cand = d1 + d2
                if cand == dist[n2]:
                    cnt[n2] += cnt[n1]
                    
                elif cand < dist[n2]:
                    dist[n2] = cand
                    heapq.heappush(pq, (d1+d2, n2))
                    cnt[n2] = cnt[n1]

        return cnt[n-1] % (10 ** 9 + 7)
```

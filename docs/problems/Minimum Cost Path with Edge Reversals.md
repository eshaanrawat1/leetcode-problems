---
date: 2026-01-27
difficulty: Medium
num: 3650
related_topics:
  - Graph Theory
  - Heap (Priority Queue)
  - Shortest Path
return: Done
---

# Problem: 3650. Minimum Cost Path With Edge Reversals

## Description
same, can reverse an edge for double cost

## Approach / Thoughts
in adj list construction, add edge and reverse of it + dijkstra

```undefined
class Solution:
    def minCost(self, n: int, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for s, d, w in edges:
            adj[s].append((d, w))
            adj[d].append((s, 2*w))

        pq = [[0, 0]]
        shortest = {0: 0}

        while pq:
            d1, n1 = heapq.heappop(pq)
            if n1 == n - 1:
                return d1

            for n2, d2 in adj[n1]:
                if n2 not in shortest or d1+d2 < shortest[n2]:
                    shortest[n2] = d1+d2
                    heapq.heappush(pq, [d1+d2, n2])
        return -1
```

## Solution
```python
class Solution:
    def minCost(self, n: int, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for s, d, w in edges:
            adj[s].append((d, w))
            adj[d].append((s, 2*w))

        pq = [[0, 0]]
        shortest = {0: 0}

        while pq:
            d1, n1 = heapq.heappop(pq)
            if n1 == n - 1:
                return d1

            for n2, d2 in adj[n1]:
                if n2 not in shortest or d1+d2 < shortest[n2]:
                    shortest[n2] = d1+d2
                    heapq.heappush(pq, [d1+d2, n2])
        return -1
```

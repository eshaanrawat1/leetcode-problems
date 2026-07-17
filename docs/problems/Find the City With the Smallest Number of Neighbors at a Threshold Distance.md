---
date: 2024-07-26
difficulty: Medium
num: 1334
related_topics:
  - Dynamic Programming
  - Graph
  - Shortest Path
return: Done
---

# Problem: 1334. Find The City With The Smallest Number Of Neighbors At A Threshold Distance

## Description

## Approach / Thoughts
djikstra on every node, find node with smallest num of cities that can be reached

## Solution
```python
class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        adj = defaultdict(list)
        for src, dst, wei in edges:
            adj[src].append((dst, wei))
            adj[dst].append((src, wei))

        def djikstra(node):
            shortest = {} 

            min_heap = [[0, node]]
            while min_heap:
                dist, cur = heapq.heappop(min_heap)

                if cur in shortest:
                    continue
                shortest[cur] = dist

                for nei, wei in adj[cur]:
                    heapq.heappush(min_heap, [dist+wei, nei])

            return sum(1 for k, v in shortest.items() if v <= distanceThreshold)

        res = [djikstra(i) for i in range(n)]
        ans, idx = float("inf"), None
        for i in range(n):
            if res[i] <= ans:
                ans = res[i]
                idx = i
        return idx
```

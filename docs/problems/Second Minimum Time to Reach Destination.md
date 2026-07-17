---
date: 2024-07-28
difficulty: Hard
num: 2045
related_topics:
  - BFS
  - Graph
  - Shortest Path
return: Review
---

# Problem: 2045. Second Minimum Time To Reach Destination

## Description

## Approach / Thoughts
djikstras with two values for second min cost

find time to reach if we need to wait

## Solution
```python
class Solution:
    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
        min_heap = [(0, 1)]
        adj = defaultdict(list)

        for src, dst in edges:
            adj[src].append(dst)
            adj[dst].append(src)

        dist = [set() for _ in range(n+1)]
        dist[1] = {0}

        while min_heap:
            cur_dist, cur_node = heapq.heappop(min_heap)
            if cur_node == n and len(dist[n]) == 2:
                return max(dist[n])

            if (cur_dist // change) % 2 == 0:
                cost = cur_dist + time
            else:
                cost = ceil(cur_dist / (change * 2)) * (change * 2) + time    
            
            for nei in adj[cur_node]:
                if len(dist[nei]) <= 1:
                    dist[nei].add(cost)
                    heapq.heappush(min_heap, (cost, nei))
```

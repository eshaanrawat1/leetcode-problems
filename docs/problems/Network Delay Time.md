---
date: 2024-07-20
difficulty: Medium
num: 743
related_topics:
  - BFS
  - DFS
  - Graph
  - Heap (Priority Queue)
  - Shortest Path
return: Done
---

# Problem: 743. Network Delay Time

## Description
basic shortest time for each

## Approach / Thoughts
djikstras

## Solution
```python
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = defaultdict(list)
        for src, dest, time in times:
            adj[src].append([dest, time])

        shortest = {}

        min_heap = [[0, k]]
        while min_heap:
            t1, n1 = heapq.heappop(min_heap)
            if n1 in shortest:
                continue
            shortest[n1] = t1

            for n2, t2 in adj[n1]:
                heapq.heappush(min_heap, [t1+t2, n2])

        for i in range(1, n+1):
            if i not in shortest:
                shortest[i] = -1

        all_times = list(shortest.values())
        return max(all_times) if -1 not in all_times else -1
```

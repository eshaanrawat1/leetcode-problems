---
date: 2025-07-05
difficulty: Medium
num: 3604
related_topics:
  - Graph
  - Shortest Path
return: Done
---

# Problem: 3604. Minimum Time To Reach Destination In Directed Graph

## Description
same, only traverse edge in certain time window

## Approach / Thoughts
modified dijkstra - continue tracking paths update if we find better path

## Solution
```python
class Solution:
    def minTime(self, n: int, edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        edge_times = defaultdict(list)

        for src, dst, start, end in edges:
            adj[src].append(dst)
            edge_times[(src, dst)].append((start, end))

        pq = [[0, 0]]
        visit = [inf] * n

        while pq:
            time, cur = heapq.heappop(pq)

            if time >= visit[cur]:
                continue
            visit[cur] = time

            for nei in adj[cur]: 
                for start, end in edge_times[(cur, nei)]:

                    if start <= time <= end:
                        heapq.heappush(pq, [time+1, nei])
                    elif time < start:
                        heapq.heappush(pq, [start+1, nei])

        return visit[-1] if visit[-1] != inf else -1
```

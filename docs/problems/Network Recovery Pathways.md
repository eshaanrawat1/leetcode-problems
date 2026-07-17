---
date: "2026-07-05"
difficulty: "Hard"
rating: 1998
num: "3620"
related_topics:
  - "array"
  - "binary-search"
  - "dynamic-programming"
  - "graph-theory"
  - "topological-sort"
  - "heap-priority-queue"
  - "shortest-path"
return:
---

# Problem: 3620. Network Recovery Pathways

## Approach / Thoughts

problem says min max so use binary search - the idea is that for every path from 0 to n-1, we can set a value threshold. every edge along this path must be greater than threshold - binary search on threshold to find the optimal solution

also use dijkstra since cost can't exceed k - use stale entries to that we don't reiterate every edge for every stale entry once a better one is popped

## Solution

```python
class Solution:
    def findMaxPathScore(self, edges, online, k):
        n = len(online)

        adj = defaultdict(list)
        for u, v, w in edges:
            if online[u] and online[v]:
                adj[u].append((v, w))

        def check(threshold):
            pq = [[0, 0]]
            dist = [inf] * n
            dist[0] = 0

            while pq:
                d1, u = heapq.heappop(pq)
                if u == n-1:
                    return True 
                    
                if d1 != dist[u]:
                    continue

                for v, w in adj[u]:
                    if w < threshold:
                        continue 
                    if d1+w < dist[v] and d1+w <= k:
                        dist[v] = d1+w
                        heapq.heappush(pq, [d1+w, v])
            return False

        lo, hi = 0, 10**9+1
        res = -1

        while lo <= hi:
            mid = (lo + hi) >> 1
            if check(mid):
                res = mid
                lo = mid + 1
            else:
                hi = mid - 1
        return res
```

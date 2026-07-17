---
date: 2024-08-06
difficulty: Medium
num: 3243
related_topics:
  - Array
  - BFS
  - Graph
return: Done
---

# Problem: 3243. Shortest Distance After Road Addition Queries I

## Description

## Approach / Thoughts
bfs multiple times

## Solution
```python
class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        adj = defaultdict(list)
        for i in range(1, n):
            adj[i-1].append(i)

        def shortest_path():
            q = deque([[0, 0]])
            visit = set()

            while q:
                cur, dist = q.popleft()
                if cur == n-1:
                    return dist

                if cur in visit:
                    continue
                visit.add(cur)
                
                for nei in adj[cur]:
                    q.append([nei, dist+1])
        
        res = []
        cur_min = float("inf")

        for s, d in queries:
            adj[s].append(d)
            if cur_min == 1:
                res.append(1)
            else:
                cur_min = min(cur_min, shortest_path())
                res.append(cur_min)
        return res
```

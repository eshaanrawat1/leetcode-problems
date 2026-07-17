---
date: 2024-10-05
difficulty: Medium
num: 2492
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 2492. Minimum Score Of A Path Between Two Cities

## Description
same, score is min of all edges among paths

## Approach / Thoughts
find all edges in connected component

## Solution
```python
class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        adj = defaultdict(list)
        for s, d, w in roads:
            adj[s].append((d, w))
            adj[d].append((s, w))

        edges = []

        q = deque([1])
        visit = set()

        while q:
            n1 = q.popleft()
            if n1 in visit:
                continue
            visit.add(n1)

            for n2, d2 in adj[n1]:
                edges.append(d2)
                q.append(n2)
        return min(edges)
```

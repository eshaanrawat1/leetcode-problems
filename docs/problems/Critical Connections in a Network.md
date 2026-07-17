---
date: 2025-05-02
difficulty: Hard
num: 1192
related_topics:
  - Biconnected Component
  - DFS
  - Graph
return: Review
---

# Problem: 1192. Critical Connections In A Network

## Description
same, find bridges in graph

## Approach / Thoughts
non bridges are edges in a cycle

keep track of current depth, run dfs

## Solution
```python
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        adj = defaultdict(list)
        for s, e in connections:
            adj[s].append(e)
            adj[e].append(s)

        rank = [-inf] * n
        critical = {tuple(c) for c in connections}

        def dfs(node, depth):
            if rank[node] != -inf:
                return rank[node]
            
            rank[node] = depth
            min_depth = inf

            for nei in adj[node]:
                if rank[nei] == depth - 1:
                    continue 

                prev_depth = dfs(nei, depth + 1)

                if prev_depth <= depth:
                    if (node, nei) in critical: critical.remove((node, nei))
                    if (nei, node) in critical: critical.remove((nei, node))

                min_depth = min(min_depth, prev_depth)

            return min_depth

        dfs(0, 0)
        return list(critical)
```

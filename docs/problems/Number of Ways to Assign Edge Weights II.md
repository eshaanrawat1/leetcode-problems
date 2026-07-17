---
date: 2026-01-29
difficulty: Hard
num: 3559
related_topics:
  - Array
  - Bit Manipulation
  - DFS
  - Dynamic Programming
  - Math
  - Tree
return: Done
---

# Problem: 3559. Number Of Ways To Assign Edge Weights Ii

## Description
same, path in tree of size k, can either assign 1 or 2 to each edge in path → number of ways to make odd edges

## Approach / Thoughts
check math → number of ways is 2*(k-1)

precompute the mappings with mod

dfs to reroot the tree at 1, with parent and depth arrays

lca with depth array for shortest path between u,v

compute queries

## Solution
```python
class Solution:
    def assignEdgeWeights(self, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        n = len(edges)+1
        mod = 10**9+7

        mapping = {0 : 0}
        for i in range(n+2):
            mapping[i+1] = pow(2, i, mod)

        adj = defaultdict(list)
        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)

        parent = [0] * (n+1)
        depth = [0] * (n+1)

        def dfs(i, par, d):
            for nei in adj[i]:
                if nei == par:
                    continue
                parent[nei] = i
                depth[nei] = d+1
                dfs(nei, i, d+1)
        dfs(1, -1, 0)

        @lru_cache(None)
        def lca(x, y):
            dist = 0
            while x != y:
                if depth[x] > depth[y]:
                    x = parent[x]
                else:
                    y = parent[y]
                dist += 1
            return dist

        res = []
        for u, v in queries:
            dist = lca(u, v)
            ways = mapping[dist]
            res.append(ways % mod)
        return res
```

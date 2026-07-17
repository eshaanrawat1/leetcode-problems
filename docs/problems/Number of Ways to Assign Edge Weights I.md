---
date: 2026-01-29
difficulty: Medium
num: 3558
related_topics:
  - DFS
  - Math
  - Tree
return: Done
---

# Problem: 3558. Number Of Ways To Assign Edge Weights I

## Description
same, easier only 1 node query

## Approach / Thoughts
precompute depths, parents

lca on deepest node and 1

## Solution
```python
class Solution:
    def assignEdgeWeights(self, edges: List[List[int]]) -> int:
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

        self.max_depth = 0
        self.max_node = 1

        def dfs(i, par, d):
            if d > self.max_depth:
                self.max_depth = d
                self.max_node = i

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


        dist = lca(1, self.max_node)
        ways = mapping[dist]
        return (ways % mod)
```

---
date: 2024-06-29
difficulty: Medium
num: 2192
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Done
---

# Problem: 2192. All Ancestors Of A Node In A Directed Acyclic Graph

## Description
for each node, find all nodes which can reach it

## Approach / Thoughts
dfs for each node, find children

## Solution
```python
class Solution:
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        adj = defaultdict(list)
        for src, dest in edges:
            adj[src].append(dest)

        res = [[] for _ in range(n)]
        def dfs(child, current):
            for n in adj[child]:
                if res[n] and res[n][-1] == current:
                    continue
                res[n].append(current)
                dfs(n, current)
                
        for i in range(n):
            dfs(i, i)
        return res
```

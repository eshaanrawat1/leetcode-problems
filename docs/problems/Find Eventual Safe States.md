---
date: 2024-06-16
difficulty: Medium
num: 802
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Review
---

# Problem: 802. Find Eventual Safe States

## Description
find all nodes which lead to safe nodes

## Approach / Thoughts
top sort, remove all one by one

## Solution
```python
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        q = deque([])
        adj = defaultdict(list)
        out_degree = [0] * len(graph)
        for i in range(len(graph)):
            out_degree[i] = len(graph[i])
            for p in graph[i]:
                adj[p].append(i)
            if len(graph[i]) == 0:
                q.append(i)

        res = list(q)
        while q:
            for i in range(len(q)):
                node = q.popleft()
                for nei in adj[node]:
                    out_degree[nei] -= 1
                    if out_degree[nei] == 0:
                        q.append(nei)
                        res.append(nei)
        return sorted(res)
```

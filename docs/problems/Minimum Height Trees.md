---
date: 2024-04-23
difficulty: Medium
num: 310
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Review
---

# Problem: 310. Minimum Height Trees

## Description
Find max of min distances

## Approach / Thoughts
adjacency list, bfs get rid of leaves until 2 left

## Solution
```python
class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        adj = defaultdict(list)
        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)

        edge_count = {}
        leaves = deque()
        for src, neighbors in adj.items():
            if len(neighbors) == 1:
                leaves.append(src)
            edge_count[src] = len(neighbors)

        while leaves:
            if n <= 2:
                return list(leaves)
            for i in range(len(leaves)):
                node = leaves.popleft()
                n -= 1
                for neighbor in adj[node]:
                    edge_count[neighbor] -= 1
                    if edge_count[neighbor] == 1:
                        leaves.append(neighbor)
        return [0]
```

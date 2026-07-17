---
date: 2024-11-21
difficulty: Hard
num: 685
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Review
---

# Problem: 685. Redundant Connection Ii

## Description
remove edge to make tree

## Approach / Thoughts
two cases of cycle and conflict

if both - check if one edge contributes to both otherwise return the other conflict

return the cycle

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
    
    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return False
        self.par[p2] = p1
        return True

class Solution:
    def detect_cycle(self, parents, edge):
        src, dst = edge 
        while src != dst and src in parents:
            src = parents[src]
        return src == dst

    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        u = UnionFind(n + 1)

        conflicts = []
        parents = {}

        for src, dst in edges:
            if dst not in parents:
                parents[dst] = src
            else:
                conflicts.append([parents[dst], dst])
                conflicts.append([src, dst])

        if conflicts:
            return conflicts[0] if self.detect_cycle(parents, conflicts[0]) else conflicts[1]

        for src, dst in edges:
            if not u.union(src, dst):
                return [src, dst]
```

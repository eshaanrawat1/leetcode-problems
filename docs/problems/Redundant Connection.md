---
date: 2024-06-30
difficulty: Medium
num: 684
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 684. Redundant Connection

## Description
find first edge that makes cycle

## Approach / Thoughts
union find, check if we can’t union

## Solution
```python
class UnionFind:
    def __init__(self, edges):
        self.par = [i for i in range(len(edges)+1)]
        self.rank = [1] * (len(edges)+1)
    
    def find(self, n):
            p = self.par[n]
            while p != self.par[p]:
                p = self.par[p]
            return p

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return False

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        return True

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        u = UnionFind(edges)
        for e1, e2 in edges:
            if not u.union(e1, e2):
                return [e1, e2]
```

---
date: 2024-10-06
difficulty: Medium
num: 2316
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 2316. Count Unreachable Pairs Of Nodes In An Undirected Graph

## Description

## Approach / Thoughts
find num nodes in each component

pair multiply to get number of pairs

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return 
        
        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

class Solution:
    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        u = UnionFind(n)
        for e1, e2 in edges:
            u.union(e1, e2)

        unique_parents = list({u.find(n) for n in u.par})
        ps = [u.rank[n] for n in unique_parents]


        for i in range(1, len(ps)):
            ps[i] += ps[i-1]

        total = 0
        for i in range(len(ps)):
            cur = u.rank[unique_parents[i]]
            missing = ps[-1] - ps[i]
        
            total += cur * missing
        return total
```

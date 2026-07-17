---
date: 2025-03-21
difficulty: Medium
num: 2685
related_topics:
  - BFS
  - DFS
  - Graph
  - Union Find
return: Done
---

# Problem: 2685. Count The Number Of Complete Components

## Description
same, complete components every pair of vertices have edge between them

## Approach / Thoughts
union find for connected components

complete connection requires comb(n, 2) edges

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
        p1 = self.find(n1)
        p2 = self.find(n2)

        if p1 == p2:
            return

        if self.rank[p1] >= self.rank[p2]:
            self.rank[p1] += self.rank[p2]
            self.par[p2] = p1
        else:
            self.rank[p2] += self.rank[p1]
            self.par[p1] = p2

class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        u = UnionFind(n)
        for s, d in edges:
            u.union(s, d)

        cnt = Counter()
        for s, d in edges:
            par = u.find(s)
            cnt[par] += 1


        unique_pars = {u.find(i) for i in range(n)}

        res = 0
        for p in unique_pars:
            if u.rank[p] == 1:
                res += 1
                continue

            total_edges = comb(u.rank[p], 2)
            if total_edges == cnt[p]:
                res += 1
        return res
```

---
date: 2025-06-16
difficulty: Hard
num: 1489
related_topics:
  - Graph
  - Minimum Spanning Tree
  - Sorting
  - Strongly Connected Component
  - Union Find
return: Done
---

# Problem: 1489. Find Critical And Pseudo Critical Edges In Minimum Spanning Tree

## Description

## Approach / Thoughts
kruskals + edge conditions

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

    def connected(self, n1, n2):
        return self.find(n1) == self.find(n2)

class Solution:
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        edges = [e + [i] for i,e in enumerate(edges)]
        edges.sort(key = lambda x: x[2])
        edge_len = len(edges)

        def mst(edge_list, u):
            total_cost = 0
            for s, d, w, _ in edge_list:
                if u.connected(s, d):
                    continue
                u.union(s, d)
                total_cost += w

            # mst is incomplete
            for i in range(n):
                if not u.connected(i, 0):
                    total_cost = inf
                    break

            return total_cost

        res = [[], []]
        mst_min_cost = mst(edges, UnionFind(n))

        for i in range(edge_len):
            s, d, w, idx = edges[i]

            # take the edge, if mst cost increases
            # it is not in the mst
            uf = UnionFind(n)
            uf.union(s, d)
            removed_cost = w + mst(edges, uf)
            if removed_cost > mst_min_cost:
                continue

            # remove the edge
            removed_edges = edges[:i] + edges[i+1:]
            new_mst_cost = mst(removed_edges, UnionFind(n))

            # if cost is inf or the cost increases
            # then edge is critical for mst
            if new_mst_cost > mst_min_cost:
                res[0].append(idx)

            # edge makes mst cost the same
            # it is pseudo critical
            else:
                res[1].append(idx)

        return res
```

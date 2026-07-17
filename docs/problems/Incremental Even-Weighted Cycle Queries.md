---
date: 2026-04-03
difficulty: Hard
num: 3887
related_topics:
  - Senior Staff
  - Union Find
  - Graph
return: Review
---

# Problem:  

## Description
You are given a positive integer `n`.

There is an **undirected** graph with `n` nodes labeled from 0 to `n - 1`. Initially, the graph has no edges.

You are also given a 2D integer array `edges`, where `edges[i] = [ui, vi, wi]` represents an edge between nodes `ui` and `vi` with weight `wi`. The weight `wi` is either 0 or 1.

Process the edges in `edges` in the given order. For each edge, add it to the graph only if, after adding it, the sum of the weights of the edges in **every** cycle in the resulting graph is **even**.

Return an integer denoting the number of edges that are successfully added to the graph.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
weighted union find

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n
        self.dist = [0] * n

    def find(self, n):
        parity = 0
        while n != self.par[n]:
            parity ^= self.dist[n]
            n = self.par[n]
        return n, parity

    def union(self, n1, n2, w):
        p1, parity1 = self.find(n1)
        p2, parity2 = self.find(n2)

        if p1 == p2:
            return (parity1 + parity2 + w) % 2 == 0

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
            self.dist[p2] = w ^ parity1 ^ parity2
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
            self.dist[p1] = w ^ parity1 ^ parity2
        return 1

class Solution:
    def numberOfEdgesAdded(self, n: int, edges: List[List[int]]) -> int:   
        uf = UnionFind(n)
        res = 0
        for s, d, w in edges:
            res += uf.union(s, d, w)
        return res
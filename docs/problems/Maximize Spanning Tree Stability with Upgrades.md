---
date: 2026-07-17
difficulty: Hard
num: 3600
related_topics:
  - Binary Search
  - Greedy
  - Union-Find
  - Graph Theory
  - Minimum Spanning Tree
return:
---

# Problem: 3600. Maximize Spanning Tree Stability with Upgrades

## Description
You are given an integer `n`, representing `n` nodes numbered from 0 to `n - 1` and a list of `edges`, where `edges[i] = [ui, vi, si, musti]`:

	- `ui` and `vi` indicates an undirected edge between nodes `ui` and `vi`.

	- `si` is the strength of the edge.

	- `musti` is an integer (0 or 1). If `musti == 1`, the edge **must** be included in the** ****spanning tree**. These edges **cannot** be **upgraded**.

You are also given an integer `k`, the **maximum** number of upgrades you can perform. Each upgrade **doubles** the strength of an edge, and each eligible edge (with `musti == 0`) can be upgraded **at most** once.

The **stability** of a spanning tree is defined as the **minimum** strength score among all edges included in it.

Return the **maximum** possible stability of any valid spanning tree. If it is impossible to connect all nodes, return `-1`.

**Note**: A **spanning tree** of a graph with `n` nodes is a subset of the edges that connects all nodes together (i.e. the graph is **connected**) *without* forming any cycles, and uses **exactly** `n - 1` edges.

## Approach / Thoughts
kruskals + union find
force the must edges - if there is a cycle here, auto return -1 
then sort edges, we want the biggest candidates first to max the possible min
spend the k upgrades greedily taking the smallest one and applying the one operation (k is <= 10^5 so this can be simulated)

## Solution
```python
from sortedcontainers import SortedList

class UnionFind:
    def __init__(self, n):
        self.n = n
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
            return False

        if self.rank[p2] > self.rank[p1]:
            p1, p2 = p2, p1

        self.par[p2] = p1
        self.rank[p1] += self.rank[p2]
        return True

    def all_connected(self):
        return len({self.find(i) for i in range(self.n)}) == 1

class Solution:
    def maxStability(self, n, edges, k) -> int:
        edges.sort(key=lambda x: (-x[-1], -x[2]))

        uf = UnionFind(n)
        sl = SortedList()
        res = inf

        for u, v, s, must in edges:
            if must == 1:
                if not uf.union(u, v):
                    return -1
                res = min(res, s)
            else:
                if uf.union(u, v):
                    sl.add(s)

        if not uf.all_connected():
            return -1

        while k and sl:
            v = sl.pop(0)
            res = min(res, v * 2)
            k -= 1

        if not sl:
            return res
        return min(res, min(sl))
```
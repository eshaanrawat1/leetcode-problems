---
date: 2026-04-27
difficulty: Hard
num: 3910
related_topics:
  - Array
  - Graph
  - Union Find
return:
---

# Problem:  

## Description
You are given an undirected graph with `n` nodes labeled from 0 to `n - 1`. Node `i` has a **value** of `nums[i]`, which is either 0 or 1. The edges of the graph are given by a 2D array `edges` where `edges[i] = [ui, vi]` represents an edge between node `ui` and node `vi`.

For a **non-empty subset** `s` of nodes in the graph, we consider the **induced subgraph** of `s` generated as follows:

- We keep only the nodes in `s`.
- We keep only the edges whose two endpoints are both in `s`.

Return an integer representing the number of **non-empty** subsets `s` of nodes in the graph such that:

- The **induced subgraph** of `s` is **connected**.
- The **sum** of node **values** in `s` is **even**.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Biweekly Contest 181]]

unionfind to check connected, bitmask dp for take skip (low count of nodes)

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

        if self.rank[p2] > self.rank[p1]:
            p1, p2 = p2, p1

        self.par[p2] = p1
        self.rank[p1] += self.rank[p2]

class Solution:
    def evenSumSubgraphs(self, nums: list[int], edges: list[list[int]]) -> int:
        # 7:35
        
        n = len(nums)

        def check(mask):
            uf = UnionFind(n)
            res = 0

            for s, d in edges:
                if (1 << s) & mask and (1 << d) & mask:
                    uf.union(s, d)

            pars = set()
            for i in range(n):
                if (1 << i) & mask:
                    res += nums[i]
                    pars.add(uf.find(i))

            if len(pars) == 1:
                return res
            return 1


        @lru_cache(None)
        def dfs(i, mask):
            if i >= n:
                if mask:
                    return check(mask) % 2 == 0
                return 0

            take = dfs(i+1, mask | (1 << i))
            skip = dfs(i+1, mask)
            return take + skip

        return dfs(0, 0)
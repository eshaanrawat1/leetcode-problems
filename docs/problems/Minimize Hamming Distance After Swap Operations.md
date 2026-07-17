---
date: 2026-04-21
difficulty: Medium
num: 1722
related_topics:
  - Array
  - DFS
  - Union Find
return:
---

# Problem:  

## Description
You are given two integer arrays, `source` and `target`, both of length `n`. You are also given an array `allowedSwaps` where each `allowedSwaps[i] = [ai, bi]` indicates that you are allowed to swap the elements at index `ai` and index `bi` **(0-indexed)** of array `source`. Note that you can swap elements at a specific pair of indices **multiple** times and in **any** order.

The **Hamming distance** of two arrays of the same length, `source` and `target`, is the number of positions where the elements are different. Formally, it is the number of indices `i` for `0 <= i <= n-1` where `source[i] != target[i]` **(0-indexed)**.

Return _the **minimum Hamming distance** of_ `source` _and_ `target` _after performing **any** amount of swap operations on array_ `source`_._

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
union find group by, count distinct from target

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
    def minimumHammingDistance(self, source, target, allowedSwaps):
        n = len(source)

        uf = UnionFind(n)
        for x, y in allowedSwaps:
            uf.union(x, y)

        pars = defaultdict(list)
        for i in range(n):
            pars[uf.find(i)].append(i)

        def diff(A, B):
            cnt = 0
            for k in B.keys():
                cnt += max(0, B[k] - A[k])
            return cnt

        res = 0
        for p, children in pars.items():
            src = Counter([source[c] for c in children])
            dst = Counter([target[c] for c in children])
            res += diff(src, dst)
        return res


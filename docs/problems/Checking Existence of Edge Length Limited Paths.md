---
date: 2024-10-08
difficulty: Hard
num: 1697
related_topics:
  - Array
  - Graph
  - Sorting
  - Two-Pointer
  - Union Find
return: Done
---

# Problem: 1697. Checking Existence Of Edge Length Limited Paths

## Description

## Approach / Thoughts
sort by weights

union all weights less than limit for each query and check if connected

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
    def distanceLimitedPathsExist(self, n: int, edgeList: List[List[int]], queries: List[List[int]]) -> List[bool]:
        edgeList.sort(key = lambda x: x[-1])

        queries = [(i, v[0], v[1], v[2]) for i, v in enumerate(queries)]
        queries.sort(key = lambda x: x[-1])

        i = 0
        res = [None] * len(queries)
        u = UnionFind(n)

        for idx, n1, n2, w in queries:
            while i < len(edgeList) and edgeList[i][-1] < w:
                e1, e2, w2 = edgeList[i]
                u.union(e1, e2)
                i += 1

            res[idx] = u.find(n1) == u.find(n2)
        return res

```

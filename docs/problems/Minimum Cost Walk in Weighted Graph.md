---
date: 2024-10-06
difficulty: Hard
num: 3108
related_topics:
  - Array
  - Bit Manipulation
  - Graph
  - Union Find
return: Done
---

# Problem: 3108. Minimum Cost Walk In Weighted Graph

## Description
same, cost of walk is bitwise and of each edge

## Approach / Thoughts
union find - bitwise and reduces score no matter what, always take it

keep track of bitwise score for each parent

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = list(range(n))
        self.rank = [1] * n
        self.walk = [131071] * n

    def find(self, n):
        while n != self.par[n]:
            n = self.par[n]
        return n

    def union(self, n1, n2, w):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            self.walk[p1] &= w 
            return 

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

        self.walk[p1] &= w & self.walk[p2]
        self.walk[p2] &= w & self.walk[p1]

class Solution:
    def minimumCost(self, n: int, edges: List[List[int]], query: List[List[int]]) -> List[int]:
        u = UnionFind(n)
        for e1, e2, w in edges:
            u.union(e1, e2, w)

        res = []
        for e1, e2 in query:
            p1, p2 = u.find(e1), u.find(e2)
            if p1 == p2:
                res.append(u.walk[p1])
            else:
                res.append(-1)
        return res
```

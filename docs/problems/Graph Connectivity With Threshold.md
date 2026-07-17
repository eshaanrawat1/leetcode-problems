---
date: 2025-01-30
difficulty: Hard
num: 1627
related_topics:
  - Array
  - Math
  - Number Theory
  - Union Find
return: Done
---

# Problem: 1627. Graph Connectivity With Threshold

## Description
same, connect nodes if gcd > threshold

## Approach / Thoughts
union find + sieve

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
            return False

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        return True

    def connected(self, n1, n2):
        return self.find(n1) == self.find(n2)

class Solution:
    def areConnected(self, n: int, threshold: int, queries: List[List[int]]) -> List[bool]:
        if threshold == 0:
            return [True] * len(queries)
        
        u = UnionFind(n+1)
        for i in range(threshold+1, n+1):
            p = i
            while p <= n:
                u.union(i, p)
                p += i

        return [u.connected(q1, q2) for q1, q2 in queries]
```

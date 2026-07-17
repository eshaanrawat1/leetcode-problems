---
date: 2025-06-05
difficulty: Medium
num: 1061
related_topics:
  - String
  - Union Find
return: Done
---

# Problem: 1061. Lexicographically Smallest Equivalent String

## Description
same, some groups of characters are equivalent, find min possible string of groups

## Approach / Thoughts
union find

## Solution
```python
class UnionFind:
    def __init__(self):
        alpha = 'abcdefghijklmnopqrstuvwxyz'

        self.par = {x:x for x in alpha}
        self.rank = {x:1 for x in alpha}

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
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

    def is_connected(self, n1, n2):
        return self.find(n1) == self.find(n2)

class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        alpha = 'abcdefghijklmnopqrstuvwxyz'

        u = UnionFind()

        for c1, c2 in zip(s1, s2):
            u.union(c1, c2)

        res = []
        for c in baseStr:
            val = c
            for c2 in alpha:
                if u.is_connected(c, c2):
                    val = min(val, c2)
            res.append(val)
        return ''.join(res)

        
```

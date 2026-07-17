---
date: 2024-08-02
difficulty: Medium
num: 990
related_topics:
  - Array
  - Graph
  - String
  - Union Find
return: Done
---

# Problem: 990. Satisfiability Of Equality Equations

## Description

## Approach / Thoughts
union all eq and set for all neq

if eq, check if neq set

if neq check if parents are distinct in uf

## Solution
```python
class UnionFind:
    def __init__(self):
        self.par = [i for i in range(26)]
        self.rank = [1] * 26

    def find(self, n):
        ch = n
        while ch != self.par[ch]:
            ch = self.par[ch]
        return ch

    def union(self, n1, n2):
        ch1 = ord(n1) - ord('a')
        ch2 = ord(n2) - ord('a')

        p1, p2 = self.find(ch1), self.find(ch2)
        if p1 == p2:
            return True 

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        return True

class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        # if eq, union and check neq dict
        # if neq check if union is equal

        u = UnionFind()
        neq = defaultdict(set)

        for e in equations:
            s, sign, d = e[0], e[1], e[-1]

            if sign == '=':
                u.union(s, d)
            else:
                neq[s].add(d)
                neq[d].add(s)

        for e in equations:
            s, sign, d = e[0], e[1], e[-1]

            if sign == '=':
                if s in neq[d]:
                    return False
            else:
                c1 = ord(d) - ord('a')
                c2 = ord(s) - ord('a')
                if u.find(c1) == u.find(c2):
                    return False
        return True 
```

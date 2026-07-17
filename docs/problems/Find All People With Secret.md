---
date: 2025-05-13
difficulty: Hard
num: 2092
related_topics:
  - BFS
  - DFS
  - Graph
  - Sorting
  - Union Find
return: Done
---

# Problem: 2092. Find All People With Secret

## Description

## Approach / Thoughts
sort and union find

## Solution
```python
class UnionFind:
    def __init__(self, nodes):
        self.par = {x:x for x in nodes}
        self.rank = {x:1 for x in nodes}

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


class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], fp: int) -> List[int]:
        times = defaultdict(list)
        for x, y, t in meetings:
            times[t].append((x, y))

        res = {0, fp}

        u = UnionFind(list(range(n)))
        u.union(fp, 0)

        for t in sorted(times.keys()):
            group = set()
            for x, y in times[t]:
                group.add(x)
                group.add(y)

            tmp_uf = UnionFind(group)
            for x, y in times[t]:
                tmp_uf.union(x, y)

            secret_know = set()
            for g in group:
                if u.find(g) == u.find(fp):
                    secret_know.add(tmp_uf.find(g))

            for g in group:
                if tmp_uf.find(g) in secret_know:
                    res.add(g)
                    u.union(g, fp)

        return list(res)
```

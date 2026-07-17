---
date: 2025-11-05
difficulty: Medium
num: 3607
related_topics:
  - Array
  - BFS
  - DFS
  - Graph
  - Hash Table
  - Heap (Priority Queue)
  - Ordered Set
  - Union Find
return: Done
---

# Problem: 3607. Power Grid Maintenance

## Description
either self fixes query or if offline, smallest id in connected component

## Approach / Thoughts
check power groups via union find

check offline and lazy pop offline invalid entries

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
        
        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]

class Solution:
    def processQueries(self, c: int, connections: List[List[int]], queries: List[List[int]]) -> List[int]:
        u = UnionFind(c+1)
        for s, d in connections:
            u.union(s, d)

        groups = defaultdict(list)
        for i in range(1, c+1):
            groups[u.find(i)].append(i)

        for g in groups:
            groups[g].sort(reverse=True)

        offline = set()
        
        res = []
        for t, q in queries:
            if t == 1:
                if q not in offline:
                    res.append(q)
                    continue

                cur_group = groups[u.find(q)]
                while cur_group and cur_group[-1] in offline:
                    cur_group.pop()
                v = cur_group[-1] if cur_group else -1
                res.append(v)
            else:
                offline.add(q)
        return res    
```

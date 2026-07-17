---
date: 2024-11-02
difficulty: Hard
num: 2360
related_topics:
  - DFS
  - Graph
  - Topological Sort
return: Done
---

# Problem: 2360. Longest Cycle In A Graph

## Description

## Approach / Thoughts
topo sort for finding cycles

union find for cycle ranks

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
            self.par[p2] = self.par[p1]
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = self.par[p2]
            self.rank[p2] += self.rank[p1]
        return True

class Solution:
    def longestCycle(self, edges: List[int]) -> int:
        n = len(edges)

        adj = defaultdict(list)
        in_degree = defaultdict(int)

        for src, dst in enumerate(edges):
            adj[src].append(dst)
            in_degree[dst] += 1

        nodes = set(list(range(n)))
        acyclic = set()
        q = deque([node for node in range(n) if in_degree[node] == 0])

        while q: 
            n1 = q.popleft()
            acyclic.add(n1)
            for n2 in adj[n1]:
                in_degree[n2] -= 1
                if in_degree[n2] == 0:
                    q.append(n2)

        nodes = nodes - acyclic
        u = UnionFind(n)

        for n1 in nodes:
            for n2 in adj[n1]:
                u.union(n1, n2)

        cycle = max(u.rank)
        return cycle if cycle != 1 else -1
```

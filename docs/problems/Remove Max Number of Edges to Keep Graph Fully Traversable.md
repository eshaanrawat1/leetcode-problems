---
date: 2024-06-30
difficulty: Hard
num: 1579
related_topics:
  - Graph
  - Union Find
return: Done
---

# Problem: 1579. Remove Max Number Of Edges To Keep Graph Fully Traversable

## Description
alice and bob can traverse graph, remove redundant edges

## Approach / Thoughts
union find, add all non-redundant type 3 edges and count them

then union find for alice bob all unique edges and count them

subtract total edges from kept to get removals if traversal possible

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.n = n
        self.par = [i for i in range(n+1)]
        self.rank = [1] * (n+1)

    def find(self, n):
        p = n
        while p != self.par[p]:
            p = self.par[p]
        return p
    
    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)

        if p1 == p2:
            return 0

        if self.rank[p1] >= self.rank[p2]:
            self.par[p2] = p1
            self.rank[p1] += self.rank[p2]
        else:
            self.par[p1] = p2
            self.rank[p2] += self.rank[p1]
        self.n -= 1
        return 1

    def connected(self):
        return self.n == 1
        

class Solution:
    def maxNumEdgesToRemove(self, n: int, edges: List[List[int]]) -> int:
        alice = UnionFind(n)
        bob = UnionFind(n)

        count = 0
        for color, e1, e2 in edges:
            if color == 3:
                count += (alice.union(e1, e2) | bob.union(e1, e2))

        for color, e1, e2 in edges:
            if color == 1:
                count += alice.union(e1, e2)
            if color == 2:
                count += bob.union(e1, e2)

        if alice.connected() and bob.connected():
            return len(edges) - count
        return -1
```

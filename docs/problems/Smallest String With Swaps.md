---
date: 2025-01-24
difficulty: Medium
num: 1202
related_topics:
  - Array
  - BFS
  - DFS
  - Hash Table
  - Sorting
  - String
  - Union Find
return: Review
---

# Problem: 1202. Smallest String With Swaps

## Description
same, can swap any at indices

## Approach / Thoughts
union find transitive swap

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
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
        n = len(s)
        uf = UnionFind(n)

        for x, y in pairs:
            uf.union(x, y)

        mapping = defaultdict(deque)
        values = defaultdict(list)

        for i in range(n):
            par = uf.find(i)
            mapping[par].append(i)
            values[par].append(s[i])

        for k in values:
            heapq.heapify(values[k])

        res = [-1] * n
        for k in mapping:
            while mapping[k]:
                idx = mapping[k].popleft()
                val = heapq.heappop(values[k])
                res[idx] = val

        return ''.join(res)
```

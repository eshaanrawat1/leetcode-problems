---
date: 2024-07-30
difficulty: Hard
num: 2421
related_topics:
  - Array
  - Graph
  - Hash Table
  - Tree
  - Union Find
return: Review
---

# Problem: 2421. Number Of Good Paths

## Description
find paths where start end have same values and all nodes in between are less value

## Approach / Thoughts
all lone nodes are good

for each val - for each index of that val - for each

count in each disjoint sets, num of pairs

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.par = [i for i in range(n)]
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

class Solution:
    def numberOfGoodPaths(self, vals: List[int], edges: List[List[int]]) -> int:
        adj = defaultdict(list)
        for src, dst in edges:
            adj[src].append(dst)
            adj[dst].append(src)

        val_to_idx = defaultdict(list)
        for i, v in enumerate(vals):
            val_to_idx[v].append(i)

        res = len(vals)
        u = UnionFind(len(vals))

        for val in sorted(val_to_idx.keys()):
            for i in val_to_idx[val]:
                for nei in adj[i]:
                    if vals[nei] <= vals[i]:
                        u.union(nei, i)

            group = defaultdict(int)
            for j in val_to_idx[val]:
                group[u.find(j)] += 1
            
            for v in group.values():
                if v >= 2:
                    res += v * (v-1) // 2
        return res
```

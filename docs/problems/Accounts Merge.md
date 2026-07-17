---
date: 2025-10-28
difficulty: Medium
num: 721
related_topics:
  - Array
  - BFS
  - DFS
  - Hash Table
  - Sorting
  - String
  - Union Find
return: Done
---

# Problem: 721. Accounts Merge

## Description

## Approach / Thoughts
union find emails

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
    def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
        n = len(accounts)
        u = UnionFind(n)

        seen = {}

        for i, acc in enumerate(accounts):
            m = len(acc)
            for j in range(1, m):
                cur_email = acc[j]
                if cur_email in seen:
                    u.union(i, seen[cur_email])
                else:
                    seen[cur_email] = i

        idx_map = defaultdict(list)
        for i in range(n):
            par_idx = u.find(i)
            name = accounts[par_idx][0]

            cur_acc = accounts[i]
            for j in range(1, len(cur_acc)):
                idx_map[par_idx].append(cur_acc[j])

        
        res = []
        for key, val in idx_map.items():
            tmp = [accounts[key][0]]
            tmp.extend(sorted(list(set(val))))
            res.append(tmp[:])
        return res
    
```

---
date: 2025-01-24
difficulty: Medium
num: 2948
related_topics:
  - Array
  - Sorting
  - Union Find
return: Done
---

# Problem: 2948. Make Lexicographically Smallest Array By Swapping Elements

## Description

## Approach / Thoughts
union find, transitive swaps

sort and match indices

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
    def lexicographicallySmallestArray(self, nums: List[int], limit: int) -> List[int]:
        n = len(nums)
        indices = sorted([x, i] for i,x in enumerate(nums))

        uf = UnionFind(n)

        for i in range(1, n):
            if indices[i][0] - indices[i-1][0] <= limit:
                uf.union(indices[i][1], indices[i-1][1])

        mapping = defaultdict(deque)
        values = defaultdict(list)

        for i in range(n):
            par = uf.find(i)
            mapping[par].append(i)
            values[par].append(nums[i])

        for k in values:
            heapq.heapify(values[k])

        res = [-1] * n
        for k in mapping:
            while mapping[k]:
                idx = mapping[k].popleft()
                val = heapq.heappop(values[k])
                res[idx] = val

        return res
```

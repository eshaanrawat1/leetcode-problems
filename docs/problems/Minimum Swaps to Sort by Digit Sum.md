---
date: 2025-05-22
difficulty: Medium
num: 3351
related_topics:
  - Array
  - Hash Table
  - Sorting
return: Done
---

# Problem: 3351. Minimum Swaps To Sort By Digit Sum

## Description

## Approach / Thoughts
union find for swap groups

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
    def minSwaps(self, nums: List[int]) -> int:
        N = len(nums)
        
        def dig_sum(n):
            return sum(int(c) for c in str(n))

        pairs = nums[:]
        pairs.sort(key=lambda x: (dig_sum(x), x))

        correct_idx = {}
        for i, n in enumerate(pairs):
            correct_idx[n] = i

        u = UnionFind(N)
        for i, n in enumerate(nums):
            u.union(i, correct_idx[n])

        unique_pars = {u.find(i) for i in range(N)}
        return sum(u.rank[x]-1 for x in unique_pars)
```

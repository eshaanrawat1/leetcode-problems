---
date: 2026-07-08
difficulty: Medium
num: 3532
related_topics:
  - Array
  - Hash Table
  - Binary Search
  - Union-Find
  - Graph Theory
return:
---

# Problem: 3532. Path Existence Queries in a Graph I

## Description
You are given an integer `n` representing the number of nodes in a graph, labeled from 0 to `n - 1`.

You are also given an integer array `nums` of length `n` sorted in **non-decreasing** order, and an integer `maxDiff`.

An **undirected **edge exists between nodes `i` and `j` if the **absolute** difference between `nums[i]` and `nums[j]` is **at most** `maxDiff` (i.e., `|nums[i] - nums[j]| 
**Input:** n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]

**Output:** [true,false]

**Explanation:**

	- Query `[0,0]`: Node 0 has a trivial path to itself.

	- Query `[0,1]`: There is no edge between Node 0 and Node 1 because `|nums[0] - nums[1]| = |1 - 3| = 2`, which is greater than `maxDiff`.

	- Thus, the final answer after processing all the queries is `[true, false]`.

## Approach / Thoughts
use union find
since sorted:
- take indices i,j,k where i < j < k
- if i and k are valid (nums k - nums i <= maxDiff) then i and j and j and k must be valid - so just check each index and it's previous (index - 1) and union from there - do queries by checking parents

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

        if self.rank[p2] > self.rank[p1]:
            p1, p2 = p2, p1
        self.par[p2] = p1
        self.rank[p1] += self.rank[p2]


class Solution:
    def pathExistenceQueries(self, n, nums, maxDiff, queries):
        uf = UnionFind(n)

        for i in range(1, n):
            prv = nums[i-1]
            cur = nums[i]

            if cur - prv <= maxDiff:
                uf.union(i-1, i)

        res = []
        for u, v in queries:
            res.append(uf.find(u) == uf.find(v))
        return res
```
---
date: 2026-05-07
difficulty: Medium
num: 3839
related_topics:
  - Array
  - Hash Table
  - String
  - Counting
return:
---

# Problem: 3839. Number of Prefix Connected Groups

## Description
You are given an array of strings `words` and an integer `k`.

Two words `a` and `b` at **distinct indices** are **prefix-connected** if `a[0..k-1] == b[0..k-1]`.

A **connected group** is a set of words such that each pair of words is prefix-connected.

Return the **number of connected groups** that contain **at least** two words, formed from the given words.

**Note:**

	Words with length less than `k` cannot join any group and are ignored.

	Duplicate strings are treated as separate words.

## Approach / Thoughts
[[Biweekly Contest 176]]

union find

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

    def count(self):
        pars = set(self.par)

        res = 0
        for p in pars:
            if self.rank[p] >= 2:
                res += 1
        return res

class Solution:
    def prefixConnected(self, words: List[str], k: int) -> int:
        seen = {}

        n = len(words)
        u = UnionFind(n)

        for i, w in enumerate(words):
            if len(w) < k:
                continue
                
            pre = w[:k]
            if pre in seen:
                u.union(i, seen[pre])
            seen[pre] = i

        return u.count()
```
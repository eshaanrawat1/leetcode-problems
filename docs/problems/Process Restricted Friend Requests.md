---
date: 2026-06-08
difficulty: Hard
num: 2076
related_topics:
  - Union-Find
  - Graph Theory
return:
---

# Problem: 2076. Process Restricted Friend Requests

## Description
You are given an integer `n` indicating the number of people in a network. Each person is labeled from `0` to `n - 1`.

You are also given a **0-indexed** 2D integer array `restrictions`, where `restrictions[i] = [xi, yi]` means that person `xi` and person `yi` **cannot **become **friends**,** **either **directly** or **indirectly** through other people.

Initially, no one is friends with each other. You are given a list of friend requests as a **0-indexed** 2D integer array `requests`, where `requests[j] = [uj, vj]` is a friend request between person `uj` and person `vj`.

A friend request is **successful **if `uj` and `vj` can be **friends**. Each friend request is processed in the given order (i.e., `requests[j]` occurs before `requests[j + 1]`), and upon a successful request, `uj` and `vj` **become direct friends** for all future friend requests.

Return *a **boolean array** *`result`,* where each *`result[j]`* is *`true`* if the *`jth`* friend request is **successful** or *`false`* if it is not*.

**Note:** If `uj` and `vj` are already direct friends, the request is still **successful**.

## Approach / Thoughts
pretty easy - use union find to incrementally build the friend request graph. since constraints are light, at each request we can iterate over restrictions and see if any restriction is active. if it is, then append false and do not union the two groups together. components are used for an easy way to check set participation - if x,y are restricted then if x is in one set and y is in the other they can never union

## Solution
```python
class UnionFind:
    def __init__(self, n):
        self.n = n
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
            return True

        if self.rank[p1] < self.rank[p2]:
            p1, p2 = p2, p1

        self.par[p2] = p1
        self.rank[p1] += self.rank[p2]
        return False

    def component(self, par):
        par = self.find(par)
        return {i for i in range(self.n) if self.find(i) == par}


class Solution:
    def friendRequests(self, n, restrictions, requests) -> List[bool]:
        uf = UnionFind(n)

        res = []
        for u, v in requests:
            c1 = uf.component(u)
            c2 = uf.component(v)

            for x, y in restrictions:
                if (x in c1 and y in c2) or (x in c2 and y in c1):
                    res.append(False)
                    break
            else:
                res.append(True)
                uf.union(u, v)    
        return res
```
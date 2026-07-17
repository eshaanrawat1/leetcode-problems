---
date: 2026-05-07
difficulty: Hard
num: 3615
related_topics:
  - String
  - Dynamic Programming
  - Bit Manipulation
  - Graph Theory
  - Bitmask
return:
---

# Problem: 3615. Longest Palindromic Path in Graph

## Description
You are given an integer `n` and an **undirected** graph with `n` nodes labeled from 0 to `n - 1` and a 2D array `edges`, where `edges[i] = [ui, vi]` indicates an edge between nodes `ui` and `vi`.

You are also given a string `label` of length `n`, where `label[i]` is the character associated with node `i`.

You may start at any node and move to any adjacent node, visiting each node **at most** once.

Return the **maximum** possible length of a **palindrome** that can be formed by visiting a set of **unique** nodes along a valid path.

## Approach / Thoughts
approach from center (odds, evens) - build palindrome outwards with bitmask 

## Solution
```python
class Solution:
    def maxLen(self, n: int, edges: List[List[int]], label: str) -> int:
        adj_set = defaultdict(set)
        adj = defaultdict(list)

        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)
            adj_set[s].add(d)
            adj_set[d].add(s)
   
        dp = [[[-1] * 2**n for _ in range(n)] for _ in range(n)]

        def dfs(l, r, seen):
            if dp[l][r][seen] != -1:
                return dp[l][r][seen]

            res = 0
            for lc in adj[l]:
                if (1 << lc) & seen:
                    continue

                for rc in adj[r]:
                    if lc == rc or (1 << rc) & seen:
                        continue

                    if label[lc] == label[rc]:
                        new_seen = seen | (1 << lc) | (1 << rc)
                        res = max(res, 2 + dfs(lc, rc, new_seen))

            dp[l][r][seen] = res
            return res
        
        res = 0
        for i in range(n):
            for j in range(i, n):
                if label[i] == label[j]:

                    if i != j and i not in adj_set[j]:
                        continue

                    v = 1 if i == j else 2
                    res = max(res, v + dfs(i, j, (1 << i) | (1 << j)))   
        return res
```
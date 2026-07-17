---
date: 2025-12-27
difficulty: Hard
num: 1761
related_topics:
  - Dynamic Programming
  - Enumeration
return: Done
---

# Problem: 1761. Minimum Degree Of A Connected Trio In A Graph

## Description
same, all edges not included in trio, min amount

## Approach / Thoughts
check all trios, contribution is edge count - 2

## Solution
```python
class Solution:
    def minTrioDegree(self, n: int, edges: List[List[int]]) -> int:
        adj = defaultdict(set)
        edge_cnt = Counter()
        for s, d in edges:
            adj[s].add(d)
            adj[d].add(s)

            edge_cnt[s] += 1
            edge_cnt[d] += 1

        res = inf
        for i in range(n+1):
            for j in range(i+1, n+1):
                for k in range(j+1, n+1):
                    if i in adj[j] and i in adj[k] and j in adj[k]:
                        res = min(res, (edge_cnt[i]-2) + (edge_cnt[j]-2) + (edge_cnt[k]-2))
        return res if res != inf else -1
```

---
date: 2024-12-20
difficulty: Hard
num: 2872
related_topics:
  - DFS
  - Tree
return: Review
---

# Problem: 2872. Maximum Number Of K Divisible Components

## Description

## Approach / Thoughts
bfs topo sort carry over sum if not divisible

dfs postorder

## Solution
```python
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        if not edges:
            return n

        degree = Counter()
        adj = defaultdict(list)

        for s, d in edges:
            adj[s].append(d)
            adj[d].append(s)

            degree[s] += 1
            degree[d] += 1

        res = [0]
        visit = [0] * n

        def dfs(root):
            visit[root] = 1
            cur_sum = values[root]

            for nei in adj[root]:
                if visit[nei] == 0:
                    cur_sum += dfs(nei)

            if cur_sum % k == 0:
                res[0] += 1
                return 0

            return cur_sum
        dfs(0)
        return res[0]
```

---
date: 2024-07-13
difficulty: Medium
num: 2477
related_topics:
  - BFS
  - DFS
  - Graph
  - Tree
return: Review
---

# Problem: 2477. Minimum Fuel Cost To Report To The Capital

## Description

## Approach / Thoughts
dfs, for each node get number of passengers

## Solution
```python
class Solution:
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        adj = defaultdict(list)
        for src, dest in roads:
            adj[src].append(dest)
            adj[dest].append(src)

        def dfs(node, prev):
            if not adj[node]:
                return 1

            count = 1
            for nei in adj[node]:
                if nei != prev:
                    count += dfs(nei, node)

            if node:
                self.ans += math.ceil(count / seats)
            return count

        self.ans = 0
        dfs(0, -1)
        return self.ans
```

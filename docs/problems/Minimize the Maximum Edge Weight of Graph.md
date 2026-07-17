---
date: 2025-01-14
difficulty: Medium
num: 3419
related_topics:
  - BFS
  - Binary Search
  - DFS
  - Graph
return: Review
---

# Problem: 3419. Minimize The Maximum Edge Weight Of Graph

## Description

## Approach / Thoughts
reverse graph binary search for max weight

## Solution
```python
class Solution:
    def minMaxWeight(self, n: int, edges: List[List[int]], threshold: int) -> int:
        adj = defaultdict(list)
        for s, d, w in edges:
            adj[d].append((s, w))

        def bfs(k):
            seen = [0] * n
            seen[0], cnt = 1, 1

            q = deque([0])
            while q:
                cur = q.popleft()
                for nei, wei in adj[cur]:
                    if seen[nei] == 0 and wei <= k:
                        q.append(nei)
                        seen[nei] = 1
                        cnt += 1
            
            return cnt == n

        l, r = 0, 10**6
        res = -1

        while l <= r:
            m = (l + r) // 2
            if bfs(m):
                res = m
                r = m - 1
            else:
                l = m + 1
        return res 
```

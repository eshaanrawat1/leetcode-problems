---
date: 2024-11-29
difficulty: Hard
num: 2097
related_topics:
  - DFS
  - Dynamic Programming
  - Eulerian Circuit
return: Review
---

# Problem: 2097. Valid Arrangement Of Pairs

## Description
same, chain start and end

## Approach / Thoughts
euler path

## Solution
```python
class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        adj = defaultdict(list)
        deg = Counter()

        for u, v in pairs:
            adj[u].append(v)
            deg[u] += 1
            deg[v] -= 1
        
        for start in adj:
            if deg[start] == 1:
                break
        
        res = []
        def dfs(root):
            while adj[root]:
                nei = adj[root].pop()
                dfs(nei)
                res.append([root, nei])
        dfs(start)
        return res[::-1]
```

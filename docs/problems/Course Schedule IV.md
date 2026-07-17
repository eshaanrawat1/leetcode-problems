---
date: 2024-07-09
difficulty: Medium
num: 1462
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Done
---

# Problem: 1462. Course Schedule Iv

## Description
see if prereqs are there

## Approach / Thoughts
have dict of all indirect prereqs, dfs function that returns that

## Solution
```python
class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        adj = defaultdict(list)
        for pre, crs in prerequisites:
            adj[pre].append(crs)

        prereqs = {}
        def dfs(node):
            if not adj[node]:
                prereqs[node] = set()
                return {node}
            if node in prereqs:
                return prereqs[node]
            
            res = {node}
            for nei in adj[node]:
                res |= dfs(nei)

            prereqs[node] = res
            return res

        for i in range(numCourses):
            dfs(i)

        ans = []
        for pre, crs in queries:
            if crs in prereqs[pre]:
                ans.append(True)
            else:
                ans.append(False)
        return ans
```

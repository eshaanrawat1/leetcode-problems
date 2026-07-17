---
date: 2024-06-23
difficulty: Medium
num: 207
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Done
---

# Problem: 207. Course Schedule

## Description
check if we can take course

## Approach / Thoughts
dfs each course see if we can take it, cache results

if course has no outgoing edges take

## Solution
```python
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj = defaultdict(list)
        for src, dest in prerequisites:
            adj[src].append(dest)

        visit = set()
        cache = {}
        def dfs(course):
            if not adj[course]:
                return True
            
            if course in visit:
                return False

            if course in cache:
                return cache[course]

            visit.add(course)
            check = True
            for p in adj[course]:
                res = dfs(p)
                if not res:
                    check = False
                    break
            visit.remove(course)
            cache[course] = check
            return check
        
        for c, k in prerequisites:
            if not dfs(c):
                return False
        return True
```

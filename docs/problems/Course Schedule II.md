---
date: 2024-06-25
difficulty: Medium
num: 210
related_topics:
  - BFS
  - DFS
  - Graph
  - Topological Sort
return: Review
---

# Problem: 210. Course Schedule Ii

## Description
find valid schedule if exists

## Approach / Thoughts
bfs remove leaves one by one

check for cycle (no 0 nodes)

## Solution
```python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        prereq_for = {}
        in_degree = {}

        for i in range(numCourses):
            prereq_for[i] = []
            in_degree[i] = 0

        for crs, pre in prerequisites:
            prereq_for[pre].append(crs)
            in_degree[crs] += 1

        res = []
        while in_degree:
            cycle = False
            for course in in_degree:
                if in_degree[course] == 0:
                    res.append(course)
                    for pre in prereq_for[course]:
                        in_degree[pre] -= 1
                    del in_degree[course]
                    cycle = True
                    break

            if not cycle:
                return []
        return res
```

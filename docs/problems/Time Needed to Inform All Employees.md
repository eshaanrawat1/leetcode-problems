---
date: 2024-07-07
difficulty: Medium
num: 1376
related_topics:
  - BFS
  - DFS
  - Tree
return: Done
---

# Problem: 1376. Time Needed To Inform All Employees

## Description
max time to inform employee

## Approach / Thoughts
bfs with manager

q of emp id and time, keep tracking max time

## Solution
```python
class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        manages = defaultdict(list)
        for emp, man in enumerate(manager):
            manages[man].append(emp)

        q = deque([])
        for e in manages[-1]:
            q.append([e, 0]) 

        res = 0
        while q:
            emp, time = q.popleft()
            res = max(res, time)
            for sub in manages[emp]:
                report_time = informTime[emp]
                q.append([sub, time + report_time])
        return res
```

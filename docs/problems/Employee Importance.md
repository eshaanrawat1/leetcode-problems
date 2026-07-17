---
date: 2026-05-14
difficulty: Medium
num: 690
related_topics:
  - Array
  - Hash Table
  - Tree
  - Depth-First Search
  - Breadth-First Search
return:
---

# Problem: 690. Employee Importance

## Description
You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

You are given an array of employees `employees` where:

	`employees[i].id` is the ID of the `ith` employee.

	`employees[i].importance` is the importance value of the `ith` employee.

	`employees[i].subordinates` is a list of the IDs of the direct subordinates of the `ith` employee.

Given an integer `id` that represents an employee's ID, return *the **total** importance value of this employee and all their direct and indirect subordinates*.

## Approach / Thoughts
parse + graph

## Solution
```python
"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""

class Solution:
    def getImportance(self, employees: List['Employee'], id: int) -> int:
        adj = defaultdict(list)

        id_map = {}
        for e in employees:
            id_map[e.id] = e

        for e in employees:
            for sid in e.subordinates:
                adj[e].append(id_map[sid])

        def dfs(root):
            res = root.importance
            for sub in adj[root]:
                res += dfs(sub)
            return res

        return dfs(id_map[id])
```
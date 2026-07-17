---
date: 2024-02-03
difficulty: Easy
num: 1378
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1378. Replace Employee Id With The Unique Identifier

## Description
Same as problem

## Approach / Thoughts
Left join since we want all pairs on the left, even if unique ID is null

## Solution
```sql
# Write your MySQL query statement below
SELECT eu.unique_id, e.name
  FROM Employees e 
    LEFT JOIN EmployeeUNI AS eu ON e.id = eu.id
```

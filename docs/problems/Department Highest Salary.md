---
date: 2024-12-14
difficulty: Medium
num: 184
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 184. Department Highest Salary

## Description

## Approach / Thoughts
subquery for max of department and join

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select d.id, max(e.salary) as salary
    from Employee as e
    join Department as d on e.departmentId = d.id 
    group by d.id
)
select 
    d.name as Department,
    e.name as Employee,
    e.salary
from Employee as e
join Department as d on e.departmentId = d.id 
join sub as s on e.salary = s.salary and d.id = s.id
```

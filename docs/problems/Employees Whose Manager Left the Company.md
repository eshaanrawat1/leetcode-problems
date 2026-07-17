---
date: 2024-11-12
difficulty: Easy
num: 1978
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1978. Employees Whose Manager Left The Company

## Description

## Approach / Thoughts
subquery for not in employee id

filter by salary

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    employee_id
from Employees
where manager_id not in (
    select 
        employee_id
    from Employees
)
and salary < 30000
order by employee_id asc
```

---
date: 2024-11-11
difficulty: Easy
num: 1789
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1789. Primary Department For Each Employee

## Description
same, if only one that is primary

## Approach / Thoughts
sub query for one department employee

left join and filter

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        employee_id,
        'Y' as primary_flag
    from Employee
    group by employee_id
    having count(employee_id) = 1
) 
select 
    e1.employee_id,
    e1.department_id
from Employee as e1
left join sub as e2 on e1.employee_id = e2.employee_id
where e1.primary_flag = 'Y' or e2.primary_flag = 'Y'
```

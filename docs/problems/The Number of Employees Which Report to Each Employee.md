---
date: 2024-11-09
difficulty: Easy
num: 1731
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1731. The Number Of Employees Which Report To Each Employee

## Description

## Approach / Thoughts
join to find managers

count and average aggregates

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        e1.employee_id,
        e1.name,
        e2.employee_id as worker_id,
        e2.age
    from Employees as e1
    join Employees as e2 on e1.employee_id = e2.reports_to
)
select 
    sub.employee_id,
    sub.name,
    count(sub.worker_id) as reports_count,
    round(avg(sub.age)) as average_age
from sub 
group by sub.employee_id, sub.name
order by sub.employee_id asc
```

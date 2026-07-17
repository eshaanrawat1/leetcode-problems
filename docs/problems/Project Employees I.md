---
date: 2024-11-02
difficulty: Easy
num: 1075
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1075. Project Employees I

## Description
average year of experience for each projects

## Approach / Thoughts
join on employee id

group by product id and find average

## Solution
```python
-- Write your PostgreSQL query statement below
select p.project_id, 
coalesce(round(avg(e.experience_years),2),0) as average_years
from Project as p
left join Employee as e on p.employee_id = e.employee_id
group by p.project_id
```

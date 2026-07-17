---
date: 2024-12-07
difficulty: Medium
num: 176
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 176. Second Highest Salary

## Description

## Approach / Thoughts
case then for handle null

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select distinct salary 
    from Employee
    order by salary desc
    limit 2
)
select 
    case 
        when count(*) = 1 then null
        when count(*) = 2 then min(salary)
    end as SecondHighestSalary
from sub
```

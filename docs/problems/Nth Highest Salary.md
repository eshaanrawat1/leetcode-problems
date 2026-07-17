---
date: 2024-12-08
difficulty: Medium
num: 177
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 177. Nth Highest Salary

## Description

## Approach / Thoughts
sub query for order, with limit

case thens for null

## Solution
```python
CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
  RETURN QUERY (
    -- Write your PostgreSQL query statement below.
    with sub as (
        select distinct e.salary
        from Employee as e
        order by e.salary desc
        limit greatest(n, 0)
    )
    select 
        case 
            when count(*) = N then min(sub.salary) 
            when count(*) < N then null
        end as getNthHighestSalary
    from sub
  );
END;
$$ LANGUAGE plpgsql;
```

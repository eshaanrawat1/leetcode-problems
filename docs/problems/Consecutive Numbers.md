---
date: 2024-11-18
difficulty: Medium
num: 180
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 180. Consecutive Numbers

## Description

## Approach / Thoughts
join 3 times check distinct

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        l1.id, 
        l1.num as x, 
        l2.num as y,
        l3.num as z
    from Logs as l1
    left join Logs as l2 on l1.id = l2.id - 1
    left join Logs as l3 on l1.id = l3.id - 2
)
select distinct x as ConsecutiveNums
from sub 
where x = y and y = z
```

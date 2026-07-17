---
date: 2024-11-03
difficulty: Easy
num: 1633
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1633. Percentage Of Users Attended A Contest

## Description

## Approach / Thoughts
cross join total users with each contest

group by id to get counts divided by total

## Solution
```python
-- Write your PostgreSQL query statement below
with c as (
    select count('*') as total
    from Users
)
select 
    r.contest_id,
    round(count(*) * 100.0 / c.total,2) as percentage
from Register as r
cross join c
group by r.contest_id, c.total
order by percentage desc, r.contest_id asc
```

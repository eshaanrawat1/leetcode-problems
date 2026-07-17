---
date: 2024-10-25
difficulty: Medium
num: 1934
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1934. Confirmation Rate

## Description
same, find percentage of confirmed over total

## Approach / Thoughts
subqueries of confirm and total

round with case for null, left joins

## Solution
```python
-- Write your PostgreSQL query statement below
select s.user_id, 
case
    when x.num_confirms is not null then round(x.num_confirms * 1.0 / total.num_actions, 2) else 0 
    end as confirmation_rate
from Signups as s
left join 
    (select c.user_id, count(c.action) as num_confirms
    from Confirmations as c
    where c.action = 'confirmed'
    group by c.user_id) as x
on s.user_id = x.user_id 
left join 
    (select c.user_id, count(c.action) as num_actions
    from Confirmations as c
    group by c.user_id) as total
on s.user_id = total.user_id
```

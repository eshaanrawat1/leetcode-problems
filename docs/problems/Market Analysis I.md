---
date: 2025-04-29
difficulty: Medium
num: 1158
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1158. Market Analysis I

## Description
same, orders placed in 2019

## Approach / Thoughts
left join on users, count orders not null

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    u.user_id as buyer_id,
    u.join_date,
    count(o.order_id) as orders_in_2019
from Users as u
left join Orders as o on u.user_id = o.buyer_id
and o.order_date >= '2019-01-01' and o.order_date <= '2019-12-31'
group by u.user_id, u.join_date
```

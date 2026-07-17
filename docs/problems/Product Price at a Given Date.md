---
date: 2024-11-20
difficulty: Medium
num: 1164
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1164. Product Price At A Given Date

## Description

## Approach / Thoughts
subqueries for finding max possible date

left join on distinct ids

coalesce for 10 default value

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select p1.product_id, p1.new_price as price
    from Products as p1
    where change_date = (
        select max(change_date) from Products as p2
        where change_date <= '2019-08-16'
        and p1.product_id = p2.product_id
    )
),
ids as (
    select distinct product_id 
    from Products 
)
select 
    i.product_id,
    coalesce(s.price, 10) as price
from ids as i
left join sub as s on i.product_id = s.product_id
```

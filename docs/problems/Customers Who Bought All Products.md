---
date: 2024-11-14
difficulty: Medium
num: 1045
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1045. Customers Who Bought All Products

## Description

## Approach / Thoughts
subquery for joins

select count distincts equal — no need for join

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        c.customer_id, 
        c.product_key
    from Customer as c
    left join Product as p on c.product_key = p.product_key
) 
select 
    customer_id
from sub
group by customer_id
having count(distinct product_key) = (select count(distinct product_key) from Product)
```

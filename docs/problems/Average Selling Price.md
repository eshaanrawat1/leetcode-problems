---
date: 2024-11-02
difficulty: Easy
num: 1251
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1251. Average Selling Price

## Description

## Approach / Thoughts
find date range

get column in subquery

group by

## Solution
```python
-- Write your PostgreSQL query statement below
with info as (
    select p.product_id, u.units, u.units * p.price as total_amt
    from Prices as p
    left join UnitsSold as u on p.product_id = u.product_id
    and u.purchase_date between start_date and end_date
) 
select i.product_id, coalesce(round(sum(i.total_amt) * 1.0 / sum(i.units), 2), 0) as average_price
from info as i
group by i.product_id
```

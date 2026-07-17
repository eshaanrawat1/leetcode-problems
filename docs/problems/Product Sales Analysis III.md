---
date: 2024-11-07
difficulty: Medium
num: 1070
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1070. Product Sales Analysis Iii

## Description
find all products stats of first year

## Approach / Thoughts
subquery for min year and join

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        product_id,
        min(year) as year
    from Sales
    group by product_id
)
select 
    s.product_id,
    s.year as first_year,
    s.quantity,
    s.price
from Sales as s
join sub on s.product_id = sub.product_id
and s.year = sub.year
```

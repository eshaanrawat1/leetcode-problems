---
date: 2024-11-04
difficulty: Medium
num: 1174
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1174. Immediate Food Delivery Ii

## Description
find where immediate ≠ deliver

## Approach / Thoughts
find min dates group by

average whole table

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        customer_id, 
        min(order_date) as order_date,
        min(customer_pref_delivery_date) as cpref
    from Delivery 
    group by customer_id
)
select 
    round(avg(case when order_date != cpref then 0 else 1 end) * 100,2) 
    as immediate_percentage
from sub
```

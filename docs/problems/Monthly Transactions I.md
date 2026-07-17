---
date: 2024-10-27
difficulty: Medium
num: 1193
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1193. Monthly Transactions I

## Description
same, aggregates for transactions

## Approach / Thoughts
subqueries chained using with

select grouped info

## Solution
```python
-- Write your PostgreSQL query statement below
with x1 as (
    select 
        to_char(t.trans_date, 'yyyy-mm') as month, 
        t.country,
        count('*') as approved_count,
        sum(t.amount) as approved_total_amount
    from Transactions as t
    where state = 'approved'
    group by month, t.country
),
x2 as (
    select 
        to_char(t.trans_date, 'yyyy-mm') as month, 
        t.country,
        count('*') as trans_count,
        sum(t.amount) as trans_total_amount
    from Transactions as t
    group by month, t.country 
)
select 
    x2.month,
    x2.country,
    x2.trans_count,
    coalesce(x1.approved_count, 0) as approved_count,
    x2.trans_total_amount,
    coalesce(x1.approved_total_amount, 0) as approved_total_amount
from x2
left join x1 on x2.month = x1.month and x2.country = x1.country or (x1.country is null and x2.country is null)
```

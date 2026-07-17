---
date: 2024-11-04
difficulty: Easy
num: 1211
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1211. Queries Quality And Percentage

## Description

## Approach / Thoughts
subquery for count, main query for average

## Solution
```python
-- Write your PostgreSQL query statement below
select
    sub.query_name,
    round(sub.quality * 1.0 / sub.cnt, 2) as quality,
    round(sub.poor * 100.0 / sub.cnt, 2) as poor_query_percentage
    from (
        select 
            q.query_name, 
            sum(q.rating * 1.0 / q.position) as quality,
            count(q.query_name) as cnt,
            sum(case when q.rating < 3 then 1 else 0 end) as poor
        from Queries as q
        group by q.query_name
    ) as sub
where sub.query_name is not null
```

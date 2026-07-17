---
date: 2024-11-06
difficulty: Medium
num: 550
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 550. Game Play Analysis Iv

## Description
same, find players who logged in one day after first login

## Approach / Thoughts
subquery for min date

second subquery to count valid joins on date + 1

main query to divide the 2

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        a1.player_id,
        min(a1.event_date) as min_date
    from Activity as a1
    group by a1.player_id
),
sub2 as (
    select 
        count(s.player_id) as cnt
    from sub as s
    join Activity as a2 on s.player_id = a2.player_id
    and s.min_date + 1 = a2.event_date
)
select 
    round((select cnt from sub2) * 1.0 / count(sub.player_id), 2) as fraction
from sub
cross join sub2
```

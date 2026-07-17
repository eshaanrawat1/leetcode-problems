---
date: 2024-11-05
difficulty: Easy
num: 1141
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1141. User Activity For The Past 30 Days I

## Description

## Approach / Thoughts
count distinct group by date

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    activity_date as day,
    count(distinct user_id) as active_users
from Activity
where activity_date between '2019-06-28' and '2019-07-27'
group by activity_date 
```

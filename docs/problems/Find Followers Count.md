---
date: 2024-11-08
difficulty: Easy
num: 1729
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1729. Find Followers Count

## Description

## Approach / Thoughts
count followers

## Solution
```python
-- Write your PostgreSQL query statement below
select
    user_id,
    count(follower_id) as followers_count
from Followers 
group by user_id
order by user_id asc
```

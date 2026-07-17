---
date: 2024-11-26
difficulty: Medium
num: 1341
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1341. Movie Rating

## Description
most ratings and highest avg rating

## Approach / Thoughts
both separate queries with joins union

## Solution
```python
-- Write your PostgreSQL query statement below

(select u.name as results
from MovieRating as m
join Users as u on m.user_id = u.user_id
group by u.name
order by count(*) desc, u.name asc
limit 1)

union all

(select mo.title as results
from MovieRating as mr
join Movies as mo on mr.movie_id = mo.movie_id
where mr.created_at >= '2020-02-01' 
and mr.created_at <= '2020-02-29'
group by mo.title
order by avg(mr.rating) desc, mo.title asc
limit 1) 
```

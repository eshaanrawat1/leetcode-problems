---
date: 2024-11-07
difficulty: Easy
num: 596
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 596. Classes More Than 5 Students

## Description

## Approach / Thoughts
subquery for count

filter with where clause

## Solution
```python
-- Write your PostgreSQL query statement below
select class from (
    select 
        class,
        count(student) as cnt
    from Courses
    group by class
)
where cnt >= 5
```

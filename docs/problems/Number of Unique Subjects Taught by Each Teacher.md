---
date: 2024-11-05
difficulty: Easy
num: 2356
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 2356. Number Of Unique Subjects Taught By Each Teacher

## Description

## Approach / Thoughts
group by distinct

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    teacher_id,
    count(distinct subject_id) as cnt
from Teacher
group by teacher_id
```

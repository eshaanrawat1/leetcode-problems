---
date: 2024-10-12
difficulty: Easy
num: 620
related_topics:
  - Database
return: Done
---

# Problem: 620. Not Boring Movies

## Description
movies with odd id and not boring, ordered by rating desc

## Approach / Thoughts
natural language

## Solution
```python
-- Write your PostgreSQL query statement below
select * from Cinema
where id % 2 = 1
and description != 'boring'
order by rating desc
```

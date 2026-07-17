---
date: 2024-11-21
difficulty: Easy
num: 1667
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1667. Fix Names In A Table

## Description
make name first char upper and rest lower

## Approach / Thoughts
concat upper substring of first part and lower of second part

## Solution
```python
-- Write your PostgreSQL query statement below
select
    user_id,
    concat(
        upper(substring(name, 1, 1)),
        lower(substring(name, 2, length(name)-1))
    ) as name
from Users
order by user_id asc
```

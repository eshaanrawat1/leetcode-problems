---
date: 2024-11-17
difficulty: Easy
num: 610
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 610. Triangle Judgement

## Description
check if 3 sides make triangle

## Approach / Thoughts
case when statements

## Solution
```python
-- Write your PostgreSQL query statement below
select x, y, z, 
    case 
        when x + y <= z then 'No'
        when x + z <= y then 'No'
        when y + z <= x then 'No'
    else 
        'Yes'
    end as triangle
from Triangle
```

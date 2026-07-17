---
date: 2025-03-04
difficulty: Medium
num: 626
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 626. Exchange Seats

## Description
same, swap adjacent

## Approach / Thoughts
same, check case for last odd seat

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    case 
        when id = (select max(id) from Seat) and id % 2 = 1 then id
        when id % 2 = 1 then id + 1
    else 
        id - 1
    end as id, student
from Seat
order by id asc
```

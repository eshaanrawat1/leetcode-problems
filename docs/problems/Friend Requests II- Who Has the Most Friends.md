---
date: 2025-01-17
difficulty: Medium
num: 602
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 602. Friend Requests Ii  Who Has The Most Friends

## Description

## Approach / Thoughts
joins for mutual friends count

## Solution
```python
-- Write your PostgreSQL query statement below

with s1 as (
    select requester_id as r_id, count(accepter_id) as num1
    from RequestAccepted
    group by requester_id
),
s2 as (
    select accepter_id as a_id, count(requester_id) as num2
    from RequestAccepted
    group by accepter_id
),
s3 as (
    select requester_id from RequestAccepted
    union  
    select accepter_id from RequestAccepted
) 
select 
    distinct requester_id as id, 
    case 
        when num1 is null and num2 is null then 0 
        when num1 is null then num2
        when num2 is null then num1
    else 
        num1 + num2 
    end as num
from s3 as ra
left join s1 on ra.requester_id = s1.r_id
left join s2 on ra.requester_id = s2.a_id
order by num desc
limit 1
```

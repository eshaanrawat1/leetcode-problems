---
date: 2024-06-24
difficulty: Easy
num: 1661
related_topics:
  - SQL
return: Done
---

# Problem: 1661. Average Time Of Process Per Machine

## Description

## Approach / Thoughts
subquery and join those and avg

## Solution
```sql
select t1.machine_id, ROUND(AVG(t2.timestamp-t1.timestamp), 3) as processing_time
from (select * from Activity
where activity_type = 'start') as t1
join
(select * from Activity
where activity_type = 'end') as t2
on t1.machine_id = t2.machine_id 
and t1.process_id = t2.process_id 
group by t1.machine_id
```

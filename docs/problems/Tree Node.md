---
date: 2025-01-10
difficulty: Medium
num: 608
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 608. Tree Node

## Description
categorize nodes that have parent node listed

## Approach / Thoughts
left join and case

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select t1.id, t1.p_id, count(t2.id)
    from Tree as t1
    left join Tree as t2 on t1.id = t2.p_id
    group by t1.id, t1.p_id
) 
select id, 
case 
    when p_id is null then 'Root'
    when count > 0 then 'Inner'
else
    'Leaf'
end as type
from sub 
```

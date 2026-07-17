---
date: 2024-12-10
difficulty: Medium
num: 178
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 178. Rank Scores

## Description
rank scores

## Approach / Thoughts
use rank function on unique scores

join on duplicate scores table

## Solution
```python
-- Write your PostgreSQL query statement below
with sub as (
    select 
        score,
        rank() over (order by score desc) as rank 
    from Scores
    group by (score)
)
select 
    sc.score,
    s.rank
from Scores as sc
left join sub as s on sc.score = s.score
order by sc.score desc
```

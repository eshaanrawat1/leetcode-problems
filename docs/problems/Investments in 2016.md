---
date: 2025-01-03
difficulty: Medium
num: 585
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 585. Investments In 2016

## Description
same with conditions

## Approach / Thoughts
sub queries and sum round

## Solution
```python
-- Write your PostgreSQL query statement below
with s1 as (
    select count(pid) as tivcount, tiv_2015
    from Insurance 
    group by tiv_2015
),
s2 as (
    select count(pid) as geocount, lat, lon
    from Insurance
    group by lat, lon
) 
select round(cast(sum(i.tiv_2016) as numeric), 2) as tiv_2016
from Insurance as i
join s1 on i.tiv_2015 = s1.tiv_2015 
join s2 on i.lat = s2.lat and i.lon = s2.lon
where s1.tivcount > 1 and s2.geocount = 1
```

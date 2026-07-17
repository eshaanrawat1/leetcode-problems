---
date: 2024-11-08
difficulty: Easy
num: 619
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 619. Biggest Single Number

## Description
max single number

## Approach / Thoughts
subquery for all single numbers and max from that

## Solution
```python
-- Write your PostgreSQL query statement below
select 
    max(num) as num
from (
    select
        num,
        count(num)
    from MyNumbers
    group by num
    having count(num) < 2
)
```

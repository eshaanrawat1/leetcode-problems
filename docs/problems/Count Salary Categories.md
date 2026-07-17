---
date: 2024-11-24
difficulty: Medium
num: 1907
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1907. Count Salary Categories

## Description

## Approach / Thoughts
select subs and union all

## Solution
```python
-- Write your PostgreSQL query statement below

select 
    'Low Salary' as category,
    count(*) as accounts_count
from Accounts
where income < 20000

union all

select 
    'Average Salary' as category,
    count(*) as accounts_count
from Accounts
where income >= 20000 and income <= 50000

union all

select 
    'High Salary' as category,
    count(*) as accounts_count
from Accounts
where income > 50000
```

---
date: 2024-01-31
difficulty: Easy
num: 584
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 584. Find Customer Referee

## Description
Find all names where the refer id is not equal to 2

## Approach / Thoughts
Select and where clause if <> 2 or id is null

## Solution
```sql
# Write your MySQL query statement below
SELECT name from Customer
  WHERE referee_id <> 2 or referee_id IS NULL
```

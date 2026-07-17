---
date: 2024-02-03
difficulty: Easy
num: 1068
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1068. Product Sales Analysis I

## Description
Have information from two tables, display subset of both

## Approach / Thoughts
Inner join both tables on common key and get selected columns

## Solution
```sql
# Write your MySQL query statement below
SELECT p.product_name, s.year, s.price
  FROM Sales AS s
    INNER JOIN Product AS p ON s.product_id = p.product_id
```

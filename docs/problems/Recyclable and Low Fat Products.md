---
date: 2024-01-31
difficulty: Easy
num: 1757
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1757. Recyclable And Low Fat Products

## Description
Find all product ids in a database that are recyclable and lowfat

## Approach / Thoughts
Query with those conditions, optionally order by in ascending order

## Solution
```sql
# Write your MySQL query statement below
SELECT product_id from Products
  WHERE low_fats = 'Y' 
    AND recyclable = 'Y' 
  ORDER BY product_id ASC
```

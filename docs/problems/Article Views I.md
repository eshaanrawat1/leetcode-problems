---
date: 2024-02-01
difficulty: Easy
num: 1148
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1148. Article Views I

## Description
Select all author ids where author id = viewer id, sort by asc unique

## Approach / Thoughts
Use alias to rename the column title, use asc for sorting, use distinct select for unique

## Solution
```sql
# Write your MySQL query statement below
SELECT DISTINCT author_id AS id
  FROM Views
  WHERE author_id = viewer_id
    ORDER BY author_id ASC
```

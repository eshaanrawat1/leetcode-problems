---
date: 2024-01-31
difficulty: Easy
num: 595
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 595. Big Countries

## Description
Find all countries that have certain population size or area, they are considered big

Return the name, area, and population

## Approach / Thoughts
Select multiple columns and use a conditional

## Solution
```sql
# Write your MySQL query statement below
SELECT name, population, area 
  FROM World
    WHERE area >= 3000000
      OR population >= 25000000
```

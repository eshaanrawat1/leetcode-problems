---
date: 2024-06-24
difficulty: Easy
num: 577
related_topics:
  - SQL
return: Done
---

# Problem: 577. Employee Bonus

## Description
find all where bonus < 1000 including nulls

## Approach / Thoughts
left join

## Solution
```sql
select e.name, b.bonus from Employee as e
left join Bonus as b on e.empID = b.empID
where IFNULL(b.bonus, 0) < 1000 
```

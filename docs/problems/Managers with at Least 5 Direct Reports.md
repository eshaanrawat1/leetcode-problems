---
date: 2024-08-17
difficulty: Medium
num: 570
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 570. Managers With At Least 5 Direct Reports

## Description

## Approach / Thoughts
recursive join and count by

## Solution
```python
select m.name
from Employee e
join Employee m on e.managerId = m.id
group by m.id 
having count(*) >= 5
```

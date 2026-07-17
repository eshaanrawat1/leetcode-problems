---
date: 2024-08-17
difficulty: Easy
num: 1280
related_topics:
  - SQL
return: Done
---

# Problem: 1280. Students And Examinations

## Description
sql query to match students to exams

## Approach / Thoughts
join

group by

count *

## Solution
```python
select s.student_id, s.student_name, su.subject_name, count(e.student_id) as attended_exams
from Students as s
join Subjects as su
left join Examinations as e on s.student_id = e.student_id and su.subject_name = e.subject_name
group by s.student_id, s.student_name, su.subject_name 
order by 1,2,3
```

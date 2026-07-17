---
date: 2024-06-23
difficulty: Easy
num: 197
related_topics:
  - SQL
return: Done
---

# Problem: 197. Rising Temperature

## Description
find day where temp was more than yesterday

## Approach / Thoughts
lag function join date and temp columns of prev day

check conditions use datediff

## Solution
```sql
SELECT x.id FROM (
    SELECT * , LAG(temperature) OVER (ORDER BY recordDate) prev_temp, 
                LAG(recordDate) OVER (ORDER BY recordDate) prev_date
    FROM Weather) AS x
WHERE x.temperature > x.prev_temp 
AND x.prev_temp IS NOT NULL  
AND DATEDIFF(x.recordDate, x.prev_date) = 1     
```

---
date: 2024-06-23
difficulty: Easy
num: 1581
related_topics:
  - SQL
return: Done
---

# Problem: 1581. Customer Who Visited But Did Not Make Any Transactions

## Description

## Approach / Thoughts
left join and count nulls with customer id

## Solution
```sql
SELECT v.customer_id, COUNT(v.visit_id) count_no_trans
FROM Visits v 
LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE t.transaction_id IS NULL
GROUP BY v.customer_id
```

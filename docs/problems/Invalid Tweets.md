---
date: 2024-02-01
difficulty: Easy
num: 1683
related_topics:
  - Database
  - SQL
return: Done
---

# Problem: 1683. Invalid Tweets

## Description
Find all invalid tweet ids which have a message greater than 15 characters

## Approach / Thoughts
Select where length fits

## Solution
```sql
# Write your MySQL query statement below
SELECT tweet_id FROM Tweets
  WHERE length(content) > 15
```

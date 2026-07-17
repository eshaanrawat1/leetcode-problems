---
date: 2024-06-17
difficulty: Medium
num: 3185
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 3185. Count Pairs That Form A Complete Day Ii

## Description
same as 3184

## Approach / Thoughts
count pairs and keep remainder in hashmap - see if complement exists

## Solution
```python
class Solution:
    def countCompleteDayPairs(self, hours: List[int]) -> int:
        remainders = {}

        pairs = 0
        for h in hours:
            rem = h % 24
            comp = (24-rem) % 24
            if comp in remainders:
                pairs += remainders[comp]
            remainders[rem]  = 1 + remainders.get(rem, 0)
        return pairs
```

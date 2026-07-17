---
date: 2024-05-04
difficulty: Easy
num: 575
related_topics:
  - Array
  - Hash Table
return: Done
---

# Problem: 575. Distribute Candies

## Description
find number of candies at max

## Approach / Thoughts
either take all possible unique candies or n/2 candies

## Solution
```python
class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        return min(len(candyType) // 2, len(set(candyType)))
```

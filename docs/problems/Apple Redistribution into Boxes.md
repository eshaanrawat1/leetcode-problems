---
date: 2024-03-11
difficulty: Easy
num: 3074
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 3074. Apple Redistribution Into Boxes

## Description
Put apples in boxes

## Approach / Thoughts
Sum apples and greedily put them

## Solution
```python
class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        a = sum(apple)
        
        capacity.sort()
        for i in range(len(capacity)-1,-1,-1):
            if a <= 0: 
                return len(capacity)-i-1
            a -= capacity[i]
        return len(capacity) 
```

---
date: 2024-08-28
difficulty: Medium
num: 1094
related_topics:
  - Array
  - Heap (Priority Queue)
  - Prefix Sum
  - Simulation
  - Sorting
return: Done
---

# Problem: 1094. Car Pooling

## Description
same, see if intervals match

## Approach / Thoughts
make array due to small constraints

## Solution
```python
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        passengers = [0] * 1001

        for num, start, end in trips:
            for i in range(start, end):
                passengers[i] += num

                if passengers[i] > capacity:
                    return False
        
        return True
```

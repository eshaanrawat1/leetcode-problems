---
date: 2024-06-25
difficulty: Easy
num: 2357
related_topics:
  - Array
  - Greedy
  - Hash Table
  - Heap (Priority Queue)
  - Simulation
  - Sorting
return: Done
---

# Problem: 2357. Make Array Zero By Subtracting Equal Amounts

## Description

## Approach / Thoughts
find number of unique positives

1 → 1

1, 2 → 1 + 1

1, 2, 3 → 1 + 1, 2

## Solution
```python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        positives = set()
        for n in nums:
            if n > 0:
                positives.add(n)
        return len(positives)
```

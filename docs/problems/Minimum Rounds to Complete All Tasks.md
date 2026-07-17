---
date: 2024-01-04
difficulty: Medium
num: 2244
related_topics:
  - Array
  - Counting
  - Greedy
  - Hash Table
return: Done
---

# Problem: 2244. Minimum Rounds To Complete All Tasks

## Description
Same as above, 2870

## Approach / Thoughts
Same as 2870, but use collections Counter for map freq

## Solution
```python
class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        from collections import Counter

        freq = Counter(tasks)
        total = 0
        for val in freq.values():
            if val == 1:
                return -1
            else:
                total += -(-val//3)

        return total
```

---
date: 2024-09-04
difficulty: Medium
num: 2028
related_topics:
  - Array
  - Math
  - Simulation
return: Done
---

# Problem: 2028. Find Missing Observations

## Description
same, fill in sum to mean

## Approach / Thoughts
calc remaining we need to sum to

fill with even parts, add 1 for any remainder mod

handle edge case where impossible

## Solution
```python
class Solution:
    def missingRolls(self, rolls: List[int], mean: int, n: int) -> List[int]:
        current_data = sum(rolls)
        total_length = len(rolls) + n

        total = mean * total_length - current_data

        if total < n or total > 6 * n:
            return []

        part = total // n
        rem = total % n

        missing = [part] * n
        for i in range(rem):
            missing[i] += 1
        return missing 
```

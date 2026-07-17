---
date: 2024-04-07
difficulty: Easy
num: 1700
related_topics:
  - Array
  - Queue
  - Simulation
  - Stack
return: Done
---

# Problem: 1700. Number Of Students Unable To Eat Lunch

## Description
Something bro

## Approach / Thoughts
Q order doesn’t matter keep recycling until count runs out

## Solution
```python
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        sandwiches = sandwiches[::-1]
        zero = one = 0
        for n in students:
            if n == 0: zero += 1
            if n == 1: one += 1

        idx = len(sandwiches)-1
        while idx >= 0:
            if sandwiches[idx] == 0 and zero > 0:
                zero -= 1
                idx -= 1
            elif sandwiches[idx] == 1 and one > 0:
                one -= 1
                idx -= 1
            else:
                break
        return zero + one
```

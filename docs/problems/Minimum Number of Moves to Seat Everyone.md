---
date: 2024-06-12
difficulty: Easy
num: 2037
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 2037. Minimum Number Of Moves To Seat Everyone

## Description
move students to seats

## Approach / Thoughts
sort and take all differences

## Solution
```python
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()

        total = 0
        for i in range(len(seats)):
            total += abs(seats[i] - students[i])
        return total
```

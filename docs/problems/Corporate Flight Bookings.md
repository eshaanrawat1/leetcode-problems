---
date: 2024-04-16
difficulty: Medium
num: 1109
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 1109. Corporate Flight Bookings

## Description
Count number of seats booked

## Approach / Thoughts
Brute force and then running sum accounting for bounds

## Solution
```python
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        res = [0] * (n+1)

        for start, end, count in bookings:
            res[start-1] += count
            res[end] -= count

        for i in range(1, len(res)):
            res[i] += res[i-1]
        return res[:-1]   
```

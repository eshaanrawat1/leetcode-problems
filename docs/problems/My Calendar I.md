---
date: 2024-08-28
difficulty: Medium
num: 729
related_topics:
  - Array
  - Binary Search
  - Design
  - Ordered Set
  - Segment Tree
return: Done
---

# Problem: 729. My Calendar I

## Description
same as before, find double booked interval

## Approach / Thoughts
keep track of start and end to find intersections via prefix sum

## Solution
```python
class MyCalendar:

    def __init__(self):
        self.meetings = []

    def book(self, start: int, end: int) -> bool:
        meetings = self.meetings[:]

        meetings.append((start, 1))
        meetings.append((end, -1))

        meetings.sort()

        total = 0
        for num, sign in meetings:
            total += sign

            if total >= 2:
                return False
        
        self.meetings = meetings
        return True

# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)
```

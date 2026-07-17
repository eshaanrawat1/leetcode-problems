---
date: 2024-08-28
difficulty: Hard
num: 732
related_topics:
  - Binary Search
  - Design
  - Ordered Set
  - Prefix Sum
  - Segment Tree
return: Done
---

# Problem: 732. My Calendar Iii

## Description
find max intersections for each val

## Approach / Thoughts
keep track of start (add) and end (subtract) and running max as we go

## Solution
```python
class MyCalendarThree:

    def __init__(self):
        self.meetings = []
        

    def book(self, startTime: int, endTime: int) -> int:
        self.meetings.append((startTime, 1))
        self.meetings.append((endTime, -1))

        self.meetings.sort()

        total = cur_max = 0
        for time, sign in self.meetings:
            total += sign
            cur_max = max(cur_max, total)

        return cur_max

# Your MyCalendarThree object will be instantiated and called as such:
# obj = MyCalendarThree()
# param_1 = obj.book(startTime,endTime)
```

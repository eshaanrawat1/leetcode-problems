---
date: 2024-08-28
difficulty: Medium
num: 731
related_topics:
  - Array
  - Binary Search
  - Design
  - Ordered Set
  - Prefix Sum
  - Segment Tree
return: Done
---

# Problem: 731. My Calendar Ii

## Description
check if triple book

## Approach / Thoughts
mark start and end locations, add when start, subtract when end, prefix sum

see if total ≥ 3 at any point

## Solution
```python
class MyCalendarTwo:

    def __init__(self):
        self.meetings = []
        

    def book(self, start: int, end: int) -> bool:
        meetings = self.meetings[:]

        meetings.append((start, 1))
        meetings.append((end, -1))

        meetings.sort()

        total = 0
        for val, sign in meetings:
            total += sign

            if total >= 3:
                return False
        
        self.meetings.append((start, 1))
        self.meetings.append((end, -1))
        return True
        


# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(start,end)
```

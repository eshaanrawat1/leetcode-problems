---
date: 2024-08-14
difficulty: Medium
num: 2332
related_topics:
  - Array
  - Binary Search
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 2332. The Latest Time To Catch A Bus

## Description

## Approach / Thoughts
simulate bus passes

if last bus has room, start from max possible value and go down

else find the first empty slot - start at last passenger and go down (unique vals)

## Solution
```python
class Solution:
    def latestTimeCatchTheBus(self, buses: List[int], passengers: List[int], capacity: int) -> int:
        B, P = len(buses), len(passengers)
        p_set = set(passengers)

        buses.sort()
        passengers.sort()
        room = False

        top = bot = 0
        while top < B:
            cap = capacity

            while bot < P and passengers[bot] <= buses[top] and cap:
                bot += 1
                cap -= 1

            if top == B-1 and cap:
                room = True
            top += 1

        cur = passengers[bot-1]
        if room:
            cur = buses[-1]
        
        while cur in p_set:
            cur -= 1
        return cur
```

---
date: 2024-05-06
difficulty: Medium
num: 853
related_topics:
  - Array
  - Monotonic Stack
  - Sorting
  - Stack
return: Done
---

# Problem: 853. Car Fleet

## Description
car fleets

## Approach / Thoughts
sort and find time taken to reach target

find if it is faster than first car, if it is joins the fleet

## Solution
```python
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        stack = []
        num_fleets = 0

        map_speeds = {}
        for i in range(len(position)):
            map_speeds[position[i]] = speed[i]
        position = sorted(position)[::-1]

        check = False
        for pos in position:
            speed = map_speeds[pos]
            time = (target - pos) / speed

            while stack and time > stack[0][-1]:
                stack.pop()
                check = True
            
            if check: num_fleets += 1
            check = False
            
            stack.append([pos, time])
        return num_fleets + 1 if stack else num_fleets
```

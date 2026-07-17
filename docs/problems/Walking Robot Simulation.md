---
date: 2024-09-03
difficulty: Medium
num: 874
related_topics:
  - Array
  - Hash Table
  - Simulation
return: Done
---

# Problem: 874. Walking Robot Simulation

## Description

## Approach / Thoughts
walk the robot

dx dy for left and right turns draw it out

## Solution
```python
class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        start = [0, 0]
        dx, dy = 0, 1

        obstacles = {tuple(o) for o in obstacles}
        max_dist = 0

        for c in commands: 
            if c == -2:
                dx, dy = -dy, dx
            elif c == -1:
                dx, dy = dy, -dx
            else:
                for i in range(c):
                    start[0] += dx
                    start[1] += dy

                    if tuple(start) in obstacles:
                        start[0] -= dx
                        start[1] -= dy
                        break

                    x, y = start
                    max_dist = max(max_dist, x ** 2 + y ** 2)
        return max_dist
```

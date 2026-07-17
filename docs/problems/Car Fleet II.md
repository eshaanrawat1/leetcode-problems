---
date: 2025-10-06
difficulty: Hard
num: 1776
related_topics:
  - Array
  - Heap (Priority Queue)
  - Math
  - Monotonic Stack
  - Stack
return: Review
---

# Problem: 1776. Car Fleet Ii

## Description

## Approach / Thoughts
reverse and check for each car what is the car it collides with

for each chain x, y, z → where x is our current car, if y collides with z first then it sticks so the only real collision we need to track is x, z

similarly, keep a stack and keep popping until we find the one x collides with - invariant is kept since x will only collide with the first to its right, so if y collides with z first, y just becomes z

## Solution
```python
class Solution:
    def getCollisionTimes(self, cars: List[List[int]]) -> List[float]:
        cars.reverse()

        n = len(cars)
        answer = [inf] * n

        def collide_time(x1, m1, x2, m2):
            slope = x1 - x2
            intercept = m2 - m1

            if slope <= 0:
                return inf

            xint = intercept / slope
            return xint 

        
        stack = []
        for idx, (m1, x1) in enumerate(cars):
            while stack and collide_time(x1, m1, stack[-1][2], stack[-1][1]) >= answer[~stack[-1][0]]:
                stack.pop()
            answer[~idx] = collide_time(x1, m1, stack[-1][2], stack[-1][1]) if stack else inf
            stack.append((idx, m1, x1))
        
        for i in range(n):
            if answer[i] == inf:
                answer[i] = -1
        return answer
```

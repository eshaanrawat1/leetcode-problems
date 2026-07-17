---
date: 2024-05-02
difficulty: Medium
num: 735
related_topics:
  - Array
  - Simulation
  - Stack
return: Done
---

# Problem: 735. Asteroid Collision

## Description
left and right asteroids collide based on size

## Approach / Thoughts
keep track of stack, if asteroid is invalid, set it to 0

## Solution
```python
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        check = True
        for a in asteroids:
            while stack and a < 0 and stack[-1] > 0:
                diff = stack[-1] + a
                if diff < 0:
                    stack.pop()
                elif diff > 0:
                    a = 0
                else:
                    stack.pop()
                    a = 0
            if a:
                stack.append(a)
        return stack
```

---
date: 2024-08-18
difficulty: Medium
num: 650
related_topics:
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 650. Keys Keyboard

## Description
get to n in min steps

## Approach / Thoughts
bfs

## Solution
```python
class Solution:
    def minSteps(self, n: int) -> int:
        q = deque([[1, 0, 0]])  # on screen, copy
        visit = set()

        while q:
            on_screen, copy, steps = q.popleft()

            if on_screen == n:
                return steps
            if (on_screen, copy) in visit or on_screen > n:
                continue
            visit.add((on_screen, copy))

            # copy 
            q.append([on_screen, copy + on_screen, steps + 1])

            # paste
            if copy:
                q.append([on_screen + copy, 0, steps + 1])
```

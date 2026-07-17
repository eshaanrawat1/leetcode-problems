---
date: 2024-05-02
difficulty: Medium
num: 2126
related_topics:
  - Array
  - Greedy
  - Sorting
return: Done
---

# Problem: 2126. Destroying Asteroids

## Description
See if planet can absorb asteroid mass

## Approach / Thoughts
sort and greedy take

## Solution
```python
class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        asteroids.sort()

        for i in range(len(asteroids)):
            if mass >= asteroids[i]:
                mass += asteroids[i]
            else:
                return False
        return True
```

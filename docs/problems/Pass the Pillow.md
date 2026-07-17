---
date: 2024-07-06
difficulty: Easy
num: 2582
related_topics:
  - Math
  - Simulation
return: Done
---

# Problem: 2582. Pass The Pillow

## Description
chain

## Approach / Thoughts
math for cycle and abs distance

## Solution
```python
class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        time %= (n * 2 - 2)
        return n - abs(n - 1 - time)
```

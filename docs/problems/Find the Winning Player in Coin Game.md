---
date: 2024-07-30
difficulty: Easy
num: 3222
related_topics:
  - Game Theory
  - Math
  - Simulation
return: Done
---

# Problem: 3222. Find The Winning Player In Coin Game

## Description
pick 115 each time

## Approach / Thoughts
can only pick 1 x and 4 y to make 115

simulate game

## Solution
```python
class Solution:
    def losingPlayer(self, x: int, y: int) -> str:
        turn = 1
        while True:
            if x < 1 or y < 4:
                return "Bob" if turn == 1 else "Alice"

            x -= 1
            y -= 4

            turn *= -1
```

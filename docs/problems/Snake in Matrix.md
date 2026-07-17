---
date: 2024-08-16
difficulty: Easy
num: 3248
related_topics:
  - Array
  - Simulation
  - String
return: Done
---

# Problem: 3248. Snake In Matrix

## Description

## Approach / Thoughts
track moves and multiply n * row + col

## Solution
```python
class Solution:
    def finalPositionOfSnake(self, n: int, commands: List[str]) -> int:        
        row = col = 0
        
        for c in commands:
            if c == "UP":
                row -= 1
            if c == "DOWN":
                row += 1
            if c == "LEFT":
                col -= 1
            if c == "RIGHT":
                col += 1
                
        return (row * n) + col
```

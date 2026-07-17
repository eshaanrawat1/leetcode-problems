---
date: 2024-01-01
difficulty: Easy
num: 682
related_topics:
  - Array
  - Simulation
  - Stack
return: Done
---

# Problem: 682. Baseball Game

## Description
Compute scores of baseball game based on operations in a string array.

## Approach / Thoughts
Use conditionals and iterate through array

- add ints to stack

- operations add or pop

## Solution
```python
class Solution:
    def calPoints(self, operations: List[str]) -> int:
        scores = []

        for op in operations:
            if op == '+':
                scores.append(scores[-1] + scores[-2])
            elif op == 'D':
                scores.append(2 * scores[-1])
            elif op == 'C':
                scores.pop()
            else:
                scores.append(int(op))

        return sum(scores)
```

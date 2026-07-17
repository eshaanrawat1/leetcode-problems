---
date: 2024-07-09
difficulty: Medium
num: 1701
related_topics:
  - Array
  - Simulation
return: Done
---

# Problem: 1701. Average Waiting Time

## Description

## Approach / Thoughts
keep track of global time, subtract from arrival

## Solution
```python
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        waiting = time = 0
        for arrive, process in customers:
            time = max(time, arrive) + process
            waiting += (time - arrive)
        return waiting / len(customers)
```

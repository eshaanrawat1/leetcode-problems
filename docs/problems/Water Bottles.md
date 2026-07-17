---
date: 2024-07-07
difficulty: Easy
num: 1518
related_topics:
  - Math
  - Simulation
return: Done
---

# Problem: 1518. Water Bottles

## Description
how many water bottles can be taken

## Approach / Thoughts
simulate

## Solution
```python
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        total = empty = 0
        while numBottles > 0:
            total += numBottles
            empty += numBottles
            numBottles = 0

            if empty >= numExchange:
                full_bottles = empty // numExchange
                empty %= numExchange
                numBottles += full_bottles 
        return total
```

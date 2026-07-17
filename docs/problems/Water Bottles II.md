---
date: 2024-03-31
difficulty: Medium
num: 3100
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 3100. Water Bottles Ii

## Description
Complicated description about drinking and exchanging bottles

## Approach / Thoughts
Simple follow the diagram

## Solution
```python
class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        result = numBottles 

        while (numBottles >= numExchange):
            numBottles -= (numExchange-1)
            numExchange += 1
            
            result += 1
        return result
```

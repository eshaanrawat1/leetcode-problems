---
date: 2024-02-05
difficulty: Medium
num: 877
related_topics:
  - Array
  - Dynamic Programming
  - Game Theory
  - Math
return: Done
---

# Problem: 877. Stone Game

## Description
Players can choose stones from either the beginning or the end. Return who wins

## Approach / Thoughts
Return true. Since there is always an even number of stones, the player who chooses first can either pick the first or the last stone (even / odd indexed) to force picks of all even or all odd.

## Solution
```python
class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        return True
```

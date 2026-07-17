---
date: 2024-08-07
difficulty: Easy
num: 3238
related_topics:
  - Array
  - Counting
  - Hash Table
return: Done
---

# Problem: 3238. Find The Number Of Winning Players

## Description

## Approach / Thoughts
2d array

## Solution
```python
class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        players = [[0] * 11 for _ in range(11)]
        
        for x, y in pick:
            players[x][y] += 1
            
            
        count = 0
        for p in range(len(players)):
            for v in players[p]:
                if v > p:
                    count += 1
                    break
        return count
```

---
date: 2024-07-09
difficulty: Medium
num: 935
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 935. Knight Dialer

## Description
return all unique knight moves

## Approach / Thoughts
cache based on location of number of jumps remaining

decision tree and dfs

## Solution
```python
class Solution:
    def knightDialer(self, n: int) -> int:
        legal_moves = {
            0: [4, 6],
            1: [6, 8],
            2: [7, 9],
            3: [4, 8],
            4: [9, 3, 0],
            5: [],
            6: [7, 1, 0],
            7: [2, 6],
            8: [1, 3],
            9: [2, 4]
        }
        
        cache = {}
        def dfs(num, jumps):
            if jumps == 0:
                return 1
            if not legal_moves[num]:
                return 0
            if (num, jumps) in cache:
                return cache[(num, jumps)]

            total = 0
            for move in legal_moves[num]:
                total += dfs(move, jumps-1)

            cache[(num, jumps)] = total
            return total
    
        res = 0
        for i in range(10):
            res += dfs(i, n-1)
        return res % (10 ** 9 + 7)
```

---
date: 2025-12-31
difficulty: Hard
num: 2209
related_topics:
  - Dynamic Programming
  - Prefix Sum
  - String
return: Done
---

# Problem: 2209. Minimum White Tiles After Covering With Carpets

## Description

## Approach / Thoughts
dp place don’t place carpet

minimize white → maximize white covered + prefix sum

## Solution
```python
class Solution:
    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:
        # 8:55
        # zerotrac: 2106
        # dp place dont place
        # always better to place carpet on a white cell 
        # 1000, k = 1000 -> n^2 is ok

        # 0 - black
        # 1 - white 
        # min whit visible - max white tiles colored
        # dont want carpets to overlap
        # prefix sum to count covered carpets 

        n = len(floor)
        white_count = floor.count('1')

        ps = [int(t) for t in floor]
        for i in range(1, n):
            ps[i] += ps[i-1]

        ps.extend([ps[-1]] * carpetLen)
        ps.append(0)

        @lru_cache(None)
        def dfs(i, rem):
            if i >= n or rem == 0:
                return 0

            take = 0
            if floor[i] == '1':
                take = (ps[i+carpetLen-1] - ps[i-1]) + dfs(i+carpetLen, rem-1)
            skip = dfs(i+1, rem)
            return max(take, skip)
        
        return white_count - dfs(0, numCarpets)
```

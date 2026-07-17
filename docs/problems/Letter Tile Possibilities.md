---
date: 2025-05-08
difficulty: Medium
num: 1079
related_topics:
  - Backtracking
  - Counting
  - Hash Table
  - String
return: Done
---

# Problem: 1079. Letter Tile Possibilities

## Description

## Approach / Thoughts
permutations, count as we go

res is number of sequences ending at this point

## Solution
```python
class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        cnt = Counter(tiles)
        def dfs():
            res = 0
            for c in cnt:
                if cnt[c] > 0:
                    cnt[c] -= 1
                    res += 1
                    res += dfs()
                    cnt[c] += 1
            return res
        return dfs()
```

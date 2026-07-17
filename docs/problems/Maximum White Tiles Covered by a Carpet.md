---
date: 2025-01-28
difficulty: Medium
num: 2271
related_topics:
  - Array
  - Binary Search
  - Greedy
  - Prefix Sum
  - Sliding Window
  - Sorting
return: Review
---

# Problem: 2271. Maximum White Tiles Covered By A Carpet

## Description
same, longest cover of consec streak

## Approach / Thoughts
binary search for end position, end block in tiles

check case of partial

## Solution
```python
class Solution:
    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
        tiles.sort()

        ps = [0]
        starts = []

        for s,e in tiles:
            ps.append(e-s+1)
            starts.append(s)

        n = len(tiles)
        for i in range(1, len(ps)):
            ps[i] += ps[i-1]

        res = 0

        for i in range(n):
            s, e = tiles[i]
            if e-s+1 >= carpetLen:
                return carpetLen

            max_reach = s + carpetLen - 1
            j = bisect_right(starts, max_reach)-1

            if tiles[j][1] <= max_reach:
                res = max(res, ps[j+1] - ps[i])
            else:
                cover = ps[j+1] - ps[i]
                partial = tiles[j][1] - max_reach
                res = max(res, cover - partial)  

        return res
```

---
date: 2024-08-29
difficulty: Medium
num: 947
related_topics:
  - DFS
  - Graph
  - Hash Table
  - Union Find
return: Done
---

# Problem: 947. Most Stones Removed With Same Row Or Column

## Description

## Approach / Thoughts
dfs to find num islands, then remove 1

## Solution
```python
class Solution:
    def removeStones(self, stones: List[List[int]]) -> int:
        rows = defaultdict(list)
        cols = defaultdict(list)

        for x, y in stones:
            rows[x].append((x, y))
            cols[y].append((x, y))

        visit = set()

        def dfs(x, y):
            if (x, y) in visit:
                return 0
            visit.add((x, y))

            res = 1
            for nei_x, nei_y in rows[x]:
                res += dfs(nei_x, nei_y)

            for nei_x, nei_y in cols[y]:
                res += dfs(nei_x, nei_y)
            return res 
        
        res = 0
        for x, y in stones:
            total = dfs(x, y)
            if total:
                res += total - 1
        return res
```

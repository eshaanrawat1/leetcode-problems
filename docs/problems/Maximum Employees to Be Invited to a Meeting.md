---
date: 2025-01-25
difficulty: Hard
num: 2127
related_topics:
  - DFS
  - Dynamic Programming
  - Topological Sort
return: Review
---

# Problem: 2127. Maximum Employees To Be Invited To A Meeting

## Description
same, chain employees only sit next to fav

## Approach / Thoughts
two cases of mutual and cycle

add all mutuals, compare with longest cycle

## Solution
```python
class Solution:
    def maximumInvitations(self, favorite: List[int]) -> int:
        n = len(favorite)
        in_degree = [0] * n

        for f in favorite:
            in_degree[f] += 1

        q = deque([i for i in range(n) if in_degree[i] == 0])

        depth = [0] * n
        while q:
            cur = q.popleft()
            fav = favorite[cur]

            depth[fav] = max(depth[fav], 1 + depth[cur])
            in_degree[fav] -= 1

            if in_degree[fav] == 0:
                q.append(fav)
        
        cycle = pair = 0

        for i in range(n):
            if in_degree[i] == 0:
                continue

            cur, res = i, 0
            while in_degree[cur] != 0:
                in_degree[cur] = 0
                res += 1
                cur = favorite[cur]
            cycle = max(cycle, res)

            if res == 2:
                pair += 2 + depth[i] + depth[favorite[i]]

        return max(cycle, pair)
```

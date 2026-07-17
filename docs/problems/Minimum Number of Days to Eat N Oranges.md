---
date: 2024-07-19
difficulty: Hard
num: 1553
related_topics:
  - Dynamic Programming
  - Memoization
return: Done
---

# Problem: 1553. Minimum Number Of Days To Eat N Oranges

## Description

## Approach / Thoughts
bfs, add to q for each option

keep set if there is cycle

## Solution
```python
class Solution:
    def minDays(self, n: int) -> int:
        q = deque([[n, 0]])

        visit = set()
        while q:
            current, day = q.popleft()

            if current == 0:
                return day
            if current in visit:
                continue
            visit.add(current)

            if current % 2 == 0:
                q.append([current // 2, day + 1])
            if current % 3 == 0:
                q.append([current // 3, day + 1])
            q.append([current - 1, day + 1])       
```

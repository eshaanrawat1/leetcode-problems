---
date: 2024-07-08
difficulty: Medium
num: 1823
related_topics:
  - Array
  - Math
  - Queue
  - Recursion
  - Simulation
return: Done
---

# Problem: 1823. Find The Winner Of The Circular Game

## Description

## Approach / Thoughts
simulate games with elims

## Solution
```python
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        q = deque([i for i in range(1,n+1)])
    
        while True:
            if len(q) == 1:
                return q[0]
            for i in range(k-1):
                q.append(q.popleft())
            q.popleft()
```

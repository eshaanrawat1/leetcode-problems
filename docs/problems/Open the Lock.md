---
date: 2024-04-21
difficulty: Medium
num: 752
related_topics:
  - Array
  - BFS
  - Hash Table
  - String
return: Review
---

# Problem: 752. Open The Lock

## Description
find min number of turns to reach lock

## Approach / Thoughts
bfs get all possible lock combos, keep track of turns and make children

## Solution
```python
class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        if "0000" in deadends: return -1

        q = deque([["0000", 0]])
        visited = set(deadends)

        while q:
            lock, turns = q.popleft()
            if lock == target: return turns

            for child in self.make_children(lock):
                if child not in visited:
                    q.append([child, turns+1])
                    visited.add(child)
        return -1


    def make_children(self, lock):
        res = []
        for i in range(4):
            digit = str((int(lock[i]) + 1) % 10)
            res.append(lock[:i] + digit + lock[i+1:])

            digit = str((int(lock[i]) - 1 + 10) % 10)
            res.append(lock[:i] + digit + lock[i+1:])
        return res
```

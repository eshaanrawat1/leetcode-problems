---
date: 2024-08-06
difficulty: Medium
num: 2294
related_topics:
  - Graph
return: Done
---

# Problem: 2294. Find Champion Ii

## Description

## Approach / Thoughts
find in degree 0

## Solution
```python
class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        in_degree = defaultdict(int)

        for s, d in edges:
            in_degree[d] += 1

        res = []
        for i in range(n):
            if in_degree[i] == 0:
                res.append(i)

        return res[0] if len(res) == 1 else -1
```

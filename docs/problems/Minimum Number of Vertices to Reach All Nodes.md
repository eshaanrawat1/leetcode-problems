---
date: 2024-10-05
difficulty: Medium
num: 1557
related_topics:
  - Graph
return: Done
---

# Problem: 1557. Minimum Number Of Vertices To Reach All Nodes

## Description

## Approach / Thoughts
find all edges we can’t reach (in degree 0)

## Solution
```python
class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        in_degree = defaultdict(int)

        for src, dst in edges:
            in_degree[dst] += 1

        return [i for i in range(n) if not in_degree[i]]
```

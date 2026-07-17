---
date: 2024-06-27
difficulty: Easy
num: 1791
related_topics:
  - Graph
return: Done
---

# Problem: 1791. Find Center Of Star Graph

## Description
find center of graph

## Approach / Thoughts
center is in every pair, find union

## Solution
```python
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return (set(edges[0]) & set(edges[1])).pop()
```

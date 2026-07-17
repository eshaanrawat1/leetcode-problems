---
date: 2025-02-11
difficulty: Hard
num: 2509
related_topics:
  - Array
  - Binary Tree
  - Tree
return: Done
---

# Problem: 2509. Cycle Length Queries In A Tree

## Description
add edge to tree, length of cycle

## Approach / Thoughts
climb up together until find lca

## Solution
```python
class Solution:
    def cycleLengthQueries(self, n: int, queries: List[List[int]]) -> List[int]: 
        res = []
        for x, y in queries:
            ans = 1
            while x != y:
                if x > y:
                    x //= 2
                else:
                    y //= 2
                ans += 1
            res.append(ans)
        return res
```

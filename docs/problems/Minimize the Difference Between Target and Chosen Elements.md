---
date: 2025-05-15
difficulty: Medium
num: 1981
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 1981. Minimize The Difference Between Target And Chosen Elements

## Description

## Approach / Thoughts
originally dfs then brute force sum

## Solution
```python
class Solution:
    def minimizeTheDifference(self, mat: List[List[int]], target: int) -> int:
        nums = {0}

        for row in mat:
            tmp = set()
            for n in row:
                for x in nums:
                    tmp.add(n+x)
            nums = tmp
        return min(abs(target-x) for x in nums)
```

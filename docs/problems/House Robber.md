---
date: 2024-04-12
difficulty: Medium
num: 198
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 198. House Robber

## Description
DP cannot rob adjacent houses

## Approach / Thoughts
Bottom up, keep track of max between past houses and adjacent

Example: rob not adj and current or skip current and rob adj

## Solution
```python
class Solution:
    def rob(self, nums: List[int]) -> int:
        first = adj = 0

        for n in nums:
            temp = max(first + n, adj)
            first = adj
            adj = temp
        return adj
```

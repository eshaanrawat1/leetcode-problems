---
date: 2024-04-03
difficulty: Medium
num: 77
related_topics:
  - Backtracking
return: Done
---

# Problem: 77. Combinations

## Description
Find all combinations of length k from [1, n]

## Approach / Thoughts
Trace recursive tree, use a for loop

## Solution
```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        nums = [i for i in range(1, n+1)]
        res = []

        def dfs(index, depth, subset):
            if index == len(nums) or depth == k:
                if len(subset) == k:
                    res.append(subset[:])
                return

            for i in range(index, len(nums)):
                subset.append(nums[i])
                dfs(i+1, depth+1, subset)
                subset.pop()

        dfs(0, 0, [])
        return res
```

---
date: 2024-02-08
difficulty: Medium
num: 368
related_topics:
  - Array
  - Dynamic Programming
  - Math
  - Sorting
return: Done
---

# Problem: 368. Largest Divisible Subset

## Description
Find the largest subset where any pairs of elements are divisible

## Approach / Thoughts
Use a recursive approach that builds a recursion tree where we either skip elements or add them

If we add elements, we compare if it is divisible than add it to our res and keep going

Then store the maximum one

Cache to optimize

## Solution
```python
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        cache = {}

        def dfs(i, prev):
            if i >= len(nums): return []
            if (i, prev) in cache: return cache[(i, prev)]

            res = dfs(i+1, prev)
            if nums[i] % prev == 0:
                tmp = [nums[i]] + dfs(i+1, nums[i])
                if len(tmp) > len(res):
                    res = tmp

            cache[(i, prev)] = res
            return res
        return dfs(0, 1)
```

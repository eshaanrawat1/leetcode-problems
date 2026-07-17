---
date: 2024-10-29
difficulty: Hard
num: 1799
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Bitmask
  - Dynamic Programming
  - Math
  - Number Theory
return: Done
---

# Problem: 1799. Maximize Score After N Operations

## Description
each operation, remove x, y score by gcd

## Approach / Thoughts
brute force backtrack with cache

## Solution
```python
class Solution:
    def maxScore(self, nums: List[int]) -> int:

        def make_nums(j, k, nums):
            res = []
            for i in range(len(nums)):
                if i != j and i != k:
                    res.append(nums[i])
            return res

        @cache
        def dfs(ops, nums):
            if not nums or len(nums) < 2:
                return 0
            
            score = 0
            for j in range(len(nums)):
                for k in range(j + 1, len(nums)):
                    nums_cpy = make_nums(j, k, nums)
                    score = max(
                        score,
                        ops * gcd(nums[j], nums[k]) + dfs(ops + 1, tuple(nums_cpy))
                    )
            return score

        return dfs(1, tuple(nums))
```

---
date: 2025-11-23
difficulty: Medium
num: 1262
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
  - Sorting
return: Done
---

# Problem: 1262. Greatest Sum Divisible By Three

## Description

## Approach / Thoughts
dp take skip check final mod value

## Solution
```python
class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        n = len(nums)

        @lru_cache(None)
        def dfs(i, mod):
            if i >= n:
                return 0 if mod == 0 else -inf

            take = nums[i] + dfs(i+1, (mod + nums[i]) % 3)
            skip = dfs(i+1, mod)

            return max(take, skip)
        
        return dfs(0, 0)
```

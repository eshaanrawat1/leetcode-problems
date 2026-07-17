---
date: 2025-10-19
difficulty: Medium
num: 376
related_topics:
  - Array
  - Dynamic Programming
  - Greedy
return: Done
---

# Problem: 376. Wiggle Subsequence

## Description
same, peaks followed by valleys, largest subsequence

## Approach / Thoughts
dp take skip

## Solution
```python
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        N = len(nums)

        @lru_cache(None)
        def dfs(i, prev, sign):
            if i >= N:
                return 0

            take = 0
            skip = dfs(i+1, prev, sign)

            if prev is None:
                take = 1 + max(dfs(i+1, nums[i], 1), dfs(i+1, nums[i], -1))
            else:
                if sign == 1 and nums[i] > prev: take = 1 + dfs(i+1, nums[i], -1)
                if sign == -1 and nums[i] < prev: take = 1 + dfs(i+1, nums[i], 1)
            
            return max(take, skip)

        return max(dfs(0, None, 1), dfs(0, None, -1))
            
```

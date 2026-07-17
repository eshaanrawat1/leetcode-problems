---
date: 2024-06-30
difficulty: Medium
num: 3201
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 3201. Find The Maximum Length Of Valid Subsequence I

## Description
same, subsequence with same remainder

## Approach / Thoughts
dfs with every subsequence and cache

## Solution
```python
class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        @cache
        def dfs(i, start, rem):
            if i == len(nums):
                return 0
            
            if (start + nums[i]) % 2 == rem:
                return 1 + dfs(i+1, nums[i], rem)
            else:
                return dfs(i+1, start, rem)

        cur_max = 2
        for i in range(len(nums)):
            odd = 1 + dfs(i+1, nums[i], 1)
            even = 1 + dfs(i+1, nums[i], 0)
            cur_max = max(cur_max, odd, even)
        return cur_max
```

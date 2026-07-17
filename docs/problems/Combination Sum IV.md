---
date: 2024-06-10
difficulty: Medium
num: 377
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 377. Combination Sum Iv

## Description
find all combinations sum to target

## Approach / Thoughts
memo with dfs

dp bottom up with sums

## Solution
```python
class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        memo = {}
        def dfs(cur_sum):
            if cur_sum == target:
                return 1
            if cur_sum > target:
                return 0
            if cur_sum in memo:
                return memo[cur_sum]
                  
            res = 0
            for n in nums:
                res += dfs(cur_sum + n)

            memo[cur_sum] = res
            return res

        return dfs(0)
```

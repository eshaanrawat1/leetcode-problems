---
date: 2024-09-12
difficulty: Hard
num: 312
related_topics:
  - Array
  - Dynamic Programming
return: Review
---

# Problem: 312. Burst Balloons

## Description

## Approach / Thoughts
reverse, find which balloon to pop last

break into independent parts

## Solution
```python
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + [n for n in nums if n != 0] + [1]
        dp = {}

        def dfs(l, r):
            if l > r:
                return 0
            if (l, r) in dp:
                return dp[(l, r)]
            
            res = 0
            for i in range(l, r+1):
                coins = nums[l-1] * nums[i] * nums[r+1]  # last to burst
                left = dfs(l, i-1)                       # burst left
                right = dfs(i+1, r)                      # burst right

                res = max(res, coins + left + right)

            dp[(l, r)] = res
            return res

        return dfs(1, len(nums) - 2)
```

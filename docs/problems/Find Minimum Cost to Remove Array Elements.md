---
date: 2026-05-19
difficulty: Medium
num: 3469
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem: 3469. Find Minimum Cost to Remove Array Elements

## Description
You are given an integer array `nums`. Your task is to remove **all elements** from the array by performing one of the following operations at each step until `nums` is empty:

	Choose any two elements from the first three elements of `nums` and remove them. The cost of this operation is the **maximum** of the two elements removed.

	If fewer than three elements remain in `nums`, remove all the remaining elements in a single operation. The cost of this operation is the **maximum** of the remaining elements.

Return the **minimum** cost required to remove all the elements.

## Approach / Thoughts
top down dp with memo
keep track of last skipped index, handle remainder elements 
try every possible combination
dp array since lru cache mle 

## Solution
```python
class Solution:
    def minCost(self, nums: List[int]) -> int:
        n = len(nums) 

        dp = [[-1] * (n+1) for _ in range(n)]

        def dfs(i, j):
            if i >= n:
                return 0 if j == n else nums[j]

            if dp[i][j] != -1:
                return dp[i][j]

            rem = (n - i) + (j != n)
            if rem < 3:
                if j == n:
                    dp[i][j] = max(nums[i:])
                    return dp[i][j]
                else:
                    dp[i][j] = max(max(nums[i:]), nums[j])
                    return dp[i][j]

            res = inf

            if j == n:
                a = nums[i]
                b = nums[i+1]
                c = nums[i+2]

                res = min(res, max(b, c) + dfs(i+3, i))
                res = min(res, max(a, c) + dfs(i+3, i+1))
                res = min(res, max(a, b) + dfs(i+2, n))

                dp[i][j] = res
                return res
            
            a = nums[j]
            b = nums[i]
            c = nums[i+1]

            res = min(res, max(b, c) + dfs(i+2, j))
            res = min(res, max(a, c) + dfs(i+2, i))
            res = min(res, max(a, b) + dfs(i+1, n))

            dp[i][j] = res
            return res

        return dfs(0, n)
```
---
date: 2024-11-05
difficulty: Medium
num: 673
related_topics:
  - Array
  - Binary Indexed Tree
  - Dynamic Programming
  - Segment Tree
return: Review
---

# Problem: 673. Number Of Longest Increasing Subsequence

## Description

## Approach / Thoughts
bottom up dp keep track of counts

## Solution
```python
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        m, n = 1, len(nums)

        dp = [1] * n
        cnt = [1] * n

        for i in range(n-1,-1,-1):
            for j in range(i+1, n):
                if nums[j] > nums[i]:
                    if 1 + dp[j] > dp[i]:
                        dp[i] = 1 + dp[j]
                        cnt[i] = cnt[j]
                    elif 1 + dp[j] == dp[i]:
                        cnt[i] += cnt[j]
            m = max(m, dp[i])
        return sum(c for l, c in zip(dp, cnt) if l == m)            
```

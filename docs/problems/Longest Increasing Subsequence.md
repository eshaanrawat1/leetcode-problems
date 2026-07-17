---
date: 2024-04-24
difficulty: Medium
num: 300
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
return: Done
---

# Problem: 300. Longest Increasing Subsequence

## Description
LIS

## Approach / Thoughts
DP two indices keep track of current indices and max length LIS of all after that

## Solution
```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [1] * len(nums)

        for cur_index in range(len(nums)-1,-1,-1):
            for sub_index in range(cur_index+1, len(nums)):
                if nums[cur_index] < nums[sub_index]:
                    dp[cur_index] = max(dp[cur_index], 1 + dp[sub_index])
        return max(dp)
```

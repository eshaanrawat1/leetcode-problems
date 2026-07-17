---
date: 2024-02-02
difficulty: Medium
num: 1043
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1043. Partition Array For Maximum Sum

## Description
Given k, make subarrays of length maximum k, where each subarray element becomes the max element in that subarray. Return the max sum.

## Approach / Thoughts
Use recursion to make a brute force approach that considers every possible subarray of length max k and every possible tree. Then cache it for better time complexity.

## Solution
```python
class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        cache = {}
        def dfs(i):
            if i in cache:
                return cache[i]

            cur_max, res = 0, 0
            for j in range(i, min(len(arr), i + k)):
                cur_max = max(cur_max, arr[j])
                window_size = j - i + 1
                res = max(res, dfs(j+1) + cur_max * window_size)
            cache[i] = res
            return res 
        return dfs(0)
```

---
date: 2024-12-07
difficulty: Hard
num: 1751
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 1751. Maximum Number Of Events That Can Be Attended Ii

## Description

## Approach / Thoughts
same as 2054, find next insert for take, dp choose

## Solution
```python
class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort()
        dp = [[-1] * k for _ in range(len(events))]

        def binary_search(idx, end):
            l, r = idx, len(events) - 1
            res = None

            while l <= r:
                m = (l + r) // 2
                if events[m][0] <= end:
                    l = m + 1
                else:
                    res = m
                    r = m - 1
            return res


        def dfs(i, cnt):
            if i >= len(events) or cnt == k:
                return 0
            if dp[i][cnt] != -1:
                return dp[i][cnt]

            take = events[i][2]
            new_idx = binary_search(i, events[i][1])
            if new_idx:
                take += dfs(new_idx, cnt + 1)

            skip = dfs(i + 1, cnt)
            
            dp[i][cnt] = max(take, skip)
            return dp[i][cnt]
        
        return dfs(0, 0)
```

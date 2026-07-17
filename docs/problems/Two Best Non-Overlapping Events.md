---
date: 2024-12-07
difficulty: Medium
num: 2054
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Heap (Priority Queue)
  - Sorting
return: Done
---

# Problem: 2054. Two Best Non Overlapping Events

## Description

## Approach / Thoughts
sort by times and dp take skip

## Solution
```python
class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        events.sort()
        dp = [[-1] * len(events) for _ in range(3)]

        def binary_search(idx, end):
            l, r = idx + 1, len(events)-1
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
            if i >= len(events) or cnt == 2:
                return 0
            if dp[cnt][i] != -1:
                return dp[cnt][i]

            new_idx = binary_search(i, events[i][1])
            take = events[i][2]
            if new_idx:
                take += dfs(new_idx, cnt + 1)

            skip = dfs(i + 1, cnt)

            dp[cnt][i] = max(take, skip)
            return dp[cnt][i]
        
        return dfs(0, 0)
```

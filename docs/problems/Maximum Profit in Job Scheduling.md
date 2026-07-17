---
date: 2024-11-03
difficulty: Hard
num: 1235
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 1235. Maximum Profit In Job Scheduling

## Description

## Approach / Thoughts
dp with take or skip intervals

binary search to find which interval to take

## Solution
```python
class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        n = len(startTime)
        jobs = [(startTime[i], endTime[i], profit[i]) for i in range(n)]

        jobs.sort()
        startTime.sort()

        @cache
        def dfs(i):
            if i >= n:
                return 0

            j = bisect_left(startTime, jobs[i][1])
            return max(jobs[i][2] + dfs(j), dfs(i + 1))

        return dfs(0)
```

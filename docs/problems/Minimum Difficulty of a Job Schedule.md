---
date: 2025-05-30
difficulty: Hard
num: 1335
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 1335. Minimum Difficulty Of A Job Schedule

## Description
same, choose groups of jobs to take, difficulty of group is max of any job

return minimum sum

## Approach / Thoughts
dp, take and skip keep track of days remaining

## Solution
```python
class Solution:
    def minDifficulty(self, jobs: List[int], d: int) -> int:
        n = len(jobs)
        if n < d:
            return -1

        @lru_cache(None)
        def dfs(i, num_days):
            if i >= n and num_days == 0:
                return 0
            if i >= n or num_days == 0:
                return inf

            res = inf
            cur_max = -inf

            for j in range(i, n):
                cur_max = max(cur_max, jobs[j])
                res = min(res, cur_max + dfs(j+1, num_days-1))
            
            return res

        ans = dfs(0, d)
        return ans if ans is not None else -1
```

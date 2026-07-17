---
date: 2024-07-08
difficulty: Medium
num: 1626
related_topics:
  - Array
  - Dynamic Programming
  - Sorting
return: Done
---

# Problem: 1626. Best Team With No Conflicts

## Description

## Approach / Thoughts
variation of LIS, take if score is bigger since age is sorted

## Solution
```python
class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        N = len(scores)

        pairs = [[a, s] for a, s in zip(ages, scores)]
        pairs.sort()

        dp = [0] * N

        for i in range(N-1,-1,-1):
            dp[i] = pairs[i][1]
            for j in range(i+1, N):
                if pairs[j][1] >= pairs[i][1]:
                    dp[i] = max(dp[i], pairs[i][1] + dp[j])
        return max(dp)
```

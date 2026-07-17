---
date: 2024-12-27
difficulty: Hard
num: 689
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 689. Maximum Sum Of 3 Non Overlapping Subarrays

## Description

## Approach / Thoughts
prefix sum dp

## Solution
```python
class Solution:
    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:
        N = len(nums)

        ps = nums[:]
        for i in range(1, N):
            ps[i] += ps[i-1]

        dp = [[-1] * 3 for _ in range(N)]

        def dfs(i, cnt):
            if i + k > N or cnt == 3:
                return 0, ''
            if dp[i][cnt] != -1:
                return dp[i][cnt]

            take, ti = dfs(i + k, cnt + 1)
            if i == 0:
                take += ps[i+k-1]
            else:
                take += ps[i+k-1] - ps[i-1]

            ti += str(i) + ','

            skip, si = dfs(i + 1, cnt)

            if take >= skip:
                dp[i][cnt] = (take, ti)
                return take, ti
            dp[i][cnt] = (skip, si)
            return skip, si

        ans = dfs(0, 0)[1].split(',')[::-1][1:]
        return [int(n) for n in ans]
```

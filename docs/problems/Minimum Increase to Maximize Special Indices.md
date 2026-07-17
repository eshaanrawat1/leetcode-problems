---
date: 2026-04-07
difficulty: Medium
num: 3891
related_topics:
  - Array
  - Dynamic Programming
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n`.

An index `i` (`0 < i < n - 1`) is **special** if `nums[i] > nums[i - 1]` and `nums[i] > nums[i + 1]`.

You may perform operations where you choose **any** index `i` and **increase** `nums[i]` by 1.

Your goal is to:

- **Maximize** the number of **special** indices.
- **Minimize** the total number of **operations** required to achieve that **maximum**.

Return an integer denoting the **minimum** total number of operations required.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
dp take skip track number of peaks and number of operations

## Solution
```python
class Solution:
    def minIncrease(self, nums: List[int]) -> int:
        # 11:17
        
        n = len(nums)

        @lru_cache(None)
        def dfs(i):
            if i >= n - 1:
                return 0, 0

            l, r = nums[i-1], nums[i+1]
            maxnum = max(l, r)

            t0 = 1
            t1 = max(0, maxnum-nums[i]+1)
            tans = dfs(i+2)
            t0 += tans[0]
            t1 += tans[1]

            s0, s1 = dfs(i+1)

            if t0 > s0:
                return t0, t1
            elif t0 < s0:
                return s0, s1
            else:
                if t1 <= s1:
                    return t0, t1
                return s0, s1

        return dfs(1)[1]
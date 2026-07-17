---
date: 2026-02-16
difficulty: Medium
num: 3835
related_topics:
  - Array
  - Sliding Window
  - Staff
return: Done
---

# Problem: 3835. Count Subarrays With Cost Less Than Or Equal To K

## Description

## Approach / Thoughts
sliding window min and max keep track sorted set

## Solution
```python
from sortedcontainers import SortedSet

class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        have = SortedSet()
        cnt = Counter()

        l = res = 0
        for r, val in enumerate(nums):
            have.add(val)
            cnt[val] += 1   

            while have and (have[-1] - have[0]) * (r-l+1) > k:
                cnt[nums[l]] -= 1
                l += 1

                while have and cnt[have[0]] == 0:
                    have.pop(0)
                while have and cnt[have[-1]] == 0:
                    have.pop()

            res += (r - l + 1)
        return res
```

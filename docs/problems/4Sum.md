---
date: 2024-08-06
difficulty: Medium
num: 18
related_topics:
  - Array
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 18. 4Sum

## Description

## Approach / Thoughts
2 loops and sorted 2 sum

use set to remove duplicates

## Solution
```python
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []
        N = len(nums)

        nums.sort()

        for i in range(N):
            for j in range(i+1, N):
                l, r = j+1, N-1
                goal = nums[i] + nums[j]

                while l < r:
                    if nums[l] + nums[r] == target - goal:
                        ans.append((nums[i], nums[j], nums[l], nums[r]))
                        l += 1
                        r -= 1
                    elif nums[l] + nums[r] > target - goal:
                        r -= 1
                    else:
                        l += 1
        return set(ans)
```

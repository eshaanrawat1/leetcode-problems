---
date: 2024-08-07
difficulty: Hard
num: 1793
related_topics:
  - Array
  - Binary Search
  - Monotonic Stack
  - Stack
  - Two-Pointer
return: Done
---

# Problem: 1793. Maximum Score Of A Good Subarray

## Description

## Approach / Thoughts
start at k, greedy pick largest number to the right (proof is subarray of same size should always go larger)

use heap to keep track of min value

add -1e9 bounds in case of k == 0 as a buffer, stop when they are at ends

- can be reduced to O(n) keep track of min, no need for heap

## Solution
```python
class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        N = len(nums)
        cur_min = nums[k]

        nums = [-1e9] + nums + [-1e9]
        l = r = k+1
        score = 0

        while nums[l] != -1e9 or nums[r] != -1e9:
            if nums[l] < nums[r]:
                cur_min = min(cur_min, nums[r])
                r += 1
            else:
                cur_min = min(cur_min, nums[l])
                l -= 1

            score = max(score, (r-l-1) * cur_min)

        return score
```

---
date: 2025-04-27
difficulty: Hard
num: 2302
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Sliding Window
return: Done
---

# Problem: 2302. Count Subarrays With Score Less Than K

## Description
score is sum of array * length

## Approach / Thoughts
increasing window always increases score

regular sliding window shrink and expand

## Solution
```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        l = res = 0
        cur_len = cur_sum = 0

        for r, v in enumerate(nums):
            cur_sum += v
            cur_len += 1

            while cur_sum * cur_len >= k:
                cur_sum -= nums[l]
                cur_len -= 1
                l += 1
            
            res += (r - l + 1)
        return res
```

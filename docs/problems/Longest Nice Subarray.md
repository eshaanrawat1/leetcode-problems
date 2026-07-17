---
date: 2025-03-19
difficulty: Medium
num: 2401
related_topics:
  - Array
  - Bit Manipulation
  - Sliding Window
return: Done
---

# Problem: 2401. Longest Nice Subarray

## Description
same, where no pair has shared bits

## Approach / Thoughts
sliding window - if pair has shared bits, unflip elements as they move out of window - learned to use xor to unflip bits

## Solution
```python
class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        cur = l = res = 0

        for r, x in enumerate(nums):
            while cur & x:
                cur ^= nums[l]
                l += 1
            cur |= x
            res = max(res, r-l+1)
        return res
```

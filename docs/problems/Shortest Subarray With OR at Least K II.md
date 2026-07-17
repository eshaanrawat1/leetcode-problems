---
date: 2024-11-09
difficulty: Medium
num: 3097
related_topics:
  - Array
  - Bit Manipulation
  - Sliding Window
return: Done
---

# Problem: 3097. Shortest Subarray With Or At Least K Ii

## Description

## Approach / Thoughts
sliding window for or just in cpp for fast

## Solution
```python
class Solution:
    def minimumSubarrayLength(self, nums: List[int], k: int) -> int:
        bits = [0] * 30
        l, cur, res = 0, 0, float("inf")

        for r in range(len(nums)):
            for b in range(30):
                if nums[r] & (1 << b):
                    if (bits[b] == 0):
                        cur += (1 << b)
                    bits[b] += 1
            
            while (cur >= k and l <= r):
                res = min(res, r - l + 1)
                for b in range(30):
                    if nums[l] & (1 << b):
                        if bits[b] == 1:
                            cur -= (1 << b)
                        bits[b] -= 1
                l += 1
        return res if res != float("inf") else -1
```

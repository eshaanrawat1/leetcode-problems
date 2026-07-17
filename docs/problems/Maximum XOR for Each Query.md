---
date: 2024-11-07
difficulty: Medium
num: 1829
related_topics:
  - Array
  - Bit Manipulation
  - Prefix Sum
return: Done
---

# Problem: 1829. Maximum Xor For Each Query

## Description
find xor diff

## Approach / Thoughts
find diff

## Solution
```python
class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        max_amt = (2 ** maximumBit) - 1

        p_xor = nums[:]
        for i in range(1, len(nums)):
            p_xor[i] ^= p_xor[i-1]

        res = []
        for i in range(len(nums)-1,-1,-1):
            res.append(max_amt - p_xor[i])
        return res
```

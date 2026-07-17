---
date: 2024-02-13
difficulty: Medium
num: 2149
related_topics:
  - Array
  - Simulation
  - Two-Pointer
return: Done
---

# Problem: 2149. Rearrange Array Elements By Sign

## Description
Make positive elements even idx and negative odd

## Approach / Thoughts
Use two pointers to assign it into a new array.

## Solution
```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        res = [0] * len(nums)
        pos_idx, neg_idx = 0, 1

        for i in range(len(nums)):
            if nums[i] > 0:
                res[pos_idx] = nums[i]
                pos_idx += 2
            if nums[i] < 0:
                res[neg_idx] = nums[i]
                neg_idx += 2
        return res
```

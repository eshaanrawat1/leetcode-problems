---
date: 2024-06-16
difficulty: Hard
num: 330
related_topics:
  - Array
  - Greedy
return: Review
---

# Problem: 330. Patching Array

## Description
patch array with missing sum

## Approach / Thoughts
greedy take min val missing

## Solution
```python
class Solution:
    def minPatches(self, nums: List[int], n: int) -> int:
        i = added = 0
        missing = 1

        N = len(nums)
        while missing <= n:
            if i < N and nums[i] <= missing:
                missing += nums[i]
                i += 1
            else:
                missing *= 2
                added += 1
        return added
```

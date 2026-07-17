---
date: 2026-04-17
difficulty: Medium
num: 3761
related_topics:
  - Array
  - Hash Table
  - Math
return:
---

# Problem:  

## Description
You are given an integer array `nums`.

A **mirror pair** is a pair of indices `(i, j)` such that:

- `0 <= i < j < nums.length`, and
- `reverse(nums[i]) == nums[j]`, where `reverse(x)` denotes the integer formed by reversing the digits of `x`. Leading zeros are omitted after reversing, for example `reverse(120) = 21`.

Return the **minimum** absolute distance between the indices of any mirror pair. The absolute distance between indices `i` and `j` is `abs(i - j)`.

If no mirror pair exists, return `-1`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
track last seen

## Solution
```python
class Solution:
    def minMirrorPairDistance(self, nums: List[int]) -> int:
        seen = {}

        def mirror(x):
            return int(str(x)[::-1])

        res = inf
        for i,x in enumerate(nums[::-1]):
            m = mirror(x)
            if m in seen:
                res = min(res, i-seen[m])
            seen[x] = i
        return res if res != inf else -1
---
date: 2026-04-23
difficulty: Medium
num: 2121
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given a **0-indexed** array of `n` integers `arr`.

The **interval** between two elements in `arr` is defined as the **absolute difference** between their indices. More formally, the **interval** between `arr[i]` and `arr[j]` is `|i - j|`.

Return _an array_ `intervals` _of length_ `n` _where_ `intervals[i]` _is **the sum of intervals** between_ `arr[i]` _and each element in_ `arr` _with the same value as_ `arr[i]`_._

**Note:** `|x|` is the absolute value of `x`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
same as [[Sum of Distances]]

## Solution
```python
class Solution:
    def getDistances(self, nums: List[int]) -> List[int]:
        N = len(nums)

        idx = defaultdict(list)
        for i, n in enumerate(nums):
            idx[n].append(i)

        res = [0] * N
        for vals in idx.values():

            l, r = 0, sum(vals)
            lcnt, rcnt = 0, len(vals)

            if rcnt == 1:
                continue

            for v in vals:
                r -= v
                rcnt -= 1

                res[v] = (r - (v * rcnt)) + ((lcnt * v) - l)

                l += v
                lcnt += 1
        return res
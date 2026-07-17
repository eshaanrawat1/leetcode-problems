---
date: 2026-04-23
difficulty: Medium
num: 2615
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given a **0-indexed** integer array `nums`. There exists an array `arr` of length `nums.length`, where `arr[i]` is the sum of `|i - j|` over all `j` such that `nums[j] == nums[i]` and `j != i`. If there is no such `j`, set `arr[i]` to be `0`.

Return _the array_ `arr`_._

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
accumulate left and right sums, basically need to do x - l for all left and r - x for all r to the right of x

## Solution
```python
class Solution:
    def distance(self, nums: List[int]) -> List[int]:
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

        # 2 3 4 7 8
        # sum = 24

        # 4
        # r = 15, rcnt=2
        # l = 5,  lcnt=2

        # 15 - 2*4 = 7
        # 
        # 4-3 4-2
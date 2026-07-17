---
date: 2026-04-10
difficulty: Easy
num: 3740
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given an integer array `nums`.

A tuple `(i, j, k)` of 3 **distinct** indices is **good** if `nums[i] == nums[j] == nums[k]`.

The **distance** of a **good** tuple is `abs(i - j) + abs(j - k) + abs(k - i)`, where `abs(x)` denotes the **absolute value** of `x`.

Return an integer denoting the **minimum** possible **distance** of a **good** tuple. If no **good** tuples exist, return `-1`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
count

## Solution
```python
class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        d = defaultdict(list)
        res = inf

        for i, n in enumerate(nums):
            d[n].append(i)
            if len(d[n]) >= 3:
                i = d[n][-3]
                j = d[n][-2]
                k = d[n][-1]
                res = min(res, abs(i-j)+abs(j-k)+abs(k-i))
        return res if res != inf else -1
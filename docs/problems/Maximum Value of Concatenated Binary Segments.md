---
date: 2026-04-14
difficulty: Hard
num: 3897
related_topics:
  - Array
  - String
return:
---

# Problem:  

## Description
You are given two integer arrays `nums1` and `nums0`, each of size `n`.

- `nums1[i]` represents the number of `'1'`s in the `ith` segment.
- `nums0[i]` represents the number of `'0'`s in the `ith` segment.

For each index `i`, construct a binary segment consisting of:

- `nums1[i]` occurrences of `'1'` followed by
- `nums0[i]` occurrences of `'0'`.

You may **rearrange** the order of these **segments** in any way. After rearranging, **concatenate** all segments to form a single binary string.

Return the **maximum** possible integer value of the concatenated binary string.

Since the result can be very large, return the answer **modulo** `109 + 7`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
custom compare 2 elements
or all lone 1s + greedy

## Solution
```python
class Solution:
    def maxValue(self, nums1: list[int], nums0: list[int]) -> int:
        # 18:57 (needed custom compare)

        seg = []
        res = []

        def cmp(s1, s2):
            if s1 + s2 > s2 + s1:
                return -1
            return 1

        for x, y in zip(nums1, nums0):
            res.append('1'*x + '0'*y)
        res.sort(key=cmp_to_key(cmp))

        s = ''.join(res)
        mod = 10**9+7
        return int(s, 2) % mod

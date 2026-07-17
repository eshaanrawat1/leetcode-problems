---
date: 2026-06-26
difficulty: Medium
num: 3020
related_topics:
  - Array
  - Hash Table
  - Enumeration
return:
---

# Problem: 3020. Find the Maximum Number of Elements in Subset

## Description
You are given an array of **positive** integers `nums`.

You need to select a subset of `nums` which satisfies the following condition:

	- You can place the selected elements in a **0-indexed** array such that it follows the pattern: `[x, x2, x4, ..., xk/2, xk, xk/2, ..., x4, x2, x]` (**Note** that `k` can be be any **non-negative** power of `2`). For example, `[2, 4, 16, 4, 2]` and `[3, 9, 3]` follow the pattern while `[2, 4, 8, 4, 2]` does not.

Return *the **maximum** number of elements in a subset that satisfies these conditions.*

## Approach / Thoughts
for each number, position it so it is the middle candidate
- then check if the square root of that number exists and the frequency is >= 2
- handle case for 1s separately since every odd sequence of 1s is valid (1^x for any x is 1)

## Solution
```python
class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        res = 0
        cnt = Counter(nums)

        res = cnt[1]
        if res % 2 == 0:
            res -= 1
            res = max(res, 0)

        for x in nums:
            if x == 1:
                continue

            cur = 1

            while sqrt(x) == int(sqrt(x)) and cnt[sqrt(x)] >= 2:
                x = sqrt(x)
                cur += 2
            res = max(res, cur)
        return res
```
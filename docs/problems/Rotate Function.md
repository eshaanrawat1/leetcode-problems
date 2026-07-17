---
date: 2026-05-01
difficulty: Medium
num: 396
related_topics:
  - Array
  - Math
  - Dynamic Programming
return:
---

# Problem:  

## Description
You are given an integer array `nums` of length `n`.

Assume `arrk` to be an array obtained by rotating `nums` by `k` positions clock-wise. We define the **rotation function** `F` on `nums` as follow:

- `F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].`

Return _the maximum value of_ `F(0), F(1), ..., F(n-1)`.

The test cases are generated so that the answer fits in a **32-bit** integer.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
discard last add first, add between 

## Solution
```python
class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        
        n = len(nums)
        if n <= 1:
            return 0

        q = deque(nums)
        curscore = sum(i*x for i,x in enumerate(nums))
        between = sum(nums[1:n-1])
        res = curscore

        for _ in range(n):
            curscore -= (q[-1] * (n-1))
            between += q[0]
            curscore += between
            res = max(res, curscore)

            q.appendleft(q.pop())

            between -= q[-1]

        return res
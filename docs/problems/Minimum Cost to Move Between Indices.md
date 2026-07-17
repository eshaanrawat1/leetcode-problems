---
date: 2026-05-03
difficulty: Medium
num: 3919
related_topics:
  - Array
  - Prefix Sum
return:
---

# Problem:  

## Description
You are given an integer array `nums` where `nums` is **strictly increasing**.

For each index `x`, let `closest(x)` be the **adjacent** index such that `abs(nums[x] - nums[y])` is **minimized**. If both **adjacent** indices exist and give the same difference, choose the **smaller** index.

From any index `x`, you can move in two ways:

- To any index `y` with cost `abs(nums[x] - nums[y])`, or
- To `closest(x)` with cost 1.

You are also given a 2D integer array `queries`, where each `queries[i] = [li, ri]`.

For each query, calculate the **minimum total cost** to move from index `li` to index `ri`.

Return an integer array `ans`, where `ans[i]` is the answer for the `ith` query.

The **absolute difference** between two values `x` and `y` is defined as `abs(x - y)`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
[[Weekly Contest 500]]

prefix and suffix - increasing so no need to go backwards

## Solution
```python
class Solution:
    def minCost(self, nums: list[int], queries: list[list[int]]):

        n = len(nums)

        closest = {}
        for i in range(n):
            if i == 0:
                closest[i] = 1
            elif i == n-1:
                closest[i] = i-1
            else:
                prv = nums[i-1]
                nxt = nums[i+1]

                if abs(nums[i] - prv) <= abs(nums[i] - nxt):
                    closest[i] = i-1
                else:
                    closest[i] = i+1

        lps = []
        rps = []
        for i in range(n-1):
            v = lps[-1] if lps else 0
            if closest[i] == i+1:
                lps.append(1 + v)
            else:
                lps.append(abs(nums[i] - nums[i+1]) + v)

        for i in range(n-1, 0, -1):
            v = rps[-1] if rps else 0
            if closest[i] == i-1:
                rps.append(1 + v)
            else:
                rps.append(abs(nums[i] - nums[i-1]) + v)

        res = []
        for l, r in queries:
            if l == r:
                res.append(0)
            elif l <= r:
                v = lps[l-1] if l != 0 else 0
                res.append(lps[r-1] - v)
            else:
                l, r = r, l
                d = n - r - 1

                cl = d
                cr = d + (r - l)

                v = rps[cl-1] if cl != 0 else 0
                res.append(rps[cr-1] - v)
                
        return res